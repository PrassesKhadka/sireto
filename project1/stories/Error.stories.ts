import { Meta, StoryObj } from "@storybook/react";
import { Error } from "@/app/components/Error";
// Storybook use path relative to .storybook folder so pathname according to that
import DataNotFoundImage from "../public/images/data-not-found.jpg";

// This determines where your stories goes in the story list
const meta = {
  title: "Components/Error",
  component: Error,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof Error>;

export const invalidApiResponseCard: Story = {
  args: {
    img_url: DataNotFoundImage,
    errorMessage: "Data Not found",
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
