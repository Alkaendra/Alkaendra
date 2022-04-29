/*- SETTLEMENT INTERFACES -*/

export interface ISpacePort {
  suburb: string;
  size: string;
  status: string;
}

export interface IMayorSettlement {
  class: number;
  criminality: number;
  danger: number;
  defenses?: any;
  development_cultural: number;
  development_economical: number;
  development_industrial: number;
  development_technological: number;
  discontent: number;
  districts: IMayorSettlementDistrict[];
  label: string;
  law_enforcement_presence: number;
  name: string;
  population: string;
  places_of_interest?: any[];
  recreation: number;
  social_stability: number;
  space_ports?: ISpacePort[];
  specials?: any[];
}

export interface IMayorSettlementDistrict {
  class: number;
  criminality: number;
  danger: number;
  defenses?: any;
  development_cultural: number;
  development_economical: number;
  development_industrial: number;
  development_technological: number;
  discontent: number;
  label: string;
  law_enforcement_presence: number;
  population_density?: string;
  places_of_interest?: ISettlementPlaceOfInterest[];
  recreation: number;
  social_stability: number;
  specials?: IHexSpecial[];
  type?: string;
}

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

export interface IHexSpecial {
  label: string;
  economical_mod: number;
  edible_mod: number;
  industrial_mod: number;
  population_attraction_mod: number;
}

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

export interface IMass {
  hexes: IHexBasicData[];
  mayor_settlements: IMayorSettlement[];
  total_economical: number;
  total_edible: number;
  total_industrial: number;
  total_population_attraction: number;
}
