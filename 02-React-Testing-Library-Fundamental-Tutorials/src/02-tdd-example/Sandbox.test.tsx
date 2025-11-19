// Sandbox.test.tsx - Tests for the 02-tdd-example Sandbox component
import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";

// Group of tests for the Sandbox component
describe("02-tdd-example", () => {
  // Test header rendering for TDD example
  test("should render header", () => {
    render(<Sandbox />);
    const heading = screen.getByText(/testing/i);
    expect(heading).toBeInTheDocument();
  });
});
