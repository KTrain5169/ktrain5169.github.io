import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

import viteConfig from "./vite.config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  vite: viteConfig,

  adapter: cloudflare(),
  output: "static",
});
