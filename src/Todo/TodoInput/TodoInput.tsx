import { Button, TextInput } from "@mantine/core";
import { memo, useContext, useState } from "react";

import { TodoContext } from "../Context/TodoContext";
import styles from "./styles.module.css";

export const TodoInput = memo(() => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

  const submitTodo = () => {
    if (!input.length) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        submitTodo();
      }}
    >
      <TextInput
        value={input}
        onKeyDown={({ key }) => {
          if (key !== "Enter") return;
          submitTodo();
        }}
        placeholder="Whats need to be done?"
        onChange={({ target }) => setInput(target.value)}
      />
      <Button variant="filled" color="cyan" type="submit">
        Add
      </Button>
    </form>
  );
});
