// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.001 } },
  use: { headless: true, viewport: { width: 1280, height: 800 } },
});
