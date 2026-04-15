export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  intro: string;
  routeLabel: string;
  startHere: string;
};

export type ContentCard = {
  title: string;
  text: string;
};

export type ContentTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ArticleSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: ContentCard[];
  table?: ContentTable;
  quote?: {
    text: string;
    author: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  kicker: string;
  intro: string;
  readTime: string;
  updatedAt: string;
  heroStat: string;
  heroLabel: string;
  summary: string[];
  sections: ArticleSection[];
  faq?: FaqItem[];
  related: string[];
};
