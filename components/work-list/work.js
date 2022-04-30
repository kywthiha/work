import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./work.module.scss";
import WorkItem from "./work_item";

const Work = ({ workItems, categories, legends }) => {
  const router = useRouter();
  const { tag } = router.query;
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
          {categories.map((item, index) => (
            <li
              className={
                (tag === item.href || (!tag && item.href === "all")) &&
                styles.active_category
              }
              key={item.href}
            >
              <Link href={`${router.pathname}?tag=${item.href}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.legend_container}>
          <h4>LEGEND</h4>
          <ul className={styles.legend_list}>
            {legends.map((item, index) => (
              <li>
                <Image
                  src={item.image}
                  alt={item.title}
                  width="22"
                  height="22"
                />
                <legend>{item.title}</legend>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        {(workItems.length && (
          <article className={styles.work_list}>
            {workItems.map((work, index) => (
              <WorkItem key={index} work={work} />
            ))}
          </article>
        )) || (
          <p className={styles.empty_project}>
            There is no specific project related with the tag name({tag})! Do
            you want to show all the projects instead?
          </p>
        )}
      </section>
    </main>
  );
};

export default Work;
