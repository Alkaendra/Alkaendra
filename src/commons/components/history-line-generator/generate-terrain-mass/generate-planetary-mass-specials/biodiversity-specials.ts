import { ISpecialsStemsItem } from "./generate-planetary-mass-specials";

export interface IBiodiversitySpecialsStems {
  microbiota: ISpecialsStemsItem;
  fungi: ISpecialsStemsItem;
  fauna: ISpecialsStemsItem;
  flora: ISpecialsStemsItem;
}

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
