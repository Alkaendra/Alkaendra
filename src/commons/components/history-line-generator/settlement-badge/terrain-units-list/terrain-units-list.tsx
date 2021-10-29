import React from "react";
import {
  faExpandArrowsAlt,
  faEye,
  faSkull,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lenguaImmalar } from "../../../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../../../nomenclator/nomenclator-generator";
import InlineContent from "../../../page/inline-content/inline-content";
import StackContent from "../../../page/stack-content/stack-content";
import { ITerrainUnit } from "../../generate-history-line";
import RandomNameGeneratorIcon from "../../random-name-generator-icon/random-name-generator-icon";
import { getTerrainUnitIcon } from "../utils";

type TerrainUniListProps = {
  className: string;
  terrainUnits: ITerrainUnit[];
};

const TerrainUnitsList = (props: TerrainUniListProps) => {
  const { className, terrainUnits } = props;

  const [currentTerrainUnits, setCurrentTerrainUnits] =
    React.useState(terrainUnits);

  const changeTerrainUnitName = (index: number) => {
    let modifiedTerrainUnits = [...currentTerrainUnits];
    modifiedTerrainUnits[index].name = generateRandomNames(lenguaImmalar, 1)[0];
    setCurrentTerrainUnits(modifiedTerrainUnits);
  };

  return (
    <section className="terrain-units-list-container">
      {currentTerrainUnits.map((terrainUnit: ITerrainUnit, index: number) => {
        const iconData: any = getTerrainUnitIcon(terrainUnit.subType);
        return (
          <div className="list-row" key={terrainUnit.name}>
            <InlineContent cssCustomClass={className} even>
              <div className="type-icon">
                <FontAwesomeIcon
                  icon={iconData.icon}
                  color={iconData.color}
                  title={terrainUnit.subType}
                />
              </div>
              <div className="name">
                <RandomNameGeneratorIcon
                  onClick={() => changeTerrainUnitName(index)}
                />
                {terrainUnit.name}
              </div>
              <StackContent cssCustomClass="size-icon">
                <FontAwesomeIcon icon={faExpandArrowsAlt} title="Tamaño" />
                {terrainUnit.size}
              </StackContent>
              <div className="current-population">
                <StackContent cssCustomClass="population-icon">
                  <FontAwesomeIcon icon={faUser} title="Población" />
                  {terrainUnit.population}
                </StackContent>
              </div>
              <StackContent>
                <FontAwesomeIcon icon={faUsers} title="Habitabilidad" />
                {terrainUnit.habitability}
              </StackContent>
              <StackContent cssCustomClass="appeal-icon">
                <FontAwesomeIcon icon={faEye} title="Atractivo" />
                {terrainUnit.appealing}
              </StackContent>
              <StackContent cssCustomClass="danger-icon">
                <FontAwesomeIcon icon={faSkull} title="Peligrosidad" />
                {terrainUnit.danger}
              </StackContent>
            </InlineContent>
          </div>
        );
      })}
    </section>
  );
};

export default TerrainUnitsList;
