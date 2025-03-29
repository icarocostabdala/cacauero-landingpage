"use client";

import Contato from "@/components/Contato";
import Hero from "@/components/Hero";
import Produtos from "@/components/Produtos";
import QuemSomos from "@/components/QuemSomos";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "quem-somos",
        "informacao",
        "produtos",
        "contato",
      ];
      const scrollPosition = window.scrollY + 600;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <Image
            src="/logogo.png"
            alt="Logo"
            layout="intrinsic" // Ajusta automaticamente as proporções
            width={130} // Largura desejada
            height={0} // Altura desejada
            style={{ objectFit: "contain" }}
          />
          {/* <div className="logo"></div> */}
        </div>
        <div className={styles.hamburger} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav>
          <ul className={`${styles.navList} ${isNavOpen ? styles.active : ""}`}>
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
                className={activeSection === "hero" ? "active" : ""}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#quem-somos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("quem-somos");
                }}
                className={activeSection === "quem-somos" ? "active" : ""}
              >
                Quem somos
              </a>
            </li>
            {/* <li>
              <a
                href="#informacao"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("informacao");
                }}
                className={activeSection === "informacao" ? "active" : ""}
              >
                Informação
              </a>
            </li> */}
            <li>
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("produtos");
                }}
                className={activeSection === "produtos" ? "active" : ""}
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contato");
                }}
                className={activeSection === "contato" ? "active" : ""}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div id="hero"></div>
        <div className={styles.container}>
          <section>
            <Hero />
          </section>
        </div>

        <div className={styles.container}>
          <h1 id="quem-somos"></h1>
          <section>
            <QuemSomos />
          </section>
        </div>

        {/* <div className={styles.container}>
          <h1 id="informacao">Conheça o nosso processo</h1>
          <section>
            <Informacao />
          </section>
        </div> */}

        <div className={styles.produtosContainer}>
          <h1 id="produtos">Confira nossos produtos</h1>
          <section>
            <Produtos />
          </section>
        </div>

        <div className={styles.container}>
          <h1 id="contato">Fale com a gente</h1>
          <section>
            <Contato />
          </section>
        </div>
      </main>
      <div className={styles.fixedButtons}>
        <a
          href="https://wa.me/5519999764211"
          className={styles.whatsappButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-whatsapp-80.png"
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </a>
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </div>
  );
}
