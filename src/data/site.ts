import { categories } from "./categories";
import { expansionArticlesA } from "./articles-expansion-a";
import { expansionArticlesB } from "./articles-expansion-b";
import { expansionArticlesC } from "./articles-expansion-c";
import { expansionArticlesD } from "./articles-expansion-d";
import { expansionRecoveryArticles } from "./articles-expansion-recovery";
import { curatedReadingSlugs, editorialPrinciples, homeStats, learningTracks, navigation } from "./home";
import { editorialArticles } from "./articles-editorial";
import { foundationArticles } from "./articles-foundation";
import { workflowArticles } from "./articles-workflow";
import type { Article } from "./types";

export { categories, curatedReadingSlugs, editorialPrinciples, homeStats, learningTracks, navigation };
export type { Article, ArticleSection, Category, ContentCard, ContentTable, FaqItem } from "./types";

export const articles: Article[] = [
  ...foundationArticles,
  ...editorialArticles,
  ...workflowArticles,
  ...expansionArticlesA,
  ...expansionArticlesB,
  ...expansionArticlesC,
  ...expansionArticlesD,
  ...expansionRecoveryArticles
];

export const featuredArticleSlugs = [
  "documentos-de-identidad/tamano-carnet-medidas",
  "conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm",
  "inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas",
  "post-produccion/que-es-adobe-camera-raw-y-como-empezar"
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((article) => article.category === categorySlug);
}

export function getRelatedArticles(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article));
}
