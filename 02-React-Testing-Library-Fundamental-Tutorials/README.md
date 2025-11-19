# React Testing Library Fundamental Tutorial (Vitest + RTL Fundamental Tutorial)

A comprehensive tutorial project for learning React Testing Library fundamentals through hands-on examples. This project provides six progressive sandbox tutorials covering essential testing concepts from basic text queries to complete application integration testing.

![Screenshot 2025-06-18 at 03 48 01](https://github.com/user-attachments/assets/4d97a300-d4d4-48e9-8c8d-336de91a4b60)
![Screenshot 2025-06-18 at 03 48 14](https://github.com/user-attachments/assets/9b4881d3-cff4-4b49-b673-08b4c1e0e72b)
![Screenshot 2025-06-18 at 03 48 36](https://github.com/user-attachments/assets/eb6cf997-7721-445f-9e78-24b2e6e34c80)
![Screenshot 2025-06-18 at 03 48 47](https://github.com/user-attachments/assets/198486a2-d452-44ae-a24d-3a3a64febb3d)
![Screenshot 2025-06-18 at 03 47 33](https://github.com/user-attachments/assets/d8f7062a-140b-4adc-888c-4b3f3eaf6cd9)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing Setup](#testing-setup)
- [Running Tests](#running-tests)
- [Tutorial Walkthrough](#tutorial-walkthrough)
- [Project Components](#project-components)
- [Understanding Test Files](#understanding-test-files)
- [Key Concepts](#key-concepts)
- [Code Snippets](#code-snippets)
- [Reusing Components](#reusing-components)
- [Environment Variables](#environment-variables)
- [Configuration Files](#configuration-files)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Overview

This tutorial project is designed as a comprehensive learning resource for React Testing Library. It includes six progressive sandbox tutorials that teach fundamental testing concepts:

1. **Search by Text** - Learn text-based query methods
2. **TDD Example** - Introduction to Test-Driven Development
3. **Search by Role** - Learn accessibility-focused role-based queries
4. **User Interactions** - Test user events and interactions
5. **Form Testing** - Comprehensive form validation testing
6. **Reviews App** - Complete application with integration testing

Each tutorial builds upon previous concepts, providing a structured learning path from basic queries to complex application testing.

---

## Technology Stack

### Core Technologies

- **React 18.3.1** - Modern React library for building user interfaces
- **TypeScript 5.5.3** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.8** - Next-generation frontend build tool for fast development

### Testing Stack

- **Vitest 2.1.3** - Fast unit test framework powered by Vite
- **React Testing Library 16.0.1** - Simple and complete React DOM testing utilities
- **@testing-library/jest-dom 6.5.0** - Custom Jest matchers for DOM elements
- **@testing-library/user-event 14.5.2** - Simulate user interactions in tests
- **jsdom 25.0.1** - JavaScript implementation of the DOM for testing

### Additional Libraries

- **react-icons 5.3.0** - Popular icons library for React
- **validator 13.12.0** - String validation library
- **Tailwind CSS 3.4.14** - Utility-first CSS framework

### Development Tools

- **ESLint 9.11.1** - Code linting and quality assurance
- **PostCSS 8.4.47** - CSS transformation tool

---

## Project Structure

```bash
02-React-Testing-Library-Fundamental-Tutorials/
├── public/                    # Static assets
│   ├── queries.png           # Query methods reference image
│   └── vite.svg              # Vite logo
├── src/
│   ├── __tests__/            # Main App test
│   │   └── App.test.tsx      # App component test
│   ├── 01-search-by-text/    # Tutorial 1: Text queries
│   │   ├── Sandbox.tsx       # Component demonstrating text queries
│   │   └── Sandbox.test.tsx  # Tests for text query methods
│   ├── 02-tdd-example/       # Tutorial 2: TDD basics
│   │   ├── Sandbox.tsx       # Simple TDD example component
│   │   └── Sandbox.test.tsx  # Basic TDD test
│   ├── 03-search-by-role/    # Tutorial 3: Role-based queries
│   │   ├── Sandbox.tsx       # Component with various roles
│   │   └── Sandbox.test.tsx  # Tests for role queries
│   ├── 04-user-interactions/ # Tutorial 4: User events
│   │   ├── Sandbox.tsx       # Interactive component
│   │   └── Sandbox.test.tsx  # User interaction tests
│   ├── 05-form-testing/      # Tutorial 5: Form validation
│   │   ├── Sandbox.tsx       # Signup form component
│   │   └── Sandbox.test.tsx  # Form validation tests
│   ├── 06-reviews-app/       # Tutorial 6: Complete app
│   │   ├── __tests__/        # Reviews app tests
│   │   │   ├── Form.test.tsx # Form component tests
│   │   │   ├── List.test.tsx # List component tests
│   │   │   └── Sandbox.test.tsx # Integration tests
│   │   ├── Form.tsx          # Review form component
│   │   ├── List.tsx          # Reviews list component
│   │   └── Sandbox.tsx       # Main app component
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles (Tailwind)
│   ├── vitest.setup.ts       # Vitest configuration and setup
│   └── vite-env.d.ts         # Vite type definitions
├── index.html                # HTML entry point
├── package.json              # Project dependencies and scripts
├── vite.config.ts            # Vite and Vitest configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript app-specific config
├── tsconfig.node.json        # TypeScript Node.js config
├── eslint.config.js          # ESLint configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

---

## Features

### ✅ Progressive Learning Path

- Six structured tutorials from basic to advanced
- Each tutorial builds on previous concepts
- Real-world examples and patterns

### ✅ Comprehensive Testing Coverage

- Text-based queries (getByText, queryByText, getAllByText, findByText)
- Role-based queries (getByRole, queryByRole, findByRole)
- User interaction testing (fireEvent, userEvent)
- Form validation testing
- Integration testing patterns

### ✅ Modern Development Experience

- Fast HMR (Hot Module Replacement) with Vite
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for rapid styling

### ✅ Educational Examples

- Well-commented code explaining concepts
- Multiple testing approaches demonstrated
- Best practices and patterns

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)
- Basic knowledge of React and TypeScript
- Understanding of JavaScript fundamentals

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

---

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd 02-React-Testing-Library-Fundamental-Tutorials
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install all required dependencies including:

   - React and React DOM
   - Vitest and testing libraries
   - TypeScript and type definitions
   - Vite and build tools
   - Tailwind CSS and PostCSS
   - react-icons and validator libraries

3. **Verify installation:**

   ```bash
   npm list --depth=0
   ```

---

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port). You'll see all six tutorial sandboxes rendered on the page.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

---

## Testing Setup

### Understanding the Test Configuration

The testing environment is configured in two main files:

#### 1. `vite.config.ts`

This file configures Vitest with React support and test exclusions:

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test APIs
    environment: "jsdom", // Use jsdom for DOM APIs
    setupFiles: "./src/vitest.setup.ts", // Global test setup
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/final/**", // Exclude the final folder from tests
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*",
    ],
  },
});
```

**Key Configuration Points:**

- `globals: true` - Makes `it`, `describe`, `expect` available globally without imports
- `environment: "jsdom"` - Provides a DOM environment for testing React components
- `setupFiles` - Points to the setup file that configures testing utilities
- `exclude` - Specifies patterns to exclude from test runs

#### 2. `src/vitest.setup.ts`

This file sets up testing utilities and global configurations:

```typescript
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
```

**What This Does:**

- **Extends expect with Jest-DOM matchers** - Adds matchers like `toBeInTheDocument()`, `toHaveClass()`, `toHaveValue()`, etc.
- **Automatic cleanup** - Removes rendered components from the DOM after each test to prevent test pollution

#### 3. `tsconfig.app.json`

TypeScript configuration includes testing types:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

This ensures TypeScript recognizes:

- Global Vitest functions (`it`, `describe`, `expect`)
- Jest-DOM matcher types for better autocomplete

---

## Running Tests

### Run All Tests

```bash
npm test
```

This starts Vitest in watch mode, automatically re-running tests when files change.

### Run Tests Once (CI Mode)

```bash
npm test -- --run
```

### Run Tests in UI Mode

```bash
npm test -- --ui
```

Opens an interactive UI to view and run tests.

### Run Specific Test File

```bash
npm test -- 01-search-by-text/Sandbox.test.tsx
```

### Run Tests Matching a Pattern

```bash
npm test -- --grep "form"
```

### Run Tests with Coverage

```bash
npm test -- --coverage
```

(Note: You may need to install `@vitest/coverage-v8` for coverage support)

### Watch Mode Options

When in watch mode, you can use these keyboard shortcuts:

- `a` - Run all tests
- `f` - Run only failed tests
- `q` - Quit watch mode
- `p` - Filter by filename pattern
- `t` - Filter by test name pattern

---

## Tutorial Walkthrough

### Tutorial 1: Search by Text (`01-search-by-text`)

**Learning Objectives:**

- Understand text-based query methods
- Learn when to use `getByText`, `queryByText`, `getAllByText`, and `findByText`
- Practice regex matching
- Handle async content

**Key Concepts:**

1. **`getByText`** - Finds element by exact text or regex (throws if not found)
2. **`queryByText`** - Finds element by text (returns null if not found)
3. **`getAllByText`** - Finds all elements matching text (returns array)
4. **`findByText`** - Waits for element to appear (async, returns Promise)

**Example Test:**

```typescript
test("demonstrates different query methods", async () => {
  render(<Sandbox />);

  // 1. getByText - exact string match
  const heading = screen.getByText("React Testing Library Examples");
  expect(heading).toBeInTheDocument();

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

  // 5. findByText - async element
  const asyncMessage = await screen.findByText("Async message");
  expect(asyncMessage).toBeInTheDocument();
});
```

---

### Tutorial 2: TDD Example (`02-tdd-example`)

**Learning Objectives:**

- Understand Test-Driven Development (TDD) workflow
- Write tests before implementation
- Use case-insensitive regex matching

**Key Concepts:**

- TDD follows the pattern: Red → Green → Refactor
- Write failing test first, then implement to make it pass
- Use regex for flexible text matching

**Example Test:**

```typescript
test("should render header", () => {
  render(<Sandbox />);
  const heading = screen.getByText(/testing/i);
  expect(heading).toBeInTheDocument();
});
```

---

### Tutorial 3: Search by Role (`03-search-by-role`)

**Learning Objectives:**

- Learn accessibility-focused role-based queries
- Understand semantic HTML roles
- Query elements by their accessibility role
- Use `logRoles` for debugging

**Key Concepts:**

1. **`getByRole`** - Preferred method for accessibility
2. **Role hierarchy** - Headings have levels (h1 = level 1, h2 = level 2)
3. **Name option** - Filter by accessible name
4. **`logRoles`** - Debugging utility to see all available roles

**Common Roles:**

- `navigation` - `<nav>` elements
- `heading` - `<h1>` through `<h6>` elements
- `link` - `<a>` elements
- `button` - `<button>` elements
- `textbox` - `<input type="text">` elements
- `img` - `<img>` elements
- `listitem` - `<li>` elements
- `article` - `<article>` elements

**Example Test:**

```typescript
test("renders nav and navigation links", () => {
  const { container } = render(<Sandbox />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  logRoles(container); // Debug: see all available roles
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
});

test("renders headings with correct hierarchy", () => {
  render(<Sandbox />);
  expect(
    screen.getByRole("heading", { name: "Main Heading", level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Subheading", level: 2 })
  ).toBeInTheDocument();
});
```

---

### Tutorial 4: User Interactions (`04-user-interactions`)

**Learning Objectives:**

- Test user interactions and events
- Understand `fireEvent` vs `userEvent`
- Test state changes from user actions
- Handle async user events

**Key Concepts:**

1. **`fireEvent`** - Legacy approach, fires events directly
2. **`userEvent`** - Preferred approach, simulates real user behavior
3. **`userEvent.setup()`** - Required for userEvent v14+
4. **Async handling** - User events are async and need `await`

**Why userEvent is Preferred:**

- Simulates real browser behavior
- Triggers multiple events (e.g., click triggers mousedown, mouseup, click)
- Better for accessibility testing
- More realistic test scenarios

**Example Test:**

```typescript
// Using fireEvent (legacy)
test("should increment count using fireEvent", () => {
  render(<Sandbox />);
  const increaseButton = screen.getByRole("button", { name: /increase/i });
  fireEvent.click(increaseButton);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});

// Using userEvent (preferred)
test("should increment count using userEvent", async () => {
  render(<Sandbox />);
  const user = userEvent.setup();
  const increaseButton = screen.getByRole("button", { name: /increase/i });
  await user.click(increaseButton);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

---

### Tutorial 5: Form Testing (`05-form-testing`)

**Learning Objectives:**

- Test form inputs and validation
- Use `beforeEach` for test setup
- Test error messages
- Test form submission
- Create reusable test helpers

**Key Concepts:**

1. **`beforeEach`** - Runs before each test for setup
2. **`user.type()`** - Simulates typing in inputs
3. **`toHaveValue()`** - Matcher for input values
4. **Helper functions** - Reusable code for getting form elements
5. **Validation testing** - Test error states and messages

**Example Test:**

```typescript
describe("05-form-testing", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Sandbox />);
  });

  const getFormElements = () => {
    return {
      emailInputElement: screen.getByRole("textbox", { name: /email/i }),
      passwordInputElement: screen.getByLabelText("Password"),
      confirmPasswordInputElement: screen.getByLabelText(/confirm password/i),
      submitButton: screen.getByRole("button", { name: /submit/i }),
    };
  };

  test("should show email error if email is invalid", async () => {
    const { emailInputElement, submitButton } = getFormElements();

    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();

    await user.type(emailInputElement, "invalid");
    await user.click(submitButton);

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
```

---

### Tutorial 6: Reviews App (`06-reviews-app`)

**Learning Objectives:**

- Build a complete application with multiple components
- Write integration tests
- Test component interactions
- Use mocking for callbacks
- Test conditional rendering

**Key Concepts:**

1. **Integration Testing** - Testing multiple components together
2. **Mock Functions** - Using `vi.fn()` to track function calls
3. **Component Communication** - Testing parent-child interactions
4. **Conditional Rendering** - Testing empty states and populated states

**Component Structure:**

- **Sandbox** - Main container managing reviews state
- **Form** - Review submission form component
- **List** - Reviews display component

**Example Tests:**

```typescript
// Form Component Test
describe("ReviewForm", () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test("submits form with valid data", async () => {
    const user = userEvent.setup();
    render(<ReviewForm onSubmit={mockOnSubmit} />);

    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();

    await user.type(emailInput, "test@example.com");
    await user.selectOptions(ratingSelect, "5");
    await user.type(textArea, "This is a valid review text");
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      rating: "5",
      text: "This is a valid review text",
    });
  });
});

// Integration Test
test("adds a new review when form is submitted", async () => {
  const user = userEvent.setup();
  render(<Sandbox />);

  const { emailInput, ratingSelect, textArea, submitButton } =
    getFormElements();

  await user.type(emailInput, "test@example.com");
  await user.selectOptions(ratingSelect, "5");
  await user.type(textArea, "Great product!");
  await user.click(submitButton);

  expect(screen.getByText("test@example.com")).toBeInTheDocument();
  expect(screen.getByText("Great product!")).toBeInTheDocument();
});
```

---

## Project Components

### Main App Component (`src/App.tsx`)

The main application component that renders all tutorial sandboxes:

```typescript
import Sandbox1 from "./01-search-by-text/Sandbox";
import Sandbox2 from "./02-tdd-example/Sandbox";
import Sandbox3 from "./03-search-by-role/Sandbox";
import Sandbox4 from "./04-user-interactions/Sandbox";
import Sandbox5 from "./05-form-testing/Sandbox";
import Sandbox6 from "./06-reviews-app/Sandbox";

function App() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">
        React Testing Library (Default App Test)
      </h1>
      {/* All sandbox components rendered here */}
    </div>
  );
}
```

**Purpose:** Demonstrates how to structure a tutorial application with multiple learning modules.

---

### Tutorial 1: Search by Text Component

**Component:** `src/01-search-by-text/Sandbox.tsx`

Demonstrates:

- Static text content
- Regex patterns in text
- Conditional rendering
- Multiple elements with same text
- Async content loading

**Key Features:**

- Phone number with regex pattern
- Error message (conditionally rendered)
- List items with duplicate text
- Async message that appears after delay

---

### Tutorial 2: TDD Example Component

**Component:** `src/02-tdd-example/Sandbox.tsx`

Simple component demonstrating TDD workflow with a basic heading.

---

### Tutorial 3: Search by Role Component

**Component:** `src/03-search-by-role/Sandbox.tsx`

Comprehensive component with various semantic HTML elements:

- Navigation with links
- Heading hierarchy (h1, h2)
- Images with alt text
- Lists and list items
- Articles (cards)
- Buttons with different states
- Form with inputs and labels

**Key Features:**

- Multiple roles for testing
- Async button that appears after delay
- Form elements for role-based queries

---

### Tutorial 4: User Interactions Component

**Component:** `src/04-user-interactions/Sandbox.tsx`

Interactive component demonstrating user events:

- Counter with increment/decrement buttons
- Like button with icon toggle
- State management with useState

**Key Features:**

- State changes from user interactions
- Icon switching based on state
- Multiple interaction patterns

---

### Tutorial 5: Form Testing Component

**Component:** `src/05-form-testing/Sandbox.tsx`

Signup form with validation:

- Email input with validation
- Password input with length validation
- Confirm password with matching validation
- Error message display
- Form reset on successful submission

**Key Features:**

- Uses `validator` library for email validation
- Client-side validation rules
- Error state management
- Form state management

---

### Tutorial 6: Reviews App Components

#### Sandbox Component (`src/06-reviews-app/Sandbox.tsx`)

Main container managing reviews state:

```typescript
export type Review = {
  email: string;
  rating: string;
  text: string;
};

const Sandbox = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addReview = (review: Review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Reviews App</h1>
      <Form onSubmit={addReview} />
      <List reviews={reviews} />
    </div>
  );
};
```

#### Form Component (`src/06-reviews-app/Form.tsx`)

Review submission form:

- Email input
- Rating select dropdown
- Text area for review text
- Validation (minimum 10 characters)
- Form submission handler

#### List Component (`src/06-reviews-app/List.tsx`)

Reviews display component:

- Empty state message
- Review cards with email, rating stars, and text
- Conditional rendering based on reviews array

---

## Understanding Test Files

### Query Method Comparison

| Method      | Returns          | Throws Error        | Use Case                   |
| ----------- | ---------------- | ------------------- | -------------------------- |
| `getBy*`    | Element          | Yes (if not found)  | Element must exist         |
| `queryBy*`  | Element or null  | No                  | Element might not exist    |
| `getAllBy*` | Array            | Yes (if none found) | Multiple elements expected |
| `findBy*`   | Promise<Element> | Yes (if timeout)    | Async element appearance   |

### Text Query Methods

```typescript
// Exact text match
screen.getByText("Hello World");

// Case-insensitive regex
screen.getByText(/hello world/i);

// Partial text match
screen.getByText("Hello", { exact: false });

// Multiple elements
screen.getAllByText("Item");

// Element that might not exist
screen.queryByText("Error");

// Async element
await screen.findByText("Loading...");
```

### Role Query Methods

```typescript
// Basic role query
screen.getByRole("button");

// Role with name
screen.getByRole("button", { name: "Submit" });

// Heading with level
screen.getByRole("heading", { name: "Title", level: 1 });

// Multiple elements
screen.getAllByRole("listitem");

// Query (might not exist)
screen.queryByRole("alert");

// Async role
await screen.findByRole("status");
```

### User Event Methods

```typescript
const user = userEvent.setup();

// Click
await user.click(button);

// Type
await user.type(input, "text");

// Clear
await user.clear(input);

// Select options
await user.selectOptions(select, "option1");

// Upload file
await user.upload(input, file);
```

---

## Key Concepts

### React Testing Library Philosophy

1. **Test Behavior, Not Implementation**

   - Focus on what users see and interact with
   - Avoid testing internal component state or methods
   - Test the component's public API

2. **Query by Accessibility**

   - Prefer queries that mirror how users find elements
   - Use `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
   - This encourages better accessibility

3. **User-Centric Testing**
   - Write tests that simulate real user interactions
   - Test the component's public API, not internals
   - Use `userEvent` over `fireEvent` for more realistic tests

### Query Priority

React Testing Library recommends this query priority:

1. **`getByRole`** - Most accessible, preferred
2. **`getByLabelText`** - For form inputs
3. **`getByPlaceholderText`** - For inputs without labels
4. **`getByText`** - For visible text
5. **`getByDisplayValue`** - For form values
6. **`getByAltText`** - For images
7. **`getByTitle`** - For title attributes
8. **`getByTestId`** - Last resort, not recommended

### Common Matchers

```typescript
// Element existence
expect(element).toBeInTheDocument();

// Text content
expect(element).toHaveTextContent("text");
expect(element).toHaveTextContent(/text/i);

// CSS classes
expect(element).toHaveClass("className");

// Visibility
expect(element).toBeVisible();
expect(element).not.toBeVisible();

// Form values
expect(input).toHaveValue("value");
expect(input).toHaveValue("");

// Attributes
expect(element).toHaveAttribute("src", "image.jpg");
expect(element).toHaveAttribute("aria-label", "Close");

// Disabled state
expect(button).toBeDisabled();
expect(button).toBeEnabled();

// Checked state
expect(checkbox).toBeChecked();
expect(radio).toBeChecked();
```

### Testing Patterns

#### Setup Pattern

```typescript
describe("Component", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Component />);
  });

  // Tests here
});
```

#### Helper Function Pattern

```typescript
const getFormElements = () => {
  return {
    emailInput: screen.getByRole("textbox", { name: /email/i }),
    submitButton: screen.getByRole("button", { name: /submit/i }),
  };
};

test("form submission", async () => {
  const { emailInput, submitButton } = getFormElements();
  await user.type(emailInput, "test@example.com");
  await user.click(submitButton);
});
```

#### Mock Function Pattern

```typescript
const mockHandler = vi.fn();

beforeEach(() => {
  mockHandler.mockClear();
});

test("calls handler", async () => {
  render(<Component onSubmit={mockHandler} />);
  await user.click(screen.getByRole("button"));
  expect(mockHandler).toHaveBeenCalledTimes(1);
  expect(mockHandler).toHaveBeenCalledWith(expectedData);
});
```

---

## Code Snippets

### Basic Component Test

```typescript
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Component from "./Component";

test("renders component", () => {
  render(<Component />);
  expect(screen.getByText("Expected Text")).toBeInTheDocument();
});
```

### Testing User Interactions

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import Button from "./Button";

test("handles click events", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole("button", { name: "Click me" });
  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing Form Inputs

```typescript
test("handles form input", async () => {
  const user = userEvent.setup();
  render(<Form />);

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  await user.type(emailInput, "test@example.com");

  expect(emailInput).toHaveValue("test@example.com");
});
```

### Testing Async Content

```typescript
test("displays async content", async () => {
  render(<Component />);

  // Initially not present
  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

  // Wait for async content
  const content = await screen.findByText("Loaded Content");
  expect(content).toBeInTheDocument();
});
```

### Testing Conditional Rendering

```typescript
test("shows error message on invalid input", async () => {
  const user = userEvent.setup();
  render(<Form />);

  const input = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", { name: /submit/i });

  // Error not shown initially
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();

  // Trigger error
  await user.type(input, "invalid");
  await user.click(submitButton);

  // Error now shown
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});
```

### Testing Multiple Elements

```typescript
test("renders all items", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  render(<List items={items} />);

  items.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });

  // Or using getAllBy
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
```

### Integration Test Example

```typescript
test("complete user flow", async () => {
  const user = userEvent.setup();
  render(<App />);

  // Fill form
  await user.type(screen.getByLabelText("Email"), "test@example.com");
  await user.type(screen.getByLabelText("Password"), "password123");
  await user.click(screen.getByRole("button", { name: /submit/i }));

  // Verify result
  expect(screen.getByText("Welcome, test@example.com")).toBeInTheDocument();
});
```

---

## Reusing Components

### Using Form Component in Other Projects

1. **Copy the component file:**

   ```bash
   cp src/06-reviews-app/Form.tsx /path/to/your/project/src/components/
   ```

2. **Copy the type definition:**

   ```typescript
   // Copy the Review type from Sandbox.tsx
   export type Review = {
     email: string;
     rating: string;
     text: string;
   };
   ```

3. **Install dependencies if needed:**

   ```bash
   npm install react react-dom
   ```

4. **Import and use:**

   ```typescript
   import ReviewForm from "./components/Form";

   function App() {
     const handleSubmit = (review: Review) => {
       console.log("New review:", review);
     };

     return <ReviewForm onSubmit={handleSubmit} />;
   }
   ```

### Using List Component

The List component can be reused with any array of reviews:

```typescript
import List from "./components/List";
import { Review } from "./types";

function App() {
  const reviews: Review[] = [
    {
      email: "user@example.com",
      rating: "5",
      text: "Great product!",
    },
  ];

  return <List reviews={reviews} />;
}
```

### Reusing Test Helpers

The `getFormElements` helper can be adapted for other forms:

```typescript
// Generic form helper
export const getFormElements = (formName: string) => {
  return {
    emailInput: screen.getByRole("textbox", {
      name: new RegExp(formName, "i"),
    }),
    submitButton: screen.getByRole("button", { name: /submit/i }),
  };
};
```

### Reusing Test Setup

To reuse the testing setup in other projects:

1. **Copy configuration files:**

   - `vite.config.ts` (test configuration)
   - `src/vitest.setup.ts` (test setup)
   - Update `tsconfig.app.json` types

2. **Install dependencies:**

   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
   ```

3. **Add test script to package.json:**

   ```json
   {
     "scripts": {
       "test": "vitest"
     }
   }
   ```

---

## Environment Variables

### Current Project Status

**This project does not require environment variables.** It's a tutorial project without external API calls or configuration that needs environment-specific values.

### When You Need Environment Variables

If you extend this project to include:

- API endpoints
- Authentication tokens
- Feature flags
- Build-time configuration
- External service URLs

You would create a `.env` file:

### Setting Up .env File

1. **Create `.env` file in project root:**

   ```bash
   touch .env
   ```

2. **Add environment variables:**

   ```env
   VITE_API_URL=https://api.example.com
   VITE_API_KEY=your-api-key-here
   VITE_APP_NAME=My Testing App
   ```

3. **Access in code:**

   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

4. **Important Notes:**

   - Vite requires `VITE_` prefix for client-side variables
   - Add `.env` to `.gitignore` to keep secrets safe
   - Create `.env.example` as a template:

     ```env
     VITE_API_URL=
     VITE_API_KEY=
     ```

5. **For Testing:**

   Create `.env.test` for test-specific values:

   ```env
   VITE_API_URL=http://localhost:3000
   VITE_API_KEY=test-key
   ```

### Environment Variable Best Practices

- Never commit `.env` files with real secrets
- Use `.env.example` to document required variables
- Use different `.env` files for different environments (`.env.development`, `.env.production`)
- Validate environment variables at application startup
- Use TypeScript types for environment variables:

```typescript
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
}
```

---

## Configuration Files

### Vite Configuration (`vite.config.ts`)

Configures the build tool and test environment:

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/vitest.setup.ts",
    exclude: ["**/node_modules/**", "**/dist/**", "**/final/**"],
  },
});
```

### TypeScript Configuration (`tsconfig.app.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src"]
}
```

### ESLint Configuration (`eslint.config.js`)

Provides code quality checks and React-specific linting rules.

### Tailwind Configuration (`tailwind.config.js`)

Configures Tailwind CSS utility classes for styling.

---

## Keywords

### Testing Keywords

- **Vitest** - Modern test runner built on Vite
- **React Testing Library** - Testing utilities for React components
- **Jest-DOM** - Custom matchers for DOM element assertions
- **jsdom** - DOM implementation for Node.js testing
- **Test-driven Development (TDD)** - Development approach writing tests first
- **Unit Testing** - Testing individual components in isolation
- **Integration Testing** - Testing component interactions
- **Mocking** - Simulating dependencies in tests
- **Assertion** - Verifying expected behavior in tests
- **Query Methods** - Functions to find elements in tests
- **Matchers** - Functions to make assertions about elements
- **User Events** - Simulated user interactions
- **Accessibility** - Testing with screen readers and assistive technologies in mind

### React Testing Library Query Methods

- **getByText** - Find element by text content
- **getByRole** - Find element by accessibility role
- **getByLabelText** - Find form input by associated label
- **queryByText** - Find element that might not exist
- **getAllByText** - Find all elements matching text
- **findByText** - Wait for element to appear (async)
- **screen** - Object containing all query methods
- **render** - Function to render React components in tests

### React Keywords

- **Component** - Reusable UI building blocks
- **JSX** - JavaScript syntax extension for React
- **Props** - Data passed to components
- **State** - Component internal data
- **Rendering** - Process of displaying components
- **Virtual DOM** - React's in-memory representation of the DOM
- **Hooks** - Functions to use React features (useState, useEffect)

### Development Keywords

- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and dev server
- **HMR** - Hot Module Replacement for instant updates
- **ESLint** - Code linting and quality tool
- **Tailwind CSS** - Utility-first CSS framework
- **Accessibility (a11y)** - Making web content usable by everyone

---

## Conclusion

This React Testing Library Fundamental Tutorial provides a comprehensive learning path for mastering React component testing. By following the six progressive tutorials, you've learned:

✅ How to use text-based queries (`getByText`, `queryByText`, `getAllByText`, `findByText`)  
✅ How to use role-based queries for accessibility-focused testing  
✅ How to test user interactions with `fireEvent` and `userEvent`  
✅ How to test forms with validation and error handling  
✅ How to write integration tests for complete applications  
✅ Best practices for React Testing Library  
✅ How to structure test files and use helper functions  
✅ How to mock functions and test component communication

### Next Steps

1. **Practice More** - Try writing tests for your own components
2. **Explore Advanced Topics** - Learn about testing hooks, context, and routing
3. **Study Documentation** - Deep dive into [React Testing Library docs](https://testing-library.com/react)
4. **Join Community** - Participate in testing discussions and share your learnings
5. **Build Projects** - Apply these concepts to real-world applications

### Resources

- [React Testing Library Documentation](https://testing-library.com/react)
- [Vitest Documentation](https://vitest.dev/)
- [Jest-DOM Matchers](https://github.com/testing-library/jest-dom)
- [User Event Documentation](https://testing-library.com/docs/user-event/intro)
- [React Documentation](https://react.dev/)
- [Accessibility Testing Guide](https://testing-library.com/docs/guide-which-query)

### Tips for Success

- **Start Simple** - Begin with basic queries and gradually add complexity
- **Test User Behavior** - Focus on what users see and do, not implementation details
- **Use Accessibility Queries** - Prefer `getByRole` over `getByTestId`
- **Keep Tests Maintainable** - Use helper functions and clear test names
- **Read Error Messages** - React Testing Library provides helpful error messages
- **Practice Regularly** - Testing is a skill that improves with practice

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
