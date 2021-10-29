import { faThemeisle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { generateRandomNames } from "../nomenclator/nomenclator-generator";
import {
  obtainDataFromTable,
  generateTableDataByFrequencies,
  IDynamicDataTableObject,
} from "../utils/generate-tables-data";
import { generateRandomNumber } from "../utils/utils";
import {
  LeaderDataModifications,
  LEADER_INTIAL_EQUIPMENT_ELEMENTS_NUMBER,
} from "./generate-leader";

export const EQUIPMENT_PLACEMENT = {
  ARM: "Brazo",
  BACK: "Espalda",
  CHEST: "Cuerpo",
  FINGER: "Dedo",
  FOOT: "Pie",
  HAND: "Mano",
  HEAD: "Cabeza",
  LEG: "Pierna",
  NECK: "Cuello",
};

const EQUIPMENT_TYPES = {
  ACCESORIES: "Atuendo",
  ARMOUR: "Armadura",
  JEWELLRY: "Joyas",
  WEAPON: "Arma",
};

const EQUIPMENT_MAX_NUMBER_BY_PLACEMENT = {
  [EQUIPMENT_PLACEMENT.ARM]: 2,
  [EQUIPMENT_PLACEMENT.BACK]: 1,
  [EQUIPMENT_PLACEMENT.CHEST]: 1,
  [EQUIPMENT_PLACEMENT.FINGER]: 10,
  [EQUIPMENT_PLACEMENT.FOOT]: 2,
  [EQUIPMENT_PLACEMENT.HAND]: 2,
  [EQUIPMENT_PLACEMENT.HEAD]: 1,
  [EQUIPMENT_PLACEMENT.LEG]: 2,
  [EQUIPMENT_PLACEMENT.NECK]: 1,
};

const EQUIPMENT_TYPES_BY_FREQ: IDynamicDataTableObject[] = [
  {
    dataToSend: EQUIPMENT_TYPES.ARMOUR,
    freq: "normal",
  },
  {
    dataToSend: EQUIPMENT_TYPES.WEAPON,
    freq: "normal",
  },
  {
    dataToSend: EQUIPMENT_TYPES.JEWELLRY,
    freq: "low",
  },
];

export interface IEquipment {
  damage?: number;
  health: number;
  influence_modification: number;
  name?: string;
  placement?: string;
  protection?: number;
  type: string; // IWeapon, IArmour, Amulet, etc.
}

/*- IArmour Types-*/
interface IArmourAndWeaponGeneratedDataItem {
  max: number;
  min: number;
  label: string;
}

export interface IArmour {
  name?: string;
  placement: string;
  protection: {
    max: number;
    min: number;
  };
  quality: string;
  type: string;
}

const ARMOUR_PLACEMENT: IDynamicDataTableObject[] = [
  {
    dataToSend: EQUIPMENT_PLACEMENT.ARM,
    freq: "normal",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.CHEST,
    freq: "relevant",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.HAND,
    freq: "low",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.HEAD,
    freq: "low",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.LEG,
    freq: "low",
  },
];

/*- Jewellry -*/

export interface IJewellry extends LeaderDataModifications {
  name?: string;
  placement: string;
  type: string;
}

const JEWELLRY_LEADER_DATA_MODIFICATIONS: IDynamicDataTableObject[] = [
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

const JEWELL_PLACEMENT: IDynamicDataTableObject[] = [
  {
    dataToSend: EQUIPMENT_PLACEMENT.ARM,
    freq: "low",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.CHEST,
    freq: "low",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.FINGER,
    freq: "normal",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.FOOT,
    freq: "rare",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.HAND,
    freq: "veryLow",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.HEAD,
    freq: "low",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.LEG,
    freq: "rare",
  },
  {
    dataToSend: EQUIPMENT_PLACEMENT.NECK,
    freq: "normal",
  },
];

/*- IWeapon Types -*/

export interface IWeapon {
  damage: {
    max: number;
    min: number;
  };
  name?: string;
  quality: string;
  type: string;
}

export const ARMOUR_AND_WEAPON_QUALITY: IDynamicDataTableObject[] = [
  {
    dataToSend: {
      max: 3,
      min: 1,
      label: "Normal Quality",
    },
    freq: "relevant",
  },
  {
    dataToSend: {
      max: 4,
      min: 2,
      label: "Good Quality",
    },
    freq: "normal",
  },
  {
    dataToSend: {
      max: 6,
      min: 3,
      label: "Rare Quality",
    },
    freq: "veryLow",
  },
  {
    dataToSend: {
      max: 10,
      min: 6,
      label: "Legendary Quality",
    },
    freq: "veryRare",
  },
];

export class GenerateEquipment {
  leaderEquipment: (IArmour | IJewellry | IWeapon)[] = [];
  constructor() {
    this.leaderEquipment = [];
  }

  generateRandomEquipmentItem = (lenguage: any) => {
    let itemType = obtainDataFromTable(
      generateTableDataByFrequencies(EQUIPMENT_TYPES_BY_FREQ)
    );

    switch (itemType) {
      case EQUIPMENT_TYPES.ARMOUR:
        return this.generateArmourEquipment(lenguage);
      case EQUIPMENT_TYPES.JEWELLRY:
        return this.generateJewellryEquipment(lenguage);
      default:
        return this.generateWeaponEquipment(lenguage);
    }
  };

  generateInitialLeaderEquipment = (lenguage: any) => {
    let leaderInitialEquipmentElementsNumber = obtainDataFromTable(
      generateTableDataByFrequencies(LEADER_INTIAL_EQUIPMENT_ELEMENTS_NUMBER)
    );

    while (this.leaderEquipment.length < leaderInitialEquipmentElementsNumber) {
      this.leaderEquipment.push(this.generateRandomEquipmentItem(lenguage));
    }

    return this.leaderEquipment;
  };

  generateArmourEquipment = (lenguage: any): IArmour => {
    let newArmour: IArmour = {
      name: "",
      placement: "",
      protection: {
        max: 0,
        min: 0,
      },
      quality: "",
      type: EQUIPMENT_TYPES.ARMOUR,
    };

    const armourGeneratedData: IArmourAndWeaponGeneratedDataItem =
      obtainDataFromTable(
        generateTableDataByFrequencies(ARMOUR_AND_WEAPON_QUALITY)
      );

    newArmour.name = generateRandomNames(lenguage, 1)[0];
    newArmour.protection = {
      min: armourGeneratedData.min,
      max: armourGeneratedData.max,
    };
    newArmour.placement = obtainDataFromTable(
      generateTableDataByFrequencies(ARMOUR_PLACEMENT)
    );
    newArmour.quality = armourGeneratedData.label;

    return newArmour;
  };

  generateJewellryEquipment = (lenguage: any): IJewellry => {
    let newJewell: any = {
      diplomatical: 0,
      economical: 0,
      fortune: 0,
      health: 0,
      loyalty_from_subjects: 0,
      loyalty_to_overlod: 0,
      martial: 0,
      mental: 0,
      moral: 0,
      name: "",
      placement: "",
      political: 0,
      social: 0,
      spiritual: 0,
      type: "",
    };

    Object.keys(newJewell).forEach((key: any) => {
      if (
        ["name", "placement", "type"].every(
          (item: string) => !key.includes(item)
        )
      ) {
        let modificationValue = obtainDataFromTable(
          generateTableDataByFrequencies(JEWELLRY_LEADER_DATA_MODIFICATIONS)
        );
        newJewell[key] =
          Math.random() < 0.8
            ? modificationValue
            : modificationValue === 0
            ? 0
            : -modificationValue;
      }
    });

    newJewell.name = generateRandomNames(lenguage, 1)[0];
    newJewell.placement = obtainDataFromTable(
      generateTableDataByFrequencies(JEWELL_PLACEMENT)
    );
    newJewell.type = EQUIPMENT_TYPES.JEWELLRY;

    return newJewell;
  };

  generateWeaponEquipment = (lenguage: any): IWeapon => {
    let newWeapon: IWeapon = {
      damage: {
        max: 0,
        min: 0,
      },
      name: "",
      quality: "",
      type: EQUIPMENT_TYPES.WEAPON,
    };

    const weaponGeneratedData: IArmourAndWeaponGeneratedDataItem =
      obtainDataFromTable(
        generateTableDataByFrequencies(ARMOUR_AND_WEAPON_QUALITY)
      );

    newWeapon.damage = {
      min: weaponGeneratedData.min,
      max: weaponGeneratedData.max,
    };
    newWeapon.name = generateRandomNames(lenguage, 1)[0];
    newWeapon.quality = weaponGeneratedData.label;

    return newWeapon;
  };
}
