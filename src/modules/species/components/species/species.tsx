import React from "react";
import { useParams } from "react-router";
import { UnlightWorldArea } from "../../../../commons/components/history-line-generator/generate-history-line";
import { GenerateLeader } from "../../../../commons/components/history-line-generator/generate-leader";
import DataCarousel from "../../../../commons/components/page/carousel/data-carousel";
import DataCollapsableBlock from "../../../../commons/components/page/data-collapsable-block/data-collapsable-block";
import PageHeader from "../../../../commons/components/page/header/header";
import QuoteContent from "../../../../commons/components/page/quote-content/quote-content";
import SpeciesDescription from "../../../../commons/components/species/description/species-description";
import EthnicityData from "../../../../commons/components/species/ethnicities/ethnicity-data";
import { UrlParams } from "../../../../commons/types/common";
import { species } from "../species-list/utils";
import "./species.scss";

const Species = (props: any) => {
  const { speciesId } = useParams<UrlParams>();

  const data = species.find((specie) => specie.name === speciesId) || {};

  const cosa = new UnlightWorldArea();
  const lider = new GenerateLeader();

  console.log(cosa.generateArea());
  console.log("LEADER ---> ", lider.generateBasicLeader());
  return (
    <div className="species__container">
      <PageHeader
        backgroundUrl={data.title_background}
        name={data.presentationalName}
        subtitle={data.subtitle}
      />
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
