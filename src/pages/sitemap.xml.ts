import type { APIRoute } from "astro";
import { articles, categories } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://estudiodefotografia.info");
  const staticPaths = ["/", "/guias/"];
  const categoryPaths = categories.map((category) => `/${category.slug}/`);
  const articlePaths = articles.map((article) => `/${article.slug}/`);

  const urls = [...staticPaths, ...categoryPaths, ...articlePaths]
    .map((path) => {
      const url = new URL(path, base).toString();
      return `<url><loc>${url}</loc></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
