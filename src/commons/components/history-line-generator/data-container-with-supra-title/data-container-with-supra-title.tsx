import React from "react";
import "./data-container-with-supra-title.scss";

const DataContainerWithSupraTitle = (props: any) => {
  const { children, supraTitle } = props;

  return (
    <div className="data-container-with-supra-title">
      <div className="supra-title">{supraTitle}</div>
      {children}
    </div>
  );
};

export default DataContainerWithSupraTitle;
