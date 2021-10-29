import { lenguaImmalar } from "../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../nomenclator/nomenclator-generator";
import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../utils/generate-tables-data";
import { generateRandomNumber, reduceToAddParam } from "../utils/utils";
import { nameSettlement } from "./settlement-badge/utils";
import {
  IMaxMinRange,
  UnlightWorldDiscoveredRegionSize,
  UnlightWorldDiscoveredRegionTerrainUnitDedication,
  UnlightWorldDiscoveredRegionTerrainUnitDistribution,
  UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering,
} from "./utils/utils";

export interface ITerrainUnit {
  appealing: number;
  currentEconomicalResourcesProduction?: number;
  currentEdibleResourcesProduction?: number;
  danger?: number;
  economicalResourcesGeneratedByPopulation?: number;
  edibleResourcesGeneratedByPopulation?: number;
  habitability: number;
  name?: string;
  population?: number;
  size?: number;
  type: string;
  subType: string;
}

export interface IRegion {
  name?: string;
  regionAppealing: number;
  regionEconomicalResourcesProduction?: number;
  regionEdibleResourcesProduction?: number;
  regionHabitability: number;
  regionPopulation: number;
  size: number;
  terrainUnits: ITerrainUnit[];
}

export interface IUnlightWorldExploratedArea {
  description?: string;
  name?: string;
  regions: IRegion[];
  scattering: string;
  size: number;
  totalAppealing: number;
  totalDisent: number;
  totalEconomicalResourcesProduction: number;
  totalEdibleResourcesProduction?: number;
  totalHabitability: number;
  totalPopulation: number;
  totalPower: number;
  totalReligiousPower: number;
  totalStability: number;
}

export const generateArea = (): IUnlightWorldExploratedArea => {
  let newArea: IUnlightWorldExploratedArea = {
    description: "",
    name: "",
    regions: [],
    scattering: "",
    size: 0,
    totalAppealing: 0,
    totalDisent: 0,
    totalEconomicalResourcesProduction: 0,
    totalEdibleResourcesProduction: 0,
    totalHabitability: 0,
    totalPopulation: 0,
    totalPower: 0,
    totalReligiousPower: 0,
    totalStability: 0,
  };

  let regions: IRegion[] = [];

  const generateTerrainUnitDedication = (
    sizeRange: IMaxMinRange
  ): ITerrainUnit => {
    let terrainUnitDedication = obtainDataFromTable(
      generateTableDataByFrequencies(
        UnlightWorldDiscoveredRegionTerrainUnitDedication
      )
    );

    terrainUnitDedication.data = obtainDataFromTable(
      generateTableDataByFrequencies(terrainUnitDedication.subtype)
    );

    const terrainUnitSize = generateRandomNumber(
      sizeRange?.min,
      sizeRange?.max
    );

    const appealing =
      typeof terrainUnitDedication?.data?.appealing === "object" &&
      terrainUnitDedication?.data?.appealing !== null
        ? generateRandomNumber(
            terrainUnitDedication?.data?.appealing?.min,
            terrainUnitDedication?.data?.appealing?.max
          )
        : terrainUnitDedication?.data?.appealing;
    const population = terrainUnitDedication?.data?.population;
    const danger =
      typeof terrainUnitDedication?.data?.danger === "object" &&
      terrainUnitDedication?.data?.danger !== null
        ? generateRandomNumber(
            terrainUnitDedication?.data?.danger?.min,
            terrainUnitDedication?.data?.danger?.max
          )
        : terrainUnitDedication?.data?.danger;
    const edibleResourcesGeneratedByPopulation =
      typeof terrainUnitDedication?.data
        ?.edibleResourcesGeneratedByPopulation === "object" &&
      terrainUnitDedication?.data?.appealing !== null
        ? generateRandomNumber(
            terrainUnitDedication?.data?.edibleResourcesGeneratedByPopulation
              ?.min,
            terrainUnitDedication?.data?.edibleResourcesGeneratedByPopulation
              ?.max
          )
        : terrainUnitDedication?.data?.edibleResourcesGeneratedByPopulation;
    const currentEdibleResourcesProduction =
      population * edibleResourcesGeneratedByPopulation;
    const economicalResourcesGeneratedByPopulation =
      typeof terrainUnitDedication?.data
        ?.economicalResourcesGeneratedByPopulation === "object" &&
      terrainUnitDedication?.data?.appealing !== null
        ? generateRandomNumber(
            terrainUnitDedication?.data
              ?.economicalResourcesGeneratedByPopulation?.min,
            terrainUnitDedication?.data
              ?.economicalResourcesGeneratedByPopulation?.max
          )
        : terrainUnitDedication?.data?.economicalResourcesGeneratedByPopulation;
    const currentEconomicalResourcesProduction =
      population * economicalResourcesGeneratedByPopulation;

    return {
      appealing,
      currentEconomicalResourcesProduction,
      currentEdibleResourcesProduction,
      danger,
      economicalResourcesGeneratedByPopulation,
      edibleResourcesGeneratedByPopulation,
      habitability:
        typeof terrainUnitDedication?.data?.habitabilityGenerated ===
          "object" &&
        terrainUnitDedication?.data?.habitabilityGenerated !== null
          ? generateRandomNumber(
              terrainUnitDedication?.data?.habitabilityGenerated?.min,
              terrainUnitDedication?.data?.habitabilityGenerated?.max
            )
          : terrainUnitDedication?.data?.habitabilityGenerated,
      population,
      type: terrainUnitDedication?.description,
      size: terrainUnitSize,
      subType: terrainUnitDedication?.data?.description,
    };
  };

  const generateAreaRegionTerrainUnits = (
    sizeRange: IMaxMinRange,
    terrainUnits: number
  ) => {
    let terrainUnitsData: ITerrainUnit[] = [];

    for (let i = 0; i < terrainUnits; i += 1) {
      terrainUnitsData.push(generateTerrainUnitDedication(sizeRange));
    }

    return terrainUnitsData;
  };

  const generateAreaRegion = (
    sizeRange: IMaxMinRange,
    terrainUnits: number
  ): IRegion => {
    let terrainUnitsData: ITerrainUnit[] = generateAreaRegionTerrainUnits(
      sizeRange,
      terrainUnits
    );

    return {
      name: "",
      regionAppealing: reduceToAddParam(terrainUnitsData, "appealing"),
      regionEconomicalResourcesProduction: reduceToAddParam(
        terrainUnitsData,
        "currentEconomicalResourcesProduction"
      ),
      regionEdibleResourcesProduction: reduceToAddParam(
        terrainUnitsData,
        "currentEdibleResourcesProduction"
      ),
      regionHabitability: reduceToAddParam(terrainUnitsData, "habitability"),
      regionPopulation: reduceToAddParam(terrainUnitsData, "population"),
      size: terrainUnits,
      terrainUnits: terrainUnitsData,
    };
  };

  const getAreaSizeData = () =>
    obtainDataFromTable(
      generateTableDataByFrequencies(UnlightWorldDiscoveredRegionSize)
    );

  const getAreaTerrainUnitsDistribution = (terrainUnits: number) =>
    obtainDataFromTable(
      generateTableDataByFrequencies(
        UnlightWorldDiscoveredRegionTerrainUnitDistribution(terrainUnits)
      )
    );

  const generateAreaRegions = (
    areaRegionsNumber: number,
    terrainUnitDistribution: IMaxMinRange
  ) => {
    while (regions.length < areaRegionsNumber) {
      regions.push(
        generateAreaRegion(
          {
            min: terrainUnitDistribution.min,
            max: terrainUnitDistribution.max,
          },
          generateRandomNumber(1, areaRegionsNumber)
        )
      );
    }
    return regions;
  };

  const getAreaPower = (
    economicalPower: number,
    population: number,
    religiousPower: number
  ) => Math.floor(economicalPower + religiousPower + population / 2);

  const areaSize = getAreaSizeData();
  const areaRegionsDistribution = getAreaTerrainUnitsDistribution(
    areaSize.regions
  );

  newArea.description = areaSize.description;
  newArea.scattering = areaRegionsDistribution.scattering.description;
  newArea.size = areaSize.regions;
  newArea.regions = generateAreaRegions(
    newArea.size,
    areaSize.terrainUnitsSizeRange
  );
  newArea.totalAppealing = reduceToAddParam(
    newArea.regions.map((region: any) => region.terrainUnits).flat(),
    "appealing"
  );
  newArea.totalEconomicalResourcesProduction = reduceToAddParam(
    newArea.regions.map((region: any) => region.terrainUnits).flat(),
    "currentEconomicalResourcesProduction"
  );
  newArea.totalEdibleResourcesProduction = reduceToAddParam(
    newArea.regions.map((region: any) => region.terrainUnits).flat(),
    "currentEdibleResourcesProduction"
  );
  newArea.totalHabitability = reduceToAddParam(
    newArea.regions.map((region: any) => region.terrainUnits).flat(),
    "habitability"
  );
  newArea.totalPopulation = reduceToAddParam(
    newArea.regions.map((region: any) => region.terrainUnits).flat(),
    "population"
  );
  newArea.totalPower = getAreaPower(
    newArea.totalEconomicalResourcesProduction,
    newArea.totalPopulation,
    newArea.totalReligiousPower
  );

  newArea = nameSettlement(lenguaImmalar, newArea);

  return {
    ...newArea,
    size: regions.map((region: any) => region.terrainUnits).flat().length,
  };
};

export class UnlightWorldArea {
  _regionData: IUnlightWorldExploratedArea;
  constructor() {
    this._regionData = generateArea();
    console.log("DATPSSS A ->>*", this._regionData);
  }

  getAreaData = (): IUnlightWorldExploratedArea => this._regionData;

  /**
   * Method to get all regions in the generated Area
   * @returns {array} An array of Regions
   */
  getAreaRegions = (): IRegion[] => this._regionData?.regions;

  /**
   * Method to find an area region by region name
   * @param {string} name Name of the region to find
   * @returns {IRegion} A IRegion
   */
  getAreaRegionByName = (name: string): IRegion | undefined =>
    this._regionData.regions.find((region: IRegion) => region.name === name);
  getAreaInhabitatedRegionByName = (name: string): IRegion | undefined =>
    this._regionData.regions.find(
      (region: IRegion) => region.name === name && region?.regionPopulation > 0
    );
}
