# Focus Flow - Test-Driven Development (TDD) Vitest + RTL Testing Tutorial

A task management application built using Test-Driven Development (TDD) principles with React Testing Library and Vitest. This project demonstrates how to build a complete application by writing tests first, then implementing the functionality to make those tests pass.

![Screenshot 2025-06-18 at 13 58 33](https://github.com/user-attachments/assets/0c3a88d2-7985-41ab-8e44-e5fae93ef1f6)
![Screenshot 2025-06-18 at 13 58 10](https://github.com/user-attachments/assets/f0c9fa32-55d8-4953-94d0-2c5c5c8d59f5)

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
- [TDD Workflow](#tdd-workflow)
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

Focus Flow is a task management application that demonstrates Test-Driven Development (TDD) in practice. The project includes:

- **Task Management System** - Add, view, and delete tasks with categories
- **Two Implementation Approaches** - Custom hook pattern and React Context pattern
- **Comprehensive Test Coverage** - Unit tests, integration tests, and component tests
- **TDD Methodology** - Tests written before implementation
- **Modern React Patterns** - Hooks, Context API, and component composition

The application allows users to:

- Create tasks with title, description, and priority category
- View tasks in a responsive grid layout
- Delete tasks
- Organize tasks by priority (Urgent, Important, Normal, Low Priority)

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

### UI Libraries

- **lucide-react 0.461.0** - Beautiful icon library for React
- **Tailwind CSS 3.4.14** - Utility-first CSS framework

### Development Tools

- **ESLint 9.11.1** - Code linting and quality assurance
- **PostCSS 8.4.47** - CSS transformation tool

---

## Project Structure

```bash
03-Focus-Flow-Test-Driven-Development-Testing-Tutorial/
├── public/                    # Static assets
│   └── vite.svg              # Vite logo
├── src/
│   ├── __tests__/            # Test files
│   │   ├── AppWithContext.test.tsx  # Integration tests with Context
│   │   ├── Form.test.tsx            # Form component tests
│   │   ├── ItemCard.test.tsx        # ItemCard component tests
│   │   └── List.test.tsx            # List component tests
│   ├── components/           # React components
│   │   ├── App.tsx           # App component (with custom hook)
│   │   ├── Form.tsx          # Task form component
│   │   ├── ItemCard.tsx      # Individual task card component
│   │   └── List.tsx          # Task list component
│   ├── App.tsx               # Main app (custom hook version)
│   ├── AppWithContext.tsx    # Main app (Context version)
│   ├── FlowContext.tsx       # React Context for state management
│   ├── utils.ts              # Utility functions and types
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

### ✅ Task Management

- Create tasks with title, description, and category
- View tasks in a responsive grid layout
- Delete tasks with confirmation
- Category-based color coding (Urgent, Important, Normal, Low Priority)

### ✅ Two Implementation Patterns

- **Custom Hook Pattern** (`App.tsx` with `useFlowManager`)
- **Context API Pattern** (`AppWithContext.tsx` with `FlowContext`)

### ✅ Comprehensive Testing

- Unit tests for individual components
- Integration tests for component interactions
- Context testing patterns
- Mocking strategies
- User interaction testing

### ✅ TDD Methodology

- Tests written before implementation
- Red-Green-Refactor cycle
- Test-driven component development

### ✅ Modern UI

- Responsive design with Tailwind CSS
- Icon integration with lucide-react
- Clean, modern interface
- Accessible components

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and testing concepts
- Understanding of TDD principles

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

---

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd 03-Focus-Flow-Test-Driven-Development-Testing-Tutorial
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
   - lucide-react for icons

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
    globals: true, // Enable global test APIs
    environment: "jsdom", // Use jsdom for DOM APIs
    setupFiles: "./src/vitest.setup.ts", // Global test setup
  },
});
```

**Key Configuration Points:**

- `globals: true` - Makes `it`, `describe`, `expect` available globally without imports
- `environment: "jsdom"` - Provides a DOM environment for testing React components
- `setupFiles` - Points to the setup file that configures testing utilities

#### 2. `src/vitest.setup.ts`

This file sets up testing utilities and global configurations:

```typescript
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with Jest-DOM matchers
expect.extend(matchers);

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
```

**What This Does:**

- **Extends expect with Jest-DOM matchers** - Adds matchers like `toBeInTheDocument()`, `toHaveValue()`, etc.
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
npm test -- Form.test.tsx
```

### Run Tests Matching a Pattern

```bash
npm test -- --grep "Form"
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

## TDD Workflow

### What is TDD?

Test-Driven Development (TDD) is a software development approach where you:

1. **Write a failing test** (Red)
2. **Write the minimum code to make it pass** (Green)
3. **Refactor the code** (Refactor)
4. **Repeat**

### TDD Cycle: Red-Green-Refactor

#### 1. Red Phase - Write Failing Test

```typescript
// Form.test.tsx
test("submits form with entered values", async () => {
  const mockOnSubmit = vi.fn();
  render(<Form onSubmit={mockOnSubmit} />);

  // This test will fail because Form doesn't exist yet
  const titleInput = screen.getByRole("textbox", { name: /title/i });
  await user.type(titleInput, "New Task");
  // ... more test code
});
```

#### 2. Green Phase - Make Test Pass

```typescript
// Form.tsx - Minimal implementation to make test pass
const Form = ({ onSubmit }: { onSubmit: (item: ItemWithoutId) => void }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description: "", category: "normal" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};
```

#### 3. Refactor Phase - Improve Code

```typescript
// Form.tsx - Refactored with better structure
const Form = ({ onSubmit }: { onSubmit: (item: ItemWithoutId) => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ItemCategory | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category) return;
    onSubmit({ title, description, category });
    // Reset form
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Improved form structure */}
    </form>
  );
};
```

### Benefits of TDD

1. **Better Design** - Forces you to think about the API first
2. **Confidence** - Tests provide safety net for refactoring
3. **Documentation** - Tests serve as living documentation
4. **Fewer Bugs** - Catch issues early in development
5. **Faster Development** - Less time debugging, more time building

### TDD Best Practices

- Write one test at a time
- Make tests fail for the right reason
- Write the simplest code that makes the test pass
- Refactor frequently
- Keep tests fast and independent
- Test behavior, not implementation

---

## Project Components

### Form Component (`src/components/Form.tsx`)

The task creation form component:

```typescript
const Form = ({ onSubmit }: { onSubmit: (item: ItemWithoutId) => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ItemCategory | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category) return;
    onSubmit({ title, description, category });
    // Reset form after submission
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return <form onSubmit={handleSubmit}>{/* Form inputs */}</form>;
};
```

**Features:**

- Title input field
- Description input field
- Category select dropdown (Urgent, Important, Normal, Low Priority)
- Form validation
- Form reset after submission

**Props:**

- `onSubmit: (item: ItemWithoutId) => void` - Callback function when form is submitted

---

### List Component (`src/components/List.tsx`)

The task list display component:

```typescript
export default function List({
  items,
  onDelete,
}: {
  items: Item[];
  onDelete: (id: string) => void;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Flow Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
```

**Features:**

- Responsive grid layout
- Renders ItemCard components for each task
- Empty state handling (no items)

**Props:**

- `items: Item[]` - Array of task items
- `onDelete: (id: string) => void` - Callback function when item is deleted

---

### ItemCard Component (`src/components/ItemCard.tsx`)

Individual task card component:

```typescript
const ItemCard = ({
  id,
  title,
  description,
  category,
  onDelete,
}: ItemCardProps) => {
  return (
    <article className="w-full rounded-lg border shadow-sm">
      <div className="flex flex-row items-center justify-between p-6 pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={() => onDelete(id)} aria-label={`Delete task: ${id}`}>
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6 pt-2">
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className={`inline-block ${categoryColors[category]} ...`}>
          {category}
        </div>
      </div>
    </article>
  );
};
```

**Features:**

- Displays task title, description, and category
- Delete button with trash icon
- Category-based color coding
- Accessible button with aria-label

**Category Colors:**

- `urgent` - Red background
- `important` - Yellow background
- `normal` - Blue background
- `low` - Green background

**Props:**

- `id: string` - Unique task identifier
- `title: string` - Task title
- `description: string` - Task description
- `category: string` - Task category
- `onDelete: (id: string) => void` - Callback function when delete is clicked

---

### FlowContext Component (`src/FlowContext.tsx`)

React Context for state management:

```typescript
interface FlowContextType {
  items: Item[];
  handleAddItem: (newItem: ItemWithoutId) => void;
  handleDeleteItem: (id: string) => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: ItemWithoutId) => {
    setItems([...items, { ...newItem, id: Date.now().toString() }]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FlowContext.Provider value={{ items, handleAddItem, handleDeleteItem }}>
      {children}
    </FlowContext.Provider>
  );
}

export function useFlowContext() {
  const context = useContext(FlowContext);
  if (context === undefined) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
}
```

**Features:**

- Centralized state management
- Add item functionality
- Delete item functionality
- Custom hook for accessing context
- Error handling for context usage outside provider

---

### Utils (`src/utils.ts`)

Utility functions and type definitions:

```typescript
export type ItemCategory = "urgent" | "important" | "normal" | "low";

export type Item = {
  id: string;
  title: string;
  description: string;
  category: ItemCategory;
};

export type ItemWithoutId = Omit<Item, "id">;

export const useFlowManager = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: ItemWithoutId) => {
    setItems([...items, { ...newItem, id: Date.now().toString() }]);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, handleAddItem, handleDeleteItem };
};
```

**Types:**

- `ItemCategory` - Union type for task categories
- `Item` - Complete task object with id
- `ItemWithoutId` - Task object without id (for creation)

**Custom Hook:**

- `useFlowManager` - Custom hook for state management (alternative to Context)

---

## Understanding Test Files

### Form Component Tests (`src/__tests__/Form.test.tsx`)

Comprehensive tests for the Form component:

```typescript
describe("Form Component", () => {
  let user: UserEvent;
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
    user = userEvent.setup();
  });

  test("renders form with empty fields initially", () => {
    render(<Form onSubmit={mockOnSubmit} />);
    // Verify all inputs are empty
  });

  test("submits form with entered values", async () => {
    // Fill form and submit
    // Verify onSubmit was called with correct data
  });

  test("validates required fields", async () => {
    // Try to submit empty form
    // Verify onSubmit was not called
  });

  test("clears form after successful submission", async () => {
    // Fill and submit form
    // Verify all fields are cleared
  });
});
```

**Test Coverage:**

- Initial render state
- Form submission with data
- Required field validation
- Form reset after submission

---

### List Component Tests (`src/__tests__/List.test.tsx`)

Tests for the List component with mocking:

```typescript
// Mock ItemCard to simplify testing
vi.mock("../components/ItemCard", () => ({
  default: () => <article>item card</article>,
}));

describe("List", () => {
  const mockItems: Item[] = [
    {
      id: "1",
      title: "Test Item 1",
      description: "Content 1",
      category: "urgent",
    },
    {
      id: "2",
      title: "Test Item 2",
      description: "Content 2",
      category: "normal",
    },
  ];

  test("renders the Flow Board heading", () => {
    // Verify heading exists
  });

  test("renders correct number of ItemCards", () => {
    // Verify correct number of items rendered
  });

  test("renders empty grid when no items provided", () => {
    // Verify empty state
  });
});
```

**Key Concepts:**

- **Mocking** - Mocking child components to isolate testing
- **Empty state testing** - Testing behavior with no data
- **Rendering verification** - Checking correct number of items

---

### ItemCard Component Tests (`src/__tests__/ItemCard.test.tsx`)

Tests for individual task cards:

```typescript
describe("ItemCard", () => {
  const mockProps: MockProps = {
    id: "1",
    title: "Test Task",
    description: "Test Description",
    category: "urgent",
    onDelete: vi.fn(),
  };

  test("renders card with correct content", () => {
    // Verify all content is displayed
  });

  test("calls onDelete when delete button is clicked", async () => {
    // Click delete button
    // Verify onDelete was called with correct id
  });
});
```

**Test Coverage:**

- Content rendering
- Delete button functionality
- Callback invocation

---

### AppWithContext Integration Tests (`src/__tests__/AppWithContext.test.tsx`)

Integration tests for the complete application:

```typescript
const customRenderAppWithContext = () => {
  return render(
    <FlowProvider>
      <AppWithContext />
    </FlowProvider>
  );
};

const addTestItem = async (user: UserEvent) => {
  // Helper function to add an item
};

describe("AppWithContext", () => {
  beforeEach(() => {
    customRenderAppWithContext();
  });

  test("renders heading and form elements", () => {
    // Verify initial render
  });

  test("handles adding an item", async () => {
    // Add item via form
    // Verify item appears in list
  });

  test("handles deleting an item", async () => {
    // Add item
    // Delete item
    // Verify item is removed
  });
});
```

**Key Concepts:**

- **Integration Testing** - Testing multiple components together
- **Context Testing** - Testing with React Context
- **Custom Render** - Creating custom render function with providers
- **Helper Functions** - Reusable test utilities

---

## Key Concepts

### Test-Driven Development (TDD)

**Red-Green-Refactor Cycle:**

1. **Red** - Write a failing test
2. **Green** - Write minimal code to pass
3. **Refactor** - Improve code while keeping tests green

**Benefits:**

- Better code design
- Increased confidence
- Living documentation
- Fewer bugs
- Faster development

### Mocking in Tests

**Why Mock?**

- Isolate component under test
- Speed up tests
- Control dependencies
- Focus on specific behavior

**Example - Mocking Child Component:**

```typescript
vi.mock("../components/ItemCard", () => ({
  default: () => <article>item card</article>,
}));
```

### Integration Testing

**What is Integration Testing?**

Testing multiple components working together to verify the complete user flow.

**Example:**

```typescript
test("handles adding an item", async () => {
  // Render app with context
  render(
    <FlowProvider>
      <AppWithContext />
    </FlowProvider>
  );

  // Fill form
  await user.type(titleInput, "New Task");
  await user.click(submitButton);

  // Verify item appears in list
  expect(screen.getByText("New Task")).toBeInTheDocument();
});
```

### Context Testing

**Testing with React Context:**

```typescript
const customRender = (ui: React.ReactElement) => {
  return render(<FlowProvider>{ui}</FlowProvider>);
};

test("uses context correctly", () => {
  customRender(<Component />);
  // Test component that uses context
});
```

### Helper Functions in Tests

**Creating Reusable Test Helpers:**

```typescript
const getElements = () => ({
  titleInput: screen.getByRole("textbox", { name: /title/i }),
  submitButton: screen.getByRole("button", { name: /add task/i }),
});

const addTestItem = async (user: UserEvent) => {
  const { titleInput, submitButton } = getElements();
  await user.type(titleInput, "Test Item");
  await user.click(submitButton);
};
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

### Testing Form Submission

```typescript
test("submits form with entered values", async () => {
  const mockOnSubmit = vi.fn();
  const user = userEvent.setup();
  render(<Form onSubmit={mockOnSubmit} />);

  const titleInput = screen.getByRole("textbox", { name: /title/i });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  await user.type(titleInput, "New Task");
  await user.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalledWith({
    title: "New Task",
    description: "",
    category: "normal",
  });
});
```

### Testing User Interactions

```typescript
test("handles delete button click", async () => {
  const mockOnDelete = vi.fn();
  const user = userEvent.setup();
  render(<ItemCard id="1" onDelete={mockOnDelete} />);

  const deleteButton = screen.getByRole("button", { name: /delete/i });
  await user.click(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledWith("1");
});
```

### Testing with Context

```typescript
test("adds item using context", async () => {
  const user = userEvent.setup();
  render(
    <FlowProvider>
      <AppWithContext />
    </FlowProvider>
  );

  // Add item
  await user.type(screen.getByRole("textbox", { name: /title/i }), "Task");
  await user.click(screen.getByRole("button", { name: /add task/i }));

  // Verify item appears
  expect(screen.getByText("Task")).toBeInTheDocument();
});
```

### Mocking Components

```typescript
// Mock a component
vi.mock("./ChildComponent", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

test("renders without child component complexity", () => {
  render(<ParentComponent />);
  // Test parent without worrying about child implementation
});
```

### Testing Empty States

```typescript
test("renders empty state when no items", () => {
  render(<List items={[]} onDelete={vi.fn()} />);
  expect(screen.queryAllByRole("article")).toHaveLength(0);
});
```

### Using beforeEach for Setup

```typescript
describe("Component", () => {
  let user: UserEvent;
  const mockHandler = vi.fn();

  beforeEach(() => {
    user = userEvent.setup();
    mockHandler.mockClear();
    render(<Component onAction={mockHandler} />);
  });

  test("first test", () => {
    // Uses setup from beforeEach
  });

  test("second test", () => {
    // Also uses setup from beforeEach
  });
});
```

---

## Reusing Components

### Using Form Component in Other Projects

1. **Copy the component file:**

   ```bash
   cp src/components/Form.tsx /path/to/your/project/src/components/
   ```

2. **Copy type definitions:**

   ```typescript
   // Copy from utils.ts
   export type ItemCategory = "urgent" | "important" | "normal" | "low";
   export type ItemWithoutId = {
     title: string;
     description: string;
     category: ItemCategory;
   };
   ```

3. **Install dependencies if needed:**

   ```bash
   npm install react react-dom
   ```

4. **Import and use:**

   ```typescript
   import Form from "./components/Form";

   function App() {
     const handleSubmit = (item: ItemWithoutId) => {
       console.log("New item:", item);
     };

     return <Form onSubmit={handleSubmit} />;
   }
   ```

### Using ItemCard Component

The ItemCard component can be reused with any item data:

```typescript
import ItemCard from "./components/ItemCard";

function App() {
  const items = [
    {
      id: "1",
      title: "Task 1",
      description: "Description",
      category: "urgent",
    },
  ];

  const handleDelete = (id: string) => {
    console.log("Delete:", id);
  };

  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} {...item} onDelete={handleDelete} />
      ))}
    </div>
  );
}
```

### Using FlowContext

To reuse the Context pattern:

1. **Copy FlowContext.tsx**
2. **Wrap your app:**

   ```typescript
   import { FlowProvider } from "./FlowContext";

   function App() {
     return (
       <FlowProvider>
         <YourComponents />
       </FlowProvider>
     );
   }
   ```

3. **Use the hook:**

   ```typescript
   import { useFlowContext } from "./FlowContext";

   function Component() {
     const { items, handleAddItem, handleDeleteItem } = useFlowContext();
     // Use context values
   }
   ```

### Reusing Test Helpers

The `getElements` helper can be adapted:

```typescript
// Generic form helper
export const getFormElements = (formName?: string) => {
  const namePattern = formName ? new RegExp(formName, "i") : /form/i;
  return {
    titleInput: screen.getByRole("textbox", { name: /title/i }),
    submitButton: screen.getByRole("button", { name: namePattern }),
  };
};
```

---

## Environment Variables

### Current Project Status

**This project does not require environment variables.** It's a client-side application without external API calls or configuration that needs environment-specific values.

### When You Need Environment Variables

If you extend this project to include:

- API endpoints for saving tasks
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
   VITE_APP_NAME=Focus Flow
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
- Use different `.env` files for different environments
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

- **Test-Driven Development (TDD)** - Development approach writing tests first
- **Red-Green-Refactor** - TDD cycle: write failing test, make it pass, improve code
- **Unit Testing** - Testing individual components in isolation
- **Integration Testing** - Testing component interactions
- **Mocking** - Simulating dependencies in tests
- **Vitest** - Modern test runner built on Vite
- **React Testing Library** - Testing utilities for React components
- **Jest-DOM** - Custom matchers for DOM element assertions
- **jsdom** - DOM implementation for Node.js testing
- **User Events** - Simulated user interactions
- **Test Coverage** - Percentage of code covered by tests

### React Keywords

- **Component** - Reusable UI building blocks
- **Props** - Data passed to components
- **State** - Component internal data
- **Context API** - React's built-in state management solution
- **Custom Hooks** - Reusable stateful logic
- **JSX** - JavaScript syntax extension for React
- **Hooks** - Functions to use React features (useState, useContext)
- **Provider** - Context provider component
- **Consumer** - Component that consumes context

### Development Keywords

- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and dev server
- **HMR** - Hot Module Replacement for instant updates
- **ESLint** - Code linting and quality tool
- **Tailwind CSS** - Utility-first CSS framework
- **lucide-react** - Icon library for React
- **Refactoring** - Improving code without changing behavior

### TDD Keywords

- **Red Phase** - Writing failing tests
- **Green Phase** - Making tests pass
- **Refactor Phase** - Improving code quality
- **Test First** - Writing tests before implementation
- **Living Documentation** - Tests that document behavior
- **Regression Testing** - Ensuring changes don't break existing functionality

---

## Conclusion

This Focus Flow TDD project demonstrates how to build a complete React application using Test-Driven Development principles. By following this project, you've learned:

✅ How to apply TDD methodology (Red-Green-Refactor)  
✅ How to write comprehensive component tests  
✅ How to test React Context and custom hooks  
✅ How to write integration tests  
✅ How to mock components for isolated testing  
✅ How to test user interactions and form submissions  
✅ How to structure tests with helper functions  
✅ Best practices for React Testing Library  
✅ How to manage state with Context API and custom hooks

### Next Steps

1. **Practice TDD** - Try building a new feature using TDD
2. **Increase Coverage** - Aim for higher test coverage
3. **Explore Advanced Testing** - Learn about testing async operations, routing, and more
4. **Study Patterns** - Research more testing patterns and best practices
5. **Build Projects** - Apply TDD to your own projects

### Resources

- [React Testing Library Documentation](https://testing-library.com/react)
- [Vitest Documentation](https://vitest.dev/)
- [TDD Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Test-Driven Development Guide](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/)

### Tips for Success

- **Start Small** - Begin with simple tests and gradually add complexity
- **Test Behavior** - Focus on what users see and do, not implementation
- **Keep Tests Fast** - Fast tests encourage running them frequently
- **Refactor Regularly** - Don't let code quality degrade
- **Read Test Failures** - They provide valuable feedback
- **Practice Regularly** - TDD is a skill that improves with practice

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
