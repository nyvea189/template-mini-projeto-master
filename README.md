# 📌 Projetos em React - Carrossel de Cards

Este projeto foi feito para **praticar React**, criando componentes
reutilizáveis e aplicando estilos com **CSS Modules**.\
O foco é aprender a **componentização** e como exibir elementos em
formato de **carrossel horizontal**.

------------------------------------------------------------------------

## 🛠️ Tecnologias usadas

-   React
-   CSS Modules
-   HTML & CSS moderno (Flexbox, Scroll Snap)

------------------------------------------------------------------------

## 📂 Estrutura de pastas

    src/
     └── components/
          ├── Projeto.jsx
          ├── Projeto.module.css
          └── Projetos.jsx
     App.jsx

------------------------------------------------------------------------

## 📌 Código completo

### 🔹 `Projeto.jsx`

``` jsx
import styles from "./Projeto.module.css";

export default function Projeto({ titulo, imagem, descricao }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}
```

------------------------------------------------------------------------

### 🔹 `Projetos.jsx`

``` jsx
import Projeto from "./Projeto";
import styles from "./Projeto.module.css";

export default function Projetos() {
  const listaProjetos = [
    {
      titulo: "Site de Portfólio",
      imagem: "https://via.placeholder.com/300x180",
      descricao: "Um site moderno e responsivo para apresentar meus trabalhos.",
    },
    {
      titulo: "Sistema de Cadastro",
      imagem: "https://via.placeholder.com/300x180",
      descricao: "Aplicação CRUD com HTML, CSS e JavaScript.",
    },
    {
      titulo: "Aplicativo de Entregas",
      imagem: "https://via.placeholder.com/300x180",
      descricao: "Projeto que calcula frete usando a API ViaCEP.",
    },
  ];

  return (
    <section>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Meus Projetos</h1>
      <div className={styles.carousel}>
        {listaProjetos.map((projeto, index) => (
          <Projeto
            key={index}
            titulo={projeto.titulo}
            imagem={projeto.imagem}
            descricao={projeto.descricao}
          />
        ))}
      </div>
    </section>
  );
}
```

------------------------------------------------------------------------

### 🔹 `Projeto.module.css`

``` css
.card {
  flex: 0 0 auto;
  width: 300px;
  margin: 0 10px;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.imagem {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.titulo {
  font-size: 1.5rem;
  margin: 12px 0 8px;
  color: #333;
}

.descricao {
  font-size: 0.95rem;
  color: #666;
}

/* Carrossel */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 20px;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.card {
  scroll-snap-align: start;
}
```

------------------------------------------------------------------------

### 🔹 `App.jsx`

``` jsx
import Projetos from "./components/Projetos";

function App() {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <Projetos />
    </div>
  );
}

export default App;
```

------------------------------------------------------------------------

## 🚀 Como rodar o projeto

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/seu-usuario/projetos-react-carrossel.git
    ```

2.  Entre na pasta:

    ``` bash
    cd projetos-react-carrossel
    ```

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Rode o projeto:

    ``` bash
    npm start
    ```

------------------------------------------------------------------------

## 🎨 Resultado esperado

-   Cada **projeto** aparece em um card com **imagem, título e
    descrição**.
-   Os cards ficam dentro de um **carrossel horizontal**.
-   É possível **rolar para o lado** para ver os próximos projetos.
-   No futuro, você pode adicionar **botões de navegação (⟵ ⟶)** para o
    carrossel.

------------------------------------------------------------------------

✍️ Feito para praticar **React, Componentização e CSS Modules** 🚀
