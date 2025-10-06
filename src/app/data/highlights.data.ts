import { HighlightKind, Highlights } from '../models/highlights';

export const HIGHLIGHTS_LIST: readonly Highlights[] = [
  {
    authorAvatarUrl: 'agatha.jpg',
    urlImage: 'highlights-tec.jpg',
    title: 'Tecnologias',
    type: HighlightKind.technologies,
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
    ],
  },
  {
    authorAvatarUrl: 'agatha.jpg',
    urlImage: 'highlights-about.png',
    title: 'Sobre mim',
    type: HighlightKind.aboutme,
  },
];
