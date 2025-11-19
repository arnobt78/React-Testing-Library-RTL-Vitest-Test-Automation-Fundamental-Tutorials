// Sandbox.test.tsx - Tests for the 03-search-by-role Sandbox component
import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";
import { logRoles } from "@testing-library/react";

// Group of tests for the Sandbox component
describe("Sandbox Component", () => {
  // Test navigation and links rendering
  test("renders nav and  navigation links", () => {
    const { container } = render(<Sandbox />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    // getByRole throws an error if there are multiple elements with the same role
    // two options:provide name or getAllByRole (returns a list)
    logRoles(container);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  // Test heading hierarchy
  test("renders headings with correct hierarchy", () => {
    render(<Sandbox />);
    expect(
      screen.getByRole("heading", { name: "Main Heading", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Subheading", level: 2 })
    ).toBeInTheDocument();
  });

  // Test image rendering and attributes
  test("renders image with alt text", () => {
    render(<Sandbox />);
    // expect(screen.getByRole('img', { name: 'Example' })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /example/i })).toHaveAttribute(
      "src",
      "example.jpg"
    );
  });

  // Test list rendering
  test("renders list", () => {
    render(<Sandbox />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("renders cards", () => {
    render(<Sandbox />);
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  test("renders initial buttons", () => {
    render(<Sandbox />);

    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  test("error button is not initially visible", () => {
    render(<Sandbox />);

    expect(
      screen.queryByRole("button", { name: "Error" })
    ).not.toBeInTheDocument();
  });

  test("async button appears after delay", async () => {
    render(<Sandbox />);

    // Button should not be present initially
    expect(
      screen.queryByRole("button", { name: "Async Button" })
    ).not.toBeInTheDocument();

    // Wait for button to appear using findByRole
    const asyncButton = await screen.findByRole("button", {
      name: "Async Button",
    });
    expect(asyncButton).toBeInTheDocument();
  });

  test("form renders", () => {
    render(<Sandbox />);
    expect(screen.getByRole("textbox", { name: /username/i })).toHaveValue("");
    expect(screen.getByLabelText(/password/i)).toHaveValue("");
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
