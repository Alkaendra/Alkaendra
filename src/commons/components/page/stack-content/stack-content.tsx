import React from "react";
import { StackContentProps } from "../../../types/common";
import "./stack-content.scss";

const StackContent = (props: StackContentProps) => {
  const { cssCustomClass, children } = props;
  return (
    <div className={`stack-content ${cssCustomClass ? cssCustomClass : ""}`}>
      {children}
    </div>
  );
};

export default StackContent;
