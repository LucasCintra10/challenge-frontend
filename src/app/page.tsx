"use client";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.desc}>
          <h1>Bem vindo a Mortypedia !!</h1>
          <p>O melhor lugar para encontrar quem você procura!</p>
        </div>

        <Image
          src="/assets/morty3.png"
          alt="Morty fazendo gesto de cumprimento"
          width={610}
          height={610}
          className={styles.img}
        />
      </div>
      <a href="http://localhost:3000/mortydex" className={styles.btn}>
        Buscar
        <Image
          src="/assets/arrow-icon.svg"
          alt="Seta apontando para a direita"
          width={28}
          height={28}
          className={styles.arrow}
        />
      </a>
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
