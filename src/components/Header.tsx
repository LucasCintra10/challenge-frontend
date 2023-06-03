"use client";
import styles from "./Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/logo.svg"
        alt="Logo do Rick e Morty"
        width={64}
        height={64}
      />
     
    </header>
  );
}
export default Header;
