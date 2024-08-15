import { Todo } from "../types/todoTypes";

export const getFilteredTodos = (todos: Todo[]) => {
  const completed: Todo[] = [];
  const active: Todo[] = [];
  todos.forEach((t) => {
    if (t.completed) {
      completed.push(t);
    } else {
      active.push(t);
    }
  });

  return {
    completed,
    active,
  };
};
