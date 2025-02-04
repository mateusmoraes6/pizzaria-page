

# Pizzaria Landing Page

Este é um projeto simples de uma landing page de uma pizzaria, criado com **React**, **TypeScript** e **Tailwind CSS**. O objetivo é criar uma interface moderna e responsiva para apresentar a pizzaria, suas opções de pizza, informações de contato e seu cardápio.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e personalizada.

## Funcionalidades

- Apresentação de uma landing page com informações sobre a pizzaria.
- Exibição de uma galeria de pizzas oferecidas.
- Seção de contato e localização.
- Layout responsivo para dispositivos móveis e desktop.

## Como Usar

### 1. Clonando o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/pizzaria-page.git
```

### 2. Navegando para o Diretório do Projeto

Depois de clonar o repositório, entre na pasta do projeto:

```bash
cd pizzaria-page
```

### 3. Instalando as Dependências

Com o repositório clonado e dentro da pasta do projeto, instale as dependências usando o `npm` ou `yarn`:

Se você estiver usando o **npm**:

```bash
npm install
```

Ou se você estiver usando o **yarn**:

```bash
yarn install
```

### 4. Iniciando o Projeto

Depois de instalar as dependências, inicie o servidor de desenvolvimento com o comando abaixo:

Se estiver usando **npm**:

```bash
npm start
```

Ou se estiver usando **yarn**:

```bash
yarn start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

### 5. Compilação para Produção

Se você quiser gerar uma versão otimizada para produção, use o comando abaixo:

Se estiver usando **npm**:

```bash
npm run build
```

Ou se estiver usando **yarn**:

```bash
yarn build
```

Isso criará a versão otimizada do seu aplicativo na pasta `build`.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
pizzaria-landing-page/
│
├── public/                  
│
├── src/                     
│   ├── components/
|   |            ├── Navbar.tsx
|   |            ├── ProductCarousel.tsx   
│   ├── img/
|   |     ├── pizza.svg         
│   ├── pages/
|   |       ├── Cardapio.tsx              
│   ├── App.tsx             
│   ├── index.tsx
|   ├── main.tsx
|   ├── vite-env.d.ts                         
│
├── .gitignore             
├── eslint.config.js            
├── index.html             
├── package-lock.json             
├── package.json             
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json       
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.json          
├── README.md                
```

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se você encontrar algum problema ou quiser melhorar o código, abra uma **issue** ou envie um **pull request**.

## Licença

Este projeto está licenciado sob a **MIT License**.
