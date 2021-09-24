import React from "react";
import SplitContent from "../split-content/split-content";
import StackContent from "../stack-content/stack-content";
import "./quote-content.scss";

const QuoteContent = (props: any) => {
  const {
    author,
    authorRole,
    cssCustomClas,
    quoteImage,
    quoteMessage,
    reverse,
  } = props.quoteData;
  return (
    <SplitContent
      cssCustomClass={`quote-content ${cssCustomClas || ""} ${reverse || ""}`}
    >
      {quoteImage && <img src={quoteImage} alt={`Quote Image - ${author}`} />}
      <StackContent>
        <div className="quote">{`"${quoteMessage}"`}</div>
        <div className="author">{author}</div>
        {authorRole && <div className="author-role">{authorRole}</div>}
      </StackContent>
    </SplitContent>
  );
};

export default QuoteContent;
