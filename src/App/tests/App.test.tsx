import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";

import { App } from "../App";

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
