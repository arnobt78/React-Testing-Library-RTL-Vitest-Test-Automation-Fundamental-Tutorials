# React Testing Library Boilerplate (Vitest + RTL Boilerplate)

A comprehensive boilerplate project for learning and implementing React Testing Library with Vitest. This project provides a clean setup for writing, running, and understanding React component tests using modern testing tools and best practices. It includes a minimal React application with example components, a pre-configured testing environment with Vitest and React Testing Library, example test files demonstrating basic testing patterns, proper TypeScript configuration for testing, ESLint setup for code quality, and Tailwind CSS for styling. The project serves as an educational resource to understand how to set up and write tests for React components using industry-standard testing tools.

![Screenshot 2025-06-18 at 04 00 08](https://github.com/user-attachments/assets/59cb3d87-e246-4a2c-a71a-17b7bd57dde5)
![Screenshot 2025-06-18 at 03 59 47](https://github.com/user-attachments/assets/b1df46ad-416c-4e02-b039-8d85deffc338)

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
- [Project Components](#project-components)
- [Understanding the Test Files](#understanding-the-test-files)
- [Key Concepts](#key-concepts)
- [Code Snippets](#code-snippets)
- [Reusing Components](#reusing-components)
- [Environment Variables](#environment-variables)
- [Configuration Files](#configuration-files)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Overview

This boilerplate project is designed as a starting point for learning React Testing Library (RTL) with Vitest. It includes:

- A minimal React application with example components
- Pre-configured testing environment with Vitest and React Testing Library
- Example test files demonstrating basic testing patterns
- Proper TypeScript configuration for testing
- ESLint setup for code quality
- Tailwind CSS for styling

The project serves as an educational resource to understand how to set up and write tests for React components using industry-standard testing tools.

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

### Development Tools

- **ESLint 9.11.1** - Code linting and quality assurance
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **PostCSS 8.4.47** - CSS transformation tool

---

## Project Structure

```bash
01-React-Testing-Library-Boilerplate/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── __tests__/         # Test files directory
│   │   ├── App.test.tsx   # Tests for App component
│   │   └── Random.test.tsx # Tests for Random component
│   ├── assets/            # Application assets
│   │   └── react.svg      # React logo
│   ├── App.tsx            # Main App component
│   ├── Random.tsx         # Example Random component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles (Tailwind)
│   ├── random.test.ts     # Example unit test file
│   ├── vitest.setup.ts    # Vitest configuration and setup
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app-specific config
├── tsconfig.node.json     # TypeScript Node.js config
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

---

## Features

### ✅ Pre-configured Testing Environment

- Vitest with jsdom environment for DOM testing
- React Testing Library utilities ready to use
- Jest-DOM matchers for enhanced assertions
- Automatic cleanup after each test

### ✅ TypeScript Support

- Full TypeScript configuration
- Type definitions for testing libraries
- Strict type checking enabled

### ✅ Modern Development Experience

- Fast HMR (Hot Module Replacement) with Vite
- ESLint for code quality
- Tailwind CSS for rapid styling

### ✅ Example Test Files

- Component rendering tests
- Text content verification
- DOM structure debugging examples

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)
- Basic knowledge of React and TypeScript

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

---

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd 01-React-Testing-Library-Vitest-Boilerplate
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

The application will be available at `http://localhost:5173` (or the next available port).

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

This file configures Vitest with React support:

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions (it, describe, expect)
    environment: "jsdom", // Use jsdom for DOM simulation
    setupFiles: "./src/vitest.setup.ts", // Setup file for test configuration
  },
});
```

**Key Configuration Points:**

- `globals: true` - Makes `it`, `describe`, `expect` available globally without imports
- `environment: 'jsdom'` - Provides a DOM environment for testing React components
- `setupFiles` - Points to the setup file that configures testing utilities

#### 2. `src/vitest.setup.ts`

This file sets up testing utilities and global configurations:

```typescript
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with Jest-DOM matchers
expect.extend(matchers);

// Cleanup after each test to prevent test pollution
afterEach(() => {
  cleanup();
});
```

**What This Does:**

- **Extends expect with Jest-DOM matchers** - Adds matchers like `toBeInTheDocument()`, `toHaveClass()`, etc.
- **Automatic cleanup** - Removes rendered components from the DOM after each test

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
npm test -- App.test.tsx
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

## Project Components

### App Component (`src/App.tsx`)

The main application component:

```typescript
function App() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">React Testing Library</h1>
      <p className="mt-4 text-gray-700">
        React Testing Library and Vitest work together to provide a robust
        testing environment.
      </p>
    </div>
  );
}
export default App;
```

**Purpose:** Demonstrates a simple React component with:

- JSX structure
- Tailwind CSS classes
- Text content for testing

### Random Component (`src/Random.tsx`)

A minimal example component:

```typescript
const Random = () => {
  return <div>Random Component</div>;
};
export default Random;
```

**Purpose:** Provides a simple component for testing basic rendering scenarios.

---

## Understanding the Test Files

### App Component Test (`src/__tests__/App.test.tsx`)

```typescript
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import App from "../App";

it("should render heading with correct text", () => {
  // Render the App component
  render(<App />);

  // Log the DOM tree for debugging
  screen.debug();

  // Find heading by its text content
  const heading = screen.getByText("React Testing Library");

  // Verify heading exists in document
  expect(heading).toBeInTheDocument();
});
```

**Test Breakdown:**

1. **Import statements** - Get testing utilities and test functions
2. **`render(<App />)`** - Renders the component into a virtual DOM
3. **`screen.debug()`** - Logs the current DOM structure (useful for debugging)
4. **`screen.getByText()`** - Queries the DOM for an element with specific text
5. **`expect().toBeInTheDocument()`** - Jest-DOM matcher to verify element exists

### Random Component Test (`src/__tests__/Random.test.tsx`)

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Random from "../Random";

describe("Random Component", () => {
  it("renders correctly", () => {
    render(<Random />);
    screen.debug();
    const element = screen.getByText("Random Component");
    expect(element).toBeInTheDocument();
  });
});
```

**Test Breakdown:**

- Uses `describe` block to group related tests
- Tests that the component renders and displays expected text
- Demonstrates the same testing pattern as App test

### Unit Test Example (`src/random.test.ts`)

```typescript
import { describe, it, expect } from "vitest";

describe("basic arithmetic checks", () => {
  it("1 + 1 equals 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("2 * 2 equals 4", () => {
    expect(2 * 2).toBe(4);
  });
});
```

**Purpose:** Demonstrates basic unit testing without React components, showing that Vitest can test any JavaScript/TypeScript code.

---

## Key Concepts

### React Testing Library Philosophy

React Testing Library follows these principles:

1. **Test Behavior, Not Implementation**

   - Focus on what users see and interact with
   - Avoid testing internal component state or methods

2. **Query by Accessibility**

   - Prefer queries that mirror how users find elements
   - Use `getByRole`, `getByLabelText`, `getByText` over `getByTestId`

3. **User-Centric Testing**
   - Write tests that simulate real user interactions
   - Test the component's public API, not internals

### Common Query Methods

React Testing Library provides several query methods:

```typescript
// By Text (most common for visible content)
screen.getByText("Hello World");
screen.getByText(/hello/i); // Case-insensitive regex

// By Role (preferred for accessibility)
screen.getByRole("button", { name: "Submit" });
screen.getByRole("heading", { name: "Welcome" });

// By Label (for form inputs)
screen.getByLabelText("Email Address");

// By Placeholder
screen.getByPlaceholderText("Enter your name");

// By Test ID (last resort)
screen.getByTestId("submit-button");
```

### Matchers from Jest-DOM

Common matchers you can use:

```typescript
expect(element).toBeInTheDocument(); // Element exists in DOM
expect(element).toHaveTextContent("text"); // Element contains text
expect(element).toHaveClass("className"); // Element has CSS class
expect(element).toBeVisible(); // Element is visible
expect(element).toBeDisabled(); // Element is disabled
expect(element).toHaveValue("value"); // Input has value
expect(element).toBeChecked(); // Checkbox/radio is checked
```

---

## Code Snippets

### Basic Component Test Template

```typescript
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import YourComponent from "./YourComponent";

it("renders the component", () => {
  render(<YourComponent />);
  const element = screen.getByText("Expected Text");
  expect(element).toBeInTheDocument();
});
```

### Testing User Interactions

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect } from "vitest";
import Button from "./Button";

it("handles click events", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole("button", { name: "Click me" });
  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing with Props

```typescript
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Greeting from "./Greeting";

it("displays personalized greeting", () => {
  render(<Greeting name="John" />);
  expect(screen.getByText("Hello, John!")).toBeInTheDocument();
});
```

### Testing Multiple Elements

```typescript
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import List from "./List";

it("renders all list items", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  render(<List items={items} />);

  items.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
```

### Using describe Blocks

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Component from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    // Test user interactions
  });

  it("displays error messages", () => {
    // Test error states
  });
});
```

---

## Reusing Components

### Using App Component in Other Projects

1. **Copy the component file:**

   ```bash
   cp src/App.tsx /path/to/your/project/src/
   ```

2. **Ensure dependencies are installed:**

   ```bash
   npm install react react-dom
   npm install -D @types/react @types/react-dom
   ```

3. **Import and use:**

   ```typescript
   import App from "./App";

   function MyApplication() {
     return <App />;
   }
   ```

### Using Random Component

The Random component is a minimal example that can be extended:

```typescript
// Enhanced version
const Random = ({ message = "Random Component" }: { message?: string }) => {
  return <div>{message}</div>;
};
export default Random;
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

**This project does not require environment variables.** It's a simple boilerplate without external API calls or configuration that needs environment-specific values.

### When You Need Environment Variables

If you extend this project to include:

- API endpoints
- Authentication tokens
- Feature flags
- Build-time configuration

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

### React Keywords

- **Component** - Reusable UI building blocks
- **JSX** - JavaScript syntax extension for React
- **Props** - Data passed to components
- **Rendering** - Process of displaying components
- **Virtual DOM** - React's in-memory representation of the DOM

### Development Keywords

- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and dev server
- **HMR** - Hot Module Replacement for instant updates
- **ESLint** - Code linting and quality tool
- **Tailwind CSS** - Utility-first CSS framework

---

## Conclusion

This React Testing Library boilerplate provides a solid foundation for learning and implementing React component testing. By following this guide, you've learned:

✅ How to set up a modern React testing environment with Vitest and React Testing Library  
✅ How to write basic component tests  
✅ How to use testing utilities and matchers  
✅ How to structure test files  
✅ How to configure the testing environment  
✅ Best practices for React component testing

### Next Steps

1. **Extend the Components** - Add more functionality to App and Random components
2. **Write More Tests** - Practice testing user interactions, form submissions, and async operations
3. **Explore Advanced Features** - Learn about mocking, testing hooks, and testing context
4. **Study React Testing Library Documentation** - Deep dive into query methods and best practices
5. **Practice TDD** - Try writing tests before implementing features

### Resources

- [React Testing Library Documentation](https://testing-library.com/react)
- [Vitest Documentation](https://vitest.dev/)
- [Jest-DOM Matchers](https://github.com/testing-library/jest-dom)
- [React Documentation](https://react.dev/)

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
