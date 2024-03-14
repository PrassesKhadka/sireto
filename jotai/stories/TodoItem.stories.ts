import { Todo, TodoItem } from "@/app/page";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { atom } from "jotai";

// This determines where your stories goes in the story list
const meta = {
  title: "Todo App using Jotai/TodoItem",
  component: TodoItem,
  //   tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof TodoItem>;

const mockTodo = atom<Todo>({ title: "Random note 1", completed: false });
export const EachTodoItem: Story = {
  parameters: {
    atoms: {},
  },
  args: { atom: mockTodo, remove: fn() },
};
