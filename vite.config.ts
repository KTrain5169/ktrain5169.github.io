import tailwindcss from "@tailwindcss/vite";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  plugins: lazyPlugins(() => [tailwindcss()]),
  staged: {
    "*": "vp check --fix",
  },
  run: {
    cache: {
      tasks: true,
    },
    tasks: {
      build: "astro build",
      check: "astro check && vp check",
      "check:fix": "vp check --fix",
      prepare: "vp config && astro sync",
      "generate-types": "wrangler types",
    },
  },
  fmt: {
    semi: true,
    sortTailwindcss: true,
    ignorePatterns: ["package.json", "pnpm-lock.yaml"],
  },
  lint: {
    plugins: ["eslint", "import", "jsdoc", "oxc", "typescript", "promise", "node", "unicorn"],
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
