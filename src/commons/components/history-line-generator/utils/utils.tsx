import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../../utils/generate-tables-data";
import { generateRandomNumber } from "../../utils/utils";

/*- UNLIGHT WORLD -*/

export const UnlightWorldDiscoveredRegionSize = [
  {
    dataToSend: {
      description: "Small",
      terrainUnits: generateRandomNumber(1, 3),
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      description: "Medium",
      terrainUnits: generateRandomNumber(4, 6),
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      description: "Large",
      terrainUnits: generateRandomNumber(7, 12),
    },
    freq: "minor",
  },
  {
    dataToSend: {
      description: "Very Large",
      terrainUnits: generateRandomNumber(13, 20),
    },
    freq: "rare",
  },
  {
    dataToSend: {
      description: "Gigantic",
      terrainUnits: generateRandomNumber(21, 32),
    },
    freq: "veryRare",
  },
];

export const generateUnlightWorldWaterSourceSubtype = [
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 2,
      },
      description: "River",
      habitabilityGenerated: {
        min: 1,
        max: 3,
      },
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 3,
      },
      description: "Pond",
      habitabilityGenerated: {
        min: 2,
        max: 4,
      },
    },
    freq: "low",
  },
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 3,
      },
      description: "Lake",
      habitabilityGenerated: {
        min: 6,
        max: 9,
      },
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 3,
      },
      description: "Deep Lake",
      habitabilityGenerated: {
        min: 6,
        max: 12,
      },
    },
    freq: "rare",
  },
];

export const generateUnlightWorldFoodSourceSubtype = [
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 2,
      },
      description: "Fungi",
      habitabilityGenerated: {
        min: 1,
        max: 3,
      },
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 3,
      },
      description: "Tameable Beasts",
      habitabilityGenerated: {
        min: 2,
        max: 4,
      },
    },
    freq: "low",
  },
  {
    dataToSend: {
      appealing: {
        min: 1,
        max: 2,
      },
      description: "Huntable Beasts",
      habitabilityGenerated: {
        min: 2,
        max: 6,
      },
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      appealing: {
        min: 2,
        max: 4,
      },
      description: "Exotic",
      habitabilityGenerated: {
        min: 1,
        max: 3,
      },
    },
    freq: "veryRare",
  },
];

export const generateUnlightWorldMineralSourceSubtype = [
  {
    dataToSend: {
      appealing: {
        min: 2,
        max: 3,
      },
      description: "Workable Metals",
      habitabilityGenerated: 0,
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      appealing: {
        min: 3,
        max: 6,
      },
      description: "Precious Metals",
      habitabilityGenerated: 0,
    },
    freq: "minor",
  },
  {
    dataToSend: {
      appealing: {
        min: 6,
        max: 9,
      },
      description: "Gems",
      habitabilityGenerated: 0,
    },
    freq: "rare",
  },
  {
    dataToSend: {
      appealing: {
        min: 9,
        max: 15,
      },
      description: "Exotic",
      habitabilityGenerated: 0,
    },
    freq: "veryRare",
  },
];

export const UnlightWorldDiscoveredRegionTerrainUnitDedication = [
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
      description: "Empty",
      subtype: [
        {
          dataToSend: {
            appealing: 0,
            description: "Empty",
            habitabilityGenerated: 0,
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
) => [
  {
    dataToSend: {
      description: "Many Subregions",
      generatingSubregionSize: {
        min: 1,
        max: 1,
      },
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
      generatingSubregionSize: {
        min: 1,
        max: Math.ceil(terrainUnits / (terrainUnits / 3)),
      },
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
      generatingSubregionSize: {
        min: 1,
        max: Math.ceil(terrainUnits / 2),
      },
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
      generatingSubregionSize: {
        min: Math.ceil(terrainUnits / 2),
        max: Math.ceil(terrainUnits / 2),
      },
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
      generatingSubregionSize: {
        min: terrainUnits,
        max: terrainUnits,
      },
      scattering: "Joined",
    },
    freq: "veryRare",
  },
];
