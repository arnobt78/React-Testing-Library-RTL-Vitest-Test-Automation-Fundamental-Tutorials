// Sandbox.test.tsx - Tests for the 04-user-interactions Sandbox component
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import Sandbox from "./Sandbox";

// Group of tests for the Sandbox component
describe("04-user-interactions", () => {
  // Test increment and decrement using fireEvent (legacy)
  test("should increment and decrement count using fireEvent (legacy approach)", () => {
    render(<Sandbox />);

    const increaseButton = screen.getByRole("button", { name: /increase/i });
    const decreaseButton = screen.getByRole("button", { name: /decrease/i });

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    // Using fireEvent (legacy way)
    fireEvent.click(increaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  // Test increment and decrement using userEvent (preferred)
  test("should increment and decrement count using userEvent", async () => {
    render(<Sandbox />);
    const user = userEvent.setup();

    const increaseButton = screen.getByRole("button", { name: /increase/i });
    const decreaseButton = screen.getByRole("button", { name: /decrease/i });

    // Initial count should be 0
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

    // Using userEvent (preferred way)
    await user.click(increaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

    await user.click(decreaseButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  // Test for toggling between unlike and like buttons
  it("toggles between unlike and like buttons when clicked", async () => {
    const user = userEvent.setup();
    render(<Sandbox />);

    // Initially shows unlike button (outline heart)
    const unlikeButton = screen.getByRole("button", { name: "unlike button" });
    expect(unlikeButton).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "like button" })
    ).not.toBeInTheDocument();

    // Click unlike button
    await user.click(unlikeButton);

    // Should now show like button (filled heart)
    const likeButton = screen.getByRole("button", { name: "like button" });
    expect(likeButton).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "unlike button" })
    ).not.toBeInTheDocument();
  });
});
