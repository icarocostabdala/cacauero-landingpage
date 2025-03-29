import Image from "next/image";
import styles from "./QuemSomos.module.css";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className={styles.quemSomos}>
      <div className={styles.colunaEsquerda}>
        <div className={styles.titulo}>Quem somos</div>
        <div className={styles.texto}>
          A Cacauêro nasceu do cuidado e da paixão de uma família que cultiva o
          cacau no sul da Bahia e transforma cada amêndoa em chocolate de alta
          qualidade no interior de São Paulo. Seguimos o conceito tree to bar,
          garantindo total controle sobre cada etapa da produção, do plantio à
          barra, para entregar um chocolate puro, de origem e e sem aditivos
          desnecessários.
        </div>
        <Image
          className={styles.imagem}
          src="/who_im_one.jpg"
          alt="Imagem Esquerda"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.colunaDireita}>
        <Image
          className={styles.imagem}
          src="/who_im_two.jpg"
          alt="Imagem Direita"
          width={500}
          height={500}
        />
        <div className={styles.titulo}>Chocolate de verdade</div>
        <div className={styles.texto}>
          Puro por natureza, nosso chocolate é livre de gordura hidrogenada,
          aromatizantes, conservantes, glúten e soja. Mantendo apenas os
          ingredientes essenciais para uma experiência intensa e equilibrada. Na
          Cacauêro, cada pedaço carrega a dedicação de quem cultiva, produz e
          respeita o verdadeiro sabor do cacau.
        </div>
      </div>
    </section>
  );
}
