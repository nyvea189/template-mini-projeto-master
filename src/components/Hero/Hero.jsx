import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, EU SOU 👋</p>
        <h1 className={styles.title}>
          Nyvea <br /> Maia
        </h1>
        <h2 className={styles.role}>
          Desenvolvedora Fullstack <span>|</span> Estudante
        </h2>

        <p className={styles.description}>
          "Sou a Nyvea, e transformo ideias em experiências digitais modernas,
          acessíveis e impactantes. Vamos dar vida ao seu projeto?"
        </p>

        <div className={styles.buttons}>
          <button
            onClick={toggleModal}
            className={styles.primaryBtn}
            aria-label="Abrir formulário de contato"
          >
            Fale Comigo
          </button>

          {/* ✅ Link do currículo corrigido */}
          <a
            href="https://drive.google.com/file/d/1tU7TiHpCc9UrRI6e7M-a0mjhTcc0QJcA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Meu currículo
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/public/minha-foto.jpg" // 👉 Certifique-se que a imagem está dentro da pasta public
          alt="Nyvea Maia sorrindo com microfone e computador ao fundo"
          className={styles.image}
        />
      </div>

      {/* ✅ Modal acessível e funcional */}
      {isModalOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <h3>Entre em contato 💌</h3>
            <p>
              Email: <strong>marianyvea36@gmail.com</strong>
            </p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
