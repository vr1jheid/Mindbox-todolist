import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../types/todoTypes";

const filterFuncs = () => {
  const getAll = (t: Todo) => t;
  const getCompleted = (t: Todo) => t.completed;
  const getActive = (t: Todo) => !t.completed;
  return {
    getAll,
    getCompleted,
    getActive,
  };
};

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const [state, setState] = useState<"all" | "active" | "completed">("all");

  const { getAll, getCompleted, getActive } = filterFuncs();

  const filteredTodos = todos.filter(getAll);

  return (
    <ul>
      {todos.map((t) => (
        <li>
          <TodoItem todo={t} />
        </li>
      ))}
    </ul>
  );
};
