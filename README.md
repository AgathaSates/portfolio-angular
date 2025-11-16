# Portfólio Angular

> 🔗 **Site (Deploy):** (https://agathasates.github.io/portfolio-angular/)

# 📌 Demonstração

## 🏠 Página Inicial

![Demonstração do Projeto]()

## ✨ Destaques / Highlights

![Demonstração do Projeto]()

## 📁 Projetos em destaque

![Demonstração do Projeto]()

# 💡 Índice

- [Demonstração](#-demonstração)
- [Introdução](#-introdução)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Usadas](#-tecnologias-usadas)
- [Commits e Convenções](#-commits-e-convenções)
- [Contribuidores](#-contribuidores)
- [Mentores](#-mentores)
- [Sobre o Projeto](#-sobre-o-projeto)

# 🎨 Introdução

O **Portfólio Angular** é uma aplicação SPA construída para apresentar projetos, habilidades e destaques de forma organizada e responsiva.

A ideia é ter uma vitrine simples de navegar, onde quem acessa consegue:

- Ver os principais destaques/skills.
- Navegar por projetos com descrição, tecnologias e links externos.

Todo o conteúdo é estruturado em **models** e **arquivos de dados**, mantendo o código tipado, organizado e fácil de evoluir.

# ✨ Funcionalidades

- 🧑‍💻 **Seção de perfil / bio**  
  Bloco de apresentação com foto, nome, papel (ex.: *Desenvolvedor(a) Full-stack*) e um texto curto de introdução.

- 🌟 **Destaques (Highlights)**  
  Lista de destaques configurável (ex.: tecnologias-chave, anos de experiência, áreas de atuação), carregada a partir de um arquivo de dados tipado.

- 📁 **Listagem de projetos do portfólio**  
  Cards com título, descrição, tags/tecnologias e links (ex.: GitHub, deploy). Os dados vêm de um arquivo `.data.ts`, mantendo tudo centralizado.

- 🔍 **Modal de detalhes do projeto**  
  Componente reutilizável para exibir informações mais completas de um projeto em formato de modal (prints, descrição estendida, links etc.).

- 📱 **Bottom Navbar para mobile**  
  Navegação fixa no rodapé para telas menores, facilitando o acesso rápido às seções principais.

- 🎛️ **Botões de ação reutilizáveis**  
  Componente de botões (ex.: *Ver GitHub*, *LinkedIn*, *Download CV*, *Contato*) usado em diferentes partes da página.

- 🖼️ **Componentes visuais de imagem com “ring”**  
  Componentes para a imagem de perfil e ícones de destaque com estilo próprio.

- 🧱 **Código organizado por modelos e dados**  
  Tipagens fortes para highlights, projetos e conteúdos de rodapé, com os dados centralizados em arquivos específicos (`*.data.ts`).

- 📐 **Layout responsivo**  
  Estrutura pensada para funcionar bem em desktop, tablet e mobile, com componentes adaptáveis.

## 🧱 Estrutura do Projeto

```text
PORTFOLIO-ANGULAR
│
├── .angular/.vscode/dist/node_modules/public/scripts
│
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── as-bottom-navbar/          # Barra inferior fixa
│   │   │   ├── as-buttons/                # Conjunto de botões de ação (GitHub, LinkedIn, CV, etc.)
│   │   │   ├── as-card/                   # Cartões reutilizáveis (projetos, blocos de conteúdo)
│   │   │   ├── as-image-ring-highlights/  # Imagens/ícones de destaques com efeito de “ring”
│   │   │   ├── as-image-ring-profile/     # Componente de foto de perfil com borda decorativa
│   │   │   ├── as-navbar/                 # Navbar principal
│   │   │   ├── as-profile-bio/            # Seção de texto com bio/apresentação
│   │   │   └── as-project-modal/          # Modal para detalhes dos projetos
│   │   │
│   │   ├── data
│   │   │   ├── highlights.data.ts         # Lista de destaques do portfólio (skills, pontos fortes)
│   │   │   └── portfolio-projects.data.ts # Lista de projetos com título, descrição, links, tags etc.
│   │   │
│   │   ├── models
│   │   │   ├── bottom-content.ts          # Tipagem para conteúdos exibidos na área inferior da página
│   │   │   ├── highlights.ts              # Tipagem para itens de destaque (highlight)
│   │   │   └── portfolio-project.ts       # Tipagem dos projetos (nome, descrição, links, tecnologias...)
│   │   │
│   │   ├── app.config.ts                  # Configuração principal da aplicação (rotas, providers, etc.)
│   │   ├── app.html                       # Template do componente raiz (estrutura da página)
│   │   └── app.ts                         # Componente raiz (standalone)
│   │
│   ├── index.html                         # HTML base da aplicação
│   ├── main.ts                            # Ponto de entrada do Angular
│   └── styles.scss                        # Estilos globais do portfólio
│
├── angular.json
├── eslint.config.mts
├── package.json
└── README.
```

- 🧩 **Components**: UI e fluxo. Camada de UI. Cada pasta em components/ representa um bloco visual independente (navbar, bio, cards, modal, imagens etc.), favorecendo a reutilização e a manutenção.

- 🧠 **Models**: Interfaces e tipos para garantir tipagem forte dos dados (projetos, destaques, conteúdos) e melhorar a experiência no editor/IDE.

- 🗂️ **Data**: Fontes de dados estáticas (*.data.ts) que alimentam o portfólio. Para adicionar ou alterar um projeto/destaque, basta editar esses arquivos.

- 🎨 **styles.scss**: Estilização global (Bootstrap, utilitários, overrides, etc.).

# 🔧 Tecnologias Usadas

- ⚡ **Angular** — estrutura de SPA, componentes e organização do projeto.
- 🟦 **TypeScript** — tipagem forte em models e dados.
- 🅱️ **Bootstrap 5** + **Bootstrap Icons** — layout responsivo e ícones (ex.: `bi-search`)
- 🎨 **SCSS** — estilos globais e utilitários
- ✅ **ESLint** — padronização de código (`eslint.config.mts`)
- 📦 **Node / NPM** — gerenciamento de dependências e scripts de build.

# 🧠 Commits e Convenções

É utilizado [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) para padronizar as mensagens de commit.

# 👥 Contribuidores

<p align="left">
  <a href="https://github.com/AgathaSates">
    <img src="https://github.com/AgathaSates.png" width="100" style="border-radius: 50%;" alt="Tiago Santini"/>
    &nbsp;&nbsp;&nbsp;
  </a>
</p>

| Nome         | GitHub                                         |
| ------------ | ---------------------------------------------- |
| Agatha Sates | [@AgathaSates](https://github.com/AgathaSates) |

# 👨‍🏫 Mentores

<p align="left" style="margin-left: 27px;">
  <a href="https://github.com/tiagosantini">
    <img src="https://github.com/tiagosantini.png" width="100" style="border-radius: 50%;" alt="Tiago Santini"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/alexandre-rech-lages">
    <img src="https://github.com/alexandre-rech-lages.png" width="100" style="border-radius: 50%;" alt="Alexandre Rech"/>
  </a>
</p>

| Nome           | GitHub                                                     |
| -------------- | ---------------------------------------------------------- |
| Tiago Santini  | [@Tiago Santini](https://github.com/tiagosantini)          |
| Alexandre Rech | [@Alexandre Rech](https://github.com/alexandre-rech-lages) |

# 🏫 Sobre o Projeto

Desenvolvido durante o curso Fullstack da [Academia do Programador](https://academiadoprogramador.net) 2025
