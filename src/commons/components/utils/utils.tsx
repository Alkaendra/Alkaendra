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
