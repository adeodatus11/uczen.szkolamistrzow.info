import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const githubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: githubPages ? "https://adeodatus11.github.io" : "https://uczen.szkolamistrzow.info",
  base: githubPages ? "/uczen.szkolamistrzow.info" : "/",
  output: "static",
  integrations: [sitemap()],
});
