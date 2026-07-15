import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://uczen.szkolamistrzow.info",
  output: "static",
  integrations: [sitemap()],
});
