"use client";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.desc}>
          <h1>Bem vindo a Mortydex !!</h1>
          <p>O melhor lugar para encontrar seu Morty</p>
        </div>

        <Image
          src="/assets/morty3.png"
          alt="Morty fazendo gesto de cumprimento"
          width={610}
          height={610}
          className={styles.img}
        />
      </div>
      <button className={styles.btn}>
        Buscar meu Morty
        <Image
          src="/assets/arrow-icon.svg"
          alt="Seta apontando para a direita"
          width={28}
          height={28}
          className={styles.arrow}
        />
      </button>
      <div className={styles.warning}>
        <Image
          src="/assets/morty4.png"
          alt="Morty fazendo gesto de cumprimento"
          width={610}
          height={610}
          className={styles.img}
        />
        <div className={styles.desc}>
          <h1>Cuidado !!</h1>
          <p>Você está sendo OBSERVADO!</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
