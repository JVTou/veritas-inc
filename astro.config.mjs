import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://veritas-inc.netlify.app/",
  integrations: [tailwind(), icon(), sitemap()],
  output: "static",
  adapter: netlify(),
  prefetch: true,
  prefetch: {
    prefetchAll: true,
  },
});
