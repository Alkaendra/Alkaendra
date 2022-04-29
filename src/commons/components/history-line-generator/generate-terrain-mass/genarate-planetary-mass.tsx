import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import { lenguaUrarnu } from "../../nomenclator/uryarn/urarnu";
import { generateRandomNumber } from "../../utils/utils";
import { generateMassHexes } from "./generate-planetary-hex-data";
import { LAND_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT } from "./land-mass/tables/terrain-unit-types";
import { LIQUID_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT } from "./liquid-mass/tables/terrain-unit-types";

export const LATITUDE_BELTS = ["boreal", "temperate", "tropical", "equatorial"];
export const DETAILED_LATITUDE_BELTS = [
  "boreal",
  "temperate",
  "tropical",
  "equatorial",
  "tropical",
  "temperate",
  "boreal",
];

interface PlanetaryMass {
  LATITUDE_BELTS: string[];
  mayor_settlements: any[];
  name: string;
  regions: any;
  total_economical: number;
  total_edible: number;
  total_industrial: number;
  total_population_attraction: number;
}

export const generatePlanetaryMass = (terrainType: string): PlanetaryMass => {
  let mass: PlanetaryMass = {
    LATITUDE_BELTS: [],
    regions: {},
    mayor_settlements: [],
    name: "",
    total_economical: 0,
    total_edible: 0,
    total_industrial: 0,
    total_population_attraction: 0,
  };
  const latitudeBeltsCrossedTotalNumber = generateRandomNumber(1, 7);
  const latitudeBeltsCrossed = DETAILED_LATITUDE_BELTS.slice(
    generateRandomNumber(0, 7 - latitudeBeltsCrossedTotalNumber),
    latitudeBeltsCrossedTotalNumber - 1
  );
  const unitTypesByLatitudeBeltAndTerrainType: any = {
    land: LAND_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT,
    liquid: LIQUID_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT,
  };

  latitudeBeltsCrossed.forEach((belt: string) => {
    const randomLandMassesToGenerate = generateRandomNumber(1, 3);
    let latitudeLandMasses = {} as any;
    let totalBeltLandMasses: any[] = [];
    for (let k = 0; k < randomLandMassesToGenerate; k += 1) {
      const region = generateMassHexes(
        generateRandomNumber(1, 6),
        unitTypesByLatitudeBeltAndTerrainType?.[terrainType]?.[belt],
        terrainType
      );
      mass.total_economical += region.total_economical;
      mass.total_edible += region.total_edible;
      mass.total_industrial += region.total_industrial;
      mass.total_population_attraction += region.total_population_attraction;
      if (region.mayor_settlements.length > 0) {
        mass.mayor_settlements = [
          ...mass.mayor_settlements,
          region.mayor_settlements,
        ];
      }
      totalBeltLandMasses = [...totalBeltLandMasses, { ...region }];
    }
    latitudeLandMasses[belt] = totalBeltLandMasses;
    mass.regions = { ...mass.regions, ...latitudeLandMasses };
  });
  mass.name = generateRandomNames(lenguaUrarnu, 1)[0];
  mass.LATITUDE_BELTS = latitudeBeltsCrossed;
  console.log("MASS ---> ", mass);
  return mass;
};
