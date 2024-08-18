import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { MantineProvider } from "@mantine/core";

describe("first", () => {
  test("Header render", () => {
    render(
      <MantineProvider>
        <App />
      </MantineProvider>
    );
    screen.queryByText("Todos");
  });
});
