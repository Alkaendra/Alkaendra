import { IMaxMinRange } from "../history-line-generator/utils/utils";

export const generateRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomFloat = (min: number, max: number) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

export const getRandomValueFromStringArray = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

export const getValueFromPercentage = (percentage: number, value: number) =>
  (percentage * value) / 100;

export const reduceToAddParam = (dataArray: any[], paramToAdd: any) =>
  dataArray.map((element) => element[paramToAdd]).reduce((a, b) => a + b, 0);

export const isEmptyObject = (obj: any) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const parseNumbersToTwoDecimalDigits = (number: number): number =>
  parseFloat(number.toFixed(2));

export const parseNumbersToThreeDecimalDigits = (number: number): number =>
  parseFloat(number.toFixed(3));

export const generateRandomMaxMinValue = (maxMinValue: IMaxMinRange) =>
  generateRandomNumber(maxMinValue.min, maxMinValue.max);

export const arrayValuesAdding = (arrayData: any[]) => {
  let total: number = 0;

  arrayData.forEach((data) => {
    total += data;
  });

  return total;
};

export const getRangedValue = (
  max: number,
  min: number,
  value: number
): number => {
  let rangedValue: number = value;
  if (value > max) {
    rangedValue = max;
  } else if (value < min) {
    rangedValue = min;
  }
  return rangedValue;
};

export const getTwoDecimalsFloatRangedValue = (data: IMaxMinRange): number =>
  parseNumbersToTwoDecimalDigits(generateRandomFloat(data.min, data.max));

export const objectMap = (obj: any, fn: any) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

// STRINGS
export const firstCharacterToUppercase = (data: string) =>
  `${data.substr(0, 1).toUpperCase()}${data.substr(1)}`;

export const convertToRoman = (num: number) => {
  let romanNumbers: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";

  for (const i of Object.keys(romanNumbers)) {
    const q: number = Math.floor(num / romanNumbers[i]);
    num -= q * romanNumbers[i];
    str += i.repeat(q);
  }

  return str;
};
