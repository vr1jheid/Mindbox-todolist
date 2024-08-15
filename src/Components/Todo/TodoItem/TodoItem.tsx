import { Checkbox } from "@mantine/core";
import { Todo } from "../types/todoTypes";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, text, completed } = todo;
  const { setChecked } = useContext(TodoContext);
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <Checkbox
        checked={completed}
        onChange={(e) => {
          setChecked(id, e.target.checked);
        }}
      />{" "}
      {text}
    </div>
  );
};
