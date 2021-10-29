import {
  generateTableDataByFrequencies,
  IDynamicDataTableObject,
  obtainDataFromTable,
} from "../../utils/generate-tables-data";
import { generateRandomNumber } from "../../utils/utils";

export interface IMaxMinRange {
  max: number;
  min: number;
}

/*- UNLIGHT WORLD -*/

export const UnlightWorldDiscoveredRegionSize: IDynamicDataTableObject[] = [
  {
    dataToSend: {
      description: "Small",
      regions: generateRandomNumber(1, 3),
      terrainUnitsSizeRange: {
        max: 3,
        min: 1,
      },
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      description: "Medium",
      regions: generateRandomNumber(2, 4),
      terrainUnitsSizeRange: {
        max: 3,
        min: 1,
      },
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      description: "Large",
      regions: generateRandomNumber(4, 6),
      terrainUnitsSizeRange: {
        max: 4,
        min: 1,
      },
    },
    freq: "minor",
  },
  {
    dataToSend: {
      description: "Very Large",
      regions: generateRandomNumber(6, 8),
      terrainUnitsSizeRange: {
        max: 6,
        min: 1,
      },
    },
    freq: "rare",
  },
  {
    dataToSend: {
      description: "Gigantic",
      regions: generateRandomNumber(8, 10),
      terrainUnitsSizeRange: {
        max: 8,
        min: 1,
      },
    },
    freq: "veryRare",
  },
];

export const UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES = {
  DEEP_LAKE: "Lago Prdofundo",
  LAKE: "Lago",
  POND: "Estanque",
  RIVER: "Río",
};

export const generateUnlightWorldWaterSourceSubtype: IDynamicDataTableObject[] =
  [
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 2,
        },
        danger: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.RIVER,
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 1,
          max: 2,
        },
        habitabilityGenerated: {
          min: 1,
          max: 3,
        },
        population: 0,
      },
      freq: "relevant",
    },
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 3,
        },
        danger: {
          min: 0,
          max: 1,
        },
        description: UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.POND,
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 0,
          max: 1,
        },
        habitabilityGenerated: {
          min: 2,
          max: 4,
        },
        population: 0,
      },
      freq: "low",
    },
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 3,
        },
        danger: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.LAKE,
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 2,
          max: 3,
        },
        habitabilityGenerated: {
          min: 6,
          max: 9,
        },
        population: 0,
      },
      freq: "veryLow",
    },
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 3,
        },
        danger: {
          min: 1,
          max: 3,
        },
        description: UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.DEEP_LAKE,
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 3,
          max: 5,
        },
        habitabilityGenerated: {
          min: 6,
          max: 12,
        },
        population: 0,
      },
      freq: "rare",
    },
  ];

export const UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES = {
  EXOTIC: "Exotic",
  FUNGI: "Hongos",
  HUNTABLE_BEASTS: "Caza",
  TAMEABLE_BEASTS: "Bestias Domesticables",
};

export const generateUnlightWorldFoodSourceSubtype: IDynamicDataTableObject[] =
  [
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.FUNGI,
        danger: {
          min: 0,
          max: 2,
        },
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 1,
          max: 2,
        },
        habitabilityGenerated: {
          min: 1,
          max: 3,
        },
        population: 0,
      },
      freq: "relevant",
    },
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 3,
        },
        danger: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.TAMEABLE_BEASTS,
        economicalResourcesGeneratedByPopulation: 0,
        edibleResourcesGeneratedByPopulation: {
          min: 2,
          max: 4,
        },
        habitabilityGenerated: {
          min: 2,
          max: 4,
        },
        population: 0,
      },
      freq: "low",
    },
    {
      dataToSend: {
        appealing: {
          min: 1,
          max: 2,
        },
        danger: {
          min: 1,
          max: 3,
        },
        description: UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.HUNTABLE_BEASTS,
        economicalResourcesGeneratedByPopulation: 1,
        edibleResourcesGeneratedByPopulation: {
          min: 1,
          max: 3,
        },
        habitabilityGenerated: {
          min: 2,
          max: 6,
        },
        population: 0,
      },
      freq: "veryLow",
    },
    {
      dataToSend: {
        appealing: {
          min: 2,
          max: 4,
        },
        danger: {
          min: 2,
          max: 6,
        },
        description: UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.EXOTIC,
        economicalResourcesGeneratedByPopulation: 2,
        edibleResourcesGeneratedByPopulation: {
          min: 1,
          max: 2,
        },
        habitabilityGenerated: {
          min: 1,
          max: 3,
        },
        population: 0,
      },
      freq: "veryRare",
    },
  ];

export const UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES = {
  EXOTIC: "Metales/Minerales Exóticos",
  GEMS: "Gemas",
  PRECIOUS_METALS: "Metales Preciosos",
  WORKABLE_METALS: "Minerales/Metales Trabajables",
};

export const generateUnlightWorldMineralSourceSubtype: IDynamicDataTableObject[] =
  [
    {
      dataToSend: {
        appealing: {
          min: 2,
          max: 3,
        },
        danger: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.WORKABLE_METALS,
        economicalResourcesGeneratedByPopulation: {
          min: 0,
          max: 1,
        },
        edibleResourcesGeneratedByPopulation: 0,
        habitabilityGenerated: 0,
        population: 0,
      },
      freq: "relevant",
    },
    {
      dataToSend: {
        appealing: {
          min: 0,
          max: 1,
        },
        danger: {
          min: 1,
          max: 2,
        },
        description: UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.PRECIOUS_METALS,
        economicalResourcesGeneratedByPopulation: {
          min: 2,
          max: 3,
        },
        edibleResourcesGeneratedByPopulation: 0,
        habitabilityGenerated: 0,
        population: 0,
      },
      freq: "minor",
    },
    {
      dataToSend: {
        appealing: {
          min: 6,
          max: 9,
        },
        danger: {
          min: 0,
          max: 1,
        },
        description: UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.GEMS,
        economicalResourcesGeneratedByPopulation: {
          min: 3,
          max: 6,
        },
        edibleResourcesGeneratedByPopulation: 0,
        habitabilityGenerated: 0,
        population: 0,
      },
      freq: "rare",
    },
    {
      dataToSend: {
        appealing: {
          min: 9,
          max: 15,
        },
        danger: {
          min: 1,
          max: 3,
        },
        description: UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.EXOTIC,
        economicalResourcesGeneratedByPopulation: {
          min: 6,
          max: 9,
        },
        edibleResourcesGeneratedByPopulation: 0,
        habitabilityGenerated: 0,
        population: 0,
      },
      freq: "veryRare",
    },
  ];

export const UnlightWorldDiscoveredRegionTerrainUnitDedication: IDynamicDataTableObject[] =
  [
    {
      dataToSend: {
        description: "Water Source",
        subtype: generateUnlightWorldWaterSourceSubtype,
      },
      freq: "low",
    },
    {
      dataToSend: {
        description: "Food Source",
        subtype: generateUnlightWorldFoodSourceSubtype,
      },
      freq: "normal",
    },
    {
      dataToSend: {
        description: "Mineral Source",
        subtype: generateUnlightWorldMineralSourceSubtype,
      },
      freq: "relevant",
    },
    {
      dataToSend: {
        description: "Vacío",
        subtype: [
          {
            dataToSend: {
              appealing: 0,
              danger: 0,
              description: "Vacío",
              economicalResourcesGeneratedByPopulation: 0,
              edibleResourcesGeneratedByPopulation: 0,
              habitabilityGenerated: 0,
              population: 0,
            },
            freq: "relevant",
          },
        ],
      },
      freq: "relevant",
    },
  ];

export const UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering = [
  {
    dataToSend: {
      description: "Joined",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      description: "Mixed Scattered and Joined",
    },
    freq: "low",
  },
  {
    dataToSend: {
      description: "Scattered",
    },
    freq: "low",
  },
  {
    dataToSend: {
      description: "Mixed Very Scattered and Scattered",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      description: "Mixed Very Scattered and Joined",
    },
    freq: "rare",
  },
  {
    dataToSend: {
      description: "Very Scattered",
    },
    freq: "minor",
  },
];

export const UnlightWorldDiscoveredRegionTerrainUnitDistribution = (
  terrainUnits: number
): IDynamicDataTableObject[] => [
  {
    dataToSend: {
      description: "Many Subregions",
      scattering: obtainDataFromTable(
        generateTableDataByFrequencies(
          UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering
        )
      ),
    },
    freq: "low",
  },
  {
    dataToSend: {
      description: "Few Subregions",
      scattering: obtainDataFromTable(
        generateTableDataByFrequencies(
          UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering
        )
      ),
    },
    freq: "low",
  },
  {
    dataToSend: {
      description: "Mixed Sized Subregions",
      scattering: obtainDataFromTable(
        generateTableDataByFrequencies(
          UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering
        )
      ),
    },
    freq: "normal",
  },
  {
    dataToSend: {
      description: "Two Subregions",
      scattering: obtainDataFromTable(
        generateTableDataByFrequencies(
          UnlightWorldDiscoveredRegionTerrainUnitDistributionScattering
        )
      ),
    },
    freq: "rare",
  },
  {
    dataToSend: {
      description: "One Subregion",
      scattering: "Joined",
    },
    freq: "veryRare",
  },
];

/*- LEADERS -*/

export const LeaderTraitsList: IDynamicDataTableObject[] = [
  {
    dataToSend: {
      fortune: 0,
      // event_probabilities: {
      //   assessination: "normal",
      //   construction: "low",
      //   descontent: "normal",
      //   economical: "low",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      health: 0,
      label: "Cruel",
      loyalty_from_subjects: -2,
      loyalty_to_overlod: -1,
      diplomatical: -2,
      economical: 1,
      martial: 0,
      mental: 0,
      moral: -1,
      political: 2,
      social: -2,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "relevant",
      //   economical: "low",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "normal",
      //   social: "low",
      // },
      fortune: 0,
      health: 0,
      label: "Amoral",
      loyalty_from_subjects: -1,
      loyalty_to_overlod: 0,
      diplomatical: -1,
      economical: 0,
      martial: 0,
      mental: 0,
      moral: -2,
      political: 1,
      social: -1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "normal",
      //   descontent: "low",
      //   economical: "low",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "high",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Pío",
      loyalty_from_subjects: 1,
      loyalty_to_overlod: 1,
      diplomatical: 0,
      economical: 0,
      martial: -1,
      mental: 0,
      moral: 1,
      political: 1,
      social: 0,
      spiritual: 2,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      event_probabilities: {
        assessination: "normal",
        construction: "low",
        descontent: "low",
        economical: "low",
        exploring: "low",
        mental: "low",
        martial: "high",
        religious: "low",
        social: "low",
      },
      fortune: 0,
      health: 1,
      label: "Batallador",
      loyalty_from_subjects: 2,
      loyalty_to_overlod: 0,
      diplomatical: 0,
      economical: 0,
      martial: 2,
      mental: -1,
      moral: 0,
      political: 0,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "normal",
      //   exploring: "high",
      //   mental: "low",
      //   martial: "normal",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: 1,
      label: "Aventurero",
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      diplomatical: 1,
      economical: -1,
      martial: 1,
      mental: 0,
      moral: 1,
      political: 0,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "high",
      //   exploring: "normal",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: 0,
      label: "Emprendedor",
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      diplomatical: 1,
      economical: 2,
      martial: -1,
      mental: 0,
      moral: 0,
      political: 1,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "low",
      //   exploring: "low",
      //   mental: "normal",
      //   martial: "low",
      //   religious: "low",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Justo",
      loyalty_from_subjects: 2,
      loyalty_to_overlod: 2,
      diplomatical: 0,
      economical: 0,
      martial: 0,
      mental: 0,
      moral: 1,
      political: 1,
      social: 0,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "low",
      //   exploring: "normal",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Diplomático",
      loyalty_from_subjects: 2,
      loyalty_to_overlod: 0,
      diplomatical: 2,
      economical: 0,
      martial: 0,
      mental: 0,
      moral: 1,
      political: 2,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Carismático",
      loyalty_from_subjects: 3,
      loyalty_to_overlod: 1,
      diplomatical: 1,
      economical: 1,
      martial: 0,
      mental: 0,
      moral: 0,
      political: 2,
      social: 2,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "normal",
      //   construction: "low",
      //   descontent: "low",
      //   economical: "high",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Derrochador",
      loyalty_from_subjects: -2,
      loyalty_to_overlod: 0,
      diplomatical: 1,
      economical: -2,
      martial: 0,
      mental: 0,
      moral: 0,
      political: 1,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "low",
      //   construction: "high",
      //   descontent: "low",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "normal",
      // },
      fortune: 0,
      health: 0,
      label: "Constructor",
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      diplomatical: 0,
      economical: 2,
      martial: -1,
      mental: 0,
      moral: 0,
      political: 1,
      social: 0,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 3,
      health: 0,
      label: "Afortunado",
      loyalty_from_subjects: 1,
      loyalty_to_overlod: 0,
      diplomatical: 0,
      economical: 1,
      martial: 0,
      mental: 0,
      moral: 0,
      political: 1,
      social: 0,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: -2,
      health: 0,
      label: "Malhadado",
      loyalty_from_subjects: -2,
      loyalty_to_overlod: 0,
      diplomatical: -1,
      economical: -1,
      martial: -1,
      mental: -1,
      moral: 0,
      political: -1,
      social: -1,
      spiritual: -1,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: 0,
      label: "Desconfiado",
      loyalty_from_subjects: -2,
      loyalty_to_overlod: -2,
      diplomatical: -1,
      economical: 0,
      martial: 0,
      mental: 0,
      moral: 0,
      political: 2,
      social: 1,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: -1,
      label: "Tullido",
      loyalty_from_subjects: -1,
      loyalty_to_overlod: 0,
      diplomatical: -1,
      economical: 0,
      martial: -2,
      mental: 0,
      moral: 0,
      political: -1,
      social: -1,
      spiritual: 1,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: 0,
      label: "Erudito",
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      diplomatical: 1,
      economical: 1,
      martial: -1,
      mental: 2,
      moral: 1,
      political: 0,
      social: 0,
      spiritual: 1,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: -3,
      label: "Enfermo",
      loyalty_from_subjects: -1,
      loyalty_to_overlod: 0,
      diplomatical: 0,
      economical: 0,
      martial: -2,
      mental: 0,
      moral: 0,
      political: -2,
      social: -2,
      spiritual: 0,
    },
    freq: "normal",
  },
  {
    dataToSend: {
      // event_probabilities: {
      //   assessination: "veryLow",
      //   construction: "normal",
      //   descontent: "veryLow",
      //   economical: "normal",
      //   exploring: "low",
      //   mental: "low",
      //   martial: "low",
      //   religious: "low",
      //   social: "low",
      // },
      fortune: 0,
      health: 0,
      label: "Seductor",
      loyalty_from_subjects: 1,
      loyalty_to_overlod: 0,
      diplomatical: 1,
      economical: -1,
      martial: 0,
      mental: 0,
      moral: -2,
      political: 0,
      social: 2,
      spiritual: -1,
    },
    freq: "normal",
  },
];

export const LeaderGender: IDynamicDataTableObject[] = [
  {
    dataToSend: "Female",
    freq: "normal",
  },
  {
    dataToSend: "Male",
    freq: "normal",
  },
];
