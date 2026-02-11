import { PortfolioProject } from '../models/portfolio-project';

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    authorDisplayName: 'Agatha Sates',
    authorAvatarUrl: 'agatha.jpg',

    urlGifCard: 'oblivion-drive-login-e-pagina-inicial.gif',
    titleCard: 'Oblivion Drive — Locadora de Veículos (FullStack)',
    altCard: 'Projeto OblivionDrive - demonstração de login e página inicial',
    linkRepository: 'https://github.com/AgathaSates/oblivion-drive',

    gifsUrls: [
      'oblivion-drive-login-e-pagina-inicial.gif',
      'oblivion-drive-navegacao-entre-modulos.gif',
      'oblivion-drive-cadastro-de-aluguel.gif',
      'oblivion-drive-devolucao-e-missao-nota.gif',
      'oblivion-drive-envio-email-e-relatorio-financeiro.gif',
    ],

    skillsIcons: [
      { icon: 'https://skillicons.dev/icons?i=github&theme=dark', title: 'GitHub' },

      { icon: 'https://skillicons.dev/icons?i=angular&theme=dark', title: 'Angular' },
      { icon: 'https://skillicons.dev/icons?i=ts&theme=dark', title: 'TypeScript' },
      { icon: 'https://skillicons.dev/icons?i=rxjs&theme=dark', title: 'RxJS' },
      { icon: 'https://skillicons.dev/icons?i=sass&theme=dark', title: 'SCSS' },
      { icon: 'https://skillicons.dev/icons?i=dotnet&theme=dark', title: '.NET' },
      { icon: 'https://skillicons.dev/icons?i=cs&theme=dark', title: 'C#' },

      { icon: 'https://avatars.githubusercontent.com/u/890883?s=256', title: 'AutoMapper' },
      {
        icon: 'https://github.com/FluentValidation/FluentValidation/raw/main/fv-small.png',
        title: 'FluentValidation',
      },

      { icon: 'https://skillicons.dev/icons?i=azure&theme=dark', title: 'Azure Static Web Apps' },
      { icon: 'https://cdn.simpleicons.org/githubactions?viewbox=auto', title: 'GitHub Actions' },
    ],

    descriptionTitle: '📚 Introdução',
    description:
      'O OblivionDrive é uma aplicação fullstack para gestão de uma locadora de veículos, estruturada em modelo multi-tenant (isolamento por tenant) e organizada por módulos no front-end (Angular) e no back-end (.NET). O sistema cobre a gestão de clientes (PF/PJ) e condutores, veículos e grupos de veículos, fluxo completo de aluguéis (retirada e devolução), além de configurações como planos, cupons e serviços adicionais. Também inclui geração de documentos/relatórios em PDF (nota fiscal e resumo/relatório financeiro) e envio de nota fiscal por e-mail.',
    featuresTitle: '✨ Funcionalidades',
    features: [
      '🏢 Multi-tenant (locadoras por tenant)',
      '🔐 Autenticação e autorização (módulo Auth)',
      '🚗 Gestão de Aluguéis (cadastrar/listar/editar/excluir/retirada/devolução)',
      '👤 Gestão de Clientes e Condutores',
      '🧾 Emissão de Nota Fiscal em PDF',
      '📧 Envio da Nota Fiscal por e-mail',
      '📊 Relatório / resumo financeiro em PDF',
      '⚙️ Módulos de apoio: planos, cupons, serviços adicionais, preço de combustível, parceiros, veículos/grupos, funcionários',
    ],
  },

  {
    authorDisplayName: 'Agatha Sates',
    authorAvatarUrl: 'agatha.jpg',

    urlGifCard: 'organiza-med-tela-inicial.gif',
    titleCard: 'Organiza Med — Gestão de Clínica Médica (FullStack)',
    altCard: 'Projeto Organiza Med - demonstração da tela inicial',
    linkRepository: 'https://github.com/AgathaSates/organiza-med',

    gifsUrls: [
      'organiza-med-tela-inicial.gif',
      'organiza-med-medicos.gif',
      'organiza-med-pacientes.gif',
      'organiza-med-procedimentos.gif',
    ],

    skillsIcons: [
      { icon: 'https://skillicons.dev/icons?i=github&theme=dark', title: 'GitHub' },

      { icon: 'https://skillicons.dev/icons?i=angular&theme=dark', title: 'Angular' },
      { icon: 'https://skillicons.dev/icons?i=ts&theme=dark', title: 'TypeScript' },
      { icon: 'https://skillicons.dev/icons?i=rxjs&theme=dark', title: 'RxJS' },
      { icon: 'https://skillicons.dev/icons?i=sass&theme=dark', title: 'SCSS' },
      { icon: 'https://skillicons.dev/icons?i=azure&theme=dark', title: 'Azure Static Web Apps' },
      { icon: 'https://cdn.simpleicons.org/githubactions?viewbox=auto', title: 'GitHub Actions' },
    ],

    descriptionTitle: '📚 Introdução',
    description:
      'O Organiza Med é uma aplicação Angular voltada para organizar o dia a dia de uma clínica, com foco em cadastro/gestão de pacientes e médicos, controle de procedimentos (consultas e cirurgias) e centralização das atividades médicas em uma interface única. O projeto foi estruturado em módulos claros para facilitar manutenção, reutilização de componentes e evolução futura, incluindo um módulo de autenticação preparado para quando a aplicação for integrada a uma API de back-end.',
    featuresTitle: '✨ Funcionalidades',
    features: [
      '👩‍⚕️ Gestão de Médicos (cadastro, listagem, edição e exclusão)',
      '🧑‍🤝‍🧑 Gestão de Pacientes (cadastro, listagem, edição e exclusão)',
      '🏥 Gestão de Procedimentos (consultas e cirurgias)',
      '📌 Atividades Médicas (visualização/organização das atividades)',
      '🔐 Módulo de Autenticação (preparado para integração com API)',
      '🧩 Tela inicial com cards de navegação',
      '📱 Layout responsivo',
    ],
  },
  {
    authorDisplayName: 'Agatha Sates',
    authorAvatarUrl: 'agatha.jpg',
    urlGifCard: 'gestao-de-estacionamento.gif',
    titleCard: 'Gestão de Estacionamento — API (HTTP/JSON)',
    altCard: 'Projeto Gestão de estacionamento API - tela inicial no smartphone',
    linkRepository: 'https://github.com/AgathaSates/Gestao-de-Estacionamentos',
    gifsUrls: ['gestao-de-estacionamento-cadastro.png', 'gestao-de-estacionamento-checkin.png'],
    skillsIcons: [
      { icon: 'https://skillicons.dev/icons?i=github&theme=dark', title: 'Github' },
      { icon: 'https://skillicons.dev/icons?i=visualstudio&theme=dark', title: 'Visual Studio' },
      { icon: 'https://skillicons.dev/icons?i=net&theme=dark', title: '.NET' },
      { icon: 'https://skillicons.dev/icons?i=cs&theme=dark', title: 'C#' },
      { icon: 'https://skillicons.dev/icons?i=docker&theme=dark', title: 'Docker' },
      { icon: 'https://skillicons.dev/icons?i=redis&theme=dark', title: 'Redis' },
      { icon: 'https://skillicons.dev/icons?i=postgres&theme=dark', title: 'Postgres' },
      {
        icon: 'https://raw.githubusercontent.com/swagger-api/swagger-ui/master/dist/favicon-32x32.png',
        title: 'Swagger',
      },
      { icon: 'https://cdn.simpleicons.org/jsonwebtokens?viewbox=auto', title: 'JWT' },
      { icon: 'https://cdn.simpleicons.org/moq?viewbox=auto', title: 'MOQ' },
      { icon: 'https://cdn.simpleicons.org/newrelic?viewbox=auto', title: 'New Relic' },
      { icon: 'https://avatars.githubusercontent.com/u/890883?s=256', title: 'AutoMapper' },
      {
        icon: 'https://github.com/FluentValidation/FluentValidation/raw/main/fv-small.png',
        title: 'FluentValidation',
      },
      {
        icon: 'https://cdn.simpleicons.org/githubactions?viewbox=auto',
        title: 'GitHub Actions',
      },
    ],
    descriptionTitle: '📚 Introdução',
    description:
      'O projeto Gestão de Estacionamentos é uma API REST documentada com Swagger/OpenAPI, seguindo o padrão CQRS (Command Query Responsibility Segregation). Com Docker Compose incluso para subir a aplicação e dependências rapidamente, garantindo ambiente reproduzível e execução local simplificada. Automatiza o ciclo de estadia de veículos, check-in (cadastro de veículo e hóspede), alocação em vaga, checkout com cálculo pelo tempo de permanência e oferece relatórios por período.',
    featuresTitle: '✨ Funcionalidades',
    features: [
      '🚦 Check-in completo',
      '🅿️ Alocação de vaga',
      '🧾 Checkout com faturamento ',
      '📄 Consulta de faturas',
      '📊 Relatório por período',
      '✅ Validações de regras',
      '🔎 Exploração via Swagger',
      '🐳 Docker Compose',
      '🧪 Testes Automatizados',
    ],
  },
  {
    authorDisplayName: 'Agatha Sates',
    authorAvatarUrl: 'agatha.jpg',
    urlGifCard: 'gerador-de-testes.gif',
    titleCard: 'Gerador de Testes Escolar — ASP.NET MVC',
    altCard: 'Projeto Gerador de testes - tela inicial no smartphone',
    linkRepository: 'https://github.com/AgathaSates/Gerador-de-Testes',
    gifsUrls: [
      'gerador-de-testes-navegacao.gif',
      'gerador-de-testes-cadastro.gif',
      'gerador-de-testes-gerar-teste.gif',
    ],
    skillsIcons: [
      { icon: 'https://skillicons.dev/icons?i=github&theme=dark', title: 'Github' },
      { icon: 'https://skillicons.dev/icons?i=visualstudio&theme=dark', title: 'Visual Studio' },
      { icon: 'https://skillicons.dev/icons?i=net&theme=dark', title: '.NET' },
      { icon: 'https://skillicons.dev/icons?i=cs&theme=dark', title: 'C#' },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
        title: 'ASPNET MVC',
      },
      {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        title: 'MSSQL',
      },
      { icon: 'https://skillicons.dev/icons?i=html&theme=dark', title: 'HTML' },
      { icon: 'https://skillicons.dev/icons?i=css&theme=dark', title: 'CSS' },
      { icon: 'https://skillicons.dev/icons?i=bootstrap&theme=dark', title: 'Bootstrap' },
      { icon: 'https://skillicons.dev/icons?i=azure', title: 'Azure' },
      {
        icon: 'https://cdn.simpleicons.org/githubactions?viewbox=auto',
        title: 'GitHub Actions',
      },
    ],
    descriptionTitle: '📚 Introdução',
    description:
      'O Gerador de Testes é uma aplicação web desenvolvida em ASP.NET MVC com MSSQL, projetada para facilitar a criação, organização e impressão de testes escolares. A plataforma permite ao usuário cadastrar disciplinas, matérias, questões e alternativas, com regras bem definidas e geração automatizada de provas e gabaritos, proporcionando agilidade e padronização ao processo de avaliação educacional.',
    featuresTitle: '✨ Funcionalidades',
    features: [
      '📝 Geração de Testes Personalizados',
      '🧠 Banco de Questões',
      '📚 Organização Acadêmica',
      '✅ Validações Automatizadas',
      '📄 Exportação para PDF',
      '🔍 Visualização Detalhada',
      '♻️ Funcionalidades Avançadas',
      '💡 Interface Simples e Objetiva',
    ],
  },
];
