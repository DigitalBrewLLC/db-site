//TODO: update imports to use this file

export enum BlogCategory {
  SEO = "SEO",
  Accessibility = "Accessibility",
  Development = "Development",
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  categories: BlogCategory[];
  slug: string;
  content: string;
}
