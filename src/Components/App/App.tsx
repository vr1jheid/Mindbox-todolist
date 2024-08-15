import { Center, Container } from "@mantine/core";
import { TodoInput } from "../Todo/TodoInput/TodoInput";
import { TodoContextContainer } from "../Todo/Context/TodoContextContainer";
import { TodoList } from "../Todo/TodoList/TodoList";

export const App = () => {
  return (
    <TodoContextContainer>
      <Center>
        <Container
          size="sm"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <header style={{ textAlign: "center" }}>Todos</header>
          <TodoInput />
          <TodoList />
        </Container>
      </Center>
    </TodoContextContainer>
  );
};
