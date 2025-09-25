// src/components/Footer.jsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} -- nyvea maria maia de carvalho
        </p>
        <div className={styles.links}>
          <a href="https://github.com/nyvea189" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nyvea-maria-837b23351//" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="marianyvea36@gmail.com">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
