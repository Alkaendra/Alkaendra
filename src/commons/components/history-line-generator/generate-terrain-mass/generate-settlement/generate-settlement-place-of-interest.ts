import {
  obtainDataFromTable,
  generateTableDataByFrequencies,
} from "../../../utils/generate-tables-data";
import { generateRandomMaxMinValue } from "../../../utils/utils";

//*- INTERFACES -*//
export interface ISettlementPlaceOfInterest {
  criminality_mod: number;
  cultural_development_mod: number;
  discontent_mod: number;
  economical_development_mod: number;
  industrial_development_mod: number;
  name: string;
  law_enforcement_mod: number;
  technological_development_mod: number;
  recreation_mod: number;
}

//*- CONSTANTS -*//
export const placeOfInterestRelevance = [
  {
    dataToSend: "Local",
    freq: "relevant",
  },
  {
    dataToSend: "Planetary",
    freq: "low",
  },
  {
    dataToSend: "Sectorial",
    freq: "veryLow",
  },
  {
    dataToSend: "National",
    freq: "minor",
  },
  {
    dataToSend: "International",
    freq: "veryRare",
  },
];

export const numberOfPlacesOfInterest = [
  {
    dataToSend: 0,
    freq: "normal",
  },
  {
    dataToSend: 1,
    freq: "rare",
  },
  {
    dataToSend: 2,
    freq: "veryRare",
  },
];

// Sentientropic origin place of interest
export const obtainNonResidentialPlaceOfInterestType = [
  {
    dataToSend: "HQ",
    freq: "low",
  },
  {
    dataToSend: "Training Center / Institute",
    freq: "low",
  },
  {
    dataToSend: "Famed",
    freq: "veryRare",
  },
];

// Natural origin place of interest
export const obtainPhenomenonTypeByFreq = [
  {
    dataToSend: {
      type: "Psychological/Nooterical",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Olfative",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Auditive",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Optical",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Tactile",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Electrical",
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      type: "Pressure",
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      type: "Magnetical",
    },
    freq: "veryLow",
  },
];

export const obtainPhenomenonOriginByFreq = [
  {
    dataToSend: {
      type: "Mineral",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Animal",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Vegetal",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Fungal",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Microbian",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Nooterical",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Sentient",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Multidimensional",
    },
    freq: "minor",
  },
  {
    dataToSend: {
      type: "Aberrant",
    },
    freq: "rare",
  },
  {
    dataToSend: {
      type: "Valiangric",
    },
    freq: "rare",
  },
  {
    dataToSend: {
      type: "Psionic",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      type: "Drumataric",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      type: "Paraversal",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      type: "Dendroversal",
    },
    freq: "veryRare",
  },
];

export const obtainPhenomenonPeligrosityByFreq = [
  {
    dataToSend: {
      type: "Null",
    },
    freq: "low",
  },
  {
    dataToSend: {
      type: "Low",
    },
    freq: "high",
  },
  {
    dataToSend: {
      type: "High",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      type: "Extreme",
    },
    freq: "minor",
  },
];

export const obtainPhenomenonUnitTerrainLocationByFreq = [
  {
    dataToSend: {
      finalLocation: {
        solid: "Surface",
        liquid: "Epipelagic",
      },
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      finalLocation: {
        solid: "Underground",
        liquid: "Mesopelagic",
      },
    },
    freq: "low",
  },
  {
    dataToSend: {
      finalLocation: {
        solid: "Deep Underground",
        liquid: "Bathypelagic",
      },
    },
    freq: "minor",
  },
  {
    dataToSend: {
      finalLocation: {
        solid: "Crust Middle",
        liquid: "Abyssopelagic",
      },
    },
    freq: "rare",
  },
  {
    dataToSend: {
      finalLocation: {
        solid: "Crust Bottom",
        liquid: "Hadal",
      },
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      finalLocation: {
        solid: "Atmospheric",
        liquid: "Atmospheric",
      },
    },
    freq: "rare",
  },
];

export const obtainPhenomenonSystemLocationByFreq = [
  {
    dataToSend: {
      finalLocation: "Inner Planets",
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      finalLocation: "Goldilocks Zone",
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      finalLocation: "Outer Planets",
    },
    freq: "high",
  },
  {
    dataToSend: {
      finalLocation: "Oort Cloud",
    },
    freq: "minor",
  },
];

export const obtainPhenomenonSuburbDistrictLocationByFreq = [
  {
    dataToSend: {
      finalLocation: "Air",
    },
    freq: "rare",
  },
  {
    dataToSend: {
      finalLocation: "Ground",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      finalLocation: "Underground",
    },
    freq: "minor",
  },
  {
    dataToSend: {
      finalLocation: "Extradimensional",
    },
    freq: "veryRare",
  },
];

/*- Sentientogenic places of interest -*/

// Cultural origin place of interest
export const getCulturalPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "art",
      discontent_mod: {
        max: 10,
        min: 0,
      },
      cultural_development_mod: {
        max: 50,
        min: 20,
      },
      economical_development_mod: {
        max: 20,
        min: 10,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 0,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Dramathurgy",
          freq: "low",
        },
        {
          dataToSend: "Exotic",
          freq: "veryRare",
        },
        {
          dataToSend: "Fashion",
          freq: "low",
        },
        {
          dataToSend: "Literature",
          freq: "low",
        },
        {
          dataToSend: "Music",
          freq: "low",
        },
        {
          dataToSend: "Painting",
          freq: "low",
        },
        {
          dataToSend: "Sculpting",
          freq: "low",
        },
        {
          dataToSend: "Xeno Art",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 30,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Famed",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "knowledge",
      discontent_mod: {
        max: 10,
        min: 0,
      },
      cultural_development_mod: {
        max: 50,
        min: 20,
      },
      economical_development_mod: {
        max: 10,
        min: 0,
      },
      industrial_development_mod: {
        max: 10,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Ethnic Lore",
          freq: "normal",
        },
        {
          dataToSend: "Historical Lore",
          freq: "normal",
        },
        {
          dataToSend: "Natural Sciences",
          freq: "normal",
        },
        {
          dataToSend: "Nooteric Sciences",
          freq: "veryLow",
        },
        {
          dataToSend: "Paraversal Sciences",
          freq: "veryRare",
        },
        {
          dataToSend: "Technical Sciences",
          freq: "low",
        },
        {
          dataToSend: "Valiangric Sciences",
          freq: "veryRare",
        },
        {
          dataToSend: "Xeno Sciences",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 30,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Museum of",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Library of",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "Cult",
      discontent_mod: {
        max: 10,
        min: 0,
      },
      cultural_development_mod: {
        max: 40,
        min: 20,
      },
      economical_development_mod: {
        max: 20,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 10,
        min: 0,
      },
      technological_development_mod: {
        max: 0,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Apocaliptycal Cult",
          freq: "normal",
        },
        {
          dataToSend: "Creational Cult",
          freq: "low",
        },
        {
          dataToSend: "Mechanical Cult",
          freq: "veryRare",
        },
        {
          dataToSend: "Nature Cult",
          freq: "low",
        },
        {
          dataToSend: "Nooteric Cult",
          freq: "veryRare",
        },
        {
          dataToSend: "Spiritual Cult",
          freq: "normal",
        },
        {
          dataToSend: "Syncretic Cult",
          freq: "normal",
        },
        {
          dataToSend: "Technical Sciences",
          freq: "low",
        },
        {
          dataToSend: "Transformation Cult",
          freq: "veryLow",
        },
        {
          dataToSend: "Xeno Cult",
          freq: "veryRare",
        },
        {
          dataToSend: "Zealot Cult",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 30,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Great Temple",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Temple",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Seminar Center",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "rare",
  },
];

// Economical origin place of interest
export const getEconomicalPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "energy_production",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 50,
        min: 10,
      },
      industrial_development_mod: {
        max: 10,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Atomic Energy",
          freq: "rare",
        },
        {
          dataToSend: "Biological Energy",
          freq: "low",
        },
        {
          dataToSend: "Chemical Energy",
          freq: "low",
        },
        {
          dataToSend: "Exotic Energy",
          freq: "veryRare",
        },
        {
          dataToSend: "Geothermal Energy",
          freq: "rare",
        },
        {
          dataToSend: "Quantic Energy",
          freq: "rare",
        },
        {
          dataToSend: "Solar Energy",
          freq: "low",
        },
        {
          dataToSend: "Wind Energy",
          freq: "low",
        },
      ],
      recreation_mod: {
        max: 30,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Mayor Generator",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Energy Generator",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "trade",
      discontent_mod: {
        max: 10,
        min: 0,
      },
      cultural_development_mod: {
        max: 50,
        min: 20,
      },
      economical_development_mod: {
        max: 10,
        min: 0,
      },
      industrial_development_mod: {
        max: 10,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Consumer Goods",
          freq: "normal",
        },
        {
          dataToSend: "Exotic Goods",
          freq: "veryRare",
        },
        {
          dataToSend: "Gems",
          freq: "veryRare",
        },
        {
          dataToSend: "Industrial Machinery",
          freq: "rare",
        },
        {
          dataToSend: "Precious Metals",
          freq: "veryRare",
        },
        {
          dataToSend: "Robotic Goods",
          freq: "veryRare",
        },
        {
          dataToSend: "Spaceships",
          freq: "rare",
        },
        {
          dataToSend: "Vehicles",
          freq: "low",
        },
        {
          dataToSend: "Weaponry & Armoury",
          freq: "rare",
        },
        {
          dataToSend: "Xeno Goods",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 30,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Mayor Trade Center",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Trade Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Trading Academy",
            type: "training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 20,
        min: 0,
      },
      description: "black_market",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 30,
        min: 10,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Drugs",
          freq: "normal",
        },
        {
          dataToSend: "Exotic Mutagens",
          freq: "rare",
        },
        {
          dataToSend: "Mutagens",
          freq: "veryLow",
        },
        {
          dataToSend: "Nooteric Mutagens",
          freq: "veryRare",
        },
        {
          dataToSend: "Slaves",
          freq: "low",
        },
        {
          dataToSend: "Special Combat Equipment",
          freq: "rare",
        },
        {
          dataToSend: "Scavengend and Theft Goods",
          freq: "rare",
        },
      ],
      recreation_mod: {
        max: 10,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Mayor Black Market",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Black Market",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: null,
            type: "Training",
          },
          freq: "none",
        },
      ],
    },
    freq: "rare",
  },
];

// Martial origin place of interest
export const getMartialPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "law enforcement",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 0,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 50,
        min: 30,
      },
      technological_development_mod: {
        max: 0,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Law Enforcement",
          freq: "normal",
        },
        {
          dataToSend: "Private Security",
          freq: "veryLow",
        },
        {
          dataToSend: "Mercenay Company",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Training Center",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "military",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 0,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 40,
        min: 20,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Air Division",
          freq: "veryLow",
        },
        {
          dataToSend: "Armoured Division",
          freq: "low",
        },
        {
          dataToSend: "Infantry Division",
          freq: "normal",
        },
        {
          dataToSend: "Military Intelligence",
          freq: "rare",
        },
        {
          dataToSend: "Naval Division",
          freq: "low",
        },
        {
          dataToSend: "Special Corps",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: " Fortified HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Quarters",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Training Center",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "low",
  },
];

// Industrial origin place of interest
export const getIndustrialPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "raw_materials",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 20,
        min: 10,
      },
      industrial_development_mod: {
        max: 50,
        min: 10,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Exotic Metals Mining",
          freq: "veryRare",
        },
        {
          dataToSend: "Industrial Minerals Mining",
          freq: "low",
        },
        {
          dataToSend: "Rare Earths Mining",
          freq: "rare",
        },
        {
          dataToSend: "Fuel Refinery",
          freq: "low",
        },
        {
          dataToSend: "Exotic Fuel Refinery",
          freq: "veryRare",
        },
        {
          dataToSend: "Precious Metals & Gems Mining",
          freq: "rare",
        },
        {
          dataToSend: "Valiangric Nodes Mining",
          freq: "veryRare",
        },
        {
          dataToSend: "Biogenic Materials Mining",
          freq: "low",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Megacorp Facility",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "I+D",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "manufacturing",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 30,
        min: 10,
      },
      industrial_development_mod: {
        max: 50,
        min: 20,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 10,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Consumer Goods",
          freq: "normal",
        },
        {
          dataToSend: "Exotic Goods",
          freq: "veryRare",
        },
        {
          dataToSend: "Gems",
          freq: "veryRare",
        },
        {
          dataToSend: "Industrial Machinery",
          freq: "rare",
        },
        {
          dataToSend: "Precious Metals",
          freq: "veryRare",
        },
        {
          dataToSend: "Robotic Goods",
          freq: "veryRare",
        },
        {
          dataToSend: "Spaceships",
          freq: "rare",
        },
        {
          dataToSend: "Vehicles",
          freq: "low",
        },
        {
          dataToSend: "Weaponry & Armoury",
          freq: "rare",
        },
        {
          dataToSend: "Xeno Goods",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 10,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Megacorp Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "I+D",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
];

// Technological origin place of interest
export const getTechnologicalPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "natural_sciences",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 10,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 50,
        min: 20,
      },
      possible_subtypes: [
        {
          dataToSend: "Biotechnology",
          freq: "veryLow",
        },
        {
          dataToSend: "Genetics",
          freq: "rare",
        },
        {
          dataToSend: "Geotechnology",
          freq: "rare",
        },
        {
          dataToSend: "Physics Technology",
          freq: "low",
        },
        {
          dataToSend: "Advanced Physics Technology",
          freq: "rare",
        },
        {
          dataToSend: "Pharmaceutical & Health Technology",
          freq: "rare",
        },
        {
          dataToSend: "Spacefaring Technology",
          freq: "veryRare",
        },
        {
          dataToSend: "Terraforming Technology",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Research Facility",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "robotics_and_ia",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 20,
        min: 10,
      },
      industrial_development_mod: {
        max: 10,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 50,
        min: 20,
      },
      possible_subtypes: [
        {
          dataToSend: "Nanotechnology",
          freq: "normal",
        },
        {
          dataToSend: "Robotics",
          freq: "normal",
        },
        {
          dataToSend: "Advanced Robotics",
          freq: "veryRare",
        },
        {
          dataToSend: "IA Technology",
          freq: "low",
        },
        {
          dataToSend: "Advanced IA Technology",
          freq: "veryRare",
        },
        {
          dataToSend: "Datasphere Technology",
          freq: "low",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Megacorp Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "I+D",
            type: "Training",
          },
          freq: "low",
        },
      ],
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "exotic",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 30,
        min: 10,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 50,
        min: 30,
      },
      possible_subtypes: [
        {
          dataToSend: "Nooteric Sciences",
          freq: "veryLow",
        },
        {
          dataToSend: "Exotic Matter Sciences",
          freq: "low",
        },
        {
          dataToSend: "Dendroversal Sciences",
          freq: "rare",
        },
        {
          dataToSend: "Paraversal Sciences",
          freq: "veryRare",
        },
        {
          dataToSend: "Multidimensional Sciences",
          freq: "veryRare",
        },
        {
          dataToSend: "Xeno Sciences",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Megacorp Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "University",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "rare",
  },
];

// Recreational origin place of interest
export const getRecreationalPlaceOfInterestData = [
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      description: "legal",
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 10,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 0,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Restoration",
          freq: "normal",
        },
        {
          dataToSend: "Genetic Therapy",
          freq: "rare",
        },
        {
          dataToSend: "Aesthetics",
          freq: "low",
        },
        {
          dataToSend: "Travelling",
          freq: "low",
        },
        {
          dataToSend: "Sports",
          freq: "low",
        },
        {
          dataToSend: "Nightclub",
          freq: "rare",
        },
        {
          dataToSend: "Casino/Gambling Den",
          freq: "low",
        },
        {
          dataToSend: "Entertainment Media",
          freq: "low",
        },
        {
          dataToSend: "Law Firm",
          freq: "low",
        },
      ],
      recreation_mod: {
        max: 0,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 30,
        min: 10,
      },
      description: "illegal",
      discontent_mod: {
        max: 10,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 10,
        min: 0,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 0,
        min: 0,
      },
      possible_subtypes: [
        {
          dataToSend: "Drug Cartel",
          freq: "low",
        },
        {
          dataToSend: "Porn Cartel",
          freq: "veryLow",
        },
        {
          dataToSend: "Clandestine Combat Syndicate",
          freq: "veryRare",
        },
        {
          dataToSend: "Criminal Cartel",
          freq: "low",
        },
      ],
      recreation_mod: {
        max: 10,
        min: 0,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Den",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Arena",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality_mod: {
        max: 0,
        min: 0,
      },
      discontent_mod: {
        max: 0,
        min: 0,
      },
      cultural_development_mod: {
        max: 0,
        min: 0,
      },
      economical_development_mod: {
        max: 30,
        min: 10,
      },
      industrial_development_mod: {
        max: 0,
        min: 0,
      },
      law_enforcement_mod: {
        max: 0,
        min: 0,
      },
      technological_development_mod: {
        max: 50,
        min: 30,
      },
      possible_subtypes: [
        {
          dataToSend: "Xeno Entertainment",
          freq: "veryLow",
        },
        {
          dataToSend: "Virtual World Living",
          freq: "low",
        },
        {
          dataToSend: "Enhanced Endreament",
          freq: "veryRare",
        },
        {
          dataToSend: "Xeno Noostimulation",
          freq: "veryRare",
        },
      ],
      recreation_mod: {
        max: 20,
        min: 10,
      },
      type_adjectives: [
        {
          dataToSend: {
            label: "Megacorp HQ",
            type: "Headquarters",
          },
          freq: "rare",
        },
        {
          dataToSend: {
            label: "Center",
            type: "Quarters",
          },
          freq: "normal",
        },
        {
          dataToSend: {
            label: "Academy",
            type: "Training",
          },
          freq: "rare",
        },
      ],
    },
    freq: "rare",
  },
];

// Non-natural origin places of interest tabularium
export const NON_NATURAL_ORIGIN_PLACES_OF_INTEREST_TABULARIUM: any = {
  cultural: getCulturalPlaceOfInterestData,
  economical: getEconomicalPlaceOfInterestData,
  habitational: getRecreationalPlaceOfInterestData,
  industrial: getIndustrialPlaceOfInterestData,
  military: getMartialPlaceOfInterestData,
  technological: getTechnologicalPlaceOfInterestData,
};

const generateSettlementPlaceOfInterest = (
  districtType: string
): ISettlementPlaceOfInterest => {
  let placeOfInterest = {} as ISettlementPlaceOfInterest;
  const placeOfInterestOriginTable: any =
    NON_NATURAL_ORIGIN_PLACES_OF_INTEREST_TABULARIUM[districtType];
  if (placeOfInterestOriginTable) {
    const placeOfInterestRawData = obtainDataFromTable(
      generateTableDataByFrequencies(placeOfInterestOriginTable)
    );
    placeOfInterest = {
      criminality_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.criminality_mod
      ),
      law_enforcement_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.law_enforcement_mod
      ),
      cultural_development_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.cultural_development_mod
      ),
      economical_development_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.economical_development_mod
      ),
      industrial_development_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.industrial_development_mod
      ),
      technological_development_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.technological_development_mod
      ),
      discontent_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.discontent_mod
      ),
      recreation_mod: generateRandomMaxMinValue(
        placeOfInterestRawData.recreation_mod
      ),
      name: `${obtainDataFromTable(
        generateTableDataByFrequencies(placeOfInterestRawData.possible_subtypes)
      )} ${
        obtainDataFromTable(
          generateTableDataByFrequencies(placeOfInterestRawData.type_adjectives)
        ).label
      }`,
    };
  }
  return placeOfInterest;
};

export const generateSettlementPlacesOfInterest = (
  districtType: string
): ISettlementPlaceOfInterest[] => {
  let placesOfInterest: ISettlementPlaceOfInterest[] = [];
  const placesOfInterestNumber: number = obtainDataFromTable(
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
  if (placesOfInterestNumber > 0) {
    for (let i: number = 0; i < placesOfInterestNumber - 1; i += 1) {
      placesOfInterest = [
        ...placesOfInterest,
        { ...generateSettlementPlaceOfInterest(districtType) },
      ];
    }
  }
  return placesOfInterest;
};
