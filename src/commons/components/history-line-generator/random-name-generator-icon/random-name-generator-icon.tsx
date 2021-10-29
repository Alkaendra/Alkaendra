import React from "react";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./random-name-generator-icon.scss";

const RandomNameGeneratorIcon = (props: any) => {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      className="random-name"
      icon={faDice}
      onClick={onClick}
      title="Cambiar Nombre"
    />
  );
};

export default RandomNameGeneratorIcon;
