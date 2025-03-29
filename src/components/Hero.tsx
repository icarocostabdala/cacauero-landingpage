import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.textContainer}>
        <h2>Tree to bar</h2>
        <h1>Dos nossos cacaueros no sul da Bahia até a barra de chocolate.</h1>
      </div>
    </section>
  );
}
