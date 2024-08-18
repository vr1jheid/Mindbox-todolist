import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoInput } from "../TodoInput";
import { MantineProvider } from "@mantine/core";
import { TodoContext } from "../../Context/TodoContext";

/* const TodoContext = createContext({ addTodo: vi.fn() }); */
describe("todo input", () => {
  const addTodoMock = vi.fn();

  beforeEach(() => {
    addTodoMock.mockClear();
  });

  test("submit empty input", async () => {
    render(
      <TodoContext.Provider
        value={{ addTodo: addTodoMock } as unknown as TodoContext}
      >
        <MantineProvider>
          <TodoInput />
        </MantineProvider>
      </TodoContext.Provider>
    );

    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(btn);
    expect(addTodoMock).not.toBeCalled();
  });

  test("submit filled input", async () => {
    render(
      <TodoContext.Provider
        value={{ addTodo: addTodoMock } as unknown as TodoContext}
      >
        <MantineProvider>
          <TodoInput />
        </MantineProvider>
      </TodoContext.Provider>
    );
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button");

    await user.type(input, "Todo text");
    await user.click(btn);
    console.log(input.innerHTML);

    expect(addTodoMock).toHaveBeenCalledTimes(1);
    expect(addTodoMock).toHaveBeenCalledWith("Todo text");

    expect(input).toHaveTextContent("");
  });
});
