import {
  obtainDataFromTable,
  generateTableDataByFrequencies,
} from "../../../utils/generate-tables-data";
import {
  firstCharacterToUppercase,
  generateRandomMaxMinValue,
  generateRandomNumber,
} from "../../../utils/utils";
import { IMaxMinRange } from "../../utils/utils";
import {
  BIODIVERSITY_SPECIALS_STEMS,
  BIODIVERSITY_SPECIALS_STEM_LIST,
} from "./biodiversity-specials";
import {
  HIDROGRAPHY_SPECIALS_STEMS,
  HIDROGRAPHY_SPECIALS_STEM_LIST,
} from "./hidrography-specials";
import {
  OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEM_LIST,
  OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEMS,
} from "./orography-and-seadepth-specials";

export interface ISpecialsStemsItem {
  economical_resources_mod: IMaxMinRange;
  edible_resources_mod: IMaxMinRange;
  industrial_resources_mod: IMaxMinRange;
  possible_adjectives: string[];
}

export interface IHexSpecial {
  label: string;
  economical_mod: number;
  edible_mod: number;
  industrial_mod: number;
  population_attraction_mod: number;
}

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

//*- SCHEMATICS -*//

export const hexSpecialSchematic: IHexSpecial = {
  label: "",
  economical_mod: 0,
  edible_mod: 0,
  industrial_mod: 0,
  population_attraction_mod: 0,
};

const generateSpecialLabel = (adjective: string, stem: string): string =>
  `${firstCharacterToUppercase(adjective)} ${firstCharacterToUppercase(stem)}`;

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
    stemlist: OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEM_LIST,
    stems: OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEMS,
  },
};

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

export const generateHexSpecials = (): IHexSpecial[] => {
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
