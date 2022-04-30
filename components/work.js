import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.scss";
import WorkItem from "./work_item";

const workItems = [
  {
    cover: "/image/item1.jpg",
    span2: true,
  },
  {
    cover: "/image/item2.jpg",
  },
  {
    cover: "/image/item3.jpg",
  },
  {
    cover: "/image/item4.jpg",
  },
  {
    cover: "/image/item5.jpg",
  },
  {
    cover: "/image/item6.jpg",
    span2: true,
    style: {
      color: "black",
    },
  },
  {
    cover: "/image/item7.jpg",
    span2: true,
  },
  {
    cover: "/image/item8.jpg",
    span2: true,
  },
  {
    cover: "/image/item2.jpg",
  },
  {
    cover: "/image/item3.jpg",
  },
  {
    cover: "/image/item4.jpg",
  },
];

const Work = () => {
  return (
    <main>
      <section className={styles.hero_section}>
        <article>
          <h1>Here’s 5% of</h1>
          <h1>our published work.</h1>
          <h1>See 100% of our power.</h1>
        </article>
      </section>
      <section className={styles.work_category}>
        <ul className={styles.work_category_list}>
          <li className={styles.active_category}>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
          <li>
            <Link href="/">Food & Beverage</Link>
          </li>
        </ul>
        <div className={styles.legend_container}>
          <h4>LEGEND</h4>
          <ul className={styles.legend_list}>
            <li>
              <Image src="/image/app.svg" alt="app" width="22" height="22" />
              <legend>APP</legend>
            </li>
            <li>
              <Image src="/image/web.svg" alt="web" width="22" height="22" />
              <legend>WEB</legend>
            </li>
            <li>
              <Image src="/image/cms.svg" alt="cms" width="22" height="22" />
              <legend>CMS</legend>
            </li>
            <li>
              <Image src="/image/uiux.svg" alt="uiux" width="22" height="22" />
              <legend>UI/UX</legend>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <article className={styles.work_list}>
          {workItems.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Work;
