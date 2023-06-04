/* eslint-disable @next/next/no-img-element */
import { Personagem } from "@/app/models/personagem";
import styles from "./Card.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

function Card(props: Personagem) {
  return (
    <main className={styles.container}>
      <Accordion.Root type="single" className={styles.card} collapsible>
        <Accordion.Item
          value={props.id.toString()}
          key={props.id}
          className={styles.box}
        >
          <Accordion.Trigger className={styles.trigger}>
            <img
              src={props.image}
              alt="Foto de avatar do personagem"
              className={styles.avatar}
            />
            <div className={styles.info}>
              <p className={styles.name}>Nome: {props.name}</p>
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
                <p className={styles.status}>
                  Status: {props.status == "Alive" ? "Vivo" : "Morto"}
                </p>
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
                <p>
                  Especie: {props.species == "Human" ? "Humano" : props.species}
                </p>
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
                <p>
                  Genero: {props.gender == "Male" ? "Masculino" : "Feminino"}
                </p>
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
                <p>
                  Origem:{" "}
                  {props.origin.name == "unknown"
                    ? "Desconhecida"
                    : props.origin.name}
                </p>
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
                <p>
                  Localização:{" "}
                  {props.location.name == "unknown"
                    ? "Desconhecida"
                    : props.location.name}
                </p>
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
      </Accordion.Root>
    </main>
  );
}

export default Card;
