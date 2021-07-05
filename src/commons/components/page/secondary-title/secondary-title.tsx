import React from "react";
import { SecondaryTitleProps } from "../../../types/common";
import leftBorder from "../../../../assets/images/secondary_title_left_border.png";

const SecondaryTitle = (props: SecondaryTitleProps) => {
  const { title } = props;
  return (
    <div className="secondary-title__container">
      <img src={leftBorder} alt="Left Ornate Border" />
      {title}
    </div>
  );
};

export default SecondaryTitle;
