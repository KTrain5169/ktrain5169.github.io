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
      build: {
        command: "astro build",
        cache: {
          input: [{ auto: true }, "!.astro/**", "!.wrangler/**"],
        },
      },
      check: "astro check && vp check",
      "check:fix": "vp check --fix",
      prepare: {
        command: "vpr hooks:setup && vpr sync && vpr generate-types",
      },
      "hooks:setup": {
        command: "vp config",
        cache: {
          output: [{ auto: true }, ".vite-hooks/_"],
        },
      },
      sync: {
        command: "astro sync",
        cache: {
          input: [{ auto: true }, "!.astro/**"],
        },
      },
      "generate-types": {
        command: "wrangler types",
        cache: {
          output: [{ auto: true }, "./worker-configuration.d.ts"],
        },
      },
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
