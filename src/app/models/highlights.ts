export interface Highlights {
  authorAvatarUrl: string;
  urlImage: string;
  title: string;
  type: HighlightKind;
  certificates?: Certificate[];
}

export interface Certificate {
  imageUrl: string;
  title: string;
  description?: string;
}

export enum HighlightKind {
  technologies = 'tecnologias',
  certificates = 'certificados',
  aboutme = 'sobreMim',
}
