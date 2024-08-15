import { ReactNode, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "../types/todoTypes";
import { v4 as uuidv4 } from "uuid";

export const TodoContextContainer = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const todo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodos((prev) => [todo, ...prev]);
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const setChecked = (id: string, value: boolean) => {
    setTodos((prev) => {
      const copy = [...prev];
      const index = prev.findIndex((t) => t.id === id);
      copy[index].completed = value;
      return copy;
    });
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, deleteAll, setChecked }}
    >
      {children}
    </TodoContext.Provider>
  );
};
