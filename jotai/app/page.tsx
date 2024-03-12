import React from "react";
import { atom, useSetAtom } from "jotai";

interface Todo {
  title: string;
  completed: boolean;
}
type Tfilter = "all" | "completed" | "incomplete";

const filterAtom = atom<Tfilter>("all");
const todosAtom = atom<Todo[]>([]);

const Home = () => {
  return <div>Home</div>;
};
