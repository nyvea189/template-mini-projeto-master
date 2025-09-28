import React from "react";
import styles from "./Projeto.module.css";

const Projeto = ({ titulo, imagem, descricao }) => {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
};

export default Projeto;
