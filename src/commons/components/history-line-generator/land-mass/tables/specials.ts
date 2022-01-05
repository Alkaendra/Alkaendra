import {
  IBiodiversitySpecialsStems,
  IHidrographySpecialsStems,
  IOrographySpecialsStems,
} from "../interfaces";

export const BIODIVERSITY_SPECIALS_STEM_LIST: string[] = [
  "microbiota",
  "fauna",
  "flora",
  "fungi",
];

export const BIODIVERSITY_SPECIALS_STEMS: IBiodiversitySpecialsStems = {
  microbiota: {
    economical_resources_mod: {
      max: 10,
      min: -30,
    },
    edible_resources_mod: {
      max: 10,
      min: -15,
    },
    industrial_resources_mod: {
      max: 10,
      min: -30,
    },
    possible_adjectives: [
      "corrosive",
      "exotic",
      "hallucinogic",
      "hostile",
      "pharmaceutical",
    ],
  },
  fungi: {
    economical_resources_mod: {
      max: 15,
      min: -20,
    },
    edible_resources_mod: {
      max: 20,
      min: -15,
    },
    industrial_resources_mod: {
      max: 15,
      min: -20,
    },
    possible_adjectives: [
      "corrosive",
      "exotic",
      "hallucinogic",
      "hostile",
      "pharmaceutical",
      "titanical",
    ],
  },
  fauna: {
    economical_resources_mod: {
      max: 20,
      min: -10,
    },
    edible_resources_mod: {
      max: 20,
      min: -15,
    },
    industrial_resources_mod: {
      max: 15,
      min: -10,
    },
    possible_adjectives: ["exotic", "hostile", "titanical"],
  },
  flora: {
    economical_resources_mod: {
      max: 25,
      min: -10,
    },
    edible_resources_mod: {
      max: 30,
      min: -10,
    },
    industrial_resources_mod: {
      max: 20,
      min: -10,
    },
    possible_adjectives: [
      "exotic",
      "hallucinogic",
      "hostile",
      "pharmaceutical",
      "titanical",
    ],
  },
};

export const HIDROGRAPHY_SPECIALS_STEM_LIST: string[] = ["terrain", "water"];

export const HIDROGRAPHY_SPECIALS_STEMS: IHidrographySpecialsStems = {
  water: {
    economical_resources_mod: {
      max: 20,
      min: 0,
    },
    edible_resources_mod: {
      max: 30,
      min: 10,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    possible_adjectives: [
      "anoxyc",
      "hypersaline",
      "mineralized",
      "precious_metals_carrying",
      "stationary",
    ],
  },
  terrain: {
    economical_resources_mod: {
      max: 10,
      min: 0,
    },
    edible_resources_mod: {
      max: 10,
      min: 0,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    possible_adjectives: ["cavernous", "fertile", "unstable"],
  },
};

export const OROGROPHY_SPECIALS_STEM_LIST: string[] = [
  "metals",
  "minerals",
  "gems",
];

export const OROGRAPHY_SPECIALS_STEMS: IOrographySpecialsStems = {
  metals: {
    economical_resources_mod: {
      max: 25,
      min: 10,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 40,
      min: 20,
    },
    possible_adjectives: [
      "corrosive",
      "exotic",
      "poor",
      "radioactive",
      "precious",
      "rich",
      "ultrapoor",
      "ultrarich",
    ],
  },
  minerals: {
    economical_resources_mod: {
      max: 20,
      min: 10,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 40,
      min: 20,
    },
    possible_adjectives: [
      "corrosive",
      "exotic",
      "poor",
      "radioactive",
      "rich",
      "ultrapoor",
      "ultrarich",
    ],
  },
  gems: {
    economical_resources_mod: {
      max: 40,
      min: 20,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 20,
      min: 10,
    },
    possible_adjectives: [
      "corrosive",
      "exotic",
      "precious",
      "radioactive",
      "rich",
      "ultrarich",
    ],
  },
};

export const SPECIALS_STEM_ADJECTIVES: any = {
  anoxyc: {
    economical_resources_mod: {
      max: 0,
      min: 0,
    },
    edible_resources_mod: {
      max: -30,
      min: -10,
    },
    industrial_resources_mod: {
      max: 20,
      min: 0,
    },
    population_attraction_mod: {
      max: -30,
      min: -10,
    },
  },
  cavernous: {
    economical_resources_mod: {
      max: 10,
      min: 0,
    },
    edible_resources_mod: {
      max: 10,
      min: 0,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    population_attraction_mod: {
      max: 20,
      min: 0,
    },
  },
  corrosive: {
    economical_resources_mod: {
      max: -40,
      min: -10,
    },
    edible_resources_mod: {
      max: -20,
      min: -10,
    },
    industrial_resources_mod: {
      max: -40,
      min: -10,
    },
    population_attraction_mod: {
      max: -20,
      min: -10,
    },
  },
  exotic: {
    economical_resources_mod: {
      max: 30,
      min: 20,
    },
    edible_resources_mod: {
      max: 10,
      min: 0,
    },
    industrial_resources_mod: {
      max: 30,
      min: 10,
    },
    population_attraction_mod: {
      max: 20,
      min: 10,
    },
  },
  fertile: {
    economical_resources_mod: {
      max: 10,
      min: 0,
    },
    edible_resources_mod: {
      max: 40,
      min: 20,
    },
    industrial_resources_mod: {
      max: 0,
      min: 0,
    },
    population_attraction_mod: {
      max: 40,
      min: 20,
    },
  },
  hallucinogic: {
    economical_resources_mod: {
      max: 40,
      min: 10,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 0,
      min: 0,
    },
    population_attraction_mod: {
      max: 20,
      min: 0,
    },
  },
  hostile: {
    economical_resources_mod: {
      max: -20,
      min: -10,
    },
    edible_resources_mod: {
      max: -20,
      min: -10,
    },
    industrial_resources_mod: {
      max: -20,
      min: -10,
    },
    population_attraction_mod: {
      max: -40,
      min: -10,
    },
  },
  hypersaline: {
    economical_resources_mod: {
      max: 20,
      min: 0,
    },
    edible_resources_mod: {
      max: -20,
      min: -10,
    },
    industrial_resources_mod: {
      max: 20,
      min: 10,
    },
    population_attraction_mod: {
      max: 10,
      min: 0,
    },
  },
  mineralized: {
    economical_resources_mod: {
      max: 20,
      min: 0,
    },
    edible_resources_mod: {
      max: 10,
      min: -10,
    },
    industrial_resources_mod: {
      max: 20,
      min: 10,
    },
    population_attraction_mod: {
      max: 10,
      min: -10,
    },
  },
  pharmaceutical: {
    economical_resources_mod: {
      max: 30,
      min: 10,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 20,
      min: 0,
    },
    population_attraction_mod: {
      max: 10,
      min: 0,
    },
  },
  poor: {
    economical_resources_mod: {
      max: -30,
      min: -20,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: -30,
      min: -10,
    },
    population_attraction_mod: {
      max: 0,
      min: -20,
    },
  },
  precious: {
    economical_resources_mod: {
      max: 60,
      min: 40,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 30,
      min: 20,
    },
    population_attraction_mod: {
      max: 10,
      min: 0,
    },
  },
  precious_metals_carrying: {
    economical_resources_mod: {
      max: 30,
      min: 20,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    population_attraction_mod: {
      max: 20,
      min: 10,
    },
  },
  radioactive: {
    economical_resources_mod: {
      max: 10,
      min: 20,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 40,
      min: 30,
    },
    population_attraction_mod: {
      max: -40,
      min: -20,
    },
  },
  rich: {
    economical_resources_mod: {
      max: 30,
      min: 20,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 40,
      min: 30,
    },
    population_attraction_mod: {
      max: 10,
      min: 0,
    },
  },
  stationary: {
    economical_resources_mod: {
      max: 10,
      min: 0,
    },
    edible_resources_mod: {
      max: 10,
      min: -10,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    population_attraction_mod: {
      max: 10,
      min: -10,
    },
  },
  titanical: {
    economical_resources_mod: {
      max: 20,
      min: 10,
    },
    edible_resources_mod: {
      max: 30,
      min: 10,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    population_attraction_mod: {
      max: 20,
      min: 0,
    },
  },
  ultrapoor: {
    economical_resources_mod: {
      max: -50,
      min: -30,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: -50,
      min: -30,
    },
    population_attraction_mod: {
      max: -30,
      min: -10,
    },
  },
  ultrarich: {
    economical_resources_mod: {
      max: 50,
      min: 40,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 60,
      min: 40,
    },
    population_attraction_mod: {
      max: 10,
      min: 0,
    },
  },
  unstable: {
    economical_resources_mod: {
      max: 10,
      min: -10,
    },
    edible_resources_mod: {
      max: 0,
      min: 0,
    },
    industrial_resources_mod: {
      max: 10,
      min: 0,
    },
    population_attraction_mod: {
      max: 10,
      min: -20,
    },
  },
};
