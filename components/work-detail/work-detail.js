import Image from "next/image";
import Link from "next/link";
import styles from "./work-detail.module.scss";

const WorkDetail = () => {
  return (
    <div className={styles.detail_container}>
      <section>
        <h1>OCBC Pay Anyone</h1>
        <div className={styles.marketplaces}>
          <Link href="/">
            <a>
              <Image
                src="/image/apple.png"
                alt="apple"
                width="20"
                height="10"
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
                height="10"
              />
              <div>
                <p>Available on</p>
                <h4>App store</h4>
              </div>
            </a>
          </Link>
        </div>
        <p className={styles.info}>
          You can now pay kopitiam uncles, merchants, peers, and dears with the
          OCBC Pay Anyone app, and you can even withdraw cash by scanning the QR
          code at OCBC’s ATMs without your card!
        </p>
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default WorkDetail;
