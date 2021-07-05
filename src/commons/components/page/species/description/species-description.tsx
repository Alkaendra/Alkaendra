import React from "react";
import { SpeciesDescriptionProps } from "../../../../types/common";
import SecondaryTitle from "../../secondary-title/secondary-title";
import "./species-description.scss";

const SpeciesDescription = (props: SpeciesDescriptionProps) => {
  return (
    <section className="species-description">
      <div className="species-description__container">
        <div className="image">
          <img src={props.image} alt={props.image} />
        </div>
        <div className="text">
          {props.description.map((paragraph: string) => (
            <p className="has-dropcap">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesDescription;
