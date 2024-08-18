import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

expect.extend(matchers);

vi.spyOn(window, "matchMedia").mockReturnValue({
  matches: false,
  addListener: function () {},
  removeListener: function () {},
  addEventListener: function () {},
  removeEventListener: function () {},
  media: "",
  onchange: () => {},
  dispatchEvent: () => true,
});

afterEach(() => {
  cleanup();
});
