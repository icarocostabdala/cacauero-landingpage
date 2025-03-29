import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Produtos.module.css";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      imagem: "/acela-flor-sal.45.jpeg",
      titulo: "45% ao leite com avelã e flor de sal",
      // descricao: "Descrição breve do produto 1",
    },
    {
      id: 2,
      imagem: "/chocolate-irigem-45.jpeg",
      titulo: "45% ao leite",
      // descricao: "Descrição breve do produto 2",
    },
    {
      id: 3,
      imagem: "/chocolate-origem-branco.jpeg",
      titulo: "Branco",
      // descricao: "Descrição breve do produto 3",
    },
    {
      id: 4,
      imagem: "/cupuacu-70.jpeg",
      titulo: "70% intenso com cupuaçu",
      // descricao: "Descrição breve do produto 4",
    },
    {
      id: 5,
      imagem: "/intenso-70.jpeg",
      titulo: "70% intenso",
      // descricao: "Descrição breve do produto 5",
    },
    {
      id: 6,
      imagem: "/laranja-70.jpeg",
      titulo: "70% intenso com laranja",
      // descricao: "Descrição breve do produto 6",
    },
    {
      id: 7,
      imagem: "/nozes-mix-castanhas-45.jpeg",
      titulo: "45% ao leite com mix de castanhas",
      // descricao: "Descrição breve do produto 7",
    },
  ];

  const [produtosAleatorios, setProdutosAleatorios] = useState(produtos);

  useEffect(() => {
    const embaralhados = [...produtos].sort(() => Math.random() - 0.5);
    setProdutosAleatorios(embaralhados);
  }, []);

  return (
    <section id="produtos" className={styles.produtos}>
      <div className={styles.listaContainer}>
        <ul className={styles.listaProdutos}>
          {produtosAleatorios.map((produto) => (
            <li key={produto.id} className={styles.itemProduto}>
              <div>
                <Image
                  src={produto.imagem}
                  alt={produto.titulo}
                  width={400}
                  height={1000}
                />
                <h2>{produto.titulo}</h2>
                <p>{produto.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
