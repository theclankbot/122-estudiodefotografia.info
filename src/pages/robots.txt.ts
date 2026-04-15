import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response("User-agent: *\nAllow: /\nSitemap: https://estudiodefotografia.info/sitemap.xml", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
