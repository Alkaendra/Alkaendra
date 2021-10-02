import React from "react";
import { lenguaImmalar } from "../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../nomenclator/nomenclator-generator";
import { generateRandomNumber } from "../utils/utils";
import { getRandomName } from "./utils/utils";

type LeaderTrait = {
  effect: {
    target: string;
    modification_value: number;
  };
  name: string;
};

type LeaderSkills = {
  economical: number;
  martial: number;
  mental: number;
  political: number;
  spiritual: number;
};

export type Leader = {
  age: number;
  death_risk: number;
  familiy: string;
  influence: number;
  improvement_probability: number;
  loyalty_from_subjects: number;
  loyalty_to_overlod: number;
  name: string;
  traits?: LeaderTrait[];
  skills: LeaderSkills;
};

export class GenerateLeader {
  leaderData: Leader;

  constructor() {
    this.leaderData = {
      age: 0,
      death_risk: 0,
      familiy: "",
      name: "",
      improvement_probability: 0,
      influence: 0,
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      traits: [],
      skills: {
        economical: 0,
        martial: 0,
        mental: 0,
        political: 0,
        spiritual: 0,
      },
    };
  }

  generateInitialAge = () => generateRandomNumber(20, 60);
  generateInitialDeathRisk = () => generateRandomNumber(15, 25);
  generateName = () => generateRandomNames(lenguaImmalar, 1)[0];
  generateFamiliy = () => generateRandomNames(lenguaImmalar, 1)[0];
  generateInitialInfluence = () => generateRandomNumber(1, 5);
  generateInitialSubjectsLoyalty = () => generateRandomNumber(1, 5);
  generateInitialLoyaltyToOverlord = () => generateRandomNumber(1, 5);
  generateInitialSkills = () => ({
    economical: generateRandomNumber(0, 3),
    martial: generateRandomNumber(0, 3),
    mental: generateRandomNumber(0, 3),
    political: generateRandomNumber(0, 3),
    spiritual: generateRandomNumber(0, 3),
  });
  // The leader improvement probability is 100 minus 5 * the sum of all its current skills values
  generateImprovementProbability = (data: any) =>
    100 - 5 * Object.keys(data).reduce((acc, value) => acc + data[value], 0);

  generateBasicLeader = (): Leader => {
    this.leaderData.age = this.generateInitialAge();
    this.leaderData.death_risk = this.generateInitialDeathRisk();
    this.leaderData.name = this.generateName();
    this.leaderData.familiy = this.generateFamiliy();
    this.leaderData.influence = this.generateInitialInfluence();
    this.leaderData.loyalty_from_subjects =
      this.generateInitialSubjectsLoyalty();
    this.leaderData.loyalty_to_overlod =
      this.generateInitialLoyaltyToOverlord();
    this.leaderData.skills = this.generateInitialSkills();
    this.leaderData.improvement_probability =
      this.generateImprovementProbability(this.leaderData.skills);

    return this.leaderData;
  };
}
