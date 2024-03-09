import { type Meta, type StoryObj } from "@storybook/react";
import { Search } from "@/app/components/Search";

const meta = {
  title: "Example/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const EmptySearchInput: Story = {
  args: {
    placeholder: "Search something ...",
  },
};
