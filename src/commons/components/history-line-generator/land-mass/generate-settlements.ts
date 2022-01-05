import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import { lenguaUrarnu } from "../../nomenclator/uryarn/urarnu";
import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../../utils/generate-tables-data";
import {
  arrayValuesAdding,
  convertToRoman,
  generateRandomFloat,
  generateRandomMaxMinValue,
  generateRandomNumber,
  getRangedValue,
  getTwoDecimalsFloatRangedValue,
  objectMap,
  parseNumbersToTwoDecimalDigits,
} from "../../utils/utils";
import { generateModifiedResourceData } from "./generate-land-mass";
import { NON_NATURAL_ORIGIN_PLACES_OF_INTEREST_TABULARIUM } from "./tables/settlements-places-of-interest";

export interface MayorSettlement {
  class: number;
  criminality: number;
  danger: number;
  defenses?: any;
  development_cultural: number;
  development_economical: number;
  development_industrial: number;
  development_technological: number;
  discontent: number;
  districts: MayorSettlementDistrict[];
  label: string;
  law_enforcement_presence: number;
  name: string;
  population: string;
  places_of_interest?: any[];
  recreation: number;
  social_stability: number;
  specials?: any[];
}

export interface MayorSettlementDistrict {
  class: number;
  criminality: number;
  danger: number;
  defenses?: any;
  development_cultural: number;
  development_economical: number;
  development_industrial: number;
  development_technological: number;
  discontent: number;
  label?: string;
  law_enforcement_presence: number;
  population_density?: string;
  places_of_interest?: any[];
  recreation: number;
  social_stability: number;
  specials?: any[];
  type?: string;
}

export const SETTLEMENT_CLASS = [
  {
    dataToSend: {
      class: 1,
      label: "City",
      max_districts: {
        max: 6,
        min: 3,
      },
      population_range: {
        max: 5000000,
        min: 500000,
      },
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      class: 2,
      label: "Urb",
      max_districts: {
        max: 9,
        min: 6,
      },
      population_range: {
        max: 20000000,
        min: 5000000,
      },
    },
    freq: "low",
  },
  {
    dataToSend: {
      class: 3,
      label: "Conurbation",
      max_districts: {
        max: 12,
        min: 9,
      },
      population_range: {
        max: 100000000,
        min: 20000000,
      },
    },
    freq: "normal",
  },
  {
    dataToSend: {
      class: 4,
      label: "Metropolis",
      max_districts: {
        max: 20,
        min: 12,
      },
      population_range: {
        max: 250000000,
        min: 100000000,
      },
    },
    freq: "low",
  },
  {
    dataToSend: {
      class: 5,
      label: "Megalopolis",
      max_districts: {
        max: 32,
        min: 20,
      },
      population_range: {
        max: 500000000,
        min: 250000000,
      },
    },
    freq: "veryRare",
  },
];

export const POPULATION_DENSITIES = [
  "very low",
  "low",
  "medium",
  "high",
  "very high",
];

export const DISTRICT_TYPES = {
  HABITATIONAL: "habitational",
  NON_HABITATIONAL: "non habitational",
};

export const SETTLEMENT_NON_HABITATIONAL_DISTRICT_TYPES = [
  {
    dataToSend: {
      criminality: {
        max: 1,
        min: 0,
      },
      development_cultural: {
        max: 3,
        min: 1,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      label: "Cultural District",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      type: "cultural",
    },
    freq: "rare",
  },
  {
    dataToSend: {
      criminality: {
        max: 1,
        min: 0,
      },
      development_cultural: {
        max: 0,
        min: 0,
      },
      development_economical: {
        max: 4,
        min: 1,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      label: "Economical District",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      type: "economical",
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality: {
        max: 1,
        min: 0,
      },
      development_cultural: {
        max: 0,
        min: 0,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 3,
        min: 1,
      },
      development_technological: {
        max: 1,
        min: 0,
      },
      label: "Industrial District",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      type: "industrial",
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality: {
        max: 0,
        min: 0,
      },
      development_cultural: {
        max: 0,
        min: 0,
      },
      development_economical: {
        max: 0,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      label: "Military Complex",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      type: "military",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      criminality: {
        max: 0,
        min: 0,
      },
      development_cultural: {
        max: 0,
        min: 0,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 3,
        min: 1,
      },
      label: "Research District",
      law_enforcement_presence: {
        max: 0,
        min: 0,
      },
      type: "technological",
    },
    freq: "rare",
  },
];

export const SETTLEMENT_HABITATIONAL_DISTRICT_TYPES = [
  {
    dataToSend: {
      criminality: {
        max: 3,
        min: 1,
      },
      development_cultural: {
        max: 1,
        min: 0,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      discontent: {
        max: 2,
        min: 1,
      },
      label: "Slums",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      population_density_mod: 2,
      recreation: {
        max: 2,
        min: 0,
      },
      type: "habitational",
    },
    freq: "low",
  },
  {
    dataToSend: {
      criminality: {
        max: 3,
        min: 1,
      },
      development_cultural: {
        max: 1,
        min: 0,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      discontent: {
        max: 2,
        min: 1,
      },
      label: "Xeno Ghetto",
      law_enforcement_presence: {
        max: 0,
        min: 0,
      },
      population_density_mod: 2,
      recreation: {
        max: 2,
        min: 0,
      },
      type: "habitational",
    },
    freq: "veryRare",
  },
  {
    dataToSend: {
      criminality: {
        max: 2,
        min: 0,
      },
      development_cultural: {
        max: 1,
        min: 0,
      },
      development_economical: {
        max: 1,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      discontent: {
        max: 2,
        min: 0,
      },
      label: "Middle Class Residential",
      law_enforcement_presence: {
        max: 1,
        min: 0,
      },
      population_density_mod: 0,
      recreation: {
        max: 2,
        min: 0,
      },
      type: "habitational",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      criminality: {
        max: 1,
        min: 0,
      },
      development_cultural: {
        max: 2,
        min: 0,
      },
      development_economical: {
        max: 2,
        min: 0,
      },
      development_industrial: {
        max: 0,
        min: 0,
      },
      development_technological: {
        max: 0,
        min: 0,
      },
      discontent: {
        max: 1,
        min: 0,
      },
      label: "High Class Residential",
      law_enforcement_presence: {
        max: 2,
        min: 1,
      },
      population_density_mod: -2,
      recreation: {
        max: 3,
        min: 1,
      },
      type: "habitational",
    },
    freq: "rare",
  },
];

const generateSettlementPlaceOfInterest = (districtType: string): any => {
  let placeOfInterest = {} as any;
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

const generateSettlementPlacesOfInterest = (districtType: string): any[] => {
  let placesOfInterest: any[] = [];
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

export const generateMayorSettlementCommonDistrictData = (
  type: string
): MayorSettlementDistrict => {
  let district: MayorSettlementDistrict = {} as any;
  const typesTable =
    type === DISTRICT_TYPES.HABITATIONAL
      ? SETTLEMENT_HABITATIONAL_DISTRICT_TYPES
      : SETTLEMENT_NON_HABITATIONAL_DISTRICT_TYPES;
  const districtTypeRawData = obtainDataFromTable(
    generateTableDataByFrequencies(typesTable)
  );

  district.class = generateRandomNumber(1, 5);
  // Generate district posible places of interest
  district.places_of_interest = generateSettlementPlacesOfInterest(
    districtTypeRawData.type
  );
  // Generate criminality value
  district.criminality = generateModifiedResourceData(
    getTwoDecimalsFloatRangedValue(districtTypeRawData.criminality),
    district.places_of_interest?.[0]?.criminality_mod,
    district.places_of_interest?.[1]?.criminality_mod,
    district.places_of_interest?.[2]?.criminality_mod
  );
  // Generate law enforcement presence
  district.law_enforcement_presence = generateModifiedResourceData(
    getTwoDecimalsFloatRangedValue(
      districtTypeRawData.law_enforcement_presence
    ),
    district.places_of_interest?.[0]?.law_enforcement_mod,
    district.places_of_interest?.[1]?.law_enforcement_mod,
    district.places_of_interest?.[2]?.law_enforcement_mod
  );

  // Generate district danger
  district.danger = parseNumbersToTwoDecimalDigits(
    district.criminality - district.law_enforcement_presence
  );
  // Generate development data
  district.development_cultural = generateModifiedResourceData(
    parseNumbersToTwoDecimalDigits(
      district.class *
        getTwoDecimalsFloatRangedValue(districtTypeRawData.development_cultural)
    ),
    district.places_of_interest?.[0]?.cultural_development_mod,
    district.places_of_interest?.[1]?.cultural_development_mod,
    district.places_of_interest?.[2]?.cultural_development_mod
  );

  district.development_economical = generateModifiedResourceData(
    parseNumbersToTwoDecimalDigits(
      district.class *
        getTwoDecimalsFloatRangedValue(
          districtTypeRawData.development_economical
        )
    ),
    district.places_of_interest?.[0]?.economical_development_mod,
    district.places_of_interest?.[1]?.economical_development_mod,
    district.places_of_interest?.[2]?.economical_development_mod
  );

  district.development_industrial = generateModifiedResourceData(
    parseNumbersToTwoDecimalDigits(
      district.class *
        getTwoDecimalsFloatRangedValue(
          districtTypeRawData.development_industrial
        )
    ),
    district.places_of_interest?.[0]?.industrial_development_mod,
    district.places_of_interest?.[1]?.industrial_development_mod,
    district.places_of_interest?.[2]?.industrial_development_mod
  );

  district.development_technological = generateModifiedResourceData(
    parseNumbersToTwoDecimalDigits(
      district.class *
        getTwoDecimalsFloatRangedValue(
          districtTypeRawData.development_technological
        )
    ),
    district.places_of_interest?.[0]?.technological_development_mod,
    district.places_of_interest?.[1]?.technological_development_mod,
    district.places_of_interest?.[2]?.technological_development_mod
  );

  // Generate label
  district.label = `${convertToRoman(
    district.class
  )} Class - ${districtTypeRawData.label.toUpperCase()} - ${
    generateRandomNames(lenguaUrarnu, 1)[0]
  }`;
  // Check if district type is habitational and if so, generete additional data
  if (type === DISTRICT_TYPES.HABITATIONAL) {
    // Generate discontent
    district.discontent = generateModifiedResourceData(
      getTwoDecimalsFloatRangedValue(districtTypeRawData.discontent),
      district.places_of_interest?.[0]?.discontent_mod,
      district.places_of_interest?.[1]?.discontent_mod,
      district.places_of_interest?.[2]?.discontent_mod
    );

    // Generate recreation generated
    district.recreation = generateModifiedResourceData(
      getTwoDecimalsFloatRangedValue(districtTypeRawData.recreation),
      district.places_of_interest?.[0]?.recreation_mod,
      district.places_of_interest?.[1]?.recreation_mod,
      district.places_of_interest?.[2]?.recreation_mod
    );

    // Calculate social stability as recreation minus discontent formula
    district.social_stability = district.recreation - district.discontent;
    // Calculate population density
    district.population_density =
      POPULATION_DENSITIES[
        getRangedValue(
          POPULATION_DENSITIES.length,
          0,
          generateRandomNumber(0, 2) +
            districtTypeRawData.population_density_mod
        )
      ];
  }

  return district;
};

export const generateSettlement = () => {
  let settlement: MayorSettlement = {
    criminality: 0,
    danger: 0,
    development_cultural: 0,
    development_economical: 0,
    development_industrial: 0,
    development_technological: 0,
    discontent: 0,
    law_enforcement_presence: 0,
    recreation: 0,
    social_stability: 0,
  } as any;
  let districts: MayorSettlementDistrict[] = [];
  const settlementClassData = obtainDataFromTable(
    generateTableDataByFrequencies(SETTLEMENT_CLASS)
  );
  const districtsNumber = generateRandomNumber(
    settlementClassData.max_districts.min,
    settlementClassData.max_districts.max
  );
  for (let i = 0; i < districtsNumber; i += 1) {
    const randomNumber = Math.random();
    let district =
      randomNumber > 0.5
        ? generateMayorSettlementCommonDistrictData(DISTRICT_TYPES.HABITATIONAL)
        : generateMayorSettlementCommonDistrictData(
            DISTRICT_TYPES.NON_HABITATIONAL
          );
    settlement.criminality += district.criminality;
    settlement.law_enforcement_presence += district.law_enforcement_presence;
    settlement.danger += district.danger;
    settlement.development_cultural += district.development_cultural;
    settlement.development_economical += district.development_economical;
    settlement.development_industrial += district.development_industrial;
    settlement.development_technological += district.development_technological;
    settlement.discontent += district.discontent ?? 0;
    settlement.recreation += district.recreation ?? 0;
    settlement.social_stability += district.social_stability ?? 0;
    districts = [...districts, { ...district }];
  }
  settlement.name = `${settlementClassData.class} - ${
    settlementClassData.label
  } - ${generateRandomNames(lenguaUrarnu, 1)[0]}`;
  settlement.population = generateRandomNumber(
    settlementClassData.population_range.min,
    settlementClassData.population_range.max
  ).toLocaleString("es-ES");
  settlement.districts = districts;
  console.log(
    "DISTRICTS ----*****>>> ",
    objectMap(settlement, (s: any) =>
      !isNaN(s) ? parseNumbersToTwoDecimalDigits(s) : s
    )
  );
  console.log(
    "[URARNU- NAMES] ----> ",
    settlement.districts.map((d: any) => d.label)
  );
  return objectMap(settlement, (s: any) =>
    !isNaN(s) ? parseNumbersToTwoDecimalDigits(s) : s
  );
};
