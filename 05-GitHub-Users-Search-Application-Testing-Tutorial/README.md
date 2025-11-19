# GitHub Users Search/Explore Application (GraphQL + Apollo Client + MSW) Testing Tutorial

A comprehensive React application for searching and visualizing GitHub user profiles using the GitHub GraphQL API. This project demonstrates advanced testing patterns including GraphQL API mocking with Mock Service Worker (MSW), Apollo Client integration, and data visualization with Recharts.

- **Live-Demo:** [https://search-github-users-explorer.netlify.app/](https://search-github-users-explorer.netlify.app/)

![Screenshot 2025-06-18 at 14 39 05](https://github.com/user-attachments/assets/1f0df645-e214-4b44-b2c6-1e3ddb5647c3)
![Screenshot 2025-06-18 at 14 38 30](https://github.com/user-attachments/assets/d0784a42-6de3-4030-a852-3f612cf8234c)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Testing Setup](#testing-setup)
- [Running Tests](#running-tests)
- [GraphQL API Overview](#graphql-api-overview)
- [Project Components](#project-components)
- [Understanding Test Files](#understanding-test-files)
- [Key Concepts](#key-concepts)
- [Code Snippets](#code-snippets)
- [Reusing Components](#reusing-components)
- [Configuration Files](#configuration-files)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Overview

This GitHub Users Search application is a full-featured React application that demonstrates:

- **GraphQL Integration** - Using Apollo Client to query GitHub's GraphQL API
- **Advanced API Mocking** - MSW for mocking GraphQL queries in tests
- **Data Visualization** - Interactive charts using Recharts library
- **Modern UI Components** - Radix UI (shadcn/ui) components
- **Comprehensive Testing** - Unit tests, integration tests, and GraphQL mocking
- **TypeScript** - Full type safety throughout the application

The application allows users to:

- Search for GitHub users by username
- View user profile information (avatar, bio, stats)
- See user statistics (repositories, followers, following, gists)
- Visualize repository data with interactive charts (popular repos, forked repos, used languages)

---

## Technology Stack

### Core Technologies

- **React 18.3.1** - Modern React library for building user interfaces
- **TypeScript 5.6.2** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.10** - Next-generation frontend build tool for fast development

### GraphQL & API

- **Apollo Client 3.11.10** - GraphQL client for React
- **GraphQL 16.9.0** - Query language for APIs
- **MSW 2.6.8** - Mock Service Worker for API mocking

### UI Libraries

- **Radix UI** - Unstyled, accessible UI components
  - `@radix-ui/react-label` - Label component
  - `@radix-ui/react-slot` - Slot component
  - `@radix-ui/react-toast` - Toast notification component
- **Recharts 2.13.3** - Composable charting library built on React
- **lucide-react 0.456.0** - Beautiful icon library
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **tailwindcss-animate 1.0.7** - Animation utilities
- **class-variance-authority 0.7.0** - Component variant management
- **clsx 2.1.1** - Utility for constructing className strings
- **tailwind-merge 2.5.4** - Merge Tailwind CSS classes

### Testing Stack

- **Vitest 2.1.8** - Fast unit test framework powered by Vite
- **React Testing Library 16.1.0** - Simple and complete React DOM testing utilities
- **@testing-library/jest-dom 6.6.3** - Custom Jest matchers for DOM elements
- **@testing-library/user-event 14.5.2** - Simulate user interactions in tests
- **jsdom 25.0.1** - JavaScript implementation of the DOM for testing

### Development Tools

- **ESLint 9.13.0** - Code linting and quality assurance
- **PostCSS 8.4.49** - CSS transformation tool
- **TypeScript ESLint 8.11.0** - TypeScript-specific linting rules

---

## Project Structure

```bash
05-GitHub-Users-Search-Application-Testing-Tutorial/
├── public/                        # Static assets
│   └── vite.svg                   # Vite logo
├── src/
│   ├── __tests__/                 # Test files
│   │   ├── App.test.tsx           # Integration tests
│   │   ├── SearchForm.test.tsx    # Form component tests
│   │   ├── UserProfile.test.tsx   # Profile component tests
│   │   ├── UserCard.test.tsx      # User card tests
│   │   ├── StatsContainer.test.tsx # Stats container tests
│   │   ├── StatsCard.test.tsx     # Stats card tests
│   │   ├── ForkedRepos.test.tsx   # Chart component tests
│   │   └── utils.ts               # Test utilities and mock data
│   ├── components/
│   │   ├── charts/                # Chart components
│   │   │   ├── ForkedRepos.tsx    # Most forked repos chart
│   │   │   ├── PopularRepos.tsx   # Most starred repos chart
│   │   │   └── UsedLanguages.tsx  # Most used languages chart
│   │   ├── form/                  # Form components
│   │   │   └── SearchForm.tsx     # User search form
│   │   ├── ui/                    # Reusable UI components (shadcn/ui)
│   │   │   ├── button.tsx         # Button component
│   │   │   ├── card.tsx           # Card component
│   │   │   ├── chart.tsx          # Chart wrapper component
│   │   │   ├── input.tsx          # Input component
│   │   │   ├── label.tsx          # Label component
│   │   │   ├── skeleton.tsx       # Loading skeleton
│   │   │   ├── toast.tsx          # Toast component
│   │   │   └── toaster.tsx        # Toast container
│   │   └── user/                  # User-related components
│   │       ├── Loading.tsx        # Loading skeleton
│   │       ├── StatsCard.tsx      # Individual stat card
│   │       ├── StatsContainer.tsx # Stats cards container
│   │       ├── UserCard.tsx       # User profile card
│   │       └── UserProfile.tsx    # Main user profile component
│   ├── hooks/                     # Custom React hooks
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/                       # Utility libraries
│   │   └── utils.ts               # Utility functions (cn helper)
│   ├── mocks/                     # MSW mock handlers
│   │   ├── handlers.ts            # GraphQL request handlers
│   │   └── server.ts              # MSW server setup
│   ├── App.tsx                    # Main application component
│   ├── apolloClient.ts            # Apollo Client configuration
│   ├── main.tsx                   # Application entry point
│   ├── queries.ts                 # GraphQL queries
│   ├── types.ts                   # TypeScript type definitions
│   ├── utils.ts                   # Utility functions for data processing
│   ├── index.css                  # Global styles
│   ├── vite-env.d.ts              # Vite type definitions
│   └── vitest.setup.ts            # Vitest configuration and MSW setup
├── .env.local                     # Environment variables (GitHub token)
├── components.json                # shadcn/ui configuration
├── package.json                   # Project dependencies and scripts
├── vite.config.ts                 # Vite and Vitest configuration
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json              # TypeScript app-specific config
├── tsconfig.node.json             # TypeScript Node.js config
├── eslint.config.js               # ESLint configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── README.md                      # This file
```

---

## Features

### ✅ GitHub User Search

- Search for GitHub users by username
- Real-time profile information display
- Error handling for invalid users
- Loading states with skeleton screens

### ✅ User Profile Display

- User avatar and name
- User bio
- GitHub profile link
- Statistics cards (repositories, followers, following, gists)

### ✅ Data Visualization

- **Popular Repos Chart** - Bar chart showing most starred repositories
- **Forked Repos Chart** - Bar chart showing most forked repositories
- **Used Languages Chart** - Bar chart showing most used programming languages

### ✅ Advanced Testing

- GraphQL query mocking with MSW
- Component unit tests
- Integration tests
- Error scenario testing
- Chart component mocking

### ✅ Modern UI

- shadcn/ui components (Radix UI)
- Responsive design with Tailwind CSS
- Toast notifications
- Loading skeletons
- Accessible components

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor (VS Code recommended)
- **GitHub Personal Access Token** (for API access)
- Basic knowledge of React, TypeScript, GraphQL, and testing concepts

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

### Getting a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "GitHub Search App")
4. Select scopes: `read:user` and `public_repo`
5. Click "Generate token"
6. Copy the token (you won't see it again!)

---

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd 05-GitHub-Users-Search-Application-Testing-Tutorial
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install all required dependencies including:

   - React and React DOM
   - Apollo Client and GraphQL
   - MSW for API mocking
   - Recharts for data visualization
   - Radix UI components
   - Vitest and testing libraries
   - TypeScript and type definitions
   - Vite and build tools
   - Tailwind CSS and PostCSS

3. **Set up environment variables:**

   Create a `.env.local` file in the project root (see [Environment Variables](#environment-variables) section):

   ```bash
   cp .env.local.example .env.local
   # Edit .env.local and add your GitHub token
   ```

4. **Verify installation:**

   ```bash
   npm list --depth=0
   ```

---

## Environment Variables

### Required Environment Variables

This project requires a GitHub Personal Access Token to access the GitHub GraphQL API.

### Setting Up .env.local

1. **Create `.env.local` file in project root:**

   ```bash
   touch .env.local
   ```

2. **Add your GitHub token:**

   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

   **Important Notes:**

   - Replace `your_github_token_here` with your actual GitHub Personal Access Token
   - Never commit `.env.local` to version control (it's already in `.gitignore`)
   - The `VITE_` prefix is required for Vite to expose the variable to client-side code

3. **Access in code:**

   The token is accessed in `src/apolloClient.ts`:

   ```typescript
   const httpLink = new HttpLink({
     uri: GITHUB_GRAPHQL_API,
     headers: {
       Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
     },
   });
   ```

### Environment Variable Best Practices

- **Never commit tokens** - Always add `.env.local` to `.gitignore`
- **Use different tokens** - Create separate tokens for development and production
- **Set token scopes properly** - Only grant necessary permissions
- **Rotate tokens regularly** - Update tokens periodically for security
- **Use `.env.example`** - Create an example file without actual tokens:

  ```env
  VITE_GITHUB_TOKEN=your_github_token_here
  ```

### For Testing

MSW mocks handle GraphQL queries in tests, so you don't need a real token for testing. However, if you want to test against the real API, you can use a token in tests:

```typescript
// In vitest.setup.ts or test files
process.env.VITE_GITHUB_TOKEN = "test-token";
```

---

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

**Note:** Make sure you have set up your `.env.local` file with a valid GitHub token before running the app.

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

The testing environment is configured in multiple files:

#### 1. `vite.config.ts`

This file configures Vitest with React support and path aliases:

```typescript
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test APIs
    environment: "jsdom", // Use jsdom for DOM APIs
    setupFiles: "./src/vitest.setup.ts", // Global test setup
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Path alias for imports
    },
  },
});
```

**Key Configuration Points:**

- `globals: true` - Makes `it`, `describe`, `expect` available globally
- `environment: "jsdom"` - Provides a DOM environment for testing React components
- `setupFiles` - Points to the setup file that configures MSW
- `resolve.alias` - Allows using `@/` instead of relative paths

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
  server.resetHandlers(); // Reset MSW handlers for test isolation
});

// Start MSW server before all tests
beforeAll(() => {
  server.listen();
});

// Close MSW server after all tests
afterAll(() => {
  server.close();
});
```

**What This Does:**

- **Extends expect with Jest-DOM matchers** - Adds matchers like `toBeInTheDocument()`, `toHaveValue()`, etc.
- **Starts MSW server** - Activates MSW to intercept GraphQL requests in tests
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

#### 4. `src/mocks/handlers.ts`

GraphQL request handlers for MSW:

```typescript
import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("GetUser", ({ query, variables }) => {
    const { login } = variables;
    // Handle different scenarios based on username
    if (login === "request-error") {
      return HttpResponse.json({
        errors: [{ message: "there was an error" }],
      });
    }
    // Return mocked user data
    return HttpResponse.json({
      data: {
        user: {
          name: login,
          avatarUrl: `https://github.com/images/${login}.jpg`,
          // ... more user data
        },
      },
    });
  }),
];
```

**Purpose:** Defines how MSW should respond to GraphQL queries in tests.

---

## Running Tests

### Run All Tests

```bash
npm test
```

This starts Vitest in watch mode, automatically re-running tests when files change. MSW will intercept all GraphQL requests made during tests.

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
npm test -- --grep "SearchForm"
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

## GraphQL API Overview

### GitHub GraphQL API

This application uses GitHub's GraphQL API to fetch user data. The API endpoint is:

```bash
https://api.github.com/graphql
```

### GraphQL Query

The main query used is `GetUser`, defined in `src/queries.ts`:

```graphql
query GetUser($login: String!) {
  user(login: $login) {
    name
    avatarUrl
    bio
    url
    repositories(first: 100) {
      totalCount
      nodes {
        name
        description
        stargazerCount
        forkCount
        url
        languages(first: 5) {
          edges {
            node {
              name
            }
            size
          }
        }
      }
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    gists {
      totalCount
    }
  }
}
```

### Query Variables

- `login: String!` - The GitHub username to search for

### Response Structure

The query returns a `UserData` object containing:

- **User Information:**

  - `name` - User's display name
  - `avatarUrl` - User's avatar image URL
  - `bio` - User's bio text
  - `url` - User's GitHub profile URL

- **Repository Data:**

  - `totalCount` - Total number of repositories
  - `nodes` - Array of repository objects with:
    - `name` - Repository name
    - `description` - Repository description
    - `stargazerCount` - Number of stars
    - `forkCount` - Number of forks
    - `url` - Repository URL
    - `languages` - Programming languages used

- **Statistics:**
  - `followers.totalCount` - Number of followers
  - `following.totalCount` - Number of users following
  - `gists.totalCount` - Number of gists

### Authentication

All requests to the GitHub GraphQL API require authentication using a Personal Access Token. The token is sent in the Authorization header:

```bash
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## Project Components

### App Component (`src/App.tsx`)

The main application component:

```typescript
const App = () => {
  const [userName, setUserName] = useState("quincylarson");

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
```

**Features:**

- Manages search state
- Renders search form and user profile
- Default user is "quincylarson"

---

### SearchForm Component (`src/components/form/SearchForm.tsx`)

User search form component:

```typescript
const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const { toast } = useToast();
  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast({
        description: "Please enter a valid username",
      });
      return;
    }
    setUserName(text);
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github Users..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
```

**Features:**

- Text input for username
- Form validation (empty check)
- Toast notification for errors
- Updates parent component state on submit

**Props:**

- `userName: string` - Current username
- `setUserName: React.Dispatch<React.SetStateAction<string>>` - Function to update username

---

### UserProfile Component (`src/components/user/UserProfile.tsx`)

Main user profile component that fetches and displays user data:

```typescript
const UserProfile = ({ userName }: UserProfileProps) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <Loading />;
  if (error) return <h2>{error.message}</h2>;
  if (!data) return <h2>User Not Found.</h2>;

  return (
    <div>
      <UserCard avatarUrl={data.user.avatarUrl} name={data.user.name} />
      <StatsContainer
        totalRepos={data.user.repositories.totalCount}
        followers={data.user.followers.totalCount}
        following={data.user.following.totalCount}
        gists={data.user.gists.totalCount}
      />
      {data.user.repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages repositories={data.user.repositories.nodes} />
          <PopularRepos repositories={data.user.repositories.nodes} />
          <ForkedRepos repositories={data.user.repositories.nodes} />
        </div>
      )}
    </div>
  );
};
```

**Features:**

- Uses Apollo Client's `useQuery` hook
- Handles loading, error, and success states
- Renders user card, stats, and charts
- Conditionally renders charts only if user has repositories

**Props:**

- `userName: string` - GitHub username to fetch data for

---

### UserCard Component (`src/components/user/UserCard.tsx`)

User profile card displaying basic information:

```typescript
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row gap-x-8 items-center">
        <img src={avatarUrl} alt={name} className="w-36 h-36 rounded" />
        <div>
          <CardTitle>{name || "Coding Addict"}</CardTitle>
          <CardDescription>
            {bio || "Passionate about coding and technology"}
          </CardDescription>
          <Button asChild>
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
```

**Features:**

- Displays user avatar, name, and bio
- Fallback values when data is missing
- Link to GitHub profile
- Responsive layout

**Props:**

- `avatarUrl: string` - User's avatar URL
- `name: string` - User's display name
- `bio: string` - User's bio text
- `url: string` - User's GitHub profile URL

---

### StatsContainer Component (`src/components/user/StatsContainer.tsx`)

Container for displaying user statistics:

```typescript
const StatsContainer = (props: StatsContainerProps) => {
  const { totalRepos, followers, following, gists } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
};
```

**Features:**

- Responsive grid layout
- Four statistics cards
- Renders StatsCard components

**Props:**

- `totalRepos: number` - Total repository count
- `followers: number` - Follower count
- `following: number` - Following count
- `gists: number` - Gist count

---

### StatsCard Component (`src/components/user/StatsCard.tsx`)

Individual statistics card:

```typescript
const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <Card>
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
};
```

**Features:**

- Displays title and count
- Reusable component
- Consistent styling

**Props:**

- `title: string` - Statistic title
- `count: number` - Statistic count

---

### Chart Components

#### PopularRepos (`src/components/charts/PopularRepos.tsx`)

Bar chart showing most starred repositories:

```typescript
const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);

  return (
    <div>
      <h2>Popular Repos</h2>
      <ChartContainer config={chartConfig}>
        <BarChart data={popularRepos}>
          <Bar dataKey="stars" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
```

#### ForkedRepos (`src/components/charts/ForkedRepos.tsx`)

Bar chart showing most forked repositories:

```typescript
const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  // Similar structure to PopularRepos
};
```

#### UsedLanguages (`src/components/charts/UsedLanguages.tsx`)

Bar chart showing most used programming languages:

```typescript
const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculatePopularLanguages(repositories);
  // Similar structure to PopularRepos
};
```

**Chart Features:**

- Interactive tooltips
- Responsive design
- Accessible components
- Color-coded data visualization

---

### Apollo Client Configuration (`src/apolloClient.ts`)

Apollo Client setup with error handling:

```typescript
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}`);
    });
  }
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
```

**Features:**

- Error link for logging GraphQL and network errors
- HTTP link with GitHub API endpoint
- Authorization header with GitHub token
- In-memory cache for query results

---

### Utility Functions (`src/utils.ts`)

Data processing functions for charts:

```typescript
// Calculate top 5 most forked repositories
export const calculateMostForkedRepos = (
  repositories: Repository[]
): { repo: string; count: number }[] => {
  return repositories
    .map((repo) => ({ repo: repo.name, count: repo.forkCount }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};

// Calculate top 5 most starred repositories
export const calculateMostStarredRepos = (
  repositories: Repository[]
): { repo: string; stars: number }[] => {
  return repositories
    .map((repo) => ({ repo: repo.name, stars: repo.stargazerCount }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);
};

// Calculate top 5 most used languages
export const calculatePopularLanguages = (
  repositories: Repository[]
): { language: string; count: number }[] => {
  const languageMap: { [key: string]: number } = {};
  // Count language occurrences across all repositories
  // Return top 5 languages
};
```

---

## Understanding Test Files

### App Integration Tests (`src/__tests__/App.test.tsx`)

Integration tests for the complete application:

```typescript
describe("App Integration", () => {
  test("should update profile when searching for a user", async () => {
    const user = userEvent.setup();
    renderApp();

    expect(await screen.findByText("quincylarson")).toBeInTheDocument();

    const searchInput = screen.getByRole("textbox");
    await user.clear(searchInput);
    await user.type(searchInput, "john_doe");

    const submitButton = screen.getByRole("button", { name: /search/i });
    await user.click(submitButton);

    expect(await screen.findByText("john_doe")).toBeInTheDocument();
  });
});
```

**Key Concepts:**

- **Apollo Provider** - Wraps app with ApolloProvider for GraphQL
- **Chart Mocking** - Mocks chart components to simplify testing
- **Async Testing** - Uses `findBy*` queries for async operations
- **User Interactions** - Simulates form submission and user typing

---

### SearchForm Component Tests (`src/__tests__/SearchForm.test.tsx`)

Unit tests for the search form:

```typescript
describe("SearchForm", () => {
  test("shows toast when submitting empty input", async () => {
    const { button } = getFormElements();
    await user.click(button);
    expect(mockToast).toHaveBeenCalledWith({
      description: "Please enter a valid username",
    });
  });

  test("calls setUserName on valid form submission", async () => {
    const { input, button } = getFormElements();
    await user.type(input, "jane_doe");
    await user.click(button);
    expect(setUserNameMock).toHaveBeenCalledWith("jane_doe");
  });
});
```

**Key Concepts:**

- **Hook Mocking** - Mocks `useToast` hook
- **Form Validation** - Tests empty input validation
- **Callback Testing** - Verifies `setUserName` is called correctly

---

### UserProfile Component Tests (`src/__tests__/UserProfile.test.tsx`)

Integration tests for the user profile component:

```typescript
describe("UserProfile", () => {
  test("renders UserProfile component", async () => {
    await renderUserProfile("john_doe");
    expect(await screen.findByText("john_doe")).toBeInTheDocument();
  });

  test("renders error message when user not found", async () => {
    await renderUserProfile("invalid-username");
    expect(
      await screen.findByText(/could not resolve to a user/i)
    ).toBeInTheDocument();
  });
});
```

**Key Concepts:**

- **GraphQL Mocking** - MSW intercepts GraphQL queries
- **Error Scenarios** - Tests error handling for invalid users
- **Async Operations** - Tests GraphQL query results

---

### MSW GraphQL Handlers (`src/mocks/handlers.ts`)

GraphQL request handlers for MSW:

```typescript
export const handlers = [
  graphql.query("GetUser", ({ query, variables }) => {
    const { login } = variables;

    // Error scenarios
    if (login === "request-error") {
      return HttpResponse.json({
        errors: [{ message: "there was an error" }],
      });
    }

    if (login === "invalid-username") {
      return HttpResponse.json({
        data: { user: null },
        errors: [
          {
            message: `Could not resolve to a User with the login of ${login}.`,
          },
        ],
      });
    }

    // Success response
    return HttpResponse.json({
      data: {
        user: {
          name: login,
          avatarUrl: `https://github.com/images/${login}.jpg`,
          // ... mock user data
        },
      },
    });
  }),
];
```

**Key Concepts:**

- **GraphQL Query Mocking** - Mocks specific GraphQL queries
- **Variable-based Responses** - Different responses based on query variables
- **Error Simulation** - Simulates GraphQL errors for testing

---

## Key Concepts

### Apollo Client with React

**Using useQuery Hook:**

```typescript
const { data, loading, error } = useQuery<DataType>(QUERY, {
  variables: { variableName: value },
});
```

**Features:**

- **Loading State** - `loading` indicates if query is in progress
- **Error Handling** - `error` contains error information
- **Data** - `data` contains query results
- **Type Safety** - TypeScript generics for type safety

### MSW GraphQL Mocking

**GraphQL Query Handler:**

```typescript
graphql.query("QueryName", ({ query, variables }) => {
  // Access query and variables
  const { variableName } = variables;

  // Return mock response
  return HttpResponse.json({
    data: {
      /* mock data */
    },
  });
});
```

**Error Simulation:**

```typescript
graphql.query("QueryName", ({ variables }) => {
  return HttpResponse.json({
    errors: [{ message: "Error message" }],
  });
});
```

### Component Mocking in Tests

**Mocking Chart Components:**

```typescript
vi.mock("@/components/charts/UsedLanguages", () => ({
  default: () => <div>Used Languages</div>,
}));
```

**Purpose:** Simplifies testing by replacing complex chart components with simple divs.

### Testing Async GraphQL Queries

**Waiting for Async Results:**

```typescript
test("renders user data", async () => {
  render(<Component />);
  // Use findBy* queries for async content
  expect(await screen.findByText("User Name")).toBeInTheDocument();
});
```

---

## Code Snippets

### Apollo Client Setup

```typescript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
```

### GraphQL Query with Apollo

```typescript
import { useQuery } from "@apollo/client";
import { GET_USER } from "./queries";

const { data, loading, error } = useQuery<UserData>(GET_USER, {
  variables: { login: userName },
});
```

### MSW GraphQL Handler

```typescript
import { graphql, HttpResponse } from "msw";

graphql.query("GetUser", ({ variables }) => {
  const { login } = variables;
  return HttpResponse.json({
    data: {
      user: {
        name: login,
        // ... more data
      },
    },
  });
});
```

### Testing with Apollo Provider

```typescript
import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";

const renderApp = () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
```

### Mocking Components

```typescript
vi.mock("@/components/charts/ChartComponent", () => ({
  default: () => <div>Mock Chart</div>,
}));
```

---

## Reusing Components

### Using SearchForm in Other Projects

1. **Copy component files:**

   ```bash
   cp src/components/form/SearchForm.tsx /path/to/your/project/src/components/
   cp src/hooks/use-toast.ts /path/to/your/project/src/hooks/
   ```

2. **Copy UI components:**

   ```bash
   cp -r src/components/ui /path/to/your/project/src/components/
   ```

3. **Install dependencies:**

   ```bash
   npm install @radix-ui/react-label @radix-ui/react-slot
   ```

4. **Import and use:**

   ```typescript
   import SearchForm from "./components/form/SearchForm";

   function App() {
     const [userName, setUserName] = useState("");
     return <SearchForm userName={userName} setUserName={setUserName} />;
   }
   ```

### Using Apollo Client Setup

Copy `apolloClient.ts` to your project and modify the endpoint and headers as needed:

```typescript
const httpLink = new HttpLink({
  uri: "https://your-api.com/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});
```

### Reusing MSW Setup

1. **Copy mocks directory:**

   ```bash
   cp -r src/mocks /path/to/your/project/src/
   ```

2. **Update handlers:**

   Modify `handlers.ts` with your GraphQL queries.

3. **Update vitest.setup.ts:**

   Import your server setup.

---

## Configuration Files

### Vite Configuration (`vite.config.ts`)

Configures build tool, test environment, and path aliases:

```typescript
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### TypeScript Configuration (`tsconfig.app.json`)

Includes path aliases and type definitions:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

### shadcn/ui Configuration (`components.json`)

Configuration for shadcn/ui components:

```json
{
  "style": "new-york",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### ESLint Configuration (`eslint.config.js`)

Provides code quality checks and React-specific linting rules.

### Tailwind Configuration (`tailwind.config.js`)

Configures Tailwind CSS with shadcn/ui theme and animations.

---

## Keywords

### GraphQL Keywords

- **GraphQL** - Query language for APIs
- **Apollo Client** - GraphQL client for React
- **Query** - GraphQL operation for fetching data
- **Variables** - Parameters passed to GraphQL queries
- **Schema** - GraphQL API structure definition
- **Resolver** - Function that resolves query fields

### Apollo Client Keywords

- **useQuery** - React hook for executing queries
- **ApolloProvider** - Context provider for Apollo Client
- **InMemoryCache** - Apollo Client's default cache
- **HttpLink** - Link for HTTP requests
- **ApolloLink** - Chainable link for request processing
- **onError** - Error handling link

### MSW Keywords

- **Mock Service Worker** - API mocking library
- **graphql.query** - MSW handler for GraphQL queries
- **setupServer** - MSW setup for Node.js/test environment
- **HttpResponse** - MSW utility for creating responses
- **Handler** - Function that defines mock responses

### Testing Keywords

- **Integration Testing** - Testing component interactions
- **Unit Testing** - Testing individual components
- **GraphQL Mocking** - Simulating GraphQL API responses
- **Component Mocking** - Replacing components in tests
- **Async Testing** - Testing asynchronous operations
- **Error Scenario Testing** - Testing error handling

### React Keywords

- **Component** - Reusable UI building blocks
- **Hooks** - Functions to use React features
- **Context** - React's context API for state sharing
- **Props** - Data passed to components
- **State** - Component internal data

### UI Keywords

- **shadcn/ui** - Collection of UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Recharts** - Charting library for React
- **Tailwind CSS** - Utility-first CSS framework
- **Toast Notification** - Temporary notification messages

---

## Conclusion

This GitHub Users Search application demonstrates how to build a modern React application with GraphQL, comprehensive testing, and data visualization. By following this project, you've learned:

✅ How to integrate Apollo Client with React  
✅ How to query GitHub's GraphQL API  
✅ How to mock GraphQL queries with MSW  
✅ How to test GraphQL-based components  
✅ How to create data visualizations with Recharts  
✅ How to use shadcn/ui components  
✅ How to handle async operations in tests  
✅ How to test error scenarios  
✅ Best practices for GraphQL applications  
✅ How to structure a complex React application

### Next Steps

1. **Explore More GraphQL** - Learn about mutations, subscriptions, and fragments
2. **Add More Features** - Implement repository details, search history, etc.
3. **Enhance Charts** - Add more chart types and interactivity
4. **Improve Testing** - Add more edge case tests and E2E tests
5. **Deploy** - Deploy the application to Vercel or Netlify

### Resources

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)
- [MSW Documentation](https://mswjs.io/)
- [Recharts Documentation](https://recharts.org/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Testing Library Documentation](https://testing-library.com/react)
- [Vitest Documentation](https://vitest.dev/)

### Tips for Success

- **Keep Token Secure** - Never commit GitHub tokens to version control
- **Handle Errors Gracefully** - Always handle GraphQL errors in your UI
- **Use Loading States** - Provide feedback during API calls
- **Test Error Scenarios** - Don't just test happy paths
- **Mock External Dependencies** - Mock charts and complex components in tests
- **Use TypeScript** - Leverage type safety for GraphQL queries
- **Practice Regularly** - GraphQL and testing improve with practice

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
