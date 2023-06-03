"use client";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/morty1.png"
        alt="Logo do Rick e Morty"
        width={64}
        height={64}
      />
    </footer>
  );
}
export default Footer;
