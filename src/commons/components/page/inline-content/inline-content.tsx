import React from "react";
import { InlineContentProps } from "../../../types/common";
import "./inline-content.scss";

const InlineContent = (props: InlineContentProps) => {
  const { cssCustomClass, children, even } = props;
  return (
    <div className={`inline-content ${cssCustomClass ? cssCustomClass : ""}`}>
      {children.map((child: any, index: number) => (
        <div className={even ? "even" : ""} key={`child-${index}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default InlineContent;
