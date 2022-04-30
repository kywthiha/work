import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";
const Header = () => {
  const [menOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.container}>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 91.7 11.5"
          className={styles.logo}
        >
          <path d="M35.2,11.5c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c2.4,0,4.4-2,4.4-4.4s-2-4.4-4.4-4.4c-0.4,0-0.7-0.3-0.7-0.7 S34.8,0,35.2,0l0,0c3.2,0,5.7,2.6,5.7,5.7S38.3,11.5,35.2,11.5"></path>
          <path d="M51,11.5c-0.4,0-0.7-0.3-0.7-0.7V0.7C50.3,0.3,50.6,0,51,0s0.7,0.3,0.7,0.7v10.1C51.7,11.1,51.4,11.4,51,11.5"></path>
          <path d="M86,11.5c-3.2,0-5.7-2.6-5.7-5.7C80.2,2.6,82.8,0,86,0s5.7,2.6,5.7,5.7l0,0C91.7,8.9,89.1,11.5,86,11.5 M86,1.4 c-2.4,0-4.4,2-4.3,4.4s2,4.4,4.4,4.3c2.4,0,4.3-1.9,4.3-4.3C90.3,3.4,88.4,1.4,86,1.4"></path>
          <path d="M66.9,11.5c-3.2,0-5.7-2.6-5.7-5.7S63.7,0,66.9,0c0.4,0,0.7,0.3,0.7,0.7s-0.3,0.7-0.7,0.7l0,0 c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.1,0,4-1.6,4.3-3.7h-1.3c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2c0.4,0,0.7,0.3,0.7,0.7l0,0 C72.6,8.9,70,11.5,66.9,11.5"></path>
          <path d="M5.8,11.5C2.6,11.5,0,8.9,0,5.7S2.6,0,5.8,0c0.4,0,0.7,0.3,0.7,0.7S6.2,1.4,5.8,1.4l0,0c-2.4,0-4.4,2-4.4,4.4 s2,4.4,4.4,4.4c0.4,0,0.7,0.3,0.7,0.7C6.5,11.2,6.2,11.5,5.8,11.5"></path>
          <path d="M20.4,11.5c-3.2,0-5.7-2.6-5.7-5.8S17.3,0,20.5,0s5.7,2.6,5.7,5.7C26.1,8.9,23.5,11.5,20.4,11.5 M20.4,1.4 c-2.4,0-4.4,2-4.3,4.4c0,2.4,2,4.4,4.4,4.3c2.4,0,4.3-1.9,4.3-4.3C24.7,3.4,22.8,1.4,20.4,1.4"></path>
        </svg>
      </Link>
      <div className={styles.nav}>
        <div
          className={`${menOpen && styles.open_active_ul} ${styles.mobile_nav}`}
        >
          <ul>
            <li className={styles.active_link}>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/">Solutions</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <button>Request a quote</button>
            </li>
            <li className={styles.let_chat}>
              <Link href="/">Let's chat</Link>
            </li>
          </ul>
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
        </div>
      </div>
      <div className={styles.mobile_menu_container}>
        <button
          className={`${styles.mobile_menu_icon}`}
          onClick={(e) => {
            setMenuOpen(!menOpen);
          }}
        >
          <span className={`${menOpen && styles.active}`}></span>
          <div
            className={`${styles.mobile_menu_icon_list} ${
              menOpen && styles.open_active
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
