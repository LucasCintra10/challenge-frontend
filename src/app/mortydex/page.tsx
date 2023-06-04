"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Image from "next/image";
import { FormEvent, use, useEffect, useState } from "react";
import api from "@/app/lib/axios";
import { Personagem } from "../models/personagem";

export default function Mortydex() {
  const [nome, setNome] = useState("");
  const [personagens, setPersonagens] = useState<Personagem[]>([]);

  function getPersonagem( event : FormEvent) {
    event.preventDefault();
    api.get(`/?name=${nome}`).then((response) => {
      setPersonagens(response.data.results);
    });
  }

  return (
    <main className={styles.main}>
      <Header />
      <div>
        <h1 className={styles.title}>Quem você está procurando ?</h1>
        <form className={styles.searchbar} onSubmit={getPersonagem}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(evento) => setNome(evento.target.value)}
          />
          <button type="submit">
            <Image
              src="/assets/search-icon.svg"
              alt="Ícone de lupa"
              width={28}
              height={28}
              className={styles.search}
            />
          </button>
        </form>
      </div>
      <div className={styles.grid}>
        {personagens.map((personagem) => (
          <Card key={personagem.id} {...personagem} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
