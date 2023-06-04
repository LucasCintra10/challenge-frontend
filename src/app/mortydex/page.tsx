"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Image from "next/image";

export default function Mortydex() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.searchbar}>
        <input type="text" placeholder="Nome" />
        <button type="submit">
          <Image
            src="/assets/search-icon.svg"
            alt="Ícone de lupa"
            width={28}
            height={28}
            className={styles.search}
          />
        </button>
      </div>
      <Footer />
    </main>
  );
}
