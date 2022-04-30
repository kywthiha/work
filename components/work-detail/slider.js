import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./slider.module.scss";

let interval = null;

const Slider = ({ items, color }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const next = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const autoPlay = () => {
    clearInterval(interval);
    interval = setInterval(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
  };
  const moveDot = (index) => {
    setSlideIndex(index);
    autoPlay();
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
      autoPlay();
    }

    if (diff < -5) {
      prev();
      autoPlay();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    autoPlay();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.slider}>
        <style jsx scoped>
          {`
            div::after {
              background-color: ${color};
            }
          `}
        </style>
        <div
          className={styles.slider_container}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {items.map((item, index) => (
            <Image
              layout="fill"
              key={index}
              className={`${styles.slide_image} ${
                slideIndex === index && styles.active_slide_image
              }`}
              src={item}
            />
          ))}
        </div>
      </div>
      <div className={styles.indicator}>
        <ul className={styles.indicator_list}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`
           ${styles.indicator_list_item} ${
                slideIndex === index && styles.indicator_list_item_active
              }`}
              onClick={(e) => {
                moveDot(index);
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Slider;
