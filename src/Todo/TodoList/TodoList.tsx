import { Button } from "@mantine/core";
import { useContext, useMemo, useState } from "react";

import { TodoContext } from "../Context/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../types/todoTypes";
import { getFilteredTodos } from "../utils/getFilteredTodos";
import styles from "./styles.module.css";

type ListVisibleState = "all" | "active" | "completed";

export const TodoList = () => {
  const { todos, clearCompleted, deleteTodo, setChecked } =
    useContext(TodoContext);
  const [state, setState] = useState<ListVisibleState>("all");
  const { completed, active } = useMemo(() => getFilteredTodos(todos), [todos]);

  if (!todos.length) {
    return <div>List is empty</div>;
  }

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
        return active.length ? (
          <ul>{active.map(renderItemFunc)}</ul>
        ) : (
          <span>No more active todos</span>
        );
      case "completed":
        return completed.length ? (
          <ul>{completed.map(renderItemFunc)}</ul>
        ) : (
          <span>There are no completed todos yet</span>
        );
      default:
        return [];
    }
  };

  return (
    <div className={styles.container}>
      {renderListFunc(state)}
      {todos.length ? (
        <div className={styles.additional}>
          <div>
            {!active.length ? "All done!" : `${active.length} items left`}
          </div>
          <div className={styles.controls}>
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
          <div className={styles.controls}>
            <Button onClick={clearCompleted} size="compact-xs">
              Clear completed
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
