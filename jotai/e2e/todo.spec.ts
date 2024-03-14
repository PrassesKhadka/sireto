import { TodoList } from "@/app/page";
import test, { Page, expect } from "@playwright/test";

test.describe("Test playwright", () => {
  test.beforeAll(async ({ page }) => {
    page.goto("localhost:3001");
  });

  const TODO_LIST = ["1st todo", "2nd todo", "3rd todo"];

  test("should allow me to add todo items", async ({ page }) => {
    const input = await page.getByPlaceholder("Enter your todos");
    const todoListDiv = await page.getByTestId("todoList");
    const completedCheckbox = await page.getByLabel("Completed");

    // input 1st todo
    await input.fill(TODO_LIST[0]);
    await input.press("ENTER");
    await expect(todoListDiv).toHaveText(TODO_LIST[0]);

    // input 2nd todo
    await input.fill(TODO_LIST[1]);
    await input.press("ENTER");
    await expect(todoListDiv).toHaveText([TODO_LIST[0], TODO_LIST[1]]);

    input.fill("1st todo");

    await page.getByPlaceholder("Enter your todos").press("Enter");
    await page.getByPlaceholder("Enter your todos").press("Enter");
    expect(page.getByPlaceholder);
    await page.getByPlaceholder("Enter your todos").click();
    await page.getByPlaceholder("Enter your todos").fill("2nd todo");
    await page.getByPlaceholder("Enter your todos").press("Enter");
    await page.getByPlaceholder("Enter your todos").fill("3rd todo");
    await page.getByPlaceholder("Enter your todos").press("Enter");
    await page.getByText("Incomplete").click();
    await page.getByLabel("All").check();
    await page.getByLabel("1st todo").check();
    await page.getByText("Completed").click();
    await page.getByLabel("Incomplete").check();
    await page.getByLabel("All").check();
    await page.locator("#title").nth(1).check();
    await page.getByText("Completed").click();
    await page.getByText("Incomplete").click();
    await page.getByLabel("All").check();
    await page.getByText("2nd todo").click();
    await page.getByText("1st todoDelete2nd").click();
    await page.getByLabel("Completed").check();
    await page.getByLabel("Incomplete").check();
    await page.getByLabel("All").check();
    await page.getByText("Completed").click();
    await page.getByLabel("All").check();
    await page.getByText("1st todo").click();
    await page.getByText("3rd todo").click();
    await page.getByText("3rd todo").click();
    await page.locator("#title").nth(1).check();
    await page.getByText("3rd todo").click();
    await page.getByLabel("1st todo").click();
    await page.getByLabel("1st todo").click();
    await page.getByLabel("1st todo").click();
    await page.goto("http://localhost:3001/");
  });

  test("should allow me to delete todo items", async ({ page }) => {});

  const addRandomTodos = async ({ page }: { page: Page }) => {
    const input = await page.getByPlaceholder("Enter your todos");
    const randomNumberGenerator = Math.floor(Math.random() * 2);
    input.fill(TODO_LIST[randomNumberGenerator]);
    input.press("ENTER");
  };
});
