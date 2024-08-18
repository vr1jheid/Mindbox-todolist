import { ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../types/todoTypes";
import { TodoContext } from "./TodoContext";

export const TodoContextContainer = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isInit, setisInit] = useState(false);

  useEffect(() => {
    const todosStr = localStorage.getItem("todos");
    if (!todosStr) return;
    const todos = JSON.parse(todosStr) as Todo[];
    setTodos(todos);
    setisInit(true);
  }, []);

  useEffect(() => {
    if (!isInit) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [isInit, todos]);

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

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        deleteAll,
        setChecked,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
