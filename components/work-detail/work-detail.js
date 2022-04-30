import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";
import styles from "./work-detail.module.scss";

const WorkDetail = ({ work }) => {
  return (
    <>
      <div className={styles.detail_container}>
        <section className={styles.slider_section}>
          <h1 className={styles.mobile_title}>{work.title}</h1>
          <Slider
            items={work.slider.list}
            color={work.slider.background_color}
          />
        </section>
        <section>
          <h1 className={styles.web_title}>{work.title}</h1>
          <div className={styles.marketplaces}>
            {work.marketplaces.map((item) => (
              <Link href="/">
                <div className={styles.marketplace_item}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width="20"
                    height="20"
                  />
                  <div>
                    <p>{item.body}</p>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className={styles.info}>{work.body}</p>
          <article className={styles.key_feature_container}>
            <h5>Key Features</h5>
            <ul>
              {work.key_features.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
      <div className={styles.work_pagination}>
        <Link href={work.pagination.prev_link}>
          <a></a>
        </Link>
        <Link href={work.pagination.next_link}>
          <a></a>
        </Link>
      </div>
    </>
  );
};

export default WorkDetail;
