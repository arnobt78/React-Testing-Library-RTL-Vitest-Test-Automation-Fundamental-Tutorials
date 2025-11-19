# Posts Manager with Mock Service Worker & React Testing (Vitest)

![Screenshot 2025-06-18 at 14 28 00](https://github.com/user-attachments/assets/52be275d-618c-4590-b9a4-453cb3aa52cc)
![Screenshot 2025-06-18 at 14 27 45](https://github.com/user-attachments/assets/d9b6d9c9-3449-49e0-a478-55bd4ccdbbe5)

---

A modern React app for managing posts, designed as a hands-on learning project for advanced React testing. This project demonstrates how to build, test, and mock HTTP APIs using Mock Service Worker (MSW), Vitest, and React Testing Library. It includes a full CRUD UI, custom hooks, and a robust test suite.

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Running the Mock API](#running-the-mock-api)
  - [Running Tests](#running-tests)
- [Key Concepts & Walkthrough](#key-concepts--walkthrough)
  - [JSON Server](#json-server)
  - [usePosts Hook](#useposts-hook)
  - [Component Overview](#component-overview)
  - [Testing Strategy](#testing-strategy)
  - [Mock Service Worker (MSW)](#mock-service-worker-msw)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [Original Teaching Content](#original-teaching-content)

---

## Project Summary

This project is a complete example of a React CRUD app with a focus on testing and API mocking. You will learn how to:

- Build a posts manager with create, like, and delete features.
- Use a custom React hook for API logic.
- Write robust unit and integration tests.
- Mock HTTP requests in both tests and development using MSW.

---

## Features

- Add, like, and delete posts.
- Error handling for all API actions.
- Fully tested with Vitest and React Testing Library.
- Mocked API using Mock Service Worker (MSW) for both tests and development.
- Modern, clean UI with Tailwind CSS.

---

## Technology Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (for fast dev/build)
- **Vitest** (test runner)
- **React Testing Library** (UI testing)
- **Mock Service Worker (MSW)** (API mocking)
- **Axios** (HTTP client)
- **Tailwind CSS** (styling)
- **JSON Server** (optional, for real API)

---

## Project Structure

````bash
.
├── public/
│   └── mockServiceWorker.js
├── src/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── vitest.setup.ts
│   ├── hooks/
│   │   └── usePosts.ts
│   ├── components/
│   │   ├── Form.tsx
│   │   ├── List.tsx
│   │   └── Item.tsx
│   ├── mocks/
│   │   ├── handlers.ts
│   │   ├── server.ts
│   │   └── browser.ts
│   └── __tests__/
│       ├── Form.test.tsx
│       ├── List.test.tsx
│       └── Item.test.tsx
├── db.json
├── posts.http
├── package.json
└── README.md
```http

---

## Getting Started

### Installation

```bash
npm install

### Running the App (with MSW)

```bash
npm run dev
```http

- The app will use MSW to mock API requests in development.

### Running the Mock API (JSON Server, optional)

If you want to use a real backend instead of MSW:

```bash
npm run server
```markdown

- This starts JSON Server at `http://localhost:4000/posts`.

### Running Tests

```bash
npm run test
````

- Runs all tests with Vitest and MSW.

---

## Key Concepts & Walkthrough

### JSON Server

- Used for simulating a REST API.
- See `db.json` for sample data.
- Endpoints: `GET/POST/PUT/DELETE http://localhost:4000/posts`

### usePosts Hook

- Encapsulates all post-related API logic.
- Handles fetching, creating, liking, and deleting posts.
- Returns state and error messages for use in components.

### Component Overview

- **Form**: Input for new posts.
- **List**: Displays all posts.
- **Item**: Single post with like and delete buttons.

### Testing Strategy

- **Form, List, Item**: Unit tested for rendering and user interaction.
- **App**: Integration tested for full user flows.
- **MSW**: Used to mock API responses in all tests.

#### Example Test Structure

- `src/__tests__/Form.test.tsx`: Tests form input, validation, and submission.
- `src/__tests__/List.test.tsx`: Tests list rendering and empty state.
- `src/__tests__/Item.test.tsx`: Tests like and delete actions.
- `src/App.test.tsx`: Tests full app flows, including error handling.

### Mock Service Worker (MSW)

- **Development**: MSW intercepts and mocks API requests so you don't need a real backend.
- **Testing**: MSW provides consistent, fast, and isolated API responses for all tests.
- Handlers are defined in `src/mocks/handlers.ts`.

#### Setting up MSW

- The service worker script is in `public/mockServiceWorker.js`.
- Handlers for all API endpoints are in `src/mocks/handlers.ts`.
- The worker is started in development via `src/main.tsx`.

---

## JSON Server Setup

[JSON Server](https://www.npmjs.com/package/json-server)

```bash
npm install json-server

```

create a db.json file

db.json

```json
"posts": [
    {
      "id": "1",
      "title": "testing library",
      "likes": 10
    },
    {
      "id": "2",
      "title": "node ts course",
      "likes": 8
    }
  ]
```

default port is 3000

```bash
npx json-server db.json --port 4000
```

package.json

```json
"scripts": {
  "server": "json-server db.json --port 4000"
}
```

`http://localhost:4000/posts`

GET /posts
GET /posts/:id
POST /posts
PUT /posts/:id
PATCH /posts/:id
DELETE /posts/:id

## Rest Client Extension

- install the extension
- create a new posts.http file

posts.http

```http

### Get all posts

GET http://localhost:4000/posts

### Get a single post

GET http://localhost:4000/posts/1

### Create a post

POST http://localhost:4000/posts
content-type: application/json

{
  "title": "new post",
  "likes": 0
}

### Update a post

PUT http://localhost:4000/posts/1
content-type: application/json

{
  "title": "updated post"
}

### Delete a post

DELETE http://localhost:4000/posts/1

```

## usePosts Hook Implementation

- install axios

```bash
npm install axios
```

src/hooks/usePosts.ts

```ts
import { useState } from "react";
import axios from "axios";

export type Post = {
  id: string;
  title: string;
  likes: number;
};

export type PostWithoutId = Omit<Post, "id">;

const API_URL = "http://localhost:4000/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  const fetchPosts = async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post[]>(API_URL);
      setPosts(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };

  const handleCreatePost = async (postData: PostWithoutId): Promise<void> => {
    try {
      await axios.post(API_URL, {
        ...postData,
      });
      await fetchPosts();
      setError("");
    } catch (err) {
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
    } catch (err) {
      setError("Failed to like post");
    }
  };

  const handleDelete = async (postId: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${postId}`);
      await fetchPosts();
      setError("");
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  return {
    posts,
    error,
    fetchPosts,
    handleCreatePost,
    handleLike,
    handleDelete,
  };
};
```

## Components

create components folder

- Form.tsx
- List.tsx
- Item.tsx

src/components/Form.tsx

```tsx
const Form = () => {
  return <div>Form</div>;
};
export default Form;
```

src/App.tsx

```tsx
import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { usePosts } from "./hooks/usePosts";

function App() {
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
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Posts Manager</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <Form onSubmit={handleCreatePost} />
      <List posts={posts} onLike={handleLike} onDelete={handleDelete} />
    </div>
  );
}

export default App;
```

## Form Component

src/components/Form/Form.tsx

```tsx
import { useState, FormEvent, ChangeEvent } from "react";

type FormProps = {
  onSubmit: (data: { title: string; likes: number }) => Promise<void>;
};

function Form({ onSubmit }: FormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, likes: 0 });
    setTitle("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <label htmlFor="title" className="sr-only">
        Title
      </label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter post title"
        className="p-2 border rounded mr-2 w-64"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-teal-500 text-white rounded"
      >
        Add Post
      </button>
    </form>
  );
}

export default Form;
```

## List Component

src/components/List.tsx

```tsx
import { type Post } from "../hooks/usePosts";
import Item from "./Item";

type ListProps = {
  posts: Post[];
  onLike: (postId: string) => Promise<void>;
  onDelete: (postId: string) => Promise<void>;
};

function List({ posts, onLike, onDelete }: ListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Item key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
```

## Item Component

src/components/Item.tsx

```tsx
import { type Post } from "../hooks/usePosts";

type ItemProps = {
  post: Post;
  onLike: (postId: string) => Promise<void>;
  onDelete: (postId: string) => Promise<void>;
};

const Item = ({ post, onLike, onDelete }: ItemProps) => {
  return (
    <article
      key={post.id}
      className="border p-4 rounded flex items-center justify-between"
    >
      <h3 className="text-lg">{post.title}</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLike(post.id)}
            className="px-3 py-1 bg-teal-500 text-white rounded"
          >
            👍 {post.likes}
          </button>
        </div>
        <button
          onClick={() => onDelete(post.id)}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Item;
```

## Form Tests

And once we have a working application, let's work on our tests.

- `npm install` to install dependencies
- `npm run server` to start the JSON Server
- `npm run dev` to start the React application

Also, this is a good opportunity to practice your current knowledge. Below you can find a list of steps that you can follow to create the tests for all three components. Form, List and Item.

- create `src/__tests__/Form.test.tsx` file

- Import necessary dependencies:

  - @testing-library/react for render and screen
  - vitest for testing utilities (describe, test, expect, vi)
  - @testing-library/user-event for simulating user interactions
  - Form component from your components directory

- Create a getFormElements helper function:

  - Export a function that returns an object
  - Use screen.getByRole to find form elements:
    - Find input using 'textbox' role with name matching /title/i
    - Find submit button using 'button' role with name matching /add post/i

- Set up the basic test structure:

  - Create a describe block for 'Form'
  - Create mock function for onSubmit using vi.fn()
  - Declare userEvent variable

- Create beforeEach setup:

  - Initialize userEvent
  - Clear mock function
  - Render Form component with mock onSubmit prop

- Write test case for initial rendering:

  - Create test block named 'renders correctly'
  - Get form elements using helper function
  - Assert that input has empty value
  - Assert that submit button is in the document

- Write test case for input changes:

  - Create test block named 'updates input value on change'
  - Get input element using helper function
  - Simulate typing 'Test Post' using userEvent
  - Assert that input value matches typed text

- Write test case for form validation:

  - Create test block named 'requires title input before submission'
  - Get submit button using helper function
  - Simulate clicking submit button without input
  - Assert that onSubmit mock was not called

- Write test case for successful form submission:

  - Create test block named 'submits the form with correct data'
  - Get both input and submit button
  - Simulate typing 'Test Post'
  - Simulate clicking submit button
  - Assert that onSubmit was called with correct data object (title and likes)

- Write test case for form reset after submission:
  - Create test block named 'clears input after submission'
  - Get both input and submit button
  - Simulate typing and submitting form
  - Assert that input value is empty after submission

```tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import userEvent, { UserEvent } from "@testing-library/user-event";
import Form from "../components/Form";

export const getFormElements = () => ({
  input: screen.getByRole("textbox", { name: /title/i }),
  submitBtn: screen.getByRole("button", { name: /add post/i }),
});

describe("Form", () => {
  const mockOnSubmit = vi.fn();
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    mockOnSubmit.mockClear();
    render(<Form onSubmit={mockOnSubmit} />);
  });
  test("renders correctly", () => {
    const { input, submitBtn } = getFormElements();
    expect(input).toHaveValue("");
    expect(submitBtn).toBeInTheDocument();
  });
  test("updates input value on change", async () => {
    const { input } = getFormElements();
    await user.type(input, "Test Post");
    expect(input).toHaveValue("Test Post");
  });
  test("requires title input before submission", async () => {
    const { submitBtn } = getFormElements();
    await user.click(submitBtn);

    expect(mockOnSubmit).not.toHaveBeenCalled();
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
  test("clears input after submission", async () => {
    const { input, submitBtn } = getFormElements();
    await user.type(input, "Test Post");
    await user.click(submitBtn);
    expect(input).toHaveValue("");
  });
});
```

## List Tests

- Import necessary dependencies:

  - @testing-library/react for render and screen
  - Post type from hooks/usePosts for typing
  - List component from your components directory

- Define mock data and functions:

  - Create mockPosts array with Post objects, each having id, title, and likes
  - Create mockOnLike and mockOnDelete functions using vi.fn()

- Set up the basic test structure:

  - Create a describe block for 'List Component'

- Write test case for rendering posts:

  - Create test block named 'renders correct number of articles'
  - Render List component with mockPosts, mockOnLike, and mockOnDelete
  - Use screen.getAllByRole to get all articles
  - Assert that the number of articles matches the length of mockPosts

- Write test case for rendering an empty list:
  - Create test block named 'renders empty list when no posts provided'
  - Render List component with an empty posts array, mockOnLike, and mockOnDelete
  - Use screen.queryAllByRole to get all articles
  - Assert that the number of articles is zero

`src/__tests__/List.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import { type Post } from "../hooks/usePosts";
import List from "../components/List";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Test Post 1",
    likes: 0,
  },
  {
    id: "2",
    title: "Test Post 2",
    likes: 5,
  },
];

const mockOnLike = vi.fn();
const mockOnDelete = vi.fn();

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

## Item Tests

- Import necessary dependencies:

  - @testing-library/react for render and screen
  - @testing-library/user-event for UserEvent type and functionality
  - vitest for testing utilities (describe, test, expect, vi)
  - Item component from components directory
  - Post type from hooks/usePosts

- Define mock data and functions:

  - Create mockPost object with id, title, and likes
  - Create mockOnDelete function using vi.fn()
  - Create mockOnLike function using vi.fn()

- Set up the test structure:

  - Create a describe block for 'Item'
  - Declare UserEvent variable
  - Create beforeEach block to:
    - Setup userEvent
    - Clear all mocks
    - Render Item component with mock props

- Write test case for title rendering:

  - Create test block named 'renders post title correctly'
  - Use screen.getByText to find title text
  - Assert that title is in the document

- Write test case for likes display:

  - Create test block named 'displays correct number of likes'
  - Use screen.getByText to find likes count with emoji
  - Assert that likes count is in the document

- Write test case for like functionality:

  - Create test block named 'calls onLike when like button is clicked'
  - Find like button using getByRole with button role and emoji name
  - Simulate click on like button
  - Assert that onLike was called once with correct post ID

- Write test case for delete functionality:
  - Create test block named 'calls onDelete when delete button is clicked'
  - Find delete button using getByRole with button role
  - Simulate click on delete button
  - Assert that onDelete was called once with correct post ID

`src/__tests__/Item.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Item from "../components/Item";
import { type Post } from "../hooks/usePosts";

const mockPost: Post = {
  id: "1",
  title: "testing library",
  likes: 5,
};

const mockOnDelete = vi.fn();
const mockOnLike = vi.fn();

describe("Item", () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();

    // If you're wondering why we're using the clearAllMocks function here, it's simply because this test file contains multiple mock functions. Unlike mockClear(), which only clears the state of a specific mock function, clearAllMocks() resets all mock functions.

    // vi.clearAllMocks() resets all mock functions, ensuring no leftover data affects other tests.
    // In contrast, mockOnSubmit.mockClear() only clears the state of the mockOnSubmit function.
    vi.clearAllMocks();
    render(
      <Item post={mockPost} onLike={mockOnLike} onDelete={mockOnDelete} />
    );
  });
  test("renders post title correctly", () => {
    expect(screen.getByText("testing library")).toBeInTheDocument();
  });

  test("displays correct number of likes", () => {
    expect(screen.getByText(`👍 ${mockPost.likes}`)).toBeInTheDocument();
  });

  test("calls onLike when like button is clicked", async () => {
    const likeButton = screen.getByRole("button", {
      name: `👍 ${mockPost.likes}`,
    });
    await user.click(likeButton);

    expect(mockOnLike).toHaveBeenCalledTimes(1);
    expect(mockOnLike).toHaveBeenCalledWith(mockPost.id);
  });

  test("calls onDelete when delete button is clicked", async () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await user.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockPost.id);
  });
});
```

## Mock Service Worker

Once we have the other tests in place, it's time to set up integration tests for our App component. Here's the key point: in this application, we work with a server. Just as we mocked our list data, functions, and item props, we also want to mock APIs. Here's why:

- **Faster Tests**: Mocking APIs allows tests to run quickly without waiting for real network requests.
- **Increased Reliability**: Tests remain consistent and aren't affected by external API availability or performance.
- **Cost Savings**: Avoiding real API calls during testing reduces costs, especially with usage-based APIs.
- **Edge Case Simulation**: Mocking APIs makes it easy to create various response scenarios, including errors, for thorough testing.
- **Resilience**: This approach helps ensure the application can handle different situations effectively.

The most popular tool for mocking API calls is [Mock Service Worker](https://mswjs.io/), which we will implement in the following sections.

```bash
npm install msw@latest --save-dev
```

- create `src/mocks/handlers.ts` file
- create `src/mocks/server.ts` file

src/mocks/handlers.ts

```ts
// Import necessary utilities from MSW and our Post type
import { http, HttpResponse } from "msw";
import { Post } from "../hooks/usePosts";

// Define the API endpoint we want to mock
const url = "http://localhost:4000/posts";

// Create mock data that will be used as our "database"
export let posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    likes: 5,
  },
  {
    id: "2",
    title: "Second Post",
    likes: 10,
  },
];

// Define request handlers for MSW
export const handlers = [
  // Mock the GET /posts endpoint
  // When a request is made to this URL, return our mock posts data
  // intercept GET request
  http.get(url, async () => {
    return HttpResponse.json(posts);
  }),
];
```

src/mocks/server.ts

```ts
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

const server = setupServer(...handlers);

export default server;
```

- add `src/vitest.setup.ts` file

```ts
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import server from "./mocks/server";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// Start worker before all tests
beforeAll(() => {
  server.listen();
});

//  Close worker after all tests
afterAll(() => {
  server.close();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers();
});
```

- create `src/App.test.tsx` file

```tsx
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { getFormElements } from "./__tests__/Form.test";
import { posts } from "./mocks/handlers";
import server from "./mocks/server";

describe("App", () => {
  test("renders the App component", () => {
    render(<App />);
    expect(screen.getByText(/posts manager/i)).toBeInTheDocument();
  });
  test("fetches posts on mount", async () => {
    render(<App />);
    expect(await screen.findByText(/first post/i)).toBeInTheDocument();
    expect(await screen.findByText(/second post/i)).toBeInTheDocument();
    // expect(await screen.findByText(/third post/i)).toBeInTheDocument();
  });
});
```

src/hooks/usePosts.ts

if you don't believe me that the data is fetched from the mock, you can check the console log in the `usePosts` hook

```ts
const { data } = await axios.get<Post[]>(API_URL);
// console.log(data);
```

## Rest of the handlers

src/mocks/handlers.ts

```ts
import { http, HttpResponse } from "msw";
import { Post } from "../hooks/usePosts";
const url = "http://localhost:4000/posts";

export let posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    likes: 5,
  },
  {
    id: "2",
    title: "Second Post",
    likes: 10,
  },
];

export const handlers = [
  http.get(url, async () => {
    return HttpResponse.json(posts);
  }),
  http.post(url, async ({ request }) => {
    const newPost = (await request.json()) as Post;
    newPost.id = Date.now().toString();
    posts.push(newPost);
    return HttpResponse.json(newPost, { status: 201 });
  }),
  http.put(`${url}/:id`, async ({ params, request }) => {
    const { id } = params;
    const updatedPost = (await request.json()) as Post;
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = updatedPost;
    return HttpResponse.json(updatedPost, { status: 200 });
  }),
  http.delete(`${url}/:id`, async ({ params }) => {
    const { id } = params;
    posts = posts.filter((post) => post.id !== id);
    return HttpResponse.json(null, { status: 200 });
  }),
];
```

src/App.test.tsx

```tsx
describe("App", () => {
  test("creates a new post", async () => {
    const user = userEvent.setup();
    render(<App />);
    const { input, submitBtn } = getFormElements();
    await user.type(input, "New Post");
    await user.click(submitBtn);
    expect(await screen.findByText(/new post/i)).toBeInTheDocument();
  });
  test("updates a post", async () => {
    const user = userEvent.setup();
    render(<App />);
    const likeBtn = await screen.findByRole("button", {
      name: `👍 ${posts[0].likes}`,
    });
    await user.click(likeBtn);
    expect(
      await screen.findByRole("button", { name: `👍 ${posts[0].likes}` })
    ).toBeInTheDocument();
  });
  test("deletes a post", async () => {
    const user = userEvent.setup();
    render(<App />);
    const initialPosts = await screen.findAllByRole("article");
    expect(initialPosts).toHaveLength(3);
    const lastPost = initialPosts[2];

    // The within method is a utility provided by the @testing-library/react package. It allows you to scope your queries to a specific DOM element, rather than searching the entire document.

    const deleteBtn = within(lastPost).getByRole("button", {
      name: /delete/i,
    });
    await user.click(deleteBtn);
    const postsAfterDelete = await screen.findAllByRole("article");
    expect(postsAfterDelete).toHaveLength(2);
  });
});
```

## Testing Errors

src/mocks/handlers.ts

```ts
export const getErrorHandler = [
  http.get(url, () => {
    return HttpResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }),
];

export const createErrorHandler = [
  http.post(url, () => {
    return HttpResponse.json(
      { message: "Failed to create post" },
      { status: 400 }
    );
  }),
];

export const updateErrorHandler = [
  http.put(`${url}/:id`, () => {
    return HttpResponse.json(
      { message: "Failed to update post" },
      { status: 400 }
    );
  }),
];

export const deleteErrorHandler = [
  http.delete(`${url}/:id`, () => {
    return HttpResponse.json(
      { message: "Failed to delete post" },
      { status: 400 }
    );
  }),
];
```

src/App.test.tsx

```tsx
import {
  getErrorHandler,
  createErrorHandler,
  updateErrorHandler,
  deleteErrorHandler,
} from "./mocks/handlers";

describe("App", () => {
  test("shows error message when fetching posts fails", async () => {
    // By default, the server is configured to return the mock data.   To test how the application handles errors, we need to explicitly configure the server to simulate a failure. This is done using the line server.use(...errorHandler);
    server.use(...getErrorHandler);
    render(<App />);
    expect(
      await screen.findByText(/failed to fetch posts/i)
    ).toBeInTheDocument();
  });
  test("shows error message when creating a post fails", async () => {
    const user = userEvent.setup();
    server.use(...createErrorHandler);
    render(<App />);
    const { input, submitBtn } = getFormElements();
    await user.type(input, "New Post");
    await user.click(submitBtn);
    // verify error message is shown
    expect(
      await screen.findByText(/failed to create post/i)
    ).toBeInTheDocument();
  });
  test("displays error message when updating post fails", async () => {
    const user = userEvent.setup();
    server.use(...updateErrorHandler);
    render(<App />);
    const likeBtn = await screen.findByRole("button", {
      name: `👍 ${posts[0].likes}`,
    });
    await user.click(likeBtn);
    expect(await screen.findByText(/failed to like post/i)).toBeInTheDocument();
  });
  test("displays error message when deleting post fails", async () => {
    const user = userEvent.setup();
    server.use(...deleteErrorHandler);
    render(<App />);

    const allPosts = await screen.findAllByRole("article");
    const firstPost = allPosts[0];
    const deleteBtn = within(firstPost).getByRole("button", {
      name: /delete/i,
    });

    await user.click(deleteBtn);

    expect(
      await screen.findByText(/failed to delete post/i)
    ).toBeInTheDocument();
  });
});
```

## Keywords

React, TypeScript, Vite, Vitest, React Testing Library, Mock Service Worker, MSW, Axios, Tailwind CSS, JSON Server, CRUD, Testing, API Mocking, Custom Hook, Integration Testing, Unit Testing, Frontend, DevTools, REST API, Error Handling

---

## Conclusion

This project is a complete, real-world example of how to build, test, and mock a React app with modern tools. It is ideal for learning advanced testing strategies, API mocking, and best practices in frontend development.  
For more details, see the inline comments and the original teaching content below.

---
