# 🧠 RewriteCode - Parte 1 (Back-End)

Este projeto faz parte do **RewriteCode**, uma iniciativa pessoal criada para demonstrar e aprimorar meus conhecimentos em **desenvolvimento web**, especialmente no **back-end** com **Node.js** e **Express**.

Esta é a **Parte 1**, uma aplicação simples feita apenas com **Express**, com o objetivo de mostrar domínio sobre a criação de **APIs REST** e rotas dinâmicas.  
A **Parte 2** será outro projeto independente, desenvolvido com **Next.js**, com foco em novos conceitos e objetivos diferentes desta primeira parte.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) (ES6+)

---

## 📁 Estrutura do Projeto

```
📦 RewriteCode
 ┗ 📂 backend
    ┣ 📜 index.js          # Arquivo principal do servidor
    ┣ 📜 package.json      # Dependências e scripts
    ┗ 📜 README.md         # Documentação
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/RewriteCode.git
cd RewriteCode/backend
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar o servidor

```bash
node index.js
```

O servidor será iniciado na porta **5000**.

---

## 🌐 Rotas Disponíveis


### `GET /get/:Item`
Retorna informações com base no parâmetro `:Item`.

#### 🔹 Exemplo: `/get/Name`
Retorna um nome aleatório da lista.

**Resposta:**
```json
{
  "Name": "Gabriela"
}
```

#### 🔹 Exemplo: `/get/QualquerCoisa`
Retorna um aviso de rota inexistente.

**Resposta:**
```json
{
  "warn": "Inezistent route"
}
```

---

## 💡 Objetivo

Esta primeira parte tem como foco:
- Demonstrar conhecimento em **Express.js**.
- Criar uma **API funcional e organizada**.
- Servir como demonstração prática do uso do **Node.js** e **JavaScript moderno**.

A **Parte 2** do projeto (**frontend**) será criada com **Next.js**, explorando outros conceitos e ferramentas — mas **sem ligação direta** com este projeto.

---

## 🧩 Sobre o RewriteCode

> O **RewriteCode** é um projeto pessoal com o objetivo de “reescrever” meu próprio código e aprendizado, aplicando boas práticas e evoluindo minhas habilidades em cada nova versão.

---

## 📜 Licença

Este projeto é de uso pessoal e educacional.  
Sinta-se à vontade para explorar, estudar e contribuir com ideias!

---

👨‍💻 **Desenvolvido por [Rafael]**
