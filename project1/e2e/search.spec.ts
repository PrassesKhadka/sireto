import { BASE_URL } from "@/app/data/fetch";
import { TapiResponseSchema } from "@/app/validations";
import { test, expect, type APIResponse } from "@playwright/test";

test.describe("Testing search input", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Entering Text Into Input Field", async ({ page }) => {
    // Locating elements
    const inputFieldLocator = await page.getByPlaceholder("Search hs-code");
    const invalidInputErrorMessage = await page.locator(
      "#invalidInputErrorMessage"
    );

    // Assert
    // entering string
    await inputFieldLocator.fill("not a number");
    await expect(page.locator("#invalidInputErrorMessage")).toBeVisible();

    // entering a valid number
    await inputFieldLocator.fill("01");
    await expect(invalidInputErrorMessage).toBeHidden();
    expect(page.locator("section").getByText("01"));

    // // mocking the api call before navigating
    // await page.route(BASE_URL, async (route) => {
    //   const json = {
    //     code: "123",
    //     description: "This is a mock response",
    //     parents: ["gibberish-1", "gibberish-2", "gibberish-3"],
    //   } satisfies TapiResponseSchema;
    // });
    // await page.goto("http://localhost:3000");
    // await expect(page.getByText("123")).toBeVisible();
  });
});
