import { HighlightKind, Highlights, technologiesKind } from '../models/highlights';

export const HIGHLIGHTS_LIST: readonly Highlights[] = [
  {
    authorAvatarUrl: 'agatha.jpg',
    urlImage: 'highlights-tec.jpg',
    title: 'Tecnologias',
    type: HighlightKind.technologies,
    tecnologies: [
      {
        technologytype: technologiesKind.Languages,
        skills: [
          { image: 'https://skillicons.dev/icons?i=cs', alt: 'C#' },
          { image: 'https://skillicons.dev/icons?i=ts', alt: 'TypeScript' },
          { image: 'https://skillicons.dev/icons?i=js&theme=dark', alt: 'JavaScript' },
        ],
      },
      {
        technologytype: technologiesKind.Frontend,
        skills: [
          { image: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
          { image: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
          { image: 'https://skillicons.dev/icons?i=sass', alt: 'SASS' },
          { image: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap' },
          { image: 'https://skillicons.dev/icons?i=angular', alt: 'Angular' },
          { image: 'https://skillicons.dev/icons?i=rxjs&theme=dark', alt: 'RxJS' },
        ],
      },
      {
        technologytype: technologiesKind.Backend,
        skills: [
          { image: 'https://skillicons.dev/icons?i=dotnet', alt: '.Net' },
          { image: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js' },
          {
            image:
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
            alt: 'ASP.NET Core',
          },
          {
            image:
              'https://raw.githubusercontent.com/swagger-api/swagger-ui/master/dist/favicon-32x32.png',
            alt: 'OpenAPI/Swagger',
          },
          {
            image: 'https://cdn.simpleicons.org/jsonwebtokens?viewbox=auto',
            alt: 'JWT',
          },
          {
            image: 'https://github.com/FluentValidation/FluentValidation/raw/main/fv-small.png',
            alt: 'FluentValidation',
          },
          { image: 'https://avatars.githubusercontent.com/u/890883?s=256', alt: 'AutoMapper' },
        ],
      },
      {
        technologytype: technologiesKind.DevOps,
        skills: [
          {
            image: 'https://cdn.simpleicons.org/githubactions?viewbox=auto',
            alt: 'Github Actions',
          },
          { image: 'https://cdn.simpleicons.org/newrelic?viewbox=auto', alt: 'New Relic' },
          { image: 'https://skillicons.dev/icons?i=redis', alt: 'Redis' },
          { image: 'https://skillicons.dev/icons?i=azure', alt: 'Azure' },
          { image: 'https://skillicons.dev/icons?i=docker', alt: 'Docker' },
          { image: 'https://skillicons.dev/icons?i=postman', alt: 'Postman' },
        ],
      },
      {
        technologytype: technologiesKind.Database,
        skills: [
          { image: 'efcore.svg', alt: 'EF Core' },
          {
            image:
              'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
            alt: 'MSSQL',
          },
          { image: 'https://skillicons.dev/icons?i=mysql', alt: 'MySQL' },
          { image: 'https://skillicons.dev/icons?i=postgres', alt: 'PostgresSQL' },
        ],
      },
      {
        technologytype: technologiesKind.Tests,
        skills: [
          { image: 'https://cdn.simpleicons.org/moq?viewbox=auto', alt: 'Moq' },
          { image: 'https://cdn.simpleicons.org/selenium?viewbox=auto', alt: 'Selenium' },
          { image: 'https://cdn.simpleicons.org/eslint?viewbox=auto', alt: 'ESLINT' },
          { image: 'https://cdn.simpleicons.org/prettier?viewbox=auto', alt: 'Prettier' },
        ],
      },
      {
        technologytype: technologiesKind.IDEs,
        skills: [
          { image: 'https://skillicons.dev/icons?i=github', alt: 'GitHub' },
          { image: 'https://skillicons.dev/icons?i=visualstudio', alt: 'Visual Studio' },
          { image: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code' },
          { image: 'https://skillicons.dev/icons?i=powershell&theme=dark', alt: 'PowerShell' },
          { image: 'https://cdn.simpleicons.org/dbeaver?viewbox=auto', alt: 'DBeaver' },
          { image: 'https://cdn.simpleicons.org/nuget?viewbox=auto', alt: 'NuGet' },
          { image: 'https://cdn.simpleicons.org/npm?viewbox=auto', alt: 'npm' },
        ],
      },
      {
        technologytype: technologiesKind.Architecture,
        skills: [
          { image: 'https://cdn.simpleicons.org/excalidraw?viewbox=auto', alt: 'Excalidraw' },
          { image: 'cqrs.svg', alt: 'CQRS' },
          { image: 'ddd.svg', alt: 'DDD' },
        ],
      },
    ],
  },
  {
    authorAvatarUrl: 'agatha.jpg',
    urlImage: 'highlights-certification.png',
    title: 'Certificados',
    type: HighlightKind.certificates,
    certificates: [
      { imageUrl: 'certificado-agatha-logica-de-programação.jpg', title: 'Lógica de Programação' },
      { imageUrl: 'certificado-agatha-orientacao-a-objetos.jpg', title: 'Orientação a Objetos' },
      {
        imageUrl: 'certificado-agatha-aspnet-mvc.jpg',
        title: 'Desenvolvimento Web com ASPNET MVC',
      },
      { imageUrl: 'certificado-agatha-banco-de-dados.jpg', title: 'Banco de Dados' },
      { imageUrl: 'certificado-agatha-testes-automatizados.jpg', title: 'Testes Automatizados' },
      { imageUrl: 'certificado-agatha-api.jpg', title: 'Desenvolvimento de API' },
      {
        imageUrl: 'Certificado-agatha-conclusao.jpg',
        title: 'Conclusão do curso (Academia do Programador)',
      },
    ],
  },
  {
    authorAvatarUrl: 'agatha.jpg',
    urlImage: 'highlights-about.png',
    title: 'Sobre mim',
    type: HighlightKind.aboutme,
  },
];
