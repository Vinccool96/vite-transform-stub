import { defineConfig } from "vitest/config"

import { stubTransform } from "../../src"

export default defineConfig({
  optimizeDeps: {},
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
