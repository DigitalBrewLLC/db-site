export enum BlogCategory {
  SEO = "SEO",
  Accessibility = "Accessibility",
  Development = "Development",
}

type AppLink = {
  label: string;
  href: string;
};

export const DigitalBrewLinks: AppLink[] = [
  { label: "About", href: "/digital-brew-about" },
  { label: "Blog", href: "/digital-brew-blog" },
  { label: "Contact", href: "/digital-brew-contact" },
  { label: "Projects", href: "/digital-brew-solutions" },
];

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  categories: BlogCategory[];
  slug: string;
  content: string;
}
