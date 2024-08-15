import { Center, Container } from "@mantine/core";

export const App = () => {
  return (
    <Center>
      <Container
        size="sm"
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <header style={{ textAlign: "center" }}>Todos</header>
      </Container>
    </Center>
  );
};
