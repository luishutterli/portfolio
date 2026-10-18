// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://luishutterli.ch",
  // Slashless URLs everywhere; wrangler.jsonc serves them without a redirect (drop-trailing-slash)
  trailingSlash: "never",
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-schibsted-grotesk",
      weights: ["400 900"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes("/projects/hautkult") }),
    icon(),
  ],
});
