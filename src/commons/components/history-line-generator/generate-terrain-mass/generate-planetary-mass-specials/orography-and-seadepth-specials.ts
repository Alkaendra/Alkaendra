import { ISpecialsStemsItem } from "./generate-planetary-mass-specials";

export interface IOrographyAndSeaDepthSpecialsStems {
  metals: ISpecialsStemsItem;
  minerals: ISpecialsStemsItem;
  gems: ISpecialsStemsItem;
}

export const OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEM_LIST: string[] = [
  "metals",
  "minerals",
  "gems",
];

export const OROGROPHY_AND_SEA_DEPTH_SPECIALS_STEMS: IOrographyAndSeaDepthSpecialsStems =
  {
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
