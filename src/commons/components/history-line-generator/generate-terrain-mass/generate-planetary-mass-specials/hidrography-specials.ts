import { ISpecialsStemsItem } from "./generate-planetary-mass-specials";

export interface IHidrographySpecialsStems {
  water: ISpecialsStemsItem;
  terrain_or_seabed?: ISpecialsStemsItem;
}

export const HIDROGRAPHY_SPECIALS_STEM_LIST = ["terrain_or_seabed", "water"];

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
  terrain_or_seabed: {
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
