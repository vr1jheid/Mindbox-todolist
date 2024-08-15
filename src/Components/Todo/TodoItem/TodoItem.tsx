import { Checkbox, CloseButton } from "@mantine/core";
import { Todo } from "../types/todoTypes";

interface Props {
  todo: Todo;
  setChecked: () => void;
  deleteTodo: () => void;
}

export const TodoItem = ({ todo, setChecked, deleteTodo }: Props) => {
  const { text, completed } = todo;

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #5c9ed7",
        margin: "15px 0",
        padding: 3,
        borderRadius: 4,
      }}
    >
      <Checkbox checked={completed} onChange={setChecked} />
      <div
        style={{
          textAlign: "left",
          flexGrow: 1,
          padding: "0 10px",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </div>
      <CloseButton onClick={deleteTodo} />
    </div>
  );
};
