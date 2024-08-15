import { useContext, useMemo, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../types/todoTypes";
import { Button } from "@mantine/core";

type ListVisibleState = "all" | "active" | "completed";

const getFilteredTodos = (todos: Todo[]) => {
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

export const TodoList = () => {
  const { todos, clearCompleted, deleteTodo, setChecked } =
    useContext(TodoContext);
  const [state, setState] = useState<ListVisibleState>("all");
  const { completed, active } = useMemo(() => getFilteredTodos(todos), [todos]);

  const renderListFunc = (state: ListVisibleState) => {
    const renderItemFunc = (t: Todo) => (
      <li key={t.id}>
        <TodoItem
          todo={t}
          deleteTodo={() => {
            deleteTodo(t.id);
          }}
          setChecked={() => {
            setChecked(t.id, !t.completed);
          }}
        />
      </li>
    );

    switch (state) {
      case "all":
        return <ul>{todos.map(renderItemFunc)}</ul>;
      case "active":
        return <ul>{active.map(renderItemFunc)}</ul>;
      case "completed":
        return <ul>{completed.map(renderItemFunc)}</ul>;
      default:
        return [];
    }
  };

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      {renderListFunc(state)}
      {todos.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {!active.length ? "All done!" : `${active.length} items left`}
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <Button
              color={state === "all" ? "green" : ""}
              size="compact-xs"
              onClick={() => setState("all")}
            >
              All
            </Button>
            <Button
              color={state === "active" ? "green" : ""}
              size="compact-xs"
              onClick={() => setState("active")}
            >
              Active
            </Button>
            <Button
              color={state === "completed" ? "green" : ""}
              size="compact-xs"
              onClick={() => setState("completed")}
            >
              Completed
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={clearCompleted} size="compact-xs">
              Clear completed
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
