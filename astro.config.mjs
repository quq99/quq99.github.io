import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://quq99.github.io",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
  // Pages of the 2019 site that no longer exist on their own.
  redirects: {
    "/about/": "/",
    "/resume/": "/cv/",
    "/blog/2019-06/mapping-keys-in-vim/": "/blog/2019-05/mapping-keys-in-vim/",
    "/series/": "/blog/",
    "/tags/": "/blog/",
    "/categories/": "/blog/",
  },
});
