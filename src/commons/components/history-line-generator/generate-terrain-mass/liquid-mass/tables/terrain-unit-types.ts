export const LIQUID_MASS_TERRAIN_UNIT_TYPES_BY_LATITUDE_BELT: any = {
  boreal: {
    biodiversity_mod: 2,
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
        dataToSend: 1,
        freq: "normal",
      },
      {
        dataToSend: 2,
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
    biodiversity_mod: 3,
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
        freq: "rare",
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
        freq: "rare",
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
    ],
    label: "equatorial",
    population_attraction: [
      {
        dataToSend: -2,
        freq: "normal",
      },
    ],
  },
  temperate: {
    biodiversity_mod: 1,
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
    ],
    label: "temperate",
    population_attraction: [
      {
        dataToSend: 0,
        freq: "normal",
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
        dataToSend: 0,
        freq: "low",
      },
      {
        dataToSend: 1,
        freq: "rare",
      },
    ],
    label: "tropical",
    population_attraction: [
      {
        dataToSend: 0,
        freq: "normal",
      },
    ],
  },
};
export const LIQUID_MASS_TERRAIN_UNIT_BATHYGRAPHY: any = {
  epipelagic: {
    adjective: "Epipelagic",
    biodiversity_mod: 4,
    label: "Epipelagic",
    hidrography_mod: 0,
    population_attraction: {
      max: 0,
      min: 0,
    },
    economical_resources: {
      max: 1,
      min: 0,
    },
    edible_resources: {
      max: 4,
      min: 2,
    },
    industrial_resources: {
      max: 1,
      min: 0,
    },
    max_deep: {
      max: 200,
      min: 1,
    },
  },
  mesopelagic: {
    adjective: "Mesopelagic",
    biodiversity_mod: 1,
    label: "Mesopelagic",
    hidrography_mod: 2,
    population_attraction: {
      max: -2,
      min: -1,
    },
    economical_resources: {
      max: 0,
      min: 0,
    },
    edible_resources: {
      max: 3,
      min: 2,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
    max_deep: {
      max: 1000,
      min: 201,
    },
  },
  bathypelagic: {
    adjective: "Bathypelagic",
    biodiversity_mod: 1,
    label: "Bathypelagic",
    hidrography_mod: 1,
    population_attraction: {
      max: -2,
      min: -1,
    },
    economical_resources: {
      max: 0,
      min: 0,
    },
    edible_resources: {
      max: 2,
      min: 0,
    },
    industrial_resources: {
      max: 0,
      min: 0,
    },
    max_deep: {
      max: 4000,
      min: 1001,
    },
  },
  abyssopelagic: {
    adjective: "Abyssopelagic",
    biodiversity_mod: -1,
    label: "Abyssopelagic",
    hidrography_mod: -1,
    population_attraction: {
      max: -2,
      min: -1,
    },
    economical_resources: {
      max: 0,
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
    max_deep: {
      max: 6000,
      min: 4001,
    },
  },
  hadal: {
    adjective: "Hadal",
    biodiversity_mod: -2,
    hidrography_mod: -2,
    label: "Hadal",
    population_attraction: {
      max: -4,
      min: -3,
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
    max_deep: {
      max: 12000,
      min: 6001,
    },
  },
};

export const LIQUID_MASS_TERRAIN_UNIT_CURRENTS: any = {
  no_currents: {
    adjective: "Calm",
    biodiversity_mod: -2,
    label: "Calm waters",
    population_attraction: {
      max: 0,
      min: 0,
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
  small_currents: {
    adjective: "Small Currents",
    biodiversity_mod: -1,
    label: "Small Currents",
    population_attraction: {
      max: 0,
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
  medium_currents: {
    adjective: "Medium Currents",
    biodiversity_mod: 2,
    label: "Medium Currents",
    population_attraction: {
      max: 0,
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
      max: 1,
      min: 0,
    },
  },
  large_currents: {
    adjective: "Large Currents",
    biodiversity_mod: 1,
    label: "Large Currents",
    population_attraction: {
      max: 0,
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
  huge_currents: {
    adjective: "Huge Currents",
    biodiversity_mod: 2,
    label: "Huge Currents",
    population_attraction: {
      max: 0,
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
};

export const LIQUID_MASS_TERRAIN_UNIT_BIODIVERSITY: any = {
  low: {
    adjective: {
      boreal: "Ice Sheet",
      temperate: "Tundra",
      tropical: "Desert",
      equatorial: "Desert",
    },
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
    adjective: {
      boreal: "Taiga",
      temperate: "Forest",
      tropical: "Plain",
      equatorial: "Plain",
    },
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
    adjective: {
      boreal: "Taiga",
      temperate: "Forest",
      tropical: "Savannah",
      equatorial: "Jungle",
    },
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

export const LIQUID_MASS_TERRAIN_UNIT_ADJECTIVES: any = {
  epipelagic: {
    boreal: {
      low: "Frozen Sea",
      medium: "Frozen Sea",
      high: "Frozen Sea",
    },
    temperate: {
      low: "Shallow Sea",
      medium: "Sea",
      high: "Thriving Sea",
    },
    tropical: {
      low: "Shallow Sea",
      medium: "Warm Sea",
      high: "Thriving Sea",
    },
    equatorial: {
      low: "Shallow Sea",
      medium: "Warm Sea",
      high: "Thriving Sea",
    },
  },
  mesopelagic: {
    boreal: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    temperate: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    tropical: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    equatorial: {
      low: "Sea",
      medium: "Sea",
      high: "Thriving Sea",
    },
  },
  bathypelagic: {
    boreal: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    temperate: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    tropical: {
      low: "Sea",
      medium: "Sea",
      high: "Sea",
    },
    equatorial: {
      low: "Sea",
      medium: "Sea",
      high: "Thriving Sea",
    },
  },
  abyssopelagic: {
    boreal: {
      low: "Deep Sea",
      medium: "Deep Sea",
      high: "Thriving Deep Sea",
    },
    temperate: {
      low: "Deep Sea",
      medium: "Deep Sea",
      high: "Thriving Deep Sea",
    },
    tropical: {
      low: "Deep Sea",
      medium: "Deep Sea",
      high: "Thriving Deep Sea",
    },
    equatorial: {
      low: "Deep Sea",
      medium: "Deep Sea",
      high: "Thriving Deep Sea",
    },
  },
  hadal: {
    boreal: {
      low: "Sea Trench",
      medium: "Sea Trench",
      high: "Thriving Sea Trench",
    },
    temperate: {
      low: "Sea Trench",
      medium: "Sea Trench",
      high: "Thriving Sea Trench",
    },
    tropical: {
      low: "Sea Trench",
      medium: "Sea Trench",
      high: "Thriving Sea Trench",
    },
    equatorial: {
      low: "Sea Trench",
      medium: "Sea Trench",
      high: "Thriving Sea Trench",
    },
  },
};
