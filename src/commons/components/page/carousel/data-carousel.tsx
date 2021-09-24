import React from "react";
import handlerIcon from "../../../../assets/images/data-collapsable-block__handler.png";
import { DataCarouselProps } from "../../../types/common";
import "./data-carousel.scss";

const DataCarousel = (props: DataCarouselProps) => {
  const { children, cssCustomClass, itemToShowIndex } = props;
  const [currentIndex, setCurrentIndex] = React.useState(itemToShowIndex);

  const goToNext = () =>
    setCurrentIndex(
      currentIndex + 1 > children.length - 1
        ? children.length - 1
        : currentIndex + 1
    );
  const goToPrev = () =>
    setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);

  return (
    <section className={`data-carousel ${cssCustomClass || ""}`}>
      <div className="prev-handler" onClick={() => goToPrev()}>
        <img src={handlerIcon} alt="data carousel go to prev handler" />
      </div>
      <article className="content">{children?.[currentIndex]}</article>
      <div className="next-handler" onClick={() => goToNext()}>
        <img src={handlerIcon} alt="data carousel go to next handler" />
      </div>
    </section>
  );
};

export default DataCarousel;
