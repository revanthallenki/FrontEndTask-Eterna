// e2e/token-table.spec.ts
import { test, expect } from "@playwright/test";

test("tokens table visual regression", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector("text=Token Discovery");
  const card = page.locator(".card-surface").first();
  await expect(card).toHaveScreenshot("token-table.png", { animations: "disabled" });
});
