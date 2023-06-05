"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Image from "next/image";
import { FormEvent, useState } from "react";
import api from "@/app/lib/axios";
import { Personagem } from "../models/personagem";
import toast, { Toaster } from "react-hot-toast";

export default function Mortydex() {

  /* Hook para armazenar o nome do personagem */
  const [nome, setNome] = useState("");

  /* Hook para armazenar os personagens */
  const [personagens, setPersonagens] = useState<Personagem[]>([]);

  /* Função para buscar o personagem na API*/
  function getPersonagem(event: FormEvent) {
    event.preventDefault();
    api
      .get(`/?name=${nome}`)
      .then((response) => {
        setPersonagens(response.data.results);
      })
      /* Caso o personagem não seja encontrado, exibe um toast */
      .catch((error) => {
        toast.error("Personagem não encontrado");
      });
  }

  return (
    <main className={styles.main}>
      <Header />
      <Toaster />
      <div>
        <h1 className={styles.title}>Quem você está procurando ?</h1>
        {/* Formulário para buscar o personagem */}
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
      {/* Grid para exibir os personagens */}
      <div className={styles.grid}>
        {personagens.map((personagem) => (
          <Card key={personagem.id} {...personagem} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
