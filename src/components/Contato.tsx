import Image from "next/image";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <div className={styles.contato}>
      <div className={`${styles.coluna} ${styles.logo}`}>
        <Image
          src="/logao.png"
          alt="Logo"
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={`${styles.coluna} ${styles.endereco}`}>
        <p>Estr. Mun. Pastor Walter Boger</p>
        <p>Número 890</p>
        <p>Eng. Coelho - SP</p>
        <p>CEP: 13449-899</p>
      </div>
      <div className={`${styles.coluna} ${styles.redesSociais}`}>
        {/* <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo-negative.png"
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </a> */}

        <a
          href="https://www.instagram.com/cacauerochocolates?igsh=ZHQ4MXB2b29pZTlq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-instagram-50.png"
            alt="Instagram"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
};

export default Contato;
