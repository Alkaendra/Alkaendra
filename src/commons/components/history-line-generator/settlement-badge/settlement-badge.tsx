import React from "react";
import { lenguaImmalar } from "../../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import InlineContent from "../../page/inline-content/inline-content";
import StackContent from "../../page/stack-content/stack-content";
import DataContainerWithSupraTitle from "../data-container-with-supra-title/data-container-with-supra-title";
import TerrainUnitsList from "./terrain-units-list/terrain-units-list";
import RandomNameGeneratorIcon from "../random-name-generator-icon/random-name-generator-icon";
import "./settlement-badge.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry,
  faBalanceScale,
  faCoins,
  faExpandArrowsAlt,
  faEye,
  faFistRaised,
  faLeaf,
  faPrayingHands,
  faPuzzlePiece,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const SettlementBadge = (props: any) => {
  const { className, leader, settlement } = props;

  const [currenSettlementData, setCurrentSettlementData] =
    React.useState(settlement);

  React.useEffect(() => {
    let disent =
      settlement.totalDisent -
      (leader.influence + leader.loyalty_from_subjects);

    if (leader) {
      setCurrentSettlementData({
        ...settlement,
        totalDisent: disent > 0 ? disent : 0,
        totalPower:
          settlement.totalPower + leader.influence + leader.skills.martial,
        totalStability:
          settlement.totalStability +
          leader.influence +
          leader.skills.political +
          leader.skills.social,
      });
    }
  }, []);

  const changeSettlementName = () =>
    setCurrentSettlementData({
      ...currenSettlementData,
      name: generateRandomNames(lenguaImmalar, 1)[0],
    });

  const changeRegionName = (region: number) => {
    let modifiedRegions = [...currenSettlementData.regions];
    modifiedRegions[region].name = generateRandomNames(lenguaImmalar, 1)[0];
    setCurrentSettlementData({
      ...currenSettlementData,
      regions: modifiedRegions,
    });
  };

  console.log("CURRENT SETTLEMENT ---> ", currenSettlementData);
  return (
    <div className={`settlement-badge ${className ? className : ""}`}>
      <div className="settlement-name">
        <RandomNameGeneratorIcon onClick={() => changeSettlementName()} />
        {currenSettlementData.name}
      </div>
      <div className="minor-info">
        {`${currenSettlementData.description}, ${currenSettlementData.scattering}`}
      </div>
      <InlineContent cssCustomClass="row-data settlement-data" even>
        <StackContent cssCustomClass="size-icon">
          <FontAwesomeIcon icon={faPuzzlePiece} title="Número de Regiones" />
          {currenSettlementData.regions.length}
        </StackContent>
        <StackContent cssCustomClass="population-icon">
          <FontAwesomeIcon icon={faUser} title="Población total" />
          {currenSettlementData.totalPopulation}
        </StackContent>
        <StackContent cssCustomClass="power-icon">
          <FontAwesomeIcon icon={faFistRaised} title="Poder Total" />
          {currenSettlementData.totalPower}
        </StackContent>
        <StackContent cssCustomClass="stability-icon">
          <FontAwesomeIcon icon={faBalanceScale} title="Estabilidad" />
          {currenSettlementData.totalStability}
        </StackContent>
        <StackContent cssCustomClass="disent-icon">
          <FontAwesomeIcon icon={faAngry} title="Descontento" />
          {currenSettlementData.totalDisent}
        </StackContent>
        <StackContent cssCustomClass="edible-icon">
          <FontAwesomeIcon icon={faLeaf} title="Producción total de Comida" />
          {currenSettlementData.totalEdibleResourcesProduction}
        </StackContent>
        <StackContent cssCustomClass="economical-icon">
          <FontAwesomeIcon icon={faCoins} title="Producción Económica Total" />
          {currenSettlementData.totalEconomicalResourcesProduction}
        </StackContent>
        <StackContent cssCustomClass="religion-power-icon">
          <FontAwesomeIcon
            icon={faPrayingHands}
            title="Poder Religioso Total"
          />
          {currenSettlementData.totalReligiousPower}
        </StackContent>
        <StackContent cssCustomClass="appeal-icon">
          <FontAwesomeIcon icon={faEye} title="Atractivo Total" />
          {currenSettlementData.totalAppealing}
        </StackContent>
      </InlineContent>
      <DataContainerWithSupraTitle supraTitle="Regiones">
        <StackContent>
          {currenSettlementData.regions.map((region: any, index: number) => (
            <DataContainerWithSupraTitle
              supraTitle={
                <span>
                  <RandomNameGeneratorIcon
                    onClick={() => changeRegionName(index)}
                  />
                  {region.name}
                </span>
              }
              key={region.name}
            >
              <StackContent cssCustomClass="row-data">
                <InlineContent cssCustomClass="row-data" even>
                  <StackContent cssCustomClass="size-icon">
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                    {region.size}
                  </StackContent>
                  <StackContent cssCustomClass="population-icon">
                    <FontAwesomeIcon icon={faUser} />
                    {region.regionPopulation}
                  </StackContent>
                  <StackContent>
                    <FontAwesomeIcon icon={faUsers} />
                    {region.regionHabitability}
                  </StackContent>
                  <StackContent cssCustomClass="edible-icon">
                    <FontAwesomeIcon icon={faLeaf} />
                    {region.regionEdibleResourcesProduction}
                  </StackContent>
                  <StackContent cssCustomClass="economical-icon">
                    <FontAwesomeIcon icon={faCoins} />
                    {region.regionEconomicalResourcesProduction}
                  </StackContent>
                  <StackContent cssCustomClass="appeal-icon">
                    <FontAwesomeIcon icon={faEye} />
                    {region.regionAppealing}
                  </StackContent>
                </InlineContent>
                <TerrainUnitsList
                  terrainUnits={region.terrainUnits}
                  className="row-data terrain-unit-list"
                />
              </StackContent>
            </DataContainerWithSupraTitle>
          ))}
        </StackContent>
      </DataContainerWithSupraTitle>
    </div>
  );
};

export default SettlementBadge;
