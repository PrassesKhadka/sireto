"use client";

import React, { FormEvent } from "react";
import {
  atom,
  useSetAtom,
  useAtom,
  useAtomValue,
  type PrimitiveAtom,
} from "jotai";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";

export interface Todo {
  title: string;
  completed: boolean;
}
type Tfilter = "all" | "completed" | "incomplete";
type RemoveFn = (todo: PrimitiveAtom<Todo>) => void;

// atoms declared -> Global states accessible everywhere
// Primitive atoms
const filterAtom = atom<Tfilter>("all");
// each Todo is a PrimitiveAtom
const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
// Derived atoms-> this atom is dependent on filterAtom and todosAtom
// if filterAtom or todosAtom changes this will also change
const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === "all") return todos;
  else if (filter === "completed")
    return todos.filter((eachTodo) => get(eachTodo).completed);
  else return todos.filter((eachTodo) => !get(eachTodo).completed);
});

// changes the state of filterAtom
export const Filter = () => {
  const [filter, set] = useAtom<Tfilter>(filterAtom);

  return (
    <FormControl>
      <FormLabel className="text-center">Todo Status</FormLabel>
      <RadioGroup
        row
        onChange={(e) => set(e.target.value as Tfilter)}
        value={filter}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel
          value="incomplete"
          control={<Radio />}
          label="Incomplete"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const TodoItem = ({
  atom,
  remove,
}: {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
}) => {
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () =>
    setItem((prev) => ({ ...prev, completed: !prev.completed }));

  return (
    <>
      <Checkbox
        id={item.title}
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <label htmlFor={item.title}>{item.title}</label>
      <Button onClick={() => remove(atom)}>Delete</Button>
      <br />
    </>
  );
};

export const Filtered = (props: { remove: RemoveFn }) => {
  const filtered = useAtomValue(filteredAtom);

  return (
    <div data-testid="todoList">
      {filtered.map((eachTodo, index) => (
        <TodoItem atom={eachTodo} {...props} key={index} />
      ))}
    </div>
  );
};

export const TodoList = () => {
  const set = useSetAtom(todosAtom);
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    if (!title) return;
    e.currentTarget.inputTitle.value = "";
    // since each todo is an atom
    set((prev) => [...prev, atom<Todo>({ title, completed: false })]);
  };
  const remove: RemoveFn = (todo) =>
    set((prev) => prev.filter((item) => item !== todo));

  return (
    <form
      onSubmit={add}
      className="flex border-4 border-red-500 flex-col gap-5"
    >
      <Filter />
      <Input
        name="inputTitle"
        type="text"
        autoComplete="off"
        placeholder="Enter your todos"
      />
      <Button type="submit">Submit</Button>
      <Filtered remove={remove} />
    </form>
  );
};

export default function Home() {
  return (
    <>
      <TodoList />
    </>
  );
}
