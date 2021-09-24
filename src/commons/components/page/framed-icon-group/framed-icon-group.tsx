import React from "react";
import mediumFrameIcon from "../../../../assets/images/framed-icons/medium__framed-icon-bg.png";
import finalFrameIcon from "../../../../assets/images/framed-icons/final__framed-icon-bg.png";
import FramedIcon from "../framed-icon/framed-icon";
import FramedTitle from "../framed-title/framed-title";
import "./framed-icon-group.scss";

const FramedIconGroup = (props: any) => {
  const { customCssClass, data, getIconFunc, title } = props;

  const getFrameIcon = (index: number, final: number) => {
    switch (index) {
      case final:
        return { icon: finalFrameIcon, customClass: "final-frame-icon" };
      default:
        return { icon: mediumFrameIcon, customClass: "medium-frame-icon" };
    }
  };

  return (
    <section className={`framed-icon-group ${customCssClass || ""}`}>
      <FramedTitle iconTitle={title} title={title} />
      {data?.map((item: string, index: number) => {
        const getData = getFrameIcon(index, data?.length - 1);
        return (
          <FramedIcon
            customCssClass={getData.customClass}
            frameIcon={getData.icon}
            icon={getIconFunc(item)}
            key={item}
            iconTitle={`${title} - ${item}`}
          />
        );
      })}
    </section>
  );
};

export default FramedIconGroup;
