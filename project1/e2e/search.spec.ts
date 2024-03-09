import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("Entering Text Into Fields", async ({ page }) => {
  await page.getByPlaceholder("Search hs-code").fill("not a number");
  await expect(page.locator("section").click());
});
