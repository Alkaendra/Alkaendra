import {
  obtainDataFromTable,
  generateTableDataByFrequencies,
} from "../../../utils/generate-tables-data";
import { generateRandomNumber } from "../../../utils/utils";
import { IMayorSettlementDistrict } from "../interfaces";

export interface ISpacePort {
  suburb: string;
  size: string;
  status: string;
}

export const SPACE_PORTS_NUMBER = [
  {
    dataToSend: 0,
    freq: "normal",
  },
  {
    dataToSend: 1,
    freq: "normal",
  },
  {
    dataToSend: 2,
    freq: "low",
  },
  {
    dataToSend: 3,
    freq: "veryRare",
  },
  {
    dataToSend: generateRandomNumber(4, 6),
    freq: "rare",
  },
];

export const SPACE_PORT_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  HUGE: "huge",
};

export const spacePortSizesByFreq = [
  {
    dataToSend: SPACE_PORT_SIZES.SMALL,
    freq: "normal",
  },
  {
    dataToSend: SPACE_PORT_SIZES.MEDIUM,
    freq: "relevant",
  },
  {
    dataToSend: SPACE_PORT_SIZES.LARGE,
    freq: "low",
  },
  {
    dataToSend: SPACE_PORT_SIZES.HUGE,
    freq: "rare",
  },
];

export const SPACE_PORT_STATUS = {
  POOR: "poor",
  DEFICIENT: "deficient",
  STANDARD: "standard",
  GOOD: "good",
  ELITE: "elite",
};

export const spacePortStatusByFreq = [
  {
    dataToSend: SPACE_PORT_STATUS.POOR,
    freq: "rare",
  },
  {
    dataToSend: SPACE_PORT_STATUS.DEFICIENT,
    freq: "low",
  },
  {
    dataToSend: SPACE_PORT_STATUS.STANDARD,
    freq: "relevant",
  },
  {
    dataToSend: SPACE_PORT_STATUS.GOOD,
    freq: "low",
  },
  {
    dataToSend: SPACE_PORT_STATUS.ELITE,
    freq: "veryRare",
  },
];

/**
 * Method to generate a settlement Space Port
 * @param {string} district District where the space port is located in settlement
 * @returns {ISpacePort} Returns a ISpacePort generated data set
 */
export const generateSpacePort = (district: string): ISpacePort => {
  let spacePort: ISpacePort = {} as any;
  spacePort.suburb = district;
  spacePort.size = obtainDataFromTable(
    generateTableDataByFrequencies(spacePortSizesByFreq)
  );
  spacePort.status = obtainDataFromTable(
    generateTableDataByFrequencies(spacePortStatusByFreq)
  );

  return spacePort;
};

/**
 * Method to generate total settlement Space Ports
 * @param {IMayorSettlementDistrict[]} districts Array of settlement districts
 * @returns {ISpacePort[]} An array of setllement space ports
 */
export const generateSpacePorts = (
  districts: IMayorSettlementDistrict[]
): ISpacePort[] => {
  let settlementSpacePorts: ISpacePort[] = [];
  const spacePortsNumber = obtainDataFromTable(
    generateTableDataByFrequencies(SPACE_PORTS_NUMBER)
  );

  for (let i = 0; i < spacePortsNumber; i += 1) {
    const districtName =
      districts[generateRandomNumber(0, districts.length - 1)].label;
    settlementSpacePorts = [
      ...settlementSpacePorts,
      { ...generateSpacePort(districtName) },
    ];
  }

  return settlementSpacePorts;
};
