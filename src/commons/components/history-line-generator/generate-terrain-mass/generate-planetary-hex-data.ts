import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../../utils/generate-tables-data";
import {
  generateRandomNumber,
  getRangedValue,
  parseNumbersToTwoDecimalDigits,
} from "../../utils/utils";
import { generateModifiedResourceData } from "../utils";
import {
  generateHexSpecials,
  IHexSpecial,
} from "./generate-planetary-mass-specials/generate-planetary-mass-specials";
import {
  generateSettlement,
  IMayorSettlement,
} from "./generate-settlement/generate-settlements";
import { IMass } from "./interfaces";
import {
  LAND_MASS_TERRAIN_UNIT_ADJECTIVES,
  LAND_MASS_TERRAIN_UNIT_BIODIVERSITY,
  LAND_MASS_TERRAIN_UNIT_HIDROGRAPHY,
  LAND_MASS_TERRAIN_UNIT_OROGRAPHY,
} from "./land-mass/tables/terrain-unit-types";
import {
  LIQUID_MASS_TERRAIN_UNIT_ADJECTIVES,
  LIQUID_MASS_TERRAIN_UNIT_BATHYGRAPHY,
  LIQUID_MASS_TERRAIN_UNIT_BIODIVERSITY,
  LIQUID_MASS_TERRAIN_UNIT_CURRENTS,
} from "./liquid-mass/tables/terrain-unit-types";

//*- INTERFACES -*//
export interface IHexBasicData {
  biodiversity_type: string;
  label: string;
  economical_resources: number;
  edible_resources: number;
  hidrography_type: string;
  industrial_resources: number;
  orography_type: string;
  population_attraction: number;
  specials: IHexSpecial[];
}

//*- SCHEMATICS -*//
export const hexBasicDataSchematic: IHexBasicData = {
  biodiversity_type: "",
  label: "",
  economical_resources: 0,
  edible_resources: 0,
  hidrography_type: "",
  industrial_resources: 0,
  orography_type: "",
  population_attraction: 0,
  specials: [],
};

//*- CONSTANTS -*//
const OROGRAPHY_TYPES = ["lowlands", "hilly", "highlands", "mountainous"];
const BATHYGRAPHY_TYPES = [
  "epipelagic",
  "mesopelagic",
  "bathypelagic",
  "abyssopelagic",
  "hadal",
];

const HIDROGRAPHY_TYPES = [
  "badlands",
  "small_rivers",
  "great_rivers",
  "rivers_and_lakes",
  "inner_sea",
];
const CURRENTS_TYPES = [
  "no_currents",
  "small_currents",
  "medium_currents",
  "large_currents",
  "huge_currents",
];

const BIODIVERSITY_TYPES = ["low", "medium", "high"];

/*- GENERATE HEX BASIC DATA -*/
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

export const generateMassHexData = (
  latitudeBelt: any,
  hexType: string
): IHexBasicData => {
  let hexData: IHexBasicData = hexBasicDataSchematic;

  const latitude: any = latitudeBelt;

  // OROGRAFÍA O BATIGRAFÍA
  const orographyOrSeaDepthTypesAndUnits: any = {
    land: {
      types: OROGRAPHY_TYPES,
      units: LAND_MASS_TERRAIN_UNIT_OROGRAPHY,
    },
    liquid: {
      types: BATHYGRAPHY_TYPES,
      units: LIQUID_MASS_TERRAIN_UNIT_BATHYGRAPHY,
    },
  };
  const orographyOrSeaDepthRandomness = generateRandomNumber(
    0,
    orographyOrSeaDepthTypesAndUnits[hexType]?.types?.length - 1
  );
  const orography =
    orographyOrSeaDepthTypesAndUnits[hexType]?.units?.[
      orographyOrSeaDepthTypesAndUnits[hexType]?.types[
        orographyOrSeaDepthRandomness
      ]
    ];

  // HIDROGRAFÍA
  const hidrographyOrCurrentsTypesAndUnits: any = {
    land: {
      types: HIDROGRAPHY_TYPES,
      units: LAND_MASS_TERRAIN_UNIT_HIDROGRAPHY,
    },
    liquid: {
      types: CURRENTS_TYPES,
      units: LIQUID_MASS_TERRAIN_UNIT_CURRENTS,
    },
  };
  const hidrographyOrCurrentsRandomness = getRangedValue(
    hidrographyOrCurrentsTypesAndUnits[hexType]?.types?.length - 1,
    0,
    generateRandomNumber(-1, 1) + orography.hidrography_mod
  );
  const hidrography =
    hidrographyOrCurrentsTypesAndUnits[hexType]?.units?.[
      hidrographyOrCurrentsTypesAndUnits[hexType]?.types[
        hidrographyOrCurrentsRandomness
      ]
    ];

  // BIODIVERSIDAD
  const biodiversityTypes: any = {
    land: {
      types: BIODIVERSITY_TYPES,
      units: LAND_MASS_TERRAIN_UNIT_BIODIVERSITY,
    },
    liquid: {
      types: BIODIVERSITY_TYPES,
      units: LIQUID_MASS_TERRAIN_UNIT_BIODIVERSITY,
    },
  };
  const biodiversityRandomness = getRangedValue(
    biodiversityTypes?.[hexType]?.types?.length - 1,
    0,
    generateRandomNumber(-1, 1) +
      orography.biodiversity_mod +
      hidrography.biodiversity_mod +
      latitude.biodiversity_mod
  );
  const biodiversity =
    biodiversityTypes[hexType]?.units?.[
      biodiversityTypes[hexType]?.types[biodiversityRandomness]
    ];

  // ADJETIVOS DESCRIPTIVOS DEL TIPO DE UNIDAD DE TERRENO

  const LABELS_ADJECTIVES_BY_TERRAIN_TYPE: any = {
    land: LAND_MASS_TERRAIN_UNIT_ADJECTIVES,
    liquid: LIQUID_MASS_TERRAIN_UNIT_ADJECTIVES,
  };

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
    hexData.specials,
    "economical_mod"
  );

  hexData.edible_resources = generateModifiedResourceData(
    edibleData,
    hexData.specials,
    "edible_mod"
  );

  hexData.industrial_resources = generateModifiedResourceData(
    industrialData,
    hexData.specials,
    "industrial_mod"
  );

  hexData.population_attraction = populationAttraction;

  hexData.biodiversity_type = biodiversity.label;
  hexData.hidrography_type = hidrography.label;
  hexData.orography_type = orography.label;
  hexData.label = `${orography.adjective} ${
    LABELS_ADJECTIVES_BY_TERRAIN_TYPE?.[hexType]?.[
      Object.keys(orographyOrSeaDepthTypesAndUnits[hexType]?.units)[
        orographyOrSeaDepthRandomness
      ]
    ][latitude.label][
      Object.keys(biodiversityTypes[hexType]?.units)[biodiversityRandomness]
    ]
  }`;

  return hexData;
};

export const generateMassHexes = (
  totalHexesToGenerate: number,
  latitude: any,
  terrainType: string
) => {
  let mass: IMass = {
    hexes: [],
    mayor_settlements: [] as IMayorSettlement[],
    total_economical: 0,
    total_edible: 0,
    total_industrial: 0,
    total_population_attraction: 0,
  };

  for (let i = 0; i < totalHexesToGenerate; i += 1) {
    const newHex = generateMassHexData(latitude, terrainType);
    mass.total_economical += newHex.economical_resources;
    mass.total_edible += newHex.edible_resources;
    mass.total_industrial += newHex.industrial_resources;
    mass.total_population_attraction += newHex.population_attraction;
    mass.hexes = [...mass.hexes, { ...newHex }];
  }
  const totalMayorSettlementsNumber = Math.floor(
    mass.total_population_attraction / 10
  );
  if (totalMayorSettlementsNumber > 0) {
    for (let k = 0; k < totalMayorSettlementsNumber; k += 1) {
      let newSetlementGenerated: IMayorSettlement = generateSettlement();
      mass.mayor_settlements = [
        ...mass.mayor_settlements,
        { ...newSetlementGenerated },
      ];
    }
  }
  return mass;
};
