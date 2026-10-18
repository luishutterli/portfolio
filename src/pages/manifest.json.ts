import type { APIRoute } from "astro";
import { SITE_DESCRIPTION, SITE_NAME, THEME_COLOR } from "../data/site";

export const GET: APIRoute = () =>
  Response.json({
    name: `${SITE_NAME} - Portfolio`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  });
