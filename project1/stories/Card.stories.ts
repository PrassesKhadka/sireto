import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../app/components/Card";

// This determines where your stories goes in the story list
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const validApiResponseCard: Story = {
  args: {
    apiData: {
      code: "01",
      description: "bla bla bla",
      parents: ["1", "2", "3"],
    },
  },
};
