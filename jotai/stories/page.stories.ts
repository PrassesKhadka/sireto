import { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "@/app/page";

// This determines where your stories goes in the story list
const meta = {
  title: "Todo App using Jotai/Home",
  component: TodoList,
  //   tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof TodoList>;

export const WholePage: Story = {
  args: {},
};
