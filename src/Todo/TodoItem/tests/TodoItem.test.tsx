import { render, screen } from "@testing-library/react";
import { TodoItem } from "../TodoItem";
import { MantineProvider } from "@mantine/core";
import { userEvent } from "@testing-library/user-event";

describe("Todo item", () => {
  const deleteFunc = vi.fn();
  const setChecked = vi.fn();

  const completedTodoProps = {
    todo: {
      id: "0",
      text: "test text",
      completed: true,
    },
    deleteTodo: deleteFunc,
    setChecked,
  };

  const uncompTodoProps = { ...completedTodoProps };
  uncompTodoProps.todo.completed = false;

  test("delete todo", async () => {
    render(
      <MantineProvider>
        <TodoItem {...completedTodoProps} />
      </MantineProvider>
    );

    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(btn);
    expect(deleteFunc).toBeCalledTimes(1);
  });

  test("checked setting", async () => {
    render(
      <MantineProvider>
        <TodoItem {...completedTodoProps} />
      </MantineProvider>
    );

    const chkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    screen.getByText("test text");
    await user.click(chkbox);
    expect(setChecked).toBeCalledTimes(1);
  });
});
