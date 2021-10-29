import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBreadSlice,
  faDragon,
  faGem,
  faHorse,
  faPaw,
  faShoppingBasket,
  faSwimmer,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import { IRegion } from "../generate-history-line";
import {
  UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES,
  UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES,
  UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES,
} from "../utils/utils";

export const nameSettlement = (language: any, settlement: any) => {
  let modifiedSettlement = { ...settlement };
  modifiedSettlement.name = generateRandomNames(language, 1)[0];
  let modifiedRegions: IRegion[] = [];
  settlement.regions.forEach((region: IRegion) => {
    let modifiedTerrainUnits: any = [];
    region.terrainUnits.forEach((tU: any) => {
      let modifiedTerrainUnit = {
        ...tU,
        name: generateRandomNames(language, 1)[0],
      };
      modifiedTerrainUnits.push(modifiedTerrainUnit);
    });
    let modifiedRegion = {
      ...region,
      name: generateRandomNames(language, 1)[0],
      terrainUnits: modifiedTerrainUnits,
    };
    modifiedRegions.push(modifiedRegion);
  });
  return { ...modifiedSettlement, regions: modifiedRegions };
};

export const getTerrainUnitIcon = (subType: string) => {
  switch (true) {
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.FUNGI:
      return { color: "gray", icon: faBreadSlice };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.HUNTABLE_BEASTS:
      return { color: "darkgreen", icon: faPaw };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.TAMEABLE_BEASTS:
      return { color: "brown", icon: faHorse };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.EXOTIC:
      return { color: "purple", icon: faDragon };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.EXOTIC:
      return { color: "purple", icon: faGem };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.GEMS:
      return { color: "orange", icon: faGem };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.PRECIOUS_METALS:
      return { color: "darkred", icon: faGem };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.WORKABLE_METALS:
      return { color: "chocolate", icon: faGem };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.RIVER:
      return { color: "darkslategrey", icon: faWater };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.POND:
      return { color: "cornflowerblue", icon: faWater };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.LAKE:
      return { color: "cadetblue", icon: faWater };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.DEEP_LAKE:
      return { color: "mediumblue", icon: faWater };
    default:
      return { color: "gray", icon: faUser };
  }
};
