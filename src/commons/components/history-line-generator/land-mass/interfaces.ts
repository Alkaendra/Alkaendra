//*- INTERFACES -*//

import { IMaxMinRange } from "../utils/utils";

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

export interface ISpecialsStemsItem {
  economical_resources_mod: IMaxMinRange;
  edible_resources_mod: IMaxMinRange;
  industrial_resources_mod: IMaxMinRange;
  possible_adjectives: string[];
}

export interface IBiodiversitySpecialsStems {
  microbiota: ISpecialsStemsItem;
  fungi: ISpecialsStemsItem;
  fauna: ISpecialsStemsItem;
  flora: ISpecialsStemsItem;
}

export interface IHidrographySpecialsStems {
  water: ISpecialsStemsItem;
  terrain: ISpecialsStemsItem;
}

export interface IOrographySpecialsStems {
  metals: ISpecialsStemsItem;
  minerals: ISpecialsStemsItem;
  gems: ISpecialsStemsItem;
}

//*- SCHEMATICS -*//

export const hexSpecialSchematic: IHexSpecial = {
  label: "",
  economical_mod: 0,
  edible_mod: 0,
  industrial_mod: 0,
  population_attraction_mod: 0,
};

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
