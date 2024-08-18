import { Checkbox, CloseButton } from "@mantine/core";

import { Todo } from "../types/todoTypes";
import styles from "./styles.module.css";

interface Props {
  todo: Todo;
  setChecked: () => void;
  deleteTodo: () => void;
}

export const TodoItem = ({ todo, setChecked, deleteTodo }: Props) => {
  const { text, completed } = todo;

  return (
    <div className={styles.container}>
      <Checkbox checked={completed} onChange={setChecked} />
      <div
        className={styles.text}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </div>
      <CloseButton onClick={deleteTodo} />
    </div>
  );
};
