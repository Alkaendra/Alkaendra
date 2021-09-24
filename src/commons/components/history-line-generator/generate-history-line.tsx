import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../utils/generate-tables-data";
import { generateRandomNumber, reduceToAddParam } from "../utils/utils";
import {
  UnlightWorldDiscoveredRegionSize,
  UnlightWorldDiscoveredRegionTerrainUnitDedication,
  UnlightWorldDiscoveredRegionTerrainUnitDistribution,
} from "./utils/utils";

export type TerrainUnit = {
  appealing: number;
  habitability: number;
  name?: string;
  type: string;
  subType: string;
};

export type Region = {
  name?: string;
  regionAppealing: number;
  regionHabitability: number;
  size: number;
  terrainUnits: TerrainUnit[];
};

export type UnlightWorldExploratedArea = {
  description: string;
  regions: Region[];
  scattering: string;
  size: number;
  totalAppealing: number;
  totalHabitability: number;
};

export class UnlightWorldArea {
  regionData: UnlightWorldExploratedArea;
  regions: Region[] = [];

  constructor() {
    this.regionData = {
      description: "",
      regions: [],
      scattering: "",
      size: 0,
      totalAppealing: 0,
      totalHabitability: 0,
    };
  }

  generateTerrainUnitDedication = (): TerrainUnit => {
    let terrainUnitDedication = obtainDataFromTable(
      generateTableDataByFrequencies(
        UnlightWorldDiscoveredRegionTerrainUnitDedication
      )
    );

    terrainUnitDedication.data = obtainDataFromTable(
      generateTableDataByFrequencies(terrainUnitDedication.subtype)
    );

    return {
      appealing:
        typeof terrainUnitDedication?.data?.appealing === "object" &&
        terrainUnitDedication?.data?.appealing !== null
          ? generateRandomNumber(
              terrainUnitDedication?.data?.appealing?.min,
              terrainUnitDedication?.data?.appealing?.max
            )
          : terrainUnitDedication?.data?.appealing,
      habitability:
        typeof terrainUnitDedication?.data?.habitabilityGenerated ===
          "object" &&
        terrainUnitDedication?.data?.habitabilityGenerated !== null
          ? generateRandomNumber(
              terrainUnitDedication?.data?.habitabilityGenerated?.min,
              terrainUnitDedication?.data?.habitabilityGenerated?.max
            )
          : terrainUnitDedication?.data?.habitabilityGenerated,
      type: terrainUnitDedication?.description,
      subType: terrainUnitDedication?.data?.description,
    };
  };

  generateAreaRegionTerrainUnits = (terrainUnits: number) => {
    let terrainUnitsData: TerrainUnit[] = [];

    for (let i = 0; i < terrainUnits; i += 1) {
      terrainUnitsData.push(this.generateTerrainUnitDedication());
    }

    return terrainUnitsData;
  };

  generateAreaRegion = (terrainUnits: number): Region => {
    let terrainUnitsData: TerrainUnit[] =
      this.generateAreaRegionTerrainUnits(terrainUnits);

    return {
      name: "",
      regionAppealing: reduceToAddParam(terrainUnitsData, "appealing"),
      regionHabitability: reduceToAddParam(terrainUnitsData, "habitability"),
      size: terrainUnits,
      terrainUnits: terrainUnitsData,
    };
  };

  getAreaSizeData = () =>
    obtainDataFromTable(
      generateTableDataByFrequencies(UnlightWorldDiscoveredRegionSize)
    );

  getAreaTerrainUnitsDistribution = (terrainUnits: number) =>
    obtainDataFromTable(
      generateTableDataByFrequencies(
        UnlightWorldDiscoveredRegionTerrainUnitDistribution(terrainUnits)
      )
    );

  getAreaRegions = (terrainUnitDistribution: any, sizeData: any) => {
    this.regions.push(
      this.generateAreaRegion(
        generateRandomNumber(
          terrainUnitDistribution.generatingSubregionSize.min,
          terrainUnitDistribution.generatingSubregionSize.max
        )
      )
    );

    if (reduceToAddParam(this.regions, "size") < this.regionData.size) {
      this.getAreaRegions(
        terrainUnitDistribution,
        sizeData -
          this.regions.map((region: any) => region.terrainUnits).flat().length
      );
    }
    console.log(
      sizeData,
      this.regions.map((region: any) => region.terrainUnits).flat().length
    );
    return this.regions;
  };

  generateArea = (): UnlightWorldExploratedArea => {
    const areaSize = this.getAreaSizeData();
    const areaRegionsDistribution = this.getAreaTerrainUnitsDistribution(
      areaSize.terrainUnits
    );

    this.regionData.description = areaSize.description;
    this.regionData.scattering = areaRegionsDistribution.scattering.description;
    this.regionData.size = areaSize.terrainUnits;
    this.regionData.regions = this.getAreaRegions(
      areaRegionsDistribution,
      this.regionData.size
    );
    this.regionData.totalAppealing = reduceToAddParam(
      this.regionData.regions.map((region: any) => region.terrainUnits).flat(),
      "appealing"
    );
    this.regionData.totalHabitability = reduceToAddParam(
      this.regionData.regions.map((region: any) => region.terrainUnits).flat(),
      "habitability"
    );

    return {
      ...this.regionData,
      size: this.regions.map((region: any) => region.terrainUnits).flat()
        .length,
    };
  };
}
