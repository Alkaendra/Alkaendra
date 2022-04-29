import {
  parseNumbersToTwoDecimalDigits,
  getValueFromPercentage,
  arrayValuesAdding,
} from "../utils/utils";
import { IHexSpecial } from "./generate-terrain-mass/generate-planetary-mass-specials/generate-planetary-mass-specials";
import { ISettlementPlaceOfInterest } from "./generate-terrain-mass/generate-settlement/generate-settlement-place-of-interest";

/**
 * Method to change basic resource data with specials / places of interest modifying values
 * @param {number} typeData The resource basic data
 * @param {IHexSpecial[] | ISettlementPlaceOfInterest[]} arrayData The array of specials / places of interest
 * @param {string} param The param to be modified
 * @returns {number} The resource modified value
 */
export const generateModifiedResourceData = (
  typeData: any,
  arrayData: IHexSpecial[] | ISettlementPlaceOfInterest[],
  param: string
): number => {
  let modifiedData: number[] = [];

  arrayData.forEach(
    (data: any) => (modifiedData = [...modifiedData, data[param]])
  );

  return parseNumbersToTwoDecimalDigits(
    typeData + getValueFromPercentage(arrayValuesAdding(modifiedData), typeData)
  );
};
