import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import { MainTitleProps } from "../../../types/common";
import "./header.scss";

const PageHeader = (props: MainTitleProps) => {
  const { backgroundUrl, subtitle, name } = props;
  return (
    <div
      className="header-background"
      style={{ background: `url(${backgroundUrl}) no-repeat top center` }}
    >
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <div className="title">{name}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default PageHeader;
