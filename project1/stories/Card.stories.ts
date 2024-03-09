import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../app/components/Card";

// This determines where your stories goes in the story list
const meta = {
  title: "Example/Card",
  component: Card,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const GibberishCardStory: Story = {
  // The rendering logic goes here
  args: {
    apiData: {
      code: "kfsdjla",
      description: "bla bla bla",
      parents: ["1", "2", "3"],
    },
  },
};
