# vite-transform-stub

Vite doesn't handle non JavaScript/TypeScript assets by default.

You can use this module to avoid errors when importing non-js/ts assets.

## Usage

### Installation

With npm:

```bash
npm install --save-dev vite-transform-stub
```

With yarn:

```bash
yarn add -D vite-transform-stub
```

With pnpm:

```bash
pnpm add -D vite-transform-stub
```

In your Vite config, add `vite-transform-stub` to transform non-js/ts assets you want to stub:

```ts
import { defineConfig } from "vitest/config"
import { stubTransform } from "vite-transform-stub"

export default defineConfig({
  plugins: [stubTransform()],
  test: {
    watch: false,
    globals: true,
    coverage: {
      enabled: true,
      provider: "c8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.ts"],
      all: true,
    },
  },
})
```

If you want to focus it, do it like this:

```ts
import { defineConfig } from "vitest/config"
import { stubTransform } from "vite-transform-stub"

export default defineConfig({
  plugins: [stubTransform(/^.+\.(svg)(\?\w+)?$/)],
  test: {
    watch: false,
    globals: true,
    coverage: {
      enabled: true,
      provider: "c8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.ts"],
      all: true,
    },
  },
})
```
