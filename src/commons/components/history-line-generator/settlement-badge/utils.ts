import { faUser } from "@fortawesome/free-regular-svg-icons";
import fungiResourceIcon from "../../../../assets/icons/svg/SVG/fungi-edible-resource-icon.svg";
import workableMetalsResourceIcon from "../../../../assets/icons/svg/SVG/workable-metals-resource-icon.svg";
import preciousMetalsResourceIcon from "../../../../assets/icons/svg/SVG/precious-metals-resource-icon.svg";
import exoticMineralsResourceIcon from "../../../../assets/icons/svg/SVG/exotic-minerals-resource-icon.svg";
import gemsResourceIcon from "../../../../assets/icons/svg/SVG/gems-resource-icon.svg";
import unlightTameableBeastsResourceIcon from "../../../../assets/icons/svg/SVG/tameable-beasts-resource-icon.svg";
import unlightHuntableBeastsResourceIcon from "../../../../assets/icons/svg/SVG/huntable-beasts-resource-icon.svg";
import unlightEmptyLocation from "../../../../assets/icons/svg/SVG/empty-location-icon.svg";
import unlightPondWaterResourceIcon from "../../../../assets/icons/svg/SVG/pond-water-resource-icon.svg";
import unlightRiverWaterResourceIcon from "../../../../assets/icons/svg/SVG/river-water-resource-icon.svg";
import unlightLakeWaterResourceIcon from "../../../../assets/icons/svg/SVG/lake-water-resource-icon.svg";
import unlightDeepLakeWaterResourceIcon from "../../../../assets/icons/svg/SVG/deep-lake-water-resource-icon.svg";

import { faDragon } from "@fortawesome/free-solid-svg-icons";
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
      return { color: "gray", icon: fungiResourceIcon };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.HUNTABLE_BEASTS:
      return { color: "darkgreen", icon: unlightHuntableBeastsResourceIcon };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.TAMEABLE_BEASTS:
      return { color: "brown", icon: unlightTameableBeastsResourceIcon };
    case subType === UNLIGHT_WORLD_FOOD_SOURCE_SUBTYPES.EXOTIC:
      return { color: "purple", icon: faDragon };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.EXOTIC:
      return { color: "purple", icon: exoticMineralsResourceIcon };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.GEMS:
      return { color: "orange", icon: gemsResourceIcon };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.PRECIOUS_METALS:
      return { color: "darkred", icon: preciousMetalsResourceIcon };
    case subType === UNLIGHT_WORLD_MINERAL_SOURCE_SUBTYPES.WORKABLE_METALS:
      return { color: "chocolate", icon: workableMetalsResourceIcon };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.RIVER:
      return { color: "darkslategrey", icon: unlightRiverWaterResourceIcon };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.POND:
      return { color: "cornflowerblue", icon: unlightPondWaterResourceIcon };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.LAKE:
      return { color: "cadetblue", icon: unlightLakeWaterResourceIcon };
    case subType === UNLIGHT_WORLD_WATER_SOURCE_SUBTYPES.DEEP_LAKE:
      return { color: "mediumblue", icon: unlightDeepLakeWaterResourceIcon };
    default:
      return { color: "gray", icon: unlightEmptyLocation };
  }
};
