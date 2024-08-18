import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoContext } from "../Context/TodoContext";
import { Todo } from "../types/todoTypes";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  const todos: Todo[] = [
    {
      id: "4d9611ba-cbdc-492d-89b2-20f1f8518fdb",
      text: "first",
      completed: false,
    },
    {
      id: "1fcd1c07-d425-4506-9ebe-f407dbd5a752",
      text: "457",
      completed: false,
    },
    {
      id: "cd4bec92-61fc-4d9d-98df-54548f5aa1d0",
      text: "3333",
      completed: true,
    },
    {
      id: "e4d9e8a6-6d2c-43a3-8808-e7ec27804327",
      text: "12",
      completed: false,
    },
  ];

  const clearCompleted = vi.fn(() => todos.filter((t) => !t.completed));

  test("empty list", () => {
    render(
      <TodoContext.Provider value={{ todos: [] } as unknown as TodoContext}>
        <MantineProvider>
          <TodoList />
        </MantineProvider>
      </TodoContext.Provider>
    );
    screen.getByText("List is empty");
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  test("4 items list (3 completed)", () => {
    render(
      <TodoContext.Provider value={{ todos } as TodoContext}>
        <MantineProvider>
          <TodoList />
        </MantineProvider>
      </TodoContext.Provider>
    );
    screen.getByRole("list");
    const todoDivs = screen.getAllByRole("listitem");
    expect(todoDivs).toHaveLength(4);

    screen.getByText("first");
    screen.getByText("3 items left");
  });

  test("control buttons", async () => {
    render(
      <TodoContext.Provider
        value={{ todos, clearCompleted } as unknown as TodoContext}
      >
        <MantineProvider>
          <TodoList />
        </MantineProvider>
      </TodoContext.Provider>
    );
    const completedBtn = screen.getByRole("button", {
      name: "Clear completed",
    });
    /*     const activeBtn = screen.getByRole("button", { name: "All" });
    const completedBtn = screen.getByRole("button", { name: "All" }); */

    const user = userEvent.setup();
    await user.click(completedBtn);
    expect(clearCompleted).toBeCalledTimes(1);
  });
});
