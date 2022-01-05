import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import { lenguaUrarnu } from "../../nomenclator/uryarn/urarnu";
import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../../utils/generate-tables-data";
import {
  arrayValuesAdding,
  firstCharacterToUppercase,
  generateRandomMaxMinValue,
  generateRandomNumber,
  getRangedValue,
  getValueFromPercentage,
  parseNumbersToTwoDecimalDigits,
} from "../../utils/utils";
import { IMaxMinRange } from "../utils/utils";
import { generateSettlement } from "./generate-settlements";
import {
  hexBasicDataSchematic,
  hexSpecialSchematic,
  IBiodiversitySpecialsStems,
  IHexBasicData,
  IHexSpecial,
  IHidrographySpecialsStems,
  IOrographySpecialsStems,
  ISpecialsStemsItem,
} from "./interfaces";
import {
  BIODIVERSITY_SPECIALS_STEMS,
  SPECIALS_STEM_ADJECTIVES,
  BIODIVERSITY_SPECIALS_STEM_LIST,
  OROGROPHY_SPECIALS_STEM_LIST,
  OROGRAPHY_SPECIALS_STEMS,
  HIDROGRAPHY_SPECIALS_STEM_LIST,
  HIDROGRAPHY_SPECIALS_STEMS,
} from "./tables/specials";
import {
  LAND_MASS_TERRAIN_UNIT_ADJECTIVES,
  LAND_MASS_TERRAIN_UNIT_BIODIVERSITY,
  LAND_MASS_TERRAIN_UNIT_HIDROGRAPHY,
  LAND_MASS_TERRAIN_UNIT_OROGRAPHY,
  LAND_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT,
} from "./tables/terrain-unit-types";

export {};

export const latitudeBelts = ["boreal", "temperate", "tropical", "equatorial"];
export const detailedLatitudeBelts = [
  "boreal",
  "temperate",
  "tropical",
  "equatorial",
  "tropical",
  "temperate",
  "boreal",
];

export const planetTypessByTemperature = ["boreal", "temperate", "hot"];

const orographyTypes = ["lowlands", "hilly", "highlands", "mountainous"];

const HIDROGRAPHY_TYPES = [
  "badlands",
  "small_rivers",
  "great_rivers",
  "rivers_and_lakes",
  "inner_sea",
];

const BIODIVERSITY_TYPES = ["low", "medium", "high"];

const SPECIALS_TYPES = ["biodiversity", "hidrography", "orography"];

const SPECIALS_TYPES_DATA_ARRAYS: any = {
  biodiversity: {
    stemlist: BIODIVERSITY_SPECIALS_STEM_LIST,
    stems: BIODIVERSITY_SPECIALS_STEMS,
  },
  hidrography: {
    stemlist: HIDROGRAPHY_SPECIALS_STEM_LIST,
    stems: HIDROGRAPHY_SPECIALS_STEMS,
  },
  orography: {
    stemlist: OROGROPHY_SPECIALS_STEM_LIST,
    stems: OROGRAPHY_SPECIALS_STEMS,
  },
};

/*- SPECIALS -*/
const generateSpecialLabel = (adjective: string, stem: string): string =>
  `${firstCharacterToUppercase(adjective)} ${firstCharacterToUppercase(stem)}`;

export const generateHexSpecial = (specialType: string): IHexSpecial => {
  let special: IHexSpecial = hexSpecialSchematic;
  let specialStemListArray: string[] = [];
  let specialStemsArray: any = {};

  specialStemListArray = SPECIALS_TYPES_DATA_ARRAYS[specialType].stemlist;
  specialStemsArray = SPECIALS_TYPES_DATA_ARRAYS[specialType].stems;

  const specialRawDataItem: string =
    specialStemListArray[
      generateRandomNumber(0, specialStemListArray.length - 1)
    ];
  const specialRawData: ISpecialsStemsItem =
    specialStemsArray[specialRawDataItem];
  const specialStemAdjectiveIndex =
    specialRawData.possible_adjectives[
      generateRandomNumber(0, specialRawData.possible_adjectives.length - 1)
    ];
  const specialStemAdjective =
    SPECIALS_STEM_ADJECTIVES[specialStemAdjectiveIndex];
  special.label = generateSpecialLabel(
    specialStemAdjectiveIndex,
    specialRawDataItem
  );

  special.economical_mod =
    generateRandomMaxMinValue(specialRawData.economical_resources_mod) +
    generateRandomMaxMinValue(specialStemAdjective.economical_resources_mod);
  special.edible_mod =
    generateRandomMaxMinValue(specialRawData.edible_resources_mod) +
    generateRandomMaxMinValue(specialStemAdjective.edible_resources_mod);
  special.industrial_mod =
    generateRandomMaxMinValue(specialRawData.industrial_resources_mod) +
    generateRandomMaxMinValue(specialStemAdjective.industrial_resources_mod);
  special.population_attraction_mod = generateRandomMaxMinValue(
    specialStemAdjective.population_attraction_mod
  );

  return special;
};

const generateHexSpecials = (): IHexSpecial[] => {
  let specials: IHexSpecial[] = [];
  const specialsNumber: number = obtainDataFromTable(
    generateTableDataByFrequencies([
      {
        dataToSend: 0,
        freq: "relevant",
      },
      {
        dataToSend: 1,
        freq: "veryLow",
      },
      {
        dataToSend: 2,
        freq: "rare",
      },
      {
        dataToSend: 3,
        freq: "veryRare",
      },
    ])
  );
  if (specialsNumber > 0) {
    for (let i: number = 0; i < specialsNumber - 1; i += 1) {
      specials = [
        ...specials,
        {
          ...generateHexSpecial(
            SPECIALS_TYPES[generateRandomNumber(0, SPECIALS_TYPES.length - 1)]
          ),
        },
      ];
    }
  }
  return specials;
};

export const generateModifiedResourceData = (
  typeData: any,
  biodiversitySpecialData: number | null = null,
  hidrographySpecialData: number | null = null,
  orographySpecialData: number | null = null
) => {
  let modifiedData: number[] = [];

  if (biodiversitySpecialData) {
    modifiedData.push(biodiversitySpecialData);
  }

  if (hidrographySpecialData) {
    modifiedData.push(hidrographySpecialData);
  }

  if (orographySpecialData) {
    modifiedData.push(orographySpecialData);
  }

  return parseNumbersToTwoDecimalDigits(
    typeData + getValueFromPercentage(arrayValuesAdding(modifiedData), typeData)
  );
};

const getHexParamBasicData = (
  biodiversity: any,
  hidrography: any,
  latitude: any,
  orography: any,
  param: string
) => {
  return (
    obtainDataFromTable(generateTableDataByFrequencies(latitude[param])) +
    parseNumbersToTwoDecimalDigits(
      generateRandomNumber(orography[param].min, orography[param].max)
    ) +
    parseNumbersToTwoDecimalDigits(
      generateRandomNumber(hidrography[param].min, hidrography[param].max)
    ) +
    parseNumbersToTwoDecimalDigits(
      generateRandomNumber(biodiversity[param].min, biodiversity[param].max)
    )
  );
};

export const generateLandMassHexData = (latitudeBelt: any): IHexBasicData => {
  let hexData: IHexBasicData = hexBasicDataSchematic;

  const latitude: any = latitudeBelt;

  // OROGRAFÍA
  const orographyRandomness = generateRandomNumber(
    0,
    orographyTypes.length - 1
  );
  const orography =
    LAND_MASS_TERRAIN_UNIT_OROGRAPHY[orographyTypes[orographyRandomness]];

  // HIDROGRAFÍA
  const hidrographyRandomness = getRangedValue(
    HIDROGRAPHY_TYPES.length - 1,
    0,
    generateRandomNumber(-1, 1) + orography.hidrography_mod
  );
  const hidrography =
    LAND_MASS_TERRAIN_UNIT_HIDROGRAPHY[
      HIDROGRAPHY_TYPES[hidrographyRandomness]
    ];
  // BIODIVERSIDAD
  const biodiversityRandomness = getRangedValue(
    BIODIVERSITY_TYPES.length - 1,
    0,
    generateRandomNumber(-1, 1) +
      orography.biodiversity_mod +
      hidrography.biodiversity_mod +
      latitude.biodiversity_mod
  );
  const biodiversity =
    LAND_MASS_TERRAIN_UNIT_BIODIVERSITY[
      BIODIVERSITY_TYPES[biodiversityRandomness]
    ];

  const economicalData = getHexParamBasicData(
    biodiversity,
    hidrography,
    latitude,
    orography,
    "economical_resources"
  );

  const edibleData = getHexParamBasicData(
    biodiversity,
    hidrography,
    latitude,
    orography,
    "edible_resources"
  );

  const industrialData = getHexParamBasicData(
    biodiversity,
    hidrography,
    latitude,
    orography,
    "industrial_resources"
  );

  const populationAttraction = getHexParamBasicData(
    biodiversity,
    hidrography,
    latitude,
    orography,
    "population_attraction"
  );

  hexData.specials = generateHexSpecials();
  hexData.economical_resources = generateModifiedResourceData(
    economicalData,
    hexData.specials?.[0]?.economical_mod || null,
    hexData.specials?.[1]?.economical_mod || null,
    hexData.specials?.[2]?.economical_mod || null
  );

  hexData.edible_resources = generateModifiedResourceData(
    edibleData,
    hexData.specials?.[0]?.edible_mod || null,
    hexData.specials?.[1]?.edible_mod || null,
    hexData.specials?.[2]?.edible_mod || null
  );

  hexData.industrial_resources = generateModifiedResourceData(
    industrialData,
    hexData.specials?.[0]?.industrial_mod || null,
    hexData.specials?.[1]?.industrial_mod || null,
    hexData.specials?.[2]?.industrial_mod || null
  );

  hexData.population_attraction = populationAttraction;

  hexData.biodiversity_type = biodiversity.label;
  hexData.hidrography_type = hidrography.label;
  hexData.orography_type = orography.label;
  hexData.label = `${orography.adjective} ${
    LAND_MASS_TERRAIN_UNIT_ADJECTIVES[
      Object.keys(LAND_MASS_TERRAIN_UNIT_OROGRAPHY)[orographyRandomness]
    ][latitude.label][
      Object.keys(LAND_MASS_TERRAIN_UNIT_BIODIVERSITY)[biodiversityRandomness]
    ]
  }`;

  return hexData;
};

export const generateLandMassHexes = (
  totalHexesToGenerate: number,
  latitude: any
) => {
  let landMass: any = {
    hexes: [],
    mayor_settlements: [],
    total_economical: 0,
    total_edible: 0,
    total_industrial: 0,
    total_population_attraction: 0,
  };

  for (let i = 0; i < totalHexesToGenerate; i += 1) {
    const newHex = generateLandMassHexData(latitude);
    landMass.total_economical += newHex.economical_resources;
    landMass.total_edible += newHex.edible_resources;
    landMass.total_industrial += newHex.industrial_resources;
    landMass.total_population_attraction += newHex.population_attraction;
    landMass.hexes = [...landMass.hexes, { ...newHex }];
  }
  const totalMayorSettlementsNumber = Math.floor(
    landMass.total_population_attraction / 10
  );
  if (totalMayorSettlementsNumber > 0) {
    for (let k = 0; k < totalMayorSettlementsNumber; k += 1) {
      landMass.mayor_settlements = [
        ...landMass.mayor_settlements,
        { ...generateSettlement() },
      ];
    }
  }
  return landMass;
};

export const generateContinent = () => {
  let continent: any = {
    latitudeBelts: [],
    landMasses: {},
    mayor_settlements: [],
    name: "",
    total_economical: 0,
    total_edible: 0,
    total_industrial: 0,
    total_population_attraction: 0,
  };

  const latitudeBeltsCrossedTotalNumber = generateRandomNumber(1, 7);
  const latitudeBeltsCrossed = detailedLatitudeBelts.slice(
    generateRandomNumber(0, 7 - latitudeBeltsCrossedTotalNumber),
    latitudeBeltsCrossedTotalNumber - 1
  );
  latitudeBeltsCrossed.forEach((belt: string) => {
    const randomLandMassesToGenerate = generateRandomNumber(1, 3);
    let latitudeLandMasses = {} as any;
    let totalBeltLandMasses: any[] = [];
    for (let k = 0; k < randomLandMassesToGenerate; k += 1) {
      const landMass = generateLandMassHexes(
        generateRandomNumber(1, 6),
        LAND_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT[belt]
      );
      continent.total_economical += landMass.total_economical;
      continent.total_edible += landMass.total_edible;
      continent.total_industrial += landMass.total_industrial;
      continent.total_population_attraction +=
        landMass.total_population_attraction;
      if (landMass.mayor_settlements.length > 0) {
        continent.mayor_settlements = [
          ...continent.mayor_settlements,
          landMass.mayor_settlements,
        ];
      }
      totalBeltLandMasses = [...totalBeltLandMasses, { ...landMass }];
    }
    latitudeLandMasses[belt] = totalBeltLandMasses;
    continent.landMasses = { ...continent.landMasses, ...latitudeLandMasses };
  });
  continent.name = generateRandomNames(lenguaUrarnu, 1)[0];
  continent.latitudeBelts = latitudeBeltsCrossed;
  console.log("CONTINENT ---> ", continent);
};
