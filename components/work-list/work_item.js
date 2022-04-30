import Image from "next/image";
import Link from "next/link";
import styles from "./work_item.module.scss";
const WorkItem = ({ work }) => {
 
  return (
    <Link href="/work/item">
      <div
        className={`${styles.item_container} ${
          work.span2 && styles.item_col_span_2
        } `}
      >
        <Image
          src={work.cover}
          className={`${styles.cover} cover`}
          layout="fill"
        />
        <div className={styles.item_info}>
          <div>
            <p style={work.style}>Banking & Finance</p>
            <h2 style={work.style}>OCBC Pay Anyone</h2>
          </div>
          <div className={styles.item_icon_list}>
            <span className={styles.item_icon}>
              <Image
                src="/image/app.svg"
                alt="facebook"
                width="15"
                height="15"
              />
            </span>
            <span className={styles.item_icon}>
              <Image
                src="/image/cms.svg"
                alt="facebook"
                width="15"
                height="15"
              />
            </span>
            <span className={styles.item_icon}>
              <Image
                src="/image/uiux.svg"
                alt="facebook"
                width="15"
                height="15"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkItem;
