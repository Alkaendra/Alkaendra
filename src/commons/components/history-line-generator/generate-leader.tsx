import React from "react";
import { lenguaImmalar } from "../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../nomenclator/nomenclator-generator";
import {
  obtainDataFromTable,
  generateTableDataByFrequencies,
} from "../utils/generate-tables-data";
import { generateRandomNumber, reduceToAddParam } from "../utils/utils";
import { LeaderGender, LeaderTraitsList } from "./utils/utils";

export interface IEquipment {
  damage?: number;
  health: number;
  influence_modification: number;
  name?: string;
  protection?: number;
  skills: LeaderSkills;
  type: string; // Weapon, Armour, Amulet, etc.
}

export type Patrimony = {
  maintenance: number;
  region_location?: string;
  settlement_location?: string;
  value: number;
};

type LeaderEquipment = {
  accesories: IEquipment[];
  armour: IEquipment[];
  jewellry: IEquipment[];
  weapons: IEquipment[];
};

export const LEADER_INTIAL_EQUIPMENT_ELEMENTS_NUMBER: any[] = [
  {
    dataToSend: 0,
    freq: "high",
  },
  {
    dataToSend: 1,
    freq: "normal",
  },
  {
    dataToSend: 2,
    freq: "rare",
  },
  {
    dataToSend: 3,
    freq: "veryRare",
  },
];

export type LeaderDataModifications = {
  fortune: number;
  health: number;
  loyalty_from_subjects: number;
  loyalty_to_overlod: number;
  diplomatical: number;
  economical: number;
  martial: number;
  mental: number;
  moral: number;
  political: number;
  social: number;
  spiritual: number;
};

type LeaderEventTypeTriggerProbability = {
  assessination: string;
  construction: string;
  descontent: string;
  economical: string;
  exploring: string;
  mental: string;
  martial: string;
  religious: string;
  social: string;
};

type LeaderTrait = {
  effect: {
    target: string;
    modification_value: number;
  };
  name: string;
};

type LeaderProtection = {
  ARM: number;
  BACK: number;
  CHEST: number;
  FINGER: number;
  HAND: number;
  HEAD: number;
  LEG: number;
  NECK: number;
};

type LeaderBodyHealthDistribution = {
  body: number;
  head: number;
  left_arm: number;
  left_leg: number;
  right_arm: number;
  right_leg: number;
};

type LeaderSkills = {
  diplomatical: number;
  economical: number;
  martial: number;
  mental: number;
  moral: number;
  political: number;
  social: number;
  spiritual: number;
};

export type Leader = {
  age: number;
  death_risk: number;
  equipment?: LeaderEquipment;
  event_probabilities?: LeaderEventTypeTriggerProbability;
  familiy: string;
  fortune: number;
  gender: string;
  health: LeaderBodyHealthDistribution;
  influence: number;
  improvement_probability: number;
  loyalty_from_subjects: number;
  loyalty_to_overlod: number;
  name: string;
  personal_wealth?: number;
  total_health: number;
  traits?: any[];
  skills: LeaderSkills;
};

export class GenerateLeader {
  leaderData: Leader;

  constructor() {
    this.leaderData = {
      age: 0,
      death_risk: 0,
      event_probabilities: {
        assessination: "low",
        construction: "low",
        descontent: "low",
        economical: "low",
        exploring: "low",
        mental: "low",
        martial: "low",
        religious: "low",
        social: "low",
      },
      familiy: "",
      fortune: 0,
      gender: "",
      name: "",
      health: {
        body: 0,
        head: 0,
        left_arm: 0,
        left_leg: 0,
        right_arm: 0,
        right_leg: 0,
      },
      improvement_probability: 0,
      influence: 0,
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      personal_wealth: 0,
      total_health: 0,
      traits: [],
      skills: {
        diplomatical: 0,
        economical: 0,
        martial: 0,
        mental: 0,
        moral: 0,
        political: 0,
        social: 0,
        spiritual: 0,
      },
    };
  }

  generateInitialAge = (): number => generateRandomNumber(20, 60);
  generateInitialDeathRisk = (): number => generateRandomNumber(15, 25);
  generateName = (): string => generateRandomNames(lenguaImmalar, 1)[0];
  generateFamiliy = (): string => generateRandomNames(lenguaImmalar, 1)[0];
  generateGender = (): string =>
    obtainDataFromTable(generateTableDataByFrequencies(LeaderGender));
  generateInitialHealth = (age: number): LeaderBodyHealthDistribution => ({
    body:
      generateRandomNumber(8, 12) + Math.floor((age - 50) / 10) > 5
        ? generateRandomNumber(8, 12) + Math.floor((age - 50) / 10)
        : 5,
    head:
      generateRandomNumber(3, 4) + Math.floor((age - 50) / 10) > 3
        ? generateRandomNumber(3, 4) + Math.floor((age - 50) / 10)
        : 3,
    left_arm:
      generateRandomNumber(2, 3) + Math.floor((age - 50) / 10) > 2
        ? generateRandomNumber(2, 3) + Math.floor((age - 50) / 10)
        : 2,
    left_leg:
      generateRandomNumber(2, 3) + Math.floor((age - 50) / 10) > 2
        ? generateRandomNumber(2, 3) + Math.floor((age - 50) / 10)
        : 2,
    right_arm:
      generateRandomNumber(2, 3) + Math.floor((age - 50) / 10) > 2
        ? generateRandomNumber(2, 3) + Math.floor((age - 50) / 10)
        : 2,
    right_leg:
      generateRandomNumber(2, 3) + Math.floor((age - 50) / 10) > 2
        ? generateRandomNumber(2, 3) + Math.floor((age - 50) / 10)
        : 2,
  });
  generateInitialInfluence = (): number => generateRandomNumber(1, 5);
  generateInitialFortune = (): number => generateRandomNumber(1, 5);
  generateInitialSubjectsLoyalty = (): number => generateRandomNumber(1, 5);
  generateInitialLoyaltyToOverlord = (): number => generateRandomNumber(1, 5);
  generateInitialSkills = (): LeaderSkills => ({
    diplomatical: generateRandomNumber(0, 3),
    economical: generateRandomNumber(0, 3),
    martial: generateRandomNumber(0, 3),
    mental: generateRandomNumber(0, 3),
    moral: generateRandomNumber(0, 3),
    political: generateRandomNumber(0, 3),
    social: generateRandomNumber(0, 3),
    spiritual: generateRandomNumber(0, 3),
  });
  // The leader improvement probability is 100 minus 5 * the sum of all its current skills values
  generateImprovementProbability = (data: any) =>
    100 - 5 * Object.keys(data).reduce((acc, value) => acc + data[value], 0);

  generateLeaderTraits = (leader: Leader) => {
    let modifiedLeader = { ...leader };
    const traitsNames: string[] = [];
    const gettedTraits: any = [];
    let traitData: any = {
      fortune: 0,
      health: 0,
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      diplomatical: 0,
      economical: 0,
      martial: 0,
      mental: 0,
      moral: 0,
      political: 0,
      social: 0,
      spiritual: 0,
    };
    const leaderTraitsNumber = generateRandomNumber(0, 3);
    if (leaderTraitsNumber > 0) {
      while (gettedTraits.length < leaderTraitsNumber) {
        let trait: any = obtainDataFromTable(
          generateTableDataByFrequencies(LeaderTraitsList)
        );
        if (!traitsNames.includes(trait.label)) {
          gettedTraits.push(trait);
          traitsNames.push(trait.label);
        }
      }

      Object.keys(traitData).forEach((d: string) => {
        traitData[d] = gettedTraits.some((element: any) => element[d])
          ? reduceToAddParam(gettedTraits, d)
          : 0;
      });

      const traitSummatory = gettedTraits[0];

      modifiedLeader.skills.diplomatical += traitSummatory.diplomatical;
      modifiedLeader.skills.economical += traitSummatory.economical;
      modifiedLeader.skills.martial += traitSummatory.martial;
      modifiedLeader.skills.mental += traitSummatory.mental;
      modifiedLeader.skills.moral += traitSummatory.moral;
      modifiedLeader.skills.political += traitSummatory.political;
      modifiedLeader.skills.social += traitSummatory.social;
      modifiedLeader.skills.spiritual += traitSummatory.spiritual;
      modifiedLeader.loyalty_from_subjects +=
        traitSummatory.loyalty_from_subjects;
      modifiedLeader.loyalty_to_overlod += traitSummatory.loyalty_to_overlod;
      modifiedLeader.fortune += traitSummatory.fortune;
      modifiedLeader.health.body += traitSummatory.health;
      modifiedLeader.traits = traitsNames;
    }

    return modifiedLeader;
  };

  generateBasicLeader = (): Leader => {
    this.leaderData.age = this.generateInitialAge();
    this.leaderData.health = this.generateInitialHealth(this.leaderData.age);
    this.leaderData.death_risk = this.generateInitialDeathRisk();
    this.leaderData.name = this.generateName();
    this.leaderData.familiy = this.generateFamiliy();
    this.leaderData.fortune = this.generateInitialFortune();
    this.leaderData.gender = this.generateGender();
    this.leaderData.influence = this.generateInitialInfluence();
    this.leaderData.loyalty_from_subjects =
      this.generateInitialSubjectsLoyalty();
    this.leaderData.loyalty_to_overlod =
      this.generateInitialLoyaltyToOverlord();
    this.leaderData.skills = this.generateInitialSkills();
    this.leaderData.improvement_probability =
      this.generateImprovementProbability(this.leaderData.skills);
    this.leaderData = this.generateLeaderTraits(this.leaderData);
    this.leaderData.total_health = Object.values(this.leaderData.health).reduce(
      (a: number, b: number) => a + b
    );
    return this.leaderData;
  };
}
