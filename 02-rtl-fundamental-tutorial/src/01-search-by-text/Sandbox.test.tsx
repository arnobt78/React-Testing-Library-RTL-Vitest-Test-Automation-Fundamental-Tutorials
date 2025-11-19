// Sandbox.test.tsx - Tests for the 01-search-by-text Sandbox component
import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";

// Group of tests for the Sandbox component
describe("01-search-by-text", () => {
  // Test various query methods for text, regex, and async
  test("demonstrates different query methods", async () => {
    render(<Sandbox />);
    console.log(screen.debug());

    // 1. getByText - exact string match
    const heading = screen.getByText("React Testing Library Examples");
    expect(heading).toBeInTheDocument();

    // expect(screen.getAllByText(/react testing/i)).toBeInTheDocument();

    // 2. getByText with regex - phone number
    const phoneRegex = /\d{3}-\d{3}-\d{4}/;
    const phoneText = screen.getByText(phoneRegex);
    expect(phoneText).toBeInTheDocument();

    // 3. queryByText - element doesn't exist
    const errorMessage = screen.queryByText("Error message");
    expect(errorMessage).not.toBeInTheDocument();

    // 4. getAllByText - multiple elements
    const items = screen.getAllByText("Item 1");
    expect(items).toHaveLength(3);

    expect(screen.getAllByText("info")).toHaveLength(3);

    // 5. findByText - async element
    const asyncMessage = await screen.findByText("Async message");
    expect(asyncMessage).toBeInTheDocument();
  });
});
