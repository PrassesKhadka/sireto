import { Meta, StoryObj } from "@storybook/react";
import { Filter } from "@/app/page";

// This determines where your stories goes in the story list
const meta = {
  title: "Todo App using jotai/Filter",
  component: Filter,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof Filter>;

export const FilterComponent: Story = {};
