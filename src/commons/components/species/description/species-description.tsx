import React from "react";
import { SpeciesDescriptionProps } from "../../../types/common";
import descriptionFemaleIcon from "../../../../assets/images/description_female_ornate_border.png";
import descriptionMaleIcon from "../../../../assets/images/description_male_ornate_border.png";
import heightIcon from "../../../../assets/images/description/icons/description-icons__height.png";
import weightIcon from "../../../../assets/images/description/icons/description-icons__weight.png";
import skinColorIcon from "../../../../assets/images/description/icons/description-icons__skin-color.png";
import hairColorIcon from "../../../../assets/images/description/icons/description-icons__hair-color.png";
import eyeColorIcon from "../../../../assets/images/description/icons/description-icons__eye-color.png";
import listDot from "../../../../assets/images/list_dot.png";
import birthRateIcon from "../../../../assets/images/description/icons/description-icons__birth-rate.png";
import lifeSpanIcon from "../../../../assets/images/description/icons/description-icons__life-span.png";
import "./species-description.scss";
import SplitContent from "../../page/split-content/split-content";
import { features } from "process";
import InlineContent from "../../page/inline-content/inline-content";
import StackContent from "../../page/stack-content/stack-content";

const SpeciesDescription = (props: SpeciesDescriptionProps) => {
  const { data, description, image } = props;

  const featuresIcons = (sex: string): any[] => [
    {
      name: sex === "male" ? "Macho" : "Hembra",
      icon: sex === "male" ? descriptionMaleIcon : descriptionFemaleIcon,
      female_data: null,
      male_data: null,
    },
    {
      name: "Altura",
      icon: heightIcon,
      female_data: data.female.features?.height,
      male_data: data.male.features?.height,
    },
    {
      name: "Peso",
      icon: weightIcon,
      female_data: data.female.features?.weight,
      male_data: data.male.features?.weight,
    },
    {
      name: "Color de Piel",
      icon: skinColorIcon,
      female_data: data.female.features?.skin_color,
      male_data: data.male.features?.skin_color,
    },
    {
      name: "Color de Pelo",
      icon: hairColorIcon,
      female_data: data.female.features?.hair_color,
      male_data: data.male.features?.hair_color,
    },
    {
      name: "Color de Ojos",
      icon: eyeColorIcon,
      female_data: data.female.features?.eye_color,
      male_data: data.male.features?.eye_color,
    },
    // {
    //   name: "Rasgos Faciales",
    //   icon: facialFeaturesIcon,
    //   female_data: data.female.features?.facial_features,
    //   male_data: data.male.features?.facial_features,
    // },
    {
      name: "Crías por parto",
      icon: birthRateIcon,
      female_data: data.female.features?.birth_rate,
      male_data: data.male.features?.birth_rate,
    },
    {
      name: "Esperanza de Vida",
      icon: lifeSpanIcon,
      female_data: data.female.features?.life_span,
      male_data: data.male.features?.life_span,
    },
  ];

  return (
    <section className="species-description">
      <StackContent cssCustomClass="species-description__container">
        <div className="text">
          <p className="has-dropcap">{description?.[0]}</p>
        </div>
        <div className="species-features__container">
          <div className="species-features">
            <div className="gender-icons">
              <SplitContent>
                <img
                  className="species-description-image"
                  src={data.female?.features?.description_image}
                />
                <div className="female-icon text">
                  <StackContent cssCustomClass="gender-data">
                    <InlineContent even>
                      {featuresIcons("female").map((feature: any) => (
                        <div className="gender-trait" key={feature.name}>
                          <img
                            src={feature.icon}
                            alt={feature.name}
                            title={feature.name}
                          />
                          <span>
                            {Array.isArray(feature.female_data)
                              ? feature.female_data.map((color: string) => (
                                  <div
                                    className={`color ${color}`}
                                    key={color}
                                  ></div>
                                ))
                              : feature.female_data}
                          </span>
                        </div>
                      ))}
                    </InlineContent>
                    <SplitContent cssCustomClass="description-data" even>
                      <p className="has-dropcap">
                        {data.female.features.description}
                      </p>
                      <div className="description-traits-list">
                        {data.female.features.description_traits.map(
                          (trait: any) => (
                            <div
                              className="description-trait"
                              key={trait.label}
                            >
                              <img src={listDot} />
                              <span>
                                {trait.label}: <strong>{trait.value}</strong>
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </SplitContent>
                  </StackContent>
                </div>
              </SplitContent>
              <SplitContent>
                <div className="male-icon text" title="Macho">
                  <StackContent cssCustomClass="gender-data">
                    <InlineContent even>
                      {featuresIcons("male").map((feature: any) => (
                        <div className="gender-trait" key={feature.name}>
                          <img src={feature.icon} />
                          <span>
                            {Array.isArray(feature.male_data)
                              ? feature.male_data.map((color: string) => (
                                  <div
                                    className={`color ${color}`}
                                    key={color}
                                  ></div>
                                ))
                              : feature.male_data}
                          </span>
                        </div>
                      ))}
                    </InlineContent>
                    <SplitContent cssCustomClass="description-data" even>
                      <p className="has-dropcap">
                        {data.male.features.description}
                      </p>
                      <div className="description-traits-list">
                        {data.male.features.description_traits.map(
                          (trait: any) => (
                            <div
                              className="description-trait"
                              key={trait.label}
                            >
                              <img src={listDot} />
                              <span>
                                {trait.label}: <strong>{trait.value}</strong>
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </SplitContent>
                  </StackContent>
                </div>
                <img
                  className="species-description-image"
                  src={data.male?.features?.description_image}
                />
              </SplitContent>
            </div>
            {/* <div className="features-list">
              {featuresIcons.map((icon:any) => (
                <div className="row">
                  <div className="container">
                    <img src={icon.icon} alt={`Description - Species Feature icon - ${icon.name}`} title={`${icon.name}`}/>
                  </div>
                  {icon.female_data === icon.male_data ?
                    <div className="both-data">
                        <span>{icon.female_data}</span> 
                    </div>
                  :
                    <div className="half-data-field">
                      <div className="female-data">
                        <span>{icon.female_data}</span>                      
                      </div>
                      <div className="male-data">
                        <span>{icon.male_data}</span>
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </StackContent>
    </section>
  );
};

export default SpeciesDescription;
