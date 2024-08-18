import "@testing-library/jest-dom/vitest";

import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";

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
