import React, { useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../../../../App";
import { GenerateEquipment } from "../../../../commons/components/history-line-generator/generate-equipment";
import { UnlightWorldArea } from "../../../../commons/components/history-line-generator/generate-history-line";
import { GenerateLeader } from "../../../../commons/components/history-line-generator/generate-leader";
import { generateSettlement } from "../../../../commons/components/history-line-generator/generate-terrain-mass/generate-settlement/generate-settlements";
import NationBadge from "../../../../commons/components/history-line-generator/nation-badge/nation-badge";
import { lenguaImmalar } from "../../../../commons/components/nomenclator/kuannachta/immalar";
import DataCarousel from "../../../../commons/components/page/carousel/data-carousel";
import DataCollapsableBlock from "../../../../commons/components/page/data-collapsable-block/data-collapsable-block";
import PageHeader from "../../../../commons/components/page/header/header";
import QuoteContent from "../../../../commons/components/page/quote-content/quote-content";
import SpeciesDescription from "../../../../commons/components/species/description/species-description";
import EthnicityData from "../../../../commons/components/species/ethnicities/ethnicity-data";
import {
  generateRandomNumber,
  isEmptyObject,
} from "../../../../commons/components/utils/utils";
import { UrlParams } from "../../../../commons/types/common";
import { species } from "../species-list/utils";
import "./species.scss";
import { generatePlanetaryMass } from "../../../../commons/components/history-line-generator/generate-terrain-mass/genarate-planetary-mass";
import SystemView from "../../../../commons/components/maps/system-view-component/system-view";

const Species = (props: any) => {
  const { speciesId } = useParams<UrlParams>();
  const [state, dispatch] = useContext(AppContext);

  React.useEffect(() => {
    dispatch({
      type: "HANDLE_NATION",
      payload: {
        nation: new UnlightWorldArea().getAreaData(),
        leader: new GenerateLeader().generateBasicLeader(),
      },
    });
  }, []);

  const data = species.find((specie) => specie.name === speciesId) || {};

  const equipo = new GenerateEquipment();

  !isEmptyObject(state) &&
    console.log(
      "[EQUIPO] ---> ",
      equipo.generateInitialLeaderEquipment(lenguaImmalar),
      state?.leader,
      state?.nation
    );

  generateSettlement();
  generatePlanetaryMass("land");
  generatePlanetaryMass("liquid");

  return (
    <div className="species__container">
      <PageHeader
        backgroundUrl={data.title_background}
        name={data.presentationalName}
        subtitle={data.subtitle}
      />
      <SystemView
        systemData={{
          defences: {
            armies: 3,
            fleets: 2,
            orbitalDefenceValue: 3,
            landDefenceValue: 7,
          },
          development: [
            {
              spaceStations: 0,
              type: "cultural",
              value: 3,
            },
            {
              spaceStations: 0,
              type: "economical",
              value: 5,
            },
            {
              spaceStations: 0,
              type: "technological",
              value: 2,
            },
          ],
          name: "",
          resources: [
            {
              refineries: 0,
              type: "edible",
              value: 1,
            },
            {
              refineries: 0,
              type: "economical",
              value: 1,
            },
            {
              refineries: 0,
              type: "industrial",
              value: 2,
            },
          ],
        }}
      />
      {!isEmptyObject(state) && (
        <NationBadge leader={state?.leader} settlement={state?.nation} />
      )}
      <DataCollapsableBlock
        titleImage={data.description_title_image}
        titleLabel="Descripción"
      >
        <SpeciesDescription
          data={data.description_data}
          description={data.description}
          image={data.description_image}
        />
      </DataCollapsableBlock>
      <QuoteContent quoteData={data.quotes[0]} />
      <DataCarousel itemToShowIndex={0}>
        {data.ethnicities?.map((ethnicity: any) => (
          <EthnicityData ethnicityData={ethnicity} key={ethnicity.name} />
        ))}
      </DataCarousel>
    </div>
  );
};

export default Species;
