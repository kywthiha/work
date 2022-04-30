import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer} id="let_chat">
      <h4 className={styles.title}>Let's have a chat</h4>
      <div className={styles.item_container}>
        <section>
          <div className={styles.item}>
            <div>
              <h5>Build</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
            <p>Help you build something</p>
          </div>
        </section>
        <section>
          <div className={styles.item}>
            <div>
              <h5>Co-incubate</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
            <p>Co-incubate an idea together</p>
          </div>
        </section>
        <section>
          <div className={styles.item}>
            <div>
              <h5>Customise</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
            <p>Customise a solution for your busines</p>
          </div>
        </section>
        <section>
          <div className={styles.item}>
            <div>
              <h5>Organise</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
            <p>Organise learning sessions with us</p>
          </div>
        </section>
      </div>
      <div className={styles.media_icon}>
        <Link href="/" className={styles.media_icon_link}>
          <Image
            src="/image/facebook.svg"
            alt="facebook"
            width="25"
            height="25"
          />
        </Link>
        <Link href="/">
          <Image
            src="/image/twitter.svg"
            alt="twitter"
            width="25"
            height="25"
          />
        </Link>
        <Link href="/">
          <Image
            src="/image/instragm.svg"
            alt="instragm"
            width="25"
            height="25"
          />
        </Link>
        <Link href="/">
          <Image
            src="/image/linkin.svg"
            alt="linkin"
            width="25"
            height="25"
          />
        </Link>
      </div>
      <section className={styles.info_section}>
        <p className={styles.info}>
          Copyright © Codigo - Mobile App Developer Singapore
        </p>
        <p className={styles.info}>
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </p>
      </section>
    </footer>
  );
};

export default Footer;
