import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import netlify from "@astrojs/netlify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "static",
  adapter: netlify(),
  prefetch: true,
  prefetch: {
    prefetchAll: true,
  },
});
