interface Delaunay {
  triangles: Uint32Array;
  halfedges: Int32Array;
}

/**
 * Creates a Voronoi diagram from the given Delaunator, a list of points, and the number of points. The Voronoi diagram is constructed using (I think) the {@link https://en.wikipedia.org/wiki/Bowyer%E2%80%93Watson_algorithm |Bowyer-Watson Algorithm}
 * The {@link https://github.com/mapbox/delaunator/ |Delaunator} library uses {@link https://en.wikipedia.org/wiki/Doubly_connected_edge_list |half-edges} to represent the relationship between points and triangles.
 * @param {{triangles: Uint32Array, halfedges: Int32Array}} delaunay A {@link https://github.com/mapbox/delaunator/blob/master/index.js |Delaunator} instance.
 * @param {[number, number][]} points A list of coordinates.
 * @param {number} pointsN The number of points.
 */
export const generateVoronoi = (
  delaunator: Delaunay,
  coordinates: [number, number][],
  pointsNumber: number
) => {
  const delaunay: Delaunay = delaunator;
  let points = coordinates;
  const pointsN = pointsNumber;
  let cells: any = { v: [], c: [], b: [] }; // voronoi cells: v = cell vertices, c = adjacent cells, b = near-border cell
  let vertices: any = { p: [], v: [], c: [] }; // cells vertices: p = vertex coordinates, v = neighboring vertices, c = adjacent cells

  /**
   * Retrieves all of the half-edges for a specific triangle `t`. Taken from {@link https://mapbox.github.io/delaunator/#edge-and-triangle| the Delaunator docs.}
   * @param {number} t The index of the triangle
   * @returns {[number, number, number]} The edges of the triangle.
   */
  const edgesOfTriangle = (t: number) => [3 * t, 3 * t + 1, 3 * t + 2];

  /**
   * Enables lookup of a triangle, given one of the half-edges of that triangle. Taken from {@link https://mapbox.github.io/delaunator/#edge-and-triangle| the Delaunator docs.}
   * @param {number} e The index of the edge
   * @returns {number} The index of the triangle
   */
  const triangleOfEdge = (e: number): number => Math.floor(e / 3);

  /**
   * Moves to the next half-edge of a triangle, given the current half-edge's index. Taken from {@link https://mapbox.github.io/delaunator/#edge-to-edges| the Delaunator docs.}
   * @param {number} e The index of the current half edge
   * @returns {number} The index of the next half edge
   */
  const nextHalfedge = (e: number): number => (e % 3 === 2 ? e - 2 : e + 1);

  /**
   * Moves to the previous half-edge of a triangle, given the current half-edge's index. Taken from {@link https://mapbox.github.io/delaunator/#edge-to-edges| the Delaunator docs.}
   * @param {number} e The index of the current half edge
   * @returns {number} The index of the previous half edge
   */
  const prevHalfedge = (e: number): number => (e % 3 === 0 ? e + 2 : e - 1);

  /**
   * Gets the IDs of the points comprising the given triangle. Taken from {@link https://mapbox.github.io/delaunator/#triangle-to-points| the Delaunator docs.}
   * @param {number} t The index of the triangle
   * @returns {[number, number, number]} The IDs of the points comprising the given triangle.
   */
  const pointsOfTriangle = (t: number): number[] =>
    edgesOfTriangle(t).map((edge) => delaunay.triangles[edge]);

  /**
   * Identifies what triangles are adjacent to the given triangle. Taken from {@link https://mapbox.github.io/delaunator/#triangle-to-triangles| the Delaunator docs.}
   * @param {number} t The index of the triangle
   * @returns {number[]} The indices of the triangles that share half-edges with this triangle.
   */
  const trianglesAdjacentToTriangle = (t: number): number[] => {
    let triangles = [];
    for (let edge of edgesOfTriangle(t)) {
      let opposite = delaunay.halfedges[edge];
      triangles.push(triangleOfEdge(opposite));
    }
    return triangles;
  };
  /**
   * Gets the indices of all the incoming and outgoing half-edges that touch the given point. Taken from {@link https://mapbox.github.io/delaunator/#point-to-edges| the Delaunator docs.}
   * @param {number} start The index of an incoming half-edge that leads to the desired point
   * @returns {number[]} The indices of all half-edges (incoming or outgoing) that touch the point.
   */
  const edgesAroundPoint = (start: number): number[] => {
    const result = [];
    let incoming = start;
    do {
      result.push(incoming);
      const outgoing = nextHalfedge(incoming);
      incoming = delaunay.halfedges[outgoing];
    } while (incoming !== -1 && incoming !== start && result.length < 20);
    return result;
  };

  /**
   * Finds the circumcenter of the triangle identified by points a, b, and c. Taken from {@link https://en.wikipedia.org/wiki/Circumscribed_circle#Circumcenter_coordinates| Wikipedia}
   * @param {[number, number]} a The coordinates of the first point of the triangle
   * @param {[number, number]} b The coordinates of the second point of the triangle
   * @param {[number, number]} c The coordinates of the third point of the triangle
   * @return {[number, number]} The coordinates of the circumcenter of the triangle.
   */
  const circumcenter = (a: number[], b: number[], c: number[]): number[] => {
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    const ad = ax * ax + ay * ay;
    const bd = bx * bx + by * by;
    const cd = cx * cx + cy * cy;
    const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    return [
      Math.floor((1 / D) * (ad * (by - cy) + bd * (cy - ay) + cd * (ay - by))),
      Math.floor((1 / D) * (ad * (cx - bx) + bd * (ax - cx) + cd * (bx - ax))),
    ];
  };

  /**
   * Returns the center of the triangle located at the given index.
   * @param {number} t The index of the triangle
   * @returns {[number, number]}
   */
  const triangleCenter = (t: number): number[] => {
    let vertices = pointsOfTriangle(t).map((p) => points[p]);
    return circumcenter(vertices[0], vertices[1], vertices[2]);
  };

  // Half-edges are the indices into the delaunator outputs:
  // delaunay.triangles[e] gives the point ID where the half-edge starts
  // delaunay.halfedges[e] returns either the opposite half-edge in the adjacent triangle, or -1 if there's not an adjacent triangle.
  for (let e = 0; e < delaunay.triangles.length; e++) {
    const p = delaunay.triangles[nextHalfedge(e)];
    if (p < pointsN && !cells.c[p]) {
      const edges = edgesAroundPoint(e);
      cells.v[p] = edges.map((e) => triangleOfEdge(e)); // cell: adjacent vertex
      cells.c[p] = edges
        .map((e) => delaunay.triangles[e])
        .filter((c) => c < pointsN); // cell: adjacent valid cells
      cells.b[p] = edges.length > cells.c[p].length ? 1 : 0; // cell: is border
    }

    const t = triangleOfEdge(e);
    if (!vertices.p[t]) {
      vertices.p[t] = triangleCenter(t); // vertex: coordinates
      vertices.v[t] = trianglesAdjacentToTriangle(t); // vertex: adjacent vertices
      vertices.c[t] = pointsOfTriangle(t); // vertex: adjacent cells
    }
  }
};
