import { defineConfig } from "vitest/config"

export default defineConfig({
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
