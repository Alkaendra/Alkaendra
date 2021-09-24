import React from "react";
import {
  getContinentIcon,
  getHabitatIcon,
  getPopulationDensityIconAndColor,
} from "../../../../modules/species/components/species-list/utils";
import FramedIcon from "../../page/framed-icon/framed-icon";
import InlineContent from "../../page/inline-content/inline-content";
import StackContent from "../../page/stack-content/stack-content";
import "./ethnicity-data.scss";
import FramedTitle from "../../page/framed-title/framed-title";
import FramedIconGroup from "../../page/framed-icon-group/framed-icon-group";

const EthnicityData = (props: any) => {
  const { ethnicityData, cssCustomClass } = props;

  return (
    <div className={`ethnicity-data ${cssCustomClass || ""}`}>
      <StackContent cssCustomClass="left-panel">
        <StackContent cssCustomClass="habitats">
          <FramedIconGroup
            data={ethnicityData?.habitats}
            getIconFunc={getHabitatIcon}
            title="Hábitats"
          />
        </StackContent>
        <FramedIconGroup
          data={ethnicityData?.continents}
          getIconFunc={getContinentIcon}
          title="Presencia"
        />
      </StackContent>
      <StackContent cssCustomClass="center-panel">
        <div className="name">{ethnicityData.name}</div>
        <div className="heraldic">
          <img
            src={ethnicityData.icon}
            alt={`Etnia - ${ethnicityData.name}`}
            title={`Etnia - ${ethnicityData.name}`}
          />
        </div>
        <InlineContent cssCustomClass="population-densities" even>
          {ethnicityData?.presence?.map((popDensity: any) => {
            return (
              <div className="item" key={popDensity.region}>
                <img
                  src={
                    getPopulationDensityIconAndColor(
                      popDensity.population_density
                    ).icon
                  }
                  alt={popDensity.region}
                />
                <div
                  className={`region ${
                    getPopulationDensityIconAndColor(
                      popDensity.population_density
                    ).color
                  }`}
                >
                  {popDensity.region}
                </div>
              </div>
            );
          })}
        </InlineContent>
        <InlineContent>
          {ethnicityData?.description_specifities?.map((specifity: any) => (
            <StackContent key={specifity.data}>
              <img src={specifity.icon} alt="Especfity" />
              <div>{specifity.data}</div>
            </StackContent>
          ))}
        </InlineContent>
        <div className="description">{ethnicityData.description}</div>
      </StackContent>
      <StackContent cssCustomClass="right-panel">
        <StackContent cssCustomClass="cultures">
          <div className="minor-title">Culturas</div>
          {ethnicityData?.cultures?.map((culture: any) => (
            <StackContent cssCustomClass="culture" key={culture.name}>
              <img
                src={culture.icon}
                alt={`Culture - ${culture.name}`}
                title={`Culture - ${culture.name}`}
              />
              <span className="name" key={culture.name}>
                {culture.name}
              </span>
            </StackContent>
          ))}
        </StackContent>
      </StackContent>
    </div>
  );
};

export default EthnicityData;
