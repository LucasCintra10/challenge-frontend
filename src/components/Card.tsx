import { Morty } from "@/app/models/morty";
import { useEffect, useState } from "react";
import api from "@/app/lib/axios";
import styles from "./Card.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

function Card() {

    const [mortys, setMortys] = useState<Morty[]>([]);

    function getMortys () {
        api.get('/?name=morty').then(response => { 
            setMortys(response.data.results)
        })
    }
    useEffect(() => {
        getMortys()
    }, [])

  return (
    <main className={styles.container}>
      <Accordion.Root type="single" className={styles.card} collapsible>
        {mortys.map((morty) => (
        <Accordion.Item value={(morty.id).toString()} key={morty.id} className={styles.box}>
          <Accordion.Trigger className={styles.trigger}>
            <img
              src={morty.image}
              alt="Foto de avatar do morty"
              className={styles.avatar}
            />
            <div className={styles.info}>
              <p className={styles.name}>Nome: {morty.name}</p>
              <p className={styles.status}>
                Status: {morty.status == "Alive" ? "Vivo" : "Morto"}
              </p>
            </div>
            <Image
              src="/assets/arrow-down-icon.svg"
              alt="Seta para baixo"
              width={32}
              height={32}
            />
          </Accordion.Trigger>
          <Accordion.Content className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
                <p>Especie: {morty.species}</p>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
              </li>
              <li className={styles.item}>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
                <p>Genero: {morty.gender}</p>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
              </li>
              <li className={styles.item}>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
                <p>Origem: {morty.origin.name}</p>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
              </li>
              <li className={styles.item}>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
                <p>Localizacao: {morty.location.name}</p>
                <Image
                  src="/assets/dot-icon.svg"
                  alt="Seta para baixo"
                  width={16}
                  height={16}
                />
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        ))}
      </Accordion.Root>
    </main>
  );
}

export default Card;
