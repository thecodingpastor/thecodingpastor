"use client";

import { useState, useEffect } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

import classes from "./MySlider.module.scss";

const MySlider: React.FC<{
  data: any;
  interval?: number;
  autoSlide?: boolean;
  chevrons?: boolean;
  className?: any;
}> = ({
  data,
  interval = 1000,
  autoSlide = false,
  chevrons = false,
  className,
}) => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const imageLength = 4;

  const back = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageLength - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === imageLength - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoSlide) {
      timer = setInterval(() => next(), interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [CurrentIndex]);

  const lastImageIndex = imageLength - 1;

  return (
    <div className={`${classes.Container} ${className ? className : ""}`}>
      {data.map((item: any, index: number) => {
        let position = classes.nextSlide;

        if (index === CurrentIndex) position = classes.activeSlide;
        if (
          index === CurrentIndex - 1 ||
          (CurrentIndex === 0 && index === lastImageIndex)
          // removed this as the imageLength is fixed
          // index === lastImageIndex &&
          // imageLength !== 2)
        )
          position = classes.lastSlide;

        return (
          <article key={index} className={position}>
            <Image
              src={item.img || ""}
              alt="What to expect"
              fill
              sizes="400px"
            />
            <div className={classes.Info}>
              <h4 className="">{item.title}</h4>
              <p className="">{item.details}</p>
            </div>
          </article>
        );
      })}
      {chevrons && (
        <div className={classes.Chevrons}>
          <FaChevronLeft onClick={back} />
          <FaChevronRight onClick={next} />
        </div>
      )}
    </div>
  );
};

export default MySlider;
