import { Meta, StoryObj } from "@storybook/react";
import { Search } from "@/app/components/Search";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

// This determines where your stories goes in the story list
const meta = {
  title: "Components/Input",
  component: Search,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const HsCodeInput: Story = {
  // To use next js routing useRouter in storybook itself
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/",
        query: {
          slug: "example-slug",
        },
      },
    },
  },
  args: {
    placeholder: "Search hs-code...",
  },
};

export const invalidHsCodeInput: Story = {
  ...HsCodeInput,
  play: async () =>
    await userEvent.type(
      screen.getByPlaceholderText("Search hs-code..."),
      "This is a string input"
    ),
};

export const validHsCodeInput: Story = {
  ...HsCodeInput,
  play: async () => {
    await userEvent.type(
      screen.getByPlaceholderText("Search hs-code..."),
      "01"
    );
  },
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = canvas.getByRole('button', { name: /Log in/i });
//     await expect(loginButton).toBeInTheDocument();
//     await userEvent.click(loginButton);
//     await expect(loginButton).not.toBeInTheDocument();
//
//     const logoutButton = canvas.getByRole('button', { name: /Log out/i });
//     await expect(logoutButton).toBeInTheDocument();
//   },
// };
