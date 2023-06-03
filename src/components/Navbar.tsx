import styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/assets/logo.svg"
        alt="Icone de menu"
        width={88}
        height={88}
      />
      <ul>
        <li className={styles.item}>
          <Image
            src="/assets/episodes-icon.svg"
            alt="Icone de menu"
            width={24}
            height={24}
          />
          <a href="">Episodios</a>
        </li>

        <li className={styles.item}>
          <Image
            src="/assets/episodes-icon.svg"
            alt="Icone de menu"
            width={24}
            height={24}
          />
          <a href="">Personagens</a>
        </li>

        <li className={styles.item}>
          <Image
            src="/assets/episodes-icon.svg"
            alt="Icone de menu"
            width={24}
            height={24}
          />
          <a href="">Locais</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
