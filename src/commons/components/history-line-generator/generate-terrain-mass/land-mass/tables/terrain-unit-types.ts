export const LAND_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT: any = {
  boreal: {
    biodiversity_mod: -2,
    economical_resources: [
      {
        dataToSend: 0,
        freq: "low",
      },
      {
        dataToSend: 1,
        freq: "low",
      },
    ],
    edible_resources: [
      {
        dataToSend: 0,
        freq: "normal",
      },
      {
        dataToSend: 1,
        freq: "veryRare",
      },
    ],
    industrial_resources: [
      {
        dataToSend: 0,
        freq: "normal",
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
    ],
    label: "boreal",
    population_attraction: [
      {
        dataToSend: -3,
        freq: "low",
      },
      {
        dataToSend: -2,
        freq: "low",
      },
    ],
  },
  equatorial: {
    biodiversity_mod: 2,
    economical_resources: [
      {
        dataToSend: 0,
        freq: "rare",
      },
      {
        dataToSend: 1,
        freq: "low",
      },
      {
        dataToSend: 2,
        freq: "normal",
      },
      {
        dataToSend: 3,
        freq: "veryRare",
      },
    ],
    edible_resources: [
      {
        dataToSend: 2,
        freq: "low",
      },
      {
        dataToSend: 3,
        freq: "low",
      },
      {
        dataToSend: 4,
        freq: "veryRare",
      },
    ],
    industrial_resources: [
      {
        dataToSend: 0,
        freq: "low",
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
    ],
    label: "equatorial",
    population_attraction: [
      {
        dataToSend: -1,
        freq: "normal",
      },
      {
        dataToSend: -2,
        freq: "normal",
      },
    ],
  },
  temperate: {
    biodiversity_mod: 0,
    economical_resources: [
      {
        dataToSend: 0,
        freq: "low",
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
    ],
    edible_resources: [
      {
        dataToSend: 1,
        freq: "low",
      },
      {
        dataToSend: 2,
        freq: "low",
      },
    ],
    industrial_resources: [
      {
        dataToSend: 0,
        freq: "low",
      },
      {
        dataToSend: 1,
        freq: "veryLow",
      },
      {
        dataToSend: 2,
        freq: "veryRare",
      },
    ],
    label: "temperate",
    population_attraction: [
      {
        dataToSend: 3,
        freq: "normal",
      },
      {
        dataToSend: 2,
        freq: "low",
      },
    ],
  },
  tropical: {
    biodiversity_mod: 1,
    economical_resources: [
      {
        dataToSend: 1,
        freq: "low",
      },
      {
        dataToSend: 2,
        freq: "veryLow",
      },
      {
        dataToSend: 3,
        freq: "rare",
      },
      {
        dataToSend: 4,
        freq: "veryRare",
      },
    ],
    edible_resources: [
      {
        dataToSend: 2,
        freq: "low",
      },
      {
        dataToSend: 3,
        freq: "veryLow",
      },
    ],
    industrial_resources: [
      {
        dataToSend: 1,
        freq: "low",
      },
      {
        dataToSend: 2,
        freq: "rare",
      },
    ],
    label: "tropical",
    population_attraction: [
      {
        dataToSend: 0,
        freq: "normal",
      },
      {
        dataToSend: 1,
        freq: "low",
      },
    ],
  },
};

export const LAND_MASS_TERRAIN_UNIT_OROGRAPHY: any = {
  lowlands: {
    adjective: "Flat",
    biodiversity_mod: 1,
    label: "Lowlands",
    hidrography_mod: 2,
    population_attraction: {
      max: 3,
      min: 2,
    },
    economical_resources: {
      max: 0,
      min: 1,
    },
    edible_resources: {
      max: 3,
      min: 1,
    },
    industrial_resources: {
      max: 1,
      min: 0,
    },
  },
  hilly: {
    adjective: "Hilly",
    biodiversity_mod: 0,
    label: "Hilly",
    hidrography_mod: 1,
    population_attraction: {
      max: 1,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 1,
      min: 0,
    },
    industrial_resources: {
      max: 2,
      min: 1,
    },
  },
  highlands: {
    adjective: "High",
    biodiversity_mod: -2,
    label: "Highlands",
    hidrography_mod: -1,
    population_attraction: {
      max: 1,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 1,
      min: 0,
    },
    industrial_resources: {
      max: 2,
      min: 1,
    },
  },
  mountainous: {
    adjective: "Mountainous",
    biodiversity_mod: -6,
    hidrography_mod: -2,
    label: "Mountainous",
    population_attraction: {
      max: -2,
      min: -1,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 0,
      min: 0,
    },
    industrial_resources: {
      max: 3,
      min: 1,
    },
  },
};

export const LAND_MASS_TERRAIN_UNIT_HIDROGRAPHY: any = {
  badlands: {
    adjective: "Dry",
    biodiversity_mod: -2,
    label: "Scarce or intermitent water courses",
    population_attraction: {
      max: -2,
      min: -1,
    },
    economical_resources: {
      max: 0,
      min: 0,
    },
    edible_resources: {
      max: 0,
      min: 0,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
  small_rivers: {
    adjective: "Small Rivers",
    biodiversity_mod: -1,
    label: "Small Rivers",
    population_attraction: {
      max: -1,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 1,
      min: 0,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
  great_rivers: {
    adjective: "Great Rivers",
    biodiversity_mod: 2,
    label: "Great Rivers",
    population_attraction: {
      max: 2,
      min: 1,
    },
    economical_resources: {
      max: 2,
      min: 0,
    },
    edible_resources: {
      max: 2,
      min: 1,
    },
    industrial_resources: {
      max: 1,
      min: 0,
    },
  },
  rivers_and_lakes: {
    adjective: "Rivers and Lakes",
    biodiversity_mod: 1,
    label: "Rivers and Lakes",
    population_attraction: {
      max: 1,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 2,
      min: 1,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
  inner_sea: {
    adjective: "Inner Sea",
    biodiversity_mod: 2,
    label: "Inner Sea",
    population_attraction: {
      max: 2,
      min: 1,
    },
    economical_resources: {
      max: 2,
      min: 1,
    },
    edible_resources: {
      max: 2,
      min: 1,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
};

export const LAND_MASS_TERRAIN_UNIT_BIODIVERSITY: any = {
  low: {
    label: "Low Biodiversity",
    population_attraction: {
      max: -2,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 0,
      min: 0,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
  medium: {
    label: "Medium Biodiversisty",
    population_attraction: {
      max: 1,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 1,
      min: 0,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
  },
  high: {
    label: "High Biodiversity",
    population_attraction: {
      max: 2,
      min: 1,
    },
    economical_resources: {
      max: 2,
      min: 1,
    },
    edible_resources: {
      max: 2,
      min: 1,
    },
    industrial_resources: {
      max: 1,
      min: 0,
    },
  },
};

export const LAND_MASS_TERRAIN_UNIT_ADJECTIVES: any = {
  lowlands: {
    boreal: {
      low: "Ice Sheet",
      medium: "Tundra",
      high: "Taiga",
    },
    temperate: {
      low: "Steppe",
      medium: "Plains",
      high: "Forest",
    },
    tropical: {
      low: "Desert",
      medium: "Savannah",
      high: "Jungle",
    },
    equatorial: {
      low: "Desert",
      medium: "Jungle",
      high: "Jungle",
    },
  },
  hilly: {
    boreal: {
      low: "Ice Sheet",
      medium: "Tundra",
      high: "Taiga",
    },
    temperate: {
      low: "Steppe",
      medium: "Hills",
      high: "Forest",
    },
    tropical: {
      low: "Desert",
      medium: "Savannah",
      high: "Jungle",
    },
    equatorial: {
      low: "Desert",
      medium: "Jungle",
      high: "Jungle",
    },
  },
  highlands: {
    boreal: {
      low: "Ice Sheet",
      medium: "Moor",
      high: null,
    },
    temperate: {
      low: "Moor",
      medium: "Highlands",
      high: null,
    },
    tropical: {
      low: "Desert",
      medium: "Savannah",
      high: "Jungle",
    },
    equatorial: {
      low: "Desert",
      medium: "Jungle",
      high: "Jungle",
    },
  },
  mountainous: {
    boreal: {
      low: "Snow Range",
      medium: null,
      high: null,
    },
    temperate: {
      low: "Range",
      medium: null,
      high: null,
    },
    tropical: {
      low: "Range",
      medium: null,
      high: null,
    },
    equatorial: {
      low: "Range",
      medium: null,
      high: null,
    },
  },
};
