import React from "react";
import { useParams } from "react-router";
import DataCollapsableBlock from "../../../../commons/components/page/data-collapsable-block/data-collapsable-block";
import PageHeader from "../../../../commons/components/page/header/header";
import SpeciesDescription from "../../../../commons/components/page/species/description/species-description";
import { UrlParams } from "../../../../commons/types/common";
import { species } from "../species-list/utils";
import "./species.scss";

const Species = (props: any) => {
  const { speciesId } = useParams<UrlParams>();

  const data = species.find((specie) => specie.name === speciesId) || {};

  console.log(data);
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
          description={data.description}
          image={data.description_image}
        />
      </DataCollapsableBlock>
      <DataCollapsableBlock
        titleImage={data.description_title_image}
        titleLabel="Descripción"
      >
        <SpeciesDescription
          description={data.description}
          image={data.description_image}
        />
      </DataCollapsableBlock>
      <DataCollapsableBlock
        titleImage={data.description_title_image}
        titleLabel="Descripción"
      >
        <SpeciesDescription
          description={data.description}
          image={data.description_image}
        />
      </DataCollapsableBlock>
    </div>
  );
};

export default Species;
