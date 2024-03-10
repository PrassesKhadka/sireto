import { BASE_URL } from "@/app/data/fetch";
import { TapiResponseSchema } from "@/app/validations";
import { test, expect, type APIResponse } from "@playwright/test";

test.describe("Testing search input", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Entering Text Into Input Field", async ({ page }) => {
    // Locating elements
    const hsCodeInput = page.getByPlaceholder("Search hs-code");
    const invalidInputErrorMessage = page.locator("#invalidInputErrorMessage");
    const displayCard = page.locator("#section");
    const dataNotFoundImage = page.getByRole("img", { name: "data-not-found" });

    // search Inputs
    const testInputs = {
      validInputs: {
        dataFound: ["01", "010129", "0101", "03"],
        dataNotFound: ["12333", "010", "0101290", "4784125689228"],
      },
      invalidInputs: [
        "gibberish input string",
        "a string which is not permissible",
      ],
    };

    // Assert:
    // when no input given
    await hsCodeInput.fill("");
    await expect(invalidInputErrorMessage).toBeHidden();
    await expect(dataNotFoundImage).toBeHidden();
    await expect(displayCard).toBeHidden();

    // valid input: when data found
    for (const input of testInputs.validInputs.dataFound) {
      await hsCodeInput.fill(input);
      await expect(displayCard).toContainText(input);
      await expect(invalidInputErrorMessage).toBeHidden();
      await expect(dataNotFoundImage).toBeHidden();
    }

    // valid input: when data not found
    for (const input of testInputs.validInputs.dataNotFound) {
      await hsCodeInput.fill(input);
      await expect(invalidInputErrorMessage).toBeHidden();
      await expect(displayCard).not.toContainText(input);
      await expect(dataNotFoundImage).toBeVisible();
    }

    // invalid input
    for (const input of testInputs.invalidInputs) {
      await hsCodeInput.fill(input);
      await expect(invalidInputErrorMessage).toHaveText(
        "Should only be a number"
      );
    }

    // when searching for data skeleton loading should appear
    // for (const input of testInputs.validInputs.dataFound) {
    //   await hsCodeInput.fill(input);
    //   await expect(displayCard).toContainText("Loading");
    // }

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
