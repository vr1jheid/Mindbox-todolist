import { createContext } from "react";
import { Todo } from "../types/todoTypes";

interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  deleteAll: () => void;
  setChecked: (id: string, value: boolean) => void;
}

export const TodoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  deleteAll: () => {},
  setChecked: () => {},
});
