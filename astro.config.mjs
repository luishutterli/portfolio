// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://luishutterli.ch",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes("/projects/hautkult") }),
    icon(),
  ],
});
