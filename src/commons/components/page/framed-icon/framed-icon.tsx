import React from "react";
import "./framed-icon.scss";

const FramedIcon = (props: any) => {
  const { customCssClass, frameIcon, icon, iconTitle } = props;

  const framedIconBackgroundUrl = `url(${frameIcon}) no-repeat top center`;
  const iconBackgroundUrl = `url(${icon}) no-repeat top center`;
  return (
    <article
      title={iconTitle}
      className={`framed-icon ${customCssClass || ""}`}
      style={{ background: framedIconBackgroundUrl }}
    >
      {icon && (
        <div className="icon" style={{ background: iconBackgroundUrl }}></div>
      )}
    </article>
  );
};

export default FramedIcon;
