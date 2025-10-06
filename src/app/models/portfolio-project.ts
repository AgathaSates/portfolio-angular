export interface SkillsIcon {
  icon: string;
  title: string;
}

export interface PortfolioProject {
  authorDisplayName: string;
  authorAvatarUrl: string;
  urlGifCard: string;
  titleCard: string;
  altCard: string;
  linkRepository: string;
  gifsUrls: string[];
  skillsIcons: SkillsIcon[];
  descriptionTitle: string;
  description: string;
  featuresTitle: string;
  features: string[];
}
