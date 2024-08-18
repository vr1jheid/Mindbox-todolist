import { Container } from "@mantine/core";

import { TodoContextContainer } from "../Todo/Context/TodoContextContainer";
import { TodoInput } from "../Todo/TodoInput/TodoInput";
import { TodoList } from "../Todo/TodoList/TodoList";
import styles from "./styles.module.css";

export const App = () => {
  return (
    <TodoContextContainer>
      <Container size="xs" className={styles.container}>
        <header className={styles.header}>Todos</header>
        <TodoInput />
        <TodoList />
      </Container>
    </TodoContextContainer>
  );
};
