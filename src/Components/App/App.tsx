import { Center, Container } from "@mantine/core";
import { TodoContextContainer } from "../Todo/Context/TodoContextContainer";

export const App = () => {
  return (
    <TodoContextContainer>
      <Center>
        <Container
          size="sm"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <header style={{ textAlign: "center" }}>Todos</header>
        </Container>
      </Center>
    </TodoContextContainer>
  );
};
