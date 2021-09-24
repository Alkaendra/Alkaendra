import React from "react";
import startFrameIcon from "../../../../assets/images/framed-icons/start__framed-icon-bg.png";
import "./framed-title.scss";

const FramedTitle = (props: any) => {
  const { customCssClass, iconTitle, title } = props;

  const framedIconBackgroundUrl = `url(${startFrameIcon}) no-repeat top center`;
  return (
    <article
      title={iconTitle}
      className={`framed-title start-frame-icon ${customCssClass || ""}`}
      style={{ background: framedIconBackgroundUrl }}
    >
      {title && <div className="title">{title}</div>}
    </article>
  );
};

export default FramedTitle;
