import { Container } from "@mantine/core";
import { TodoInput } from "../Todo/TodoInput/TodoInput";
import { TodoContextContainer } from "../Todo/Context/TodoContextContainer";
import { TodoList } from "../Todo/TodoList/TodoList";

export const App = () => {
  return (
    <TodoContextContainer>
      <Container
        size="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          padding: "20px",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <header style={{ textAlign: "center", fontSize: "2rem" }}>Todos</header>
        <TodoInput />
        <TodoList />
      </Container>
    </TodoContextContainer>
  );
};
