// vitest.setup.ts - Global setup for Vitest and React Testing Library
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest expect with jest-dom matchers
expect.extend(matchers);

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
