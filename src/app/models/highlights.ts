export interface Highlights {
  authorAvatarUrl: string;
  urlImage: string;
  title: string;
  type: HighlightKind;
  certificates?: Certificate[];
  tecnologies?: technology[];
}

export interface Certificate {
  imageUrl: string;
  title: string;
  description?: string;
}

export interface technology {
  technologytype: technologiesKind;
  skills: skills[];
}

export interface skills {
  image: string;
  alt: string;
}

export enum HighlightKind {
  technologies = 'tecnologias',
  certificates = 'certificados',
  aboutme = 'sobreMim',
}

export enum technologiesKind {
  Languages = '🧠 Linguagens',
  Frontend = '🎨 Front-end',
  Backend = '⚙️ Back-end',
  Database = '🗄️ Banco de Dados',
  Tests = '🧪 Testes & Qualidade',
  DevOps = '🚢 DevOps & Infra',
  IDEs = '🛠️ Ferramentas & IDEs',
  Architecture = '🏗️ Arquitetura & Práticas',
}
