import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./work-detail.module.scss";

let interval = null;

const WorkDetail = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const next = () => {
    setSlideIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    autoPlay();
  };

  const prev = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    autoPlay();
  };

  const autoPlay = () => {
    clearInterval(interval);
    interval = setInterval(
      () => setSlideIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1)),
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
    }

    if (diff < -5) {
      prev();
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
      <div className={styles.detail_container}>
        <section className={styles.slider_section}>
          <h1 className={styles.mobile_title}>OCBC Pay Anyone</h1>
          <div
            className={styles.slider_container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {[...Array(4).keys()].map((i) => (
              <Image
                layout="fill"
                key={i}
                className={`${styles.slide} ${
                  slideIndex === i && styles.active_slide
                }`}
                src={`/image/item-detail${i + 1}.png`}
              />
            ))}
          </div>
          <div className={styles.indicator}>
            <ul>
              {[...Array(4).keys()].map((item, index) => (
                <li
                  key={index}
                  className={`${
                    slideIndex === index && styles.indicator_active
                  }`}
                  onClick={(e) => {
                    moveDot(index);
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h1 className={styles.web_title}>OCBC Pay Anyone</h1>
          <div className={styles.marketplaces}>
            <Link href="/">
              <a>
                <Image
                  src="/image/apple.png"
                  alt="apple"
                  width="20"
                  height="20"
                />
                <div>
                  <p>Available on</p>
                  <h4>App store</h4>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/image/playstore.png"
                  alt="playstore"
                  width="20"
                  height="20"
                />
                <div>
                  <p>Available on</p>
                  <h4>App store</h4>
                </div>
              </a>
            </Link>
          </div>
          <p className={styles.info}>
            You can now pay kopitiam uncles, merchants, peers, and dears with
            the OCBC Pay Anyone app, and you can even withdraw cash by scanning
            the QR code at OCBC’s ATMs without your card!
          </p>
          <article className={styles.key_feature_container}>
            <h5>Key Features</h5>
            <ul>
              <li>Scan to pay</li>
              <li>Transfer cash and request payment</li>
              <li>ATM QR cash withdrawal</li>
              <li>Access exclusive discounts and promotions</li>
            </ul>
          </article>
        </section>
      </div>
      <div className={styles.work_pagination}>
        <Link href="/">
          <a></a>
        </Link>
        <Link href="/">
          <a></a>
        </Link>
      </div>
    </>
  );
};

export default WorkDetail;
