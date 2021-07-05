import React from "react";
import { DataCollapsableBlockProps } from "../../../types/common";
import handlerIcon from "../../../../assets/images/data-collapsable-block__handler.png";
import "./data-collapsable-block.scss";

const DataCollapsableBlock = (props: DataCollapsableBlockProps) => {
  const { children, titleImage, titleLabel } = props;
  const [expandableContentView, setExpandableContentView] =
    React.useState(false);

  const handlerStyleCssClass = `expand-block-handler ${
    expandableContentView ? "uncollapsed" : ""
  }`;

  return (
    <div className="data-collapsable-block">
      <div className="title">
        <div className="icon-label">
          <img src={titleImage} alt="Species Collapsable Block Title Icon" />
          <div className="label">{titleLabel}</div>
        </div>
        <div
          className={handlerStyleCssClass}
          onClick={() => setExpandableContentView(!expandableContentView)}
        >
          <img
            src={handlerIcon}
            alt={"Species Collapsable Block Collapse Handlers"}
          />
        </div>
      </div>
      <div className="data">{expandableContentView && children}</div>
    </div>
  );
};

export default DataCollapsableBlock;
