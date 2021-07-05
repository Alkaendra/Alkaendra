import React from "react";
import { MainTitleProps } from "../../../../commons/types/common";
import "./main-title.scss";

const MainTitle = (props: MainTitleProps) => {
  const { backgroundUrl, name, subtitle } = props;
  return (
    <div className="main-title">
      <div
        className="main-title__container"
        style={{ background: `url(${backgroundUrl}) no-repeat top center` }}
      >
        <div className="title">{name}</div>
      </div>
      <div className="sub-title">{subtitle}</div>
    </div>
  );
};

export default MainTitle;
