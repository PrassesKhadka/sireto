import { Provider, atom, useAtom, useSetAtom } from "jotai";

interface Todo {
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const setTodos = useSetAtom(todosAtom);

  return (
    <form onSubmit={add}>
      <Filter />
      <input name="inputTitle" placeholder="Type ..." />
      <Filtered remove={remove} />
    </form>
  );
};

export default function Home() {
  return (
    <Provider>
      <h1>Jotai Todo List</h1>
      <TodoList />
    </Provider>
  );
}
