import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://informator.szkolamistrzow.info",
  base: "/",
  output: "static",
  integrations: [sitemap()],
});
