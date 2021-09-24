import React from "react";
import { SplitContentProps } from "../../../types/common";
import "./split-content.scss";

const SplitContent = (props: SplitContentProps) => {
  const { cssCustomClass, children, even, reverse } = props;
  return (
    <div className={`split-content ${cssCustomClass || ""}`}>
      <div className={`half ${even ? "even" : ""}`}>
        {reverse ? children[1] : children[0]}
      </div>
      <div className={`half ${even ? "even" : ""}`}>
        {reverse ? children[0] : children[1]}
      </div>
    </div>
  );
};

export default SplitContent;
