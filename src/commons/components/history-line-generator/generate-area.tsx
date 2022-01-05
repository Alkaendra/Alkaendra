import {
  generateTableDataByFrequencies,
  obtainDataFromTable,
} from "../utils/generate-tables-data";
import {
  IUnlightWorldExploratedArea,
  generateArea,
  IRegion,
} from "./generate-history-line";
import { generateUnlightWorldFoodSourceSubtype } from "./utils/utils";

// interface ILandmark {
//   appealing: number;
//   danger: number;
//   economical_resources: any[];
//   economical_resources_production_space: number;
//   edible_resources: any[];
//   edible_resources_production_space: number;
//   housing: number;
//   living_space: number;
//   size: number;
//   type: any;
// }

// interface Region {
//   landmarks: ILandmark[];
// }

interface Area {
  name: string;
  regions: any[];
}

// const generateRegionLandmark = (): ILandmark => {
//   let generatedLandmark: ILandmark = {
//     appealing: 0,
//     danger: 0,
//     economical_resources: [],
//     economical_resources_production_space: 0,
//     edible_resources: [],
//     edible_resources_production_space: 0,
//     housing: 0,
//     living_space: 0,
//     size: 0,
//     type: "",
//   };
//   if (Math.random() > 0.6) {
//     generatedLandmark.edible_resources.push(
//       obtainDataFromTable(
//         generateTableDataByFrequencies(generateUnlightWorldFoodSourceSubtype)
//       )
//     );
//   }

//   return generatedLandmark;
// };

// const generateAreaRegion = (): Region => {
//   let generatedAreaRegion: Region = {
//     landmarks: [],
//   };

//   return generatedAreaRegion;
// };

// const generateArea = (): Area => {
//   let generatedArea: Area = {
//     name: "",
//     regions: [],
//   };

//   return generatedArea;
// };

// export class UnlightWorldArea {
//   _regionData: Area;
//   constructor() {
//     this._regionData = generateArea();
//     console.log("DATPSSS A ->>*", this._regionData);
//   }

//   getAreaData = (): Area => this._regionData;

//   /**
//    * Method to get all regions in the generated Area
//    * @returns {array} An array of Regions
//    */
//   getAreaRegions = (): IRegion[] => this._regionData?.regions;

//   /**
//    * Method to find an area region by region name
//    * @param {string} name Name of the region to find
//    * @returns {IRegion} A IRegion
//    */
//   getAreaRegionByName = (name: string): IRegion | undefined =>
//     this._regionData.regions.find((region: IRegion) => region.name === name);
//   getAreaInhabitatedRegionByName = (name: string): IRegion | undefined =>
//     this._regionData.regions.find(
//       (region: IRegion) => region.name === name && region?.regionPopulation > 0
//     );
// }
