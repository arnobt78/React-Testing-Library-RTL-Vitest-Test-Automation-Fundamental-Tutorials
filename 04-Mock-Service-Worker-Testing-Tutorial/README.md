# Mock API Calls with Service Worker (MSW) Testing Tutorial

A comprehensive tutorial project demonstrating how to use Mock Service Worker (MSW) to mock API calls in both browser and test environments. This project includes a complete posts management application with CRUD operations, showing how to test React components that interact with APIs without relying on a real backend.

![Screenshot 2025-06-18 at 14 28 00](https://github.com/user-attachments/assets/52be275d-618c-4590-b9a4-453cb3aa52cc)
![Screenshot 2025-06-18 at 14 27 45](https://github.com/user-attachments/assets/d9b6d9c9-3449-49e0-a478-55bd4ccdbbe5)

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
- [Mock Service Worker (MSW) Overview](#mock-service-worker-msw-overview)
- [Project Components](#project-components)
- [API Endpoints](#api-endpoints)
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

This project demonstrates how to use Mock Service Worker (MSW) to create reliable, fast, and maintainable tests for React applications that make API calls. MSW intercepts HTTP requests at the network level, allowing you to:

- **Mock API calls in tests** - No need for a real backend server
- **Mock API calls in development** - Work offline or with unstable APIs
- **Test error scenarios** - Easily simulate API failures
- **Fast tests** - No network latency in tests
- **Reliable tests** - Tests don't depend on external services

The application includes:

- **Posts Management System** - Create, read, update (like), and delete posts
- **MSW Setup** - Browser and Node.js (test) environments
- **Comprehensive Test Coverage** - Unit tests, integration tests, and error handling
- **Real API Simulation** - MSW intercepts actual HTTP requests

---

## Technology Stack

### Core Technologies

- **React 18.3.1** - Modern React library for building user interfaces
- **TypeScript 5.5.3** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.8** - Next-generation frontend build tool for fast development
- **Axios 1.7.8** - HTTP client for making API requests

### Testing Stack

- **Vitest 2.1.3** - Fast unit test framework powered by Vite
- **React Testing Library 16.0.1** - Simple and complete React DOM testing utilities
- **@testing-library/jest-dom 6.5.0** - Custom Jest matchers for DOM elements
- **@testing-library/user-event 14.5.2** - Simulate user interactions in tests
- **jsdom 25.0.1** - JavaScript implementation of the DOM for testing
- **MSW 2.6.6** - Mock Service Worker for API mocking

### Development Tools

- **json-server 1.0.0-beta.3** - Mock REST API server (optional, for manual testing)
- **ESLint 9.11.1** - Code linting and quality assurance
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **PostCSS 8.4.47** - CSS transformation tool

---

## Project Structure

```bash
04-Mock-Service-Worker-Testing-Tutorial/
├── public/
│   └── mockServiceWorker.js    # MSW service worker file (auto-generated)
├── src/
│   ├── __tests__/              # Component tests
│   │   ├── Form.test.tsx       # Form component tests
│   │   ├── Item.test.tsx       # Item component tests
│   │   └── List.test.tsx       # List component tests
│   ├── components/             # React components
│   │   ├── Form.tsx            # Post creation form
│   │   ├── Item.tsx            # Individual post item
│   │   └── List.tsx            # Posts list component
│   ├── hooks/                  # Custom React hooks
│   │   └── usePosts.ts         # Posts management hook with API calls
│   ├── mocks/                  # MSW mock handlers
│   │   ├── browser.ts          # Browser MSW setup
│   │   ├── server.ts           # Node.js (test) MSW setup
│   │   └── handlers.ts         # API request handlers
│   ├── App.tsx                 # Main application component
│   ├── App.test.tsx            # Integration tests with MSW
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles (Tailwind)
│   ├── vitest.setup.ts         # Vitest configuration and MSW setup
│   └── vite-env.d.ts           # Vite type definitions
├── db.json                      # json-server database file
├── posts.http                   # HTTP request examples for API testing
├── package.json                 # Project dependencies and scripts
├── vite.config.ts              # Vite and Vitest configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript app-specific config
├── tsconfig.node.json          # TypeScript Node.js config
├── eslint.config.js            # ESLint configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # This file
```

---

## Features

### ✅ Posts Management

- Create new posts with title
- View all posts in a list
- Like posts (increment likes count)
- Delete posts
- Error handling for all operations

### ✅ Mock Service Worker Integration

- Browser environment mocking (development)
- Node.js environment mocking (testing)
- Realistic API simulation
- Error scenario testing

### ✅ Comprehensive Testing

- Unit tests for individual components
- Integration tests with API calls
- Error handling tests
- Async operation testing

### ✅ Development Experience

- Work offline during development
- No backend server required for testing
- Fast test execution
- Reliable test results

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and HTTP requests
- Understanding of API mocking concepts

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

---

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd 04-Mock-Service-Worker-Testing-Tutorial
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install all required dependencies including:

   - React and React DOM
   - Vitest and testing libraries
   - MSW (Mock Service Worker)
   - Axios for HTTP requests
   - TypeScript and type definitions
   - Vite and build tools
   - Tailwind CSS and PostCSS
   - json-server (optional, for manual API testing)

3. **Initialize MSW service worker:**

   MSW requires a service worker file in the `public` directory. This file should already be present, but if you need to regenerate it:

   ```bash
   npx msw init public/ --save
   ```

4. **Verify installation:**

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

The application will be available at `http://localhost:5173` (or the next available port). MSW will automatically intercept API calls in the browser.

**Note:** MSW only runs in development mode (`import.meta.env.DEV`). In production builds, it's disabled.

### Optional: Run json-server (Alternative Backend)

For manual API testing without MSW, you can run json-server:

```bash
npm run server
```

This starts a mock REST API server at `http://localhost:4000` using the `db.json` file. You can use the `posts.http` file to test the API endpoints manually.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory. MSW is disabled in production builds.

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

The testing environment is configured in multiple files:

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

- `globals: true` - Makes `it`, `describe`, `expect` available globally
- `environment: "jsdom"` - Provides a DOM environment for testing React components
- `setupFiles` - Points to the setup file that configures MSW and testing utilities

#### 2. `src/vitest.setup.ts`

This file sets up MSW for testing and testing utilities:

```typescript
import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import server from "./mocks/server";

// Extend Vitest's expect with Jest-DOM matchers
expect.extend(matchers);

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});

// Start MSW server before all tests
beforeAll(() => {
  server.listen();
});

// Close MSW server after all tests
afterAll(() => {
  server.close();
});

// Reset handlers after each test (important for test isolation)
afterEach(() => {
  server.resetHandlers();
});
```

**What This Does:**

- **Extends expect with Jest-DOM matchers** - Adds matchers like `toBeInTheDocument()`, `toHaveValue()`, etc.
- **Starts MSW server** - Activates MSW to intercept HTTP requests in tests
- **Resets handlers** - Ensures test isolation by resetting mock handlers between tests
- **Automatic cleanup** - Removes rendered components from the DOM after each test

#### 3. `src/mocks/server.ts`

MSW setup for Node.js (test environment):

```typescript
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

const server = setupServer(...handlers);

export default server;
```

**Purpose:** Creates an MSW server instance for Node.js testing environment.

#### 4. `src/mocks/browser.ts`

MSW setup for browser (development environment):

```typescript
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
```

**Purpose:** Creates an MSW worker instance for browser environment.

#### 5. `src/main.tsx`

MSW initialization for development:

```typescript
if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  await worker.start();
}
```

**Purpose:** Starts MSW worker only in development mode.

---

## Running Tests

### Run All Tests

```bash
npm test
```

This starts Vitest in watch mode, automatically re-running tests when files change. MSW will intercept all API calls made during tests.

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

## Mock Service Worker (MSW) Overview

### What is MSW?

Mock Service Worker (MSW) is an API mocking library that uses Service Worker API to intercept actual HTTP requests at the network level. This means:

- **No mocking libraries needed** - MSW intercepts real HTTP requests
- **Works with any HTTP client** - Axios, fetch, XMLHttpRequest, etc.
- **Realistic testing** - Tests behave exactly like production code
- **Browser and Node.js** - Works in both environments

### How MSW Works

1. **Service Worker (Browser)** - Intercepts requests in the browser
2. **Node.js Interceptor (Tests)** - Intercepts requests in Node.js/test environment
3. **Request Handlers** - Define how to respond to specific requests
4. **Real Network Layer** - Intercepts at the network level, not in your code

### Benefits of MSW

1. **No Code Changes** - Your application code doesn't need to know about mocking
2. **Realistic** - Uses real HTTP requests, just intercepted
3. **Fast** - No network latency in tests
4. **Reliable** - Tests don't depend on external services
5. **Error Testing** - Easy to simulate API errors
6. **Development** - Can work offline or with unstable APIs

### MSW vs Other Mocking Approaches

| Approach                   | MSW | jest.mock() | Manual Mocks |
| -------------------------- | --- | ----------- | ------------ |
| Works with any HTTP client | ✅  | ❌          | ❌           |
| Realistic requests         | ✅  | ❌          | ❌           |
| No code changes needed     | ✅  | ❌          | ❌           |
| Easy error simulation      | ✅  | ⚠️          | ⚠️           |
| Works in browser dev       | ✅  | ❌          | ❌           |

---

## Project Components

### App Component (`src/App.tsx`)

The main application component that manages posts:

```typescript
const App = () => {
  const {
    posts,
    error,
    fetchPosts,
    handleCreatePost,
    handleLike,
    handleDelete,
  } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Posts Manager</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <Form onSubmit={handleCreatePost} />
      <List posts={posts} onLike={handleLike} onDelete={handleDelete} />
    </div>
  );
};
```

**Features:**

- Fetches posts on mount
- Displays error messages
- Manages posts state
- Handles create, like, and delete operations

---

### Form Component (`src/components/Form.tsx`)

Post creation form component:

```typescript
const Form = ({ onSubmit }: FormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, likes: 0 });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};
```

**Features:**

- Single input for post title
- Form validation (required field)
- Resets after submission
- Calls onSubmit callback with post data

**Props:**

- `onSubmit: (data: { title: string; likes: number }) => Promise<void>` - Callback when form is submitted

---

### List Component (`src/components/List.tsx`)

Posts list display component:

```typescript
const List = ({ posts, onLike, onDelete }: ListProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Item key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
};
```

**Features:**

- Renders list of posts
- Passes callbacks to Item components
- Empty state handling (no posts)

**Props:**

- `posts: Post[]` - Array of post objects
- `onLike: (postId: string) => Promise<void>` - Callback when post is liked
- `onDelete: (postId: string) => Promise<void>` - Callback when post is deleted

---

### Item Component (`src/components/Item.tsx`)

Individual post item component:

```typescript
const Item = ({ post, onLike, onDelete }: ItemProps) => {
  return (
    <article className="border p-4 rounded flex items-center justify-between">
      <h3 className="text-lg">{post.title}</h3>
      <div className="flex items-center gap-4">
        <button onClick={() => onLike(post.id)}>👍 {post.likes}</button>
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </article>
  );
};
```

**Features:**

- Displays post title and likes count
- Like button to increment likes
- Delete button to remove post
- Accessible article element

**Props:**

- `post: Post` - Post object with id, title, and likes
- `onLike: (postId: string) => Promise<void>` - Callback when like is clicked
- `onDelete: (postId: string) => Promise<void>` - Callback when delete is clicked

---

### usePosts Hook (`src/hooks/usePosts.ts`)

Custom hook for managing posts with API calls:

```typescript
export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post[]>(API_URL);
      setPosts(data);
      setError("");
    } catch (error) {
      setError("Failed to fetch posts");
    }
  }, []);

  const handleCreatePost = async (postData: PostWithoutId): Promise<void> => {
    try {
      await axios.post(API_URL, postData);
      await fetchPosts();
      setError("");
    } catch (error) {
      setError("Failed to create post");
    }
  };

  const handleLike = async (postId: string): Promise<void> => {
    try {
      const post = posts.find((p) => p.id === postId);
      if (!post) {
        setError("Post not found");
        return;
      }
      await axios.put(`${API_URL}/${postId}`, {
        ...post,
        likes: post.likes + 1,
      });
      await fetchPosts();
      setError("");
    } catch (error) {
      setError("Failed to like post");
    }
  };

  const handleDelete = async (postId: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${postId}`);
      await fetchPosts();
      setError("");
    } catch (error) {
      setError("Failed to delete post");
    }
  };

  return {
    posts,
    error,
    fetchPosts,
    handleCreatePost,
    handleDelete,
    handleLike,
  };
};
```

**Features:**

- State management for posts and errors
- CRUD operations via Axios
- Error handling for all operations
- Automatic error state management

**API Endpoint:** `http://localhost:4000/posts`

---

## API Endpoints

All API endpoints are defined in `src/mocks/handlers.ts` and follow REST conventions:

### Base URL

```bash
http://localhost:4000/posts
```

### Endpoints

#### GET /posts

Get all posts.

**Response:**

```json
[
  {
    "id": "1",
    "title": "First Post",
    "likes": 5
  },
  {
    "id": "2",
    "title": "Second Post",
    "likes": 10
  }
]
```

#### POST /posts

Create a new post.

**Request Body:**

```json
{
  "title": "New Post",
  "likes": 0
}
```

**Response:**

```json
{
  "id": "1234567890",
  "title": "New Post",
  "likes": 0
}
```

**Status Code:** 201

#### PUT /posts/:id

Update a post (used for liking).

**Request Body:**

```json
{
  "id": "1",
  "title": "First Post",
  "likes": 6
}
```

**Response:**

```json
{
  "id": "1",
  "title": "First Post",
  "likes": 6
}
```

**Status Code:** 200

#### DELETE /posts/:id

Delete a post.

**Response:**

```json
null
```

**Status Code:** 200

### Error Handlers

The project includes error handlers for testing error scenarios:

- `getErrorHandler` - Returns 500 error for GET requests
- `createErrorHandler` - Returns 400 error for POST requests
- `updateErrorHandler` - Returns 400 error for PUT requests
- `deleteErrorHandler` - Returns 400 error for DELETE requests

---

## Understanding Test Files

### MSW Handlers (`src/mocks/handlers.ts`)

Defines how MSW should respond to API requests:

```typescript
export let posts: Post[] = [
  { id: "1", title: "First Post", likes: 5 },
  { id: "2", title: "Second Post", likes: 10 },
];

export const handlers = [
  // GET all posts
  http.get(url, async () => {
    return HttpResponse.json(posts);
  }),

  // POST create post
  http.post(url, async ({ request }) => {
    const newPost = (await request.json()) as Post;
    newPost.id = Date.now().toString();
    posts.push(newPost);
    return HttpResponse.json(newPost, { status: 201 });
  }),

  // PUT update post
  http.put(`${url}/:id`, async ({ params, request }) => {
    const { id } = params;
    const updatedPost = (await request.json()) as Post;
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = updatedPost;
    return HttpResponse.json(updatedPost, { status: 200 });
  }),

  // DELETE post
  http.delete(`${url}/:id`, async ({ params }) => {
    const { id } = params;
    posts = posts.filter((post) => post.id !== id);
    return HttpResponse.json(null, { status: 200 });
  }),
];
```

**Key Points:**

- **Mutable State** - `posts` array is modified by handlers (for testing)
- **HTTP Methods** - Supports GET, POST, PUT, DELETE
- **Response Formatting** - Uses `HttpResponse.json()` for responses
- **Status Codes** - Appropriate HTTP status codes

### Form Component Tests (`src/__tests__/Form.test.tsx`)

Unit tests for the Form component:

```typescript
describe("Form Component", () => {
  const mockOnSubmit = vi.fn();
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    mockOnSubmit.mockClear();
    render(<Form onSubmit={mockOnSubmit} />);
  });

  test("submits the form with correct data", async () => {
    const { input, submitBtn } = getFormElements();
    await user.type(input, "Test Post");
    await user.click(submitBtn);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: "Test Post",
      likes: 0,
    });
  });
});
```

**Test Coverage:**

- Form rendering
- Input value updates
- Form submission
- Required field validation
- Form reset after submission

---

### Item Component Tests (`src/__tests__/Item.test.tsx`)

Unit tests for the Item component:

```typescript
describe("Item Component", () => {
  const mockPost: Post = {
    id: "1",
    title: "testing library",
    likes: 5,
  };

  test("calls onLike when like button is clicked", async () => {
    const likeButton = screen.getByRole("button", {
      name: `👍 ${mockPost.likes}`,
    });
    await user.click(likeButton);
    expect(mockOnLike).toHaveBeenCalledWith(mockPost.id);
  });
});
```

**Test Coverage:**

- Post content rendering
- Likes count display
- Like button functionality
- Delete button functionality

---

### List Component Tests (`src/__tests__/List.test.tsx`)

Unit tests for the List component:

```typescript
describe("List Component", () => {
  test("renders correct number of articles", () => {
    render(
      <List posts={mockPosts} onLike={mockOnLike} onDelete={mockOnDelete} />
    );
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(2);
  });

  test("renders empty list when no posts provided", () => {
    render(<List posts={[]} onLike={mockOnLike} onDelete={mockOnDelete} />);
    const articles = screen.queryAllByRole("article");
    expect(articles).toHaveLength(0);
  });
});
```

**Test Coverage:**

- Multiple posts rendering
- Empty state handling

---

### App Integration Tests (`src/App.test.tsx`)

Integration tests with MSW:

```typescript
describe("App", () => {
  test("fetches posts on mount", async () => {
    render(<App />);
    expect(await screen.findByText(/first post/i)).toBeInTheDocument();
    expect(await screen.findByText(/second post/i)).toBeInTheDocument();
  });

  test("creates a new post", async () => {
    const user = userEvent.setup();
    render(<App />);
    const { input, submitBtn } = getFormElements();
    await user.type(input, "New Post");
    await user.click(submitBtn);
    expect(await screen.findByText(/new post/i)).toBeInTheDocument();
  });

  test("shows error message when fetching posts fails", async () => {
    server.use(...getErrorHandler);
    render(<App />);
    expect(
      await screen.findByText(/failed to fetch posts/i)
    ).toBeInTheDocument();
  });
});
```

**Key Concepts:**

- **Async Testing** - Uses `findBy*` for async operations
- **Error Testing** - Uses `server.use()` to override handlers
- **Integration Testing** - Tests complete user flows
- **MSW Handler Override** - Dynamically changes mock responses

---

## Key Concepts

### MSW Request Handlers

**Handler Structure:**

```typescript
http.get(url, async () => {
  return HttpResponse.json(data);
});

http.post(url, async ({ request }) => {
  const body = await request.json();
  // Process request
  return HttpResponse.json(response, { status: 201 });
});

http.put(`${url}/:id`, async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  // Process request
  return HttpResponse.json(response);
});

http.delete(`${url}/:id`, async ({ params }) => {
  const { id } = params;
  // Process request
  return HttpResponse.json(null, { status: 200 });
});
```

### Dynamic Handler Override

**Override handlers in tests:**

```typescript
test("handles error scenario", async () => {
  // Override default handler with error handler
  server.use(...getErrorHandler);
  render(<App />);
  // Test error handling
});
```

**Reset handlers:**

```typescript
afterEach(() => {
  server.resetHandlers(); // Reset to default handlers
});
```

### Async Testing with MSW

**Wait for async operations:**

```typescript
test("fetches data", async () => {
  render(<Component />);
  // Use findBy* queries for async content
  expect(await screen.findByText("Post Title")).toBeInTheDocument();
});
```

### Testing Error Scenarios

**Create error handlers:**

```typescript
export const getErrorHandler = [
  http.get(url, () => {
    return HttpResponse.json({ message: "Failed to fetch" }, { status: 500 });
  }),
];
```

**Use in tests:**

```typescript
test("shows error", async () => {
  server.use(...getErrorHandler);
  render(<App />);
  expect(await screen.findByText(/failed/i)).toBeInTheDocument();
});
```

### Scoped Queries with `within`

**Query elements within a specific container:**

```typescript
import { within } from "@testing-library/react";

test("deletes specific post", async () => {
  const allPosts = await screen.findAllByRole("article");
  const firstPost = allPosts[0];

  // Query within specific post element
  const deleteBtn = within(firstPost).getByRole("button", {
    name: /delete/i,
  });

  await user.click(deleteBtn);
});
```

**Purpose:** Useful when multiple elements match the same query.

---

## Code Snippets

### Basic MSW Handler

```typescript
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/data", async () => {
    return HttpResponse.json({ data: "test" });
  }),
];
```

### POST Handler with Request Body

```typescript
http.post("https://api.example.com/posts", async ({ request }) => {
  const body = await request.json();
  const newPost = {
    id: Date.now().toString(),
    ...body,
  };
  return HttpResponse.json(newPost, { status: 201 });
});
```

### Handler with URL Parameters

```typescript
http.put("https://api.example.com/posts/:id", async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  // Use id and body to update resource
  return HttpResponse.json({ id, ...body });
});
```

### Error Handler

```typescript
http.get("https://api.example.com/data", () => {
  return HttpResponse.json({ error: "Internal Server Error" }, { status: 500 });
});
```

### Testing with MSW

```typescript
import { render, screen } from "@testing-library/react";
import App from "./App";

test("fetches and displays data", async () => {
  render(<App />);
  expect(await screen.findByText("Post Title")).toBeInTheDocument();
});
```

### Override Handler in Test

```typescript
import server from "./mocks/server";
import { errorHandler } from "./mocks/handlers";

test("handles error", async () => {
  server.use(...errorHandler);
  render(<App />);
  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});
```

### Testing Async Form Submission

```typescript
test("creates post", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox");
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  await user.type(input, "New Post");
  await user.click(submitBtn);

  expect(await screen.findByText("New Post")).toBeInTheDocument();
});
```

### Testing with within Utility

```typescript
import { within } from "@testing-library/react";

test("deletes item", async () => {
  const items = await screen.findAllByRole("article");
  const firstItem = items[0];

  const deleteBtn = within(firstItem).getByRole("button", {
    name: /delete/i,
  });

  await user.click(deleteBtn);
  expect(items).toHaveLength(0);
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
   type FormProps = {
     onSubmit: (data: { title: string; likes: number }) => Promise<void>;
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
     const handleSubmit = async (data: { title: string; likes: number }) => {
       // Your API call here
       console.log("New post:", data);
     };

     return <Form onSubmit={handleSubmit} />;
   }
   ```

### Using usePosts Hook

The `usePosts` hook can be adapted for other resources:

```typescript
// Adapt for comments
export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const API_URL = "http://localhost:4000/comments";

  const fetchComments = useCallback(async () => {
    const { data } = await axios.get<Comment[]>(API_URL);
    setComments(data);
  }, []);

  // Similar pattern for create, update, delete
};
```

### Reusing MSW Setup

To reuse MSW setup in other projects:

1. **Copy mocks directory:**

   ```bash
   cp -r src/mocks /path/to/your/project/src/
   ```

2. **Update handlers:**

   Modify `handlers.ts` with your API endpoints.

3. **Update setup files:**

   - `vitest.setup.ts` - Import your server
   - `main.tsx` - Import your browser worker

4. **Initialize MSW:**

   ```bash
   npx msw init public/ --save
   ```

### Reusing Test Helpers

The `getFormElements` helper can be adapted:

```typescript
export const getFormElements = (formName?: string) => {
  const namePattern = formName ? new RegExp(formName, "i") : /form/i;
  return {
    input: screen.getByRole("textbox", { name: /title/i }),
    submitBtn: screen.getByRole("button", { name: namePattern }),
  };
};
```

---

## Environment Variables

### Current Project Status

**This project uses a hardcoded API URL** (`http://localhost:4000/posts`). For production use, you should use environment variables.

### Setting Up Environment Variables

1. **Create `.env` file in project root:**

   ```bash
   touch .env
   ```

2. **Add environment variables:**

   ```env
   VITE_API_URL=http://localhost:4000
   VITE_API_BASE_URL=http://localhost:4000/posts
   ```

3. **Update code to use environment variables:**

   ```typescript
   // src/hooks/usePosts.ts
   const API_URL =
     import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/posts";
   ```

   ```typescript
   // src/mocks/handlers.ts
   const url =
     import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/posts";
   ```

4. **Important Notes:**

   - Vite requires `VITE_` prefix for client-side variables
   - Add `.env` to `.gitignore` to keep secrets safe
   - Create `.env.example` as a template:

     ```env
     VITE_API_URL=http://localhost:4000
     VITE_API_BASE_URL=http://localhost:4000/posts
     ```

5. **For Different Environments:**

   ```env
   # .env.development
   VITE_API_BASE_URL=http://localhost:4000/posts

   # .env.production
   VITE_API_BASE_URL=https://api.production.com/posts

   # .env.test
   VITE_API_BASE_URL=http://localhost:4000/posts
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
  readonly VITE_API_BASE_URL: string;
}
```

### MSW and Environment Variables

MSW handlers can also use environment variables:

```typescript
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
const url = `${API_BASE_URL}/posts`;

export const handlers = [
  http.get(url, async () => {
    return HttpResponse.json(posts);
  }),
];
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

### Package.json MSW Configuration

```json
{
  "msw": {
    "workerDirectory": ["public"]
  }
}
```

This tells MSW where to look for the service worker file.

### ESLint Configuration (`eslint.config.js`)

Provides code quality checks and React-specific linting rules.

### Tailwind Configuration (`tailwind.config.js`)

Configures Tailwind CSS utility classes for styling.

---

## Keywords

### Mock Service Worker Keywords

- **Mock Service Worker (MSW)** - API mocking library using Service Worker API
- **Service Worker** - Browser API for intercepting network requests
- **Request Handler** - Function that defines how to respond to requests
- **setupServer** - MSW setup for Node.js/test environment
- **setupWorker** - MSW setup for browser environment
- **HttpResponse** - MSW utility for creating HTTP responses
- **http.get/post/put/delete** - MSW request handler methods
- **Network Interception** - Intercepting requests at the network level

### Testing Keywords

- **API Mocking** - Simulating API responses in tests
- **Integration Testing** - Testing component interactions with APIs
- **Async Testing** - Testing asynchronous operations
- **Error Scenario Testing** - Testing error handling
- **Handler Override** - Dynamically changing mock responses
- **Test Isolation** - Ensuring tests don't affect each other
- **Vitest** - Modern test runner built on Vite
- **React Testing Library** - Testing utilities for React components

### React Keywords

- **Component** - Reusable UI building blocks
- **Custom Hook** - Reusable stateful logic
- **useEffect** - React hook for side effects
- **useState** - React hook for state management
- **useCallback** - React hook for memoized callbacks
- **Props** - Data passed to components
- **State** - Component internal data

### HTTP Keywords

- **REST API** - Representational State Transfer API architecture
- **CRUD** - Create, Read, Update, Delete operations
- **HTTP Methods** - GET, POST, PUT, DELETE
- **Status Codes** - HTTP response status codes (200, 201, 400, 500)
- **Request/Response** - HTTP request and response cycle
- **Axios** - HTTP client library

### Development Keywords

- **TypeScript** - Typed superset of JavaScript
- **Vite** - Fast build tool and dev server
- **json-server** - Mock REST API server
- **Environment Variables** - Configuration via environment
- **Service Worker** - Background script for network interception

---

## Conclusion

This Mock Service Worker tutorial project demonstrates how to create reliable, fast, and maintainable tests for React applications that interact with APIs. By following this project, you've learned:

✅ How to set up Mock Service Worker (MSW) for browser and Node.js  
✅ How to create request handlers for API mocking  
✅ How to test components that make API calls  
✅ How to test error scenarios with MSW  
✅ How to override handlers dynamically in tests  
✅ How to test async operations with React Testing Library  
✅ How to use the `within` utility for scoped queries  
✅ Best practices for API mocking in tests  
✅ How to structure MSW handlers and setup files

### Next Steps

1. **Practice MSW** - Try mocking different API endpoints
2. **Explore Advanced Features** - Learn about MSW request matching, response transformers
3. **Study Documentation** - Deep dive into [MSW docs](https://mswjs.io/)
4. **Apply to Your Projects** - Use MSW in your own projects
5. **Learn More** - Explore testing patterns with MSW

### Resources

- [Mock Service Worker Documentation](https://mswjs.io/)
- [React Testing Library Documentation](https://testing-library.com/react)
- [Vitest Documentation](https://vitest.dev/)
- [Axios Documentation](https://axios-http.com/)
- [MSW GitHub Repository](https://github.com/mswjs/msw)
- [Testing Async Code with RTL](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-find-queries)

### Tips for Success

- **Start Simple** - Begin with basic GET requests, then add complexity
- **Use Realistic Data** - Make mock responses match real API structure
- **Test Error Cases** - Don't just test happy paths
- **Keep Handlers Maintainable** - Organize handlers clearly
- **Reset Handlers** - Always reset handlers between tests
- **Use TypeScript** - Type your handlers and responses
- **Practice Regularly** - MSW is a powerful tool that improves with practice

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
