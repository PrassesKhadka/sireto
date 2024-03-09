// e2e testing the default next js page
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3001/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next.js/);
});
