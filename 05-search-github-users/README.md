# Search/Explore Github Users - React Vitest Tutorial

![Screenshot 2025-06-18 at 14 39 05](https://github.com/user-attachments/assets/1f0df645-e214-4b44-b2c6-1e3ddb5647c3)
![Screenshot 2025-06-18 at 14 38 30](https://github.com/user-attachments/assets/d0784a42-6de3-4030-a852-3f612cf8234c)

---

A modern web application to search and visualize GitHub user profiles, repositories, and statistics. Built with React, Apollo Client, GraphQL, Vite, Tailwind CSS, and a comprehensive suite of automated tests.

- **Live-Demo:** [https://search-github-users-explorer.netlify.app/](https://search-github-users-explorer.netlify.app/)

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Functionality Walkthrough](#functionality-walkthrough)
- [Testing](#testing)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Summary

**Explore Github Users** is a React-based web app that allows users to search for any GitHub username and view detailed profile information, repository statistics, and visualizations. The app leverages the GitHub GraphQL API for efficient data fetching and provides a modern UI with Tailwind CSS and shadcn/ui components. Comprehensive automated tests ensure reliability and serve as a learning resource for React Testing Library, Vitest, and MSW.

---

## Features

- Search for any GitHub user by username
- View user profile details (avatar, name, bio, profile link)
- See repository statistics: total repos, followers, following, gists
- Visualize most used languages, most starred, and most forked repositories with charts
- Responsive, accessible, and modern UI
- Toast notifications for user feedback
- Robust error handling for invalid users and network issues
- Comprehensive automated tests for all major components and utilities

---

## Technology Stack

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (UI components)
- **Apollo Client** (GraphQL client)
- **GitHub GraphQL API**
- **Vitest** (test runner)
- **React Testing Library**
- **MSW** (Mock Service Worker for API mocking)

---

## Project Structure

```bash
├── public/
├── src/
│   ├── apolloClient.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── queries.ts
│   ├── types.ts
│   ├── utils.ts
│   ├── __tests__/
│   │   ├── App.test.tsx
│   │   ├── ForkedRepos.test.tsx
│   │   ├── SearchForm.test.tsx
│   │   ├── StatsCard.test.tsx
│   │   ├── StatsContainer.test.tsx
│   │   ├── UserCard.test.tsx
│   │   ├── UserProfile.test.tsx
│   │   └── utils.ts
│   ├── assets/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── ForkedRepos.tsx
│   │   │   ├── PopularRepos.tsx
│   │   │   └── UsedLanguages.tsx
│   │   ├── form/
│   │   │   └── SearchForm.tsx
│   │   ├── ui/
│   │   ├── user/
│   │   │   ├── Loading.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── StatsContainer.tsx
│   │   │   ├── UserCard.tsx
│   │   │   └── UserProfile.tsx
│   ├── hooks/
│   ├── lib/
│   ├── mocks/
│   │   ├── handlers.ts
│   │   └── server.ts
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Setup & Installation

1. **Clone the repository**
2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

### Tailwind CSS Setup

- Already configured in this project. For reference:

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

  - Add Tailwind directives to `index.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### shadcn/ui Setup

- Already configured. To add more components:

  ```bash
  npx shadcn@latest add button card chart input label skeleton toast
  ```

---

## Environment Variables

You need a GitHub Personal Access Token to use the GitHub GraphQL API. Create a `.env.local` file in the project root:

```bash
VITE_GITHUB_TOKEN=YOUR_TOKEN_HERE
```

- [How to create a GitHub token](https://github.com/settings/tokens)

---

## Usage

- Start the app: `npm run dev`
- Enter a GitHub username in the search bar and submit
- View user profile, stats, and charts
- Error messages and toasts will appear for invalid usernames or network issues

---

## Functionality Walkthrough

### 1. **Search Form**

- Located at `src/components/form/SearchForm.tsx`
- Controlled input for username, with validation and toast feedback
- See the full code example in the [SearchForm component section below](#search-form)

### 2. **User Profile**

- Located at `src/components/user/UserProfile.tsx`
- Fetches user data via Apollo Client and displays profile, stats, and charts
- Handles loading, error, and not-found states

### 3. **Stats & Charts**

- Stats: `StatsCard` and `StatsContainer` components
- Charts: `UsedLanguages`, `PopularRepos`, `ForkedRepos` (in `components/charts/`)
- Utility functions in `src/utils.ts` process repository data for charting

### 4. **Apollo Client & GraphQL**

- Apollo Client setup in `src/apolloClient.ts`
- GraphQL query in `src/queries.ts`
- Types in `src/types.ts`

### 5. **UI & Feedback**

- Modern UI with Tailwind and shadcn/ui
- Toast notifications for user feedback
- Skeleton loaders for async states

---

## Testing

This project includes a full suite of automated tests using **Vitest**, **React Testing Library**, and **MSW**. All major components, utilities, and integration flows are covered.

### Test Structure

- All tests are in `src/__tests__/`
- Includes unit tests for utilities and components, and integration tests for user flows
- MSW is used to mock GraphQL API responses

### Running Tests

```bash
npx vitest
```

### Example Test Files

- `App.test.tsx`: Integration tests for the main app flow
- `UserProfile.test.tsx`: Tests for user profile fetching and error handling
- `SearchForm.test.tsx`: Tests for form validation and user interaction
- `StatsCard.test.tsx`, `StatsContainer.test.tsx`, `UserCard.test.tsx`: Unit tests for UI components
- `ForkedRepos.test.tsx`: Tests for chart rendering
- `utils.ts`: Unit tests for repository statistics utilities

### Testing Highlights

- All error scenarios (invalid user, network error) are tested
- Mock Service Worker (MSW) intercepts GraphQL queries for reliable, isolated tests
- All tests are passing (see test output in project logs)

---

## Code Changes & Additions

### App.tsx

```tsx
const App = () => {
  return <h1 className="text-2xl font-bold">Search Github Users</h1>;
};
export default App;
```

- remove App.css
- change title in index.html

```html
<title>Search Github Users</title>
```

### Shadcn UI

tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

tsconfig.app.json

```json
{
  "compilerOptions": {
    // rest of the options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

```bash
npm i -D @types/node

```

vite.config.ts

```ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- initialize shadcn

```bash
npx shadcn@latest init
```

- add components

```bash
npx shadcn@latest add button card chart input label skeleton toast
```

App.tsx

```tsx
import { Button } from "@/components/ui/button";
const App = () => {
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="flex gap-4">
        <Button>Click me</Button>
        <Button variant="outline" size="lg">
          Click me
        </Button>
        <Button variant="destructive" size="sm">
          Click me
        </Button>
      </div>
    </div>
  );
};
export default App;
```

### Structure

- setup local state in App.tsx
- create src/components/form/SearchForm.tsx
- create src/components/user/UserProfile.tsx
- render both components in App.tsx
- pass userName and setUserName to SearchForm
- pass userName to UserProfile

App.tsx

```tsx
const [userName, setUserName] = useState("quincylarson");
```

src/components/form/SearchForm.tsx

```tsx
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  return <div>SearchForm</div>;
};
export default SearchForm;
```

src/components/user/UserProfile.tsx

```tsx
type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  return <h1 className="text-2xl font-bold">{userName}</h1>;
};
export default UserProfile;
```

src/App.tsx

```tsx
mport { useState } from 'react';
import SearchForm from './components/form/SearchForm';
import UserProfile from './components/user/UserProfile';

const App = () => {
  const [userName, setUserName] = useState('quincylarson');

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
```

### Search Form

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type FormEvent } from "react";
import { useState } from "react";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      console.log("Please enter a username");
      return;
    }
    setUserName(text);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github User..."
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchForm;
```

### Shadcn Toast

main.tsx

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import Toaster component
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
```

src/components/form/SearchForm.tsx

```tsx
import { useToast } from "@/hooks/use-toast";

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const { toast } = useToast();

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

  return <form>...</form>;
};
export default SearchForm;
```

### Graphql

GraphQL is a modern query language and runtime for APIs that allows clients to request specific data they need and nothing more. Unlike traditional REST APIs where you get fixed data from multiple endpoints, GraphQL provides a single endpoint where you can specify exactly what data you want to receive.

- **Schema**: The blueprint that defines all available data types and operations in your API
- **Query**: A request to read or fetch data (similar to GET in REST)
- **Mutation**: A request to create, update, or delete data (similar to POST/PUT/DELETE in REST)
- **Fields**: The individual pieces of data you can request (like user.name or post.title)
- **Arguments**: Parameters you can pass to fields to filter or modify the results (like limit: 10)
- **Types**: The different kinds of data objects available (like User, Post, Comment)
- **Nodes**: Objects in a GraphQL schema that have a unique identifier, typically representing entities in your data model (like a specific user or post)

[Practice API's](https://www.apollographql.com/blog/8-free-to-use-graphql-apis-for-your-projects-and-demos)

### Github GraphQL Explorer

[Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)

### Github Personal Access Token

[Github](https://github.com/)

- profile
- settings
- developer settings
- personal access token
- generate new token
- create .env.local file
- add token to .env.local file

.env.local

```bash
VITE_GITHUB_TOKEN=YOUR_TOKEN_HERE
```

### Apollo Client

Apollo Client is a comprehensive state management library for JavaScript applications that helps you manage both local and remote data with GraphQL. It makes it easy to fetch, cache, and modify application data while automatically handling important concerns like tracking loading and error states. The library integrates especially well with React applications and provides features like automatic caching, optimistic UI updates, and error handling out of the box.

[Apollo Client](https://www.apollographql.com/docs/react/get-started/)

```bash
npm install @apollo/client graphql
```

- src/apolloClient.ts

```ts
// Core Apollo Client imports for GraphQL functionality
// ApolloClient: Main client class for making GraphQL requests
// InMemoryCache: Caching solution for storing query results
// HttpLink: Configures HTTP connection to GraphQL endpoint
// ApolloLink: Enables creation of middleware chain for request/response handling
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

// Error handling middleware for Apollo Client
// Provides detailed error information for both GraphQL and network errors
import { onError } from "@apollo/client/link/error";

// GitHub GraphQL API endpoint
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// Configure error handling middleware
// This will intercept and log any GraphQL or network errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  // Handle GraphQL-specific errors (e.g., validation, resolver errors)
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  // Handle network-level errors (e.g., connection issues)
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// Configure HTTP connection to GitHub's GraphQL API
// Including authentication token from environment variables
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // GitHub Personal Access Token
  },
});

// Create the Apollo Link chain
// Order matters: errorLink will run before httpLink
const link = ApolloLink.from([errorLink, httpLink]);

// Initialize Apollo Client with:
// - Configured link chain for network requests
// - In-memory cache for storing query results
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
```

src/main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
// Apollo Provider
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
    <Toaster />
  </ApolloProvider>
);
```

### Query and Type

src/queries.ts

```ts
import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($login: String!) {
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
`;
```

src/types.ts

```ts
export type LanguageEdge = {
  node: {
    name: string;
  };
  size: number;
};

export type Repository = {
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  url: string;
  languages: {
    edges: LanguageEdge[];
  };
};

export type User = {
  name: string;
  avatarUrl: string;
  bio: string;
  url: string;
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  gists: {
    totalCount: number;
  };
};
export type UserData = {
  user: User;
};
```

### Query Hook

src/components/user/UserProfile.tsx

```tsx
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/queries";
import { UserData } from "@/types";

type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl">User Not Found.</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <h1>{bio}</h1>
    </div>
  );
};

export default UserProfile;
```

### User Card

src/components/user/UserCard.tsx

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex-row gap-x-8 items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 h-36  rounded object-cover"
        />
        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || "Coding Addict"}</CardTitle>
          <CardDescription>
            {bio || "Passionate about coding and technology."}
          </CardDescription>
          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
export default UserCard;
```

- UserProfile.tsx

```tsx
return (
  <div>
    <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
  </div>
);
```

### Stats Card

```tsx
import { Card, CardTitle, CardDescription } from "../ui/card";

type StatsCardProps = {
  title: string;
  count: number;
};

function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card>
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
}

export default StatsCard;
```

### Stats Container

```tsx
import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

const StatsContainer = (props: StatsContainerProps) => {
  const { totalRepos, followers, following, gists } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8 ">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
};
export default StatsContainer;
```

UserProfile.tsx

```tsx
return (
  <div>
    <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
    <StatsContainer
      totalRepos={repositories.totalCount}
      followers={followers.totalCount}
      following={following.totalCount}
      gists={gists.totalCount}
    />
  </div>
);
```

### Util Functions

And once we are done with the Stats container, we can start working on the charts, but since charts will need very specific data, first we will need to create some util functions to help us generate such data.

src/utils.ts

```ts
import { Repository } from "./types";

/**
 * Calculates the top 5 most forked repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their fork counts
 * Example return: [{ repo: "react", count: 1000 }, { repo: "vue", count: 500 }]
 */
export const calculateMostForkedRepos = (
  repositories: Repository[]
): { repo: string; count: number }[] => {
  if (repositories.length === 0) {
    return [];
  }

  // Transform repository data into simplified objects containing only name and fork count
  const forkedRepos = repositories
    .map((repo) => ({
      repo: repo.name, // Extract repository name
      count: repo.forkCount, // Extract number of forks
    }))
    .sort((a, b) => b.count - a.count) // Sort by fork count in descending order
    .slice(0, 5); // Take only the top 5 repositories

  return forkedRepos;
};

/**
 * Calculates the top 5 most starred repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their star counts
 * Example return: [{ repo: "tensorflow", stars: 5000 }, { repo: "linux", stars: 4000 }]
 */
export const calculateMostStarredRepos = (
  repositories: Repository[]
): { repo: string; stars: number }[] => {
  if (repositories.length === 0) {
    return [];
  }

  // Transform repository data into simplified objects containing only name and star count
  const starredRepos = repositories
    .map((repo) => ({
      repo: repo.name, // Extract repository name
      stars: repo.stargazerCount, // Extract number of stars (stargazers)
    }))
    .sort((a, b) => b.stars - a.stars) // Sort by star count in descending order
    .slice(0, 5); // Take only the top 5 repositories

  return starredRepos;
};

/**
 * Calculates the top 5 most used programming languages across all repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing language names and their occurrence count
 * Example return: [{ language: "JavaScript", count: 10 }, { language: "Python", count: 7 }]
 */

export const calculatePopularLanguages = (
  repositories: Repository[]
): { language: string; count: number }[] => {
  // Return empty array if no repositories are provided
  if (repositories.length === 0) {
    return [];
  }

  // Initialize a map to track how many times each language appears
  // Example: { "JavaScript": 5, "Python": 3, "TypeScript": 2 }
  const languageMap: { [key: string]: number } = {};

  repositories.forEach((repo) => {
    // Skip repositories with no languages
    if (repo.languages.edges.length === 0) {
      return;
    }

    // Iterate through each language in the repository
    // languages.edges comes from GitHub's GraphQL API structure
    repo.languages.edges.forEach((language) => {
      const { name } = language.node;
      // Increment the count for this language, initializing to 1 if it's the first occurrence
      languageMap[name] = (languageMap[name] || 0) + 1;
    });
  });

  // If no languages were found in any repository, return empty array
  if (Object.keys(languageMap).length === 0) {
    return [];
  }

  // Convert the language map into an array of objects and sort them
  return (
    Object.entries(languageMap)
      // Convert entries into array of [language, count] pairs
      .sort(([, a], [, b]) => b - a) // Sort by count in descending order
      .slice(0, 5) // Take only the top 5 languages
      .map(([language, count]) => ({ language, count }))
  ); // Transform into required object format
};
```

### Charts

- components/charts/UsedLanguages.tsx
- components/charts/PopularRepos.tsx
- components/charts/ForkedRepos.tsx

UserProfile.tsx

```tsx
{
  repositories.totalCount > 0 && (
    <div className="grid md:grid-cols-2 gap-4">
      <UsedLanguages repositories={repositories.nodes} />
      <PopularRepos repositories={repositories.nodes} />
      <ForkedRepos repositories={repositories.nodes} />
    </div>
  );
}
```

### Used Languages

components/charts/UsedLanguages.tsx

```tsx
import { type Repository } from "@/types";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculatePopularLanguages } from "@/utils";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  // Calculate popular languages
  //  [{language: string, count: number}]
  const popularLanguages = calculatePopularLanguages(repositories);

  // Configuration for the chart's styling and labels
  // color sets the color of the bars

  const chartConfig = {
    language: {
      label: "Language",
      color: "#2563eb",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart is the main container for the bar chart visualization */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={popularLanguages}>
          {/* CartesianGrid adds horizontal guide lines */}
          <CartesianGrid vertical={false} />

          {/* XAxis configures the horizontal axis showing language names */}
          <XAxis
            dataKey="language"
            tickLine={false} // Removes tick marks
            tickMargin={10} // Adds spacing between labels and axis
          />

          {/* YAxis configures the vertical axis showing count values */}
          <YAxis dataKey="count" />

          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar component defines how each data point is rendered */}
          {/* Uses CSS variable for color and adds rounded corners */}
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UsedLanguages;
```

### Popular Repos

components/charts/PopularRepos.tsx

```tsx
import { type Repository } from "@/types";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateMostStarredRepos } from "@/utils";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  // Calculate most starred repositories and return array of {repo: string, stars: number}
  const popularRepos = calculateMostStarredRepos(repositories);

  // Configuration for the chart's styling and labels
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#e11c47", // Red color for the bars
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>
      {/* ChartContainer: Custom wrapper component that handles responsive sizing and theme */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart: Main chart component from recharts */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={popularRepos}>
          {/* CartesianGrid: Adds horizontal guide lines (vertical disabled) */}
          <CartesianGrid vertical={false} />

          {/* XAxis: Horizontal axis showing repository names */}
          {/* tickFormatter truncates long repository names to 10 characters */}
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />

          {/* YAxis: Vertical axis showing star counts */}
          <YAxis dataKey="stars" />

          {/* ChartTooltip: Custom tooltip component that appears on hover */}
          {/* ChartTooltipContent: Renders the actual content inside the tooltip */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar: The actual bar elements of the chart */}
          {/* fill uses CSS variable for consistent theming */}
          {/* radius adds rounded corners to the bars */}
          <Bar dataKey="stars" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos;
```

### Forked Repos

components/charts/ForkedRepos.tsx

```tsx
import { type Repository } from "@/types";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateMostForkedRepos } from "@/utils";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  // Calculate most forked repositories and return array of {repo: string, count: number}
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  // Define chart configuration for styling and labels
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facd12",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart is the main container for the bar chart visualization */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={mostForkedRepos}>
          {/* CartesianGrid adds background gridlines, vertical lines disabled */}
          <CartesianGrid vertical={false} />

          {/* XAxis configures the horizontal axis */}
          <XAxis
            dataKey="repo" // Uses 'repo' property from data for labels
            tickLine={true} // Shows small lines at each tick mark
            tickMargin={10} // Space between tick line and label
            axisLine={false} // Hides the main axis line
            tickFormatter={(value) => value.slice(0, 10)} // Truncates long repo names
          />

          {/* YAxis configures the vertical axis, showing fork counts */}
          <YAxis dataKey="count" />

          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Bar component defines the actual bars in the chart */}
          {/* Uses CSS variable for color and rounded corners (radius) */}
          <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ForkedRepos;
```

### Loading

src/components/user/Loading.tsx

```tsx
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Loading component that displays placeholder content while data is being fetched
 * Uses shadcn/ui's Skeleton component to create loading animations
 */
const Loading = () => {
  return (
    <div>
      {/* Large header skeleton
          - h-[194px]: Fixed height of 194px
          - w-full: Full width on mobile
          - lg:w-1/2: Half width on large screens
          - mb-8: Bottom margin of 2rem */}
      <Skeleton className="h-[194px] w-full lg:w-1/2 mb-8 rounded " />

      {/* Grid container for smaller skeletons
          - grid-cols-1: Single column on mobile
          - lg:grid-cols-2: 2 columns on large screens
          - xl:grid-cols-4: 4 columns on extra large screens
          - gap-2: Small gap between grid items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        {/* Four identical skeleton items
            - h-[70px]: Fixed height of 70px
            - rounded: Rounded corners */}
        <Skeleton className=" h-[70px] rounded" />
        <Skeleton className=" h-[70px] rounded" />
        <Skeleton className=" h-[70px] rounded" />
        <Skeleton className=" h-[70px] rounded" />
      </div>
    </div>
  );
};

export default Loading;
```

UserProfile.tsx

```tsx
if (loading) return <Loading />;
```

### Automated Testing

Add RTL, Vitest and MSW to the project, please reference corresponding course sections.

- 📁 Create a new directory named `src/__tests__`

### Utils Test Challenge

- Create a new file named `utils.ts` in the `__tests__` directory

- Add required imports:

  - Import Repository type from '../types'
  - Import utility functions (calculateMostForkedRepos, calculateMostStarredRepos, calculatePopularLanguages) from '../utils'

- Create mock data (mockRepositories array):

  - Create 3 repository objects with different values
  - Each repo should have: name, description, stargazerCount, forkCount, url
  - Include languages object with edges array containing language name and size
  - Ensure variety in star counts, fork counts, and languages for testing

- Create main describe block for 'repository statistics calculations'

- Create calculateMostForkedRepos test suite:

  - Test empty input returns empty array
  - Test correct ranking of repositories by fork count
  - Verify descending order of results

- Create calculateMostStarredRepos test suite:

  - Test empty input returns empty array
  - Test correct ranking of repositories by star count
  - Verify descending order of results

- Create calculatePopularLanguages test suite:

  - Test empty input returns empty array
  - Test repositories with no languages
  - Test language counting and ranking
  - Verify accurate language occurrence counting

- Add detailed comments throughout:
  - Document mock data structure
  - Explain purpose of each test suite
  - Label edge cases and main functionality tests

### Utils Test

`src/__tests__/utils.ts`

```tsx
// Import the Repository type and utility functions being tested
import { Repository } from "../types";
import {
  calculateMostForkedRepos,
  calculateMostStarredRepos,
  calculatePopularLanguages,
} from "../utils";

// Mock data representing a sample array of repository objects
// Each repository contains basic info like name, description, stars, forks,
// and a nested languages object with size information
export const mockRepositories: Repository[] = [
  {
    name: "repo1",
    description: "test repo 1",
    stargazerCount: 1000,
    forkCount: 500,
    url: "https://github.com/test/repo1",
    languages: {
      edges: [
        { node: { name: "javascript" }, size: 1000 },
        { node: { name: "typescript" }, size: 500 },
      ],
    },
  },
  {
    name: "repo2",
    description: "test repo 2",
    stargazerCount: 2000,
    forkCount: 300,
    url: "https://github.com/test/repo2",
    languages: {
      edges: [
        { node: { name: "python" }, size: 800 },
        { node: { name: "javascript" }, size: 400 },
      ],
    },
  },
  {
    name: "repo3",
    description: "test repo 3",
    stargazerCount: 3000,
    forkCount: 1000,
    url: "https://github.com/test/repo3",
    languages: {
      edges: [
        { node: { name: "typescript" }, size: 1200 },
        { node: { name: "python" }, size: 300 },
      ],
    },
  },
];

describe("repository statistics calculations", () => {
  // Test suite for calculateMostForkedRepos function
  describe("calculateMostForkedRepos", () => {
    // Edge case: Test behavior with empty input
    test("should return empty array for empty input", () => {
      const result = calculateMostForkedRepos([]);
      expect(result).toEqual([]);
    });

    // Main functionality test: Verify correct ranking of repositories by fork count
    test("should return top 5 most forked repositories", () => {
      const result = calculateMostForkedRepos(mockRepositories);
      expect(result).toEqual([
        { repo: "repo3", count: 1000 },
        { repo: "repo1", count: 500 },
        { repo: "repo2", count: 300 },
      ]);
    });

    // Verification test: Ensure proper descending order of fork counts
    test("should sort repositories by fork count in descending order", () => {
      const result = calculateMostForkedRepos(mockRepositories);
      expect(result[0].count).toBeGreaterThanOrEqual(result[1].count);
      expect(result[1].count).toBeGreaterThanOrEqual(result[2].count);
    });
  });

  // Test suite for calculateMostStarredRepos function
  describe("calculateMostStarredRepos", () => {
    // Edge case: Test behavior with empty input
    test("should return empty array for empty input", () => {
      const result = calculateMostStarredRepos([]);
      expect(result).toEqual([]);
    });

    // Main functionality test: Verify correct ranking of repositories by star count
    test("should return top 5 most starred repositories", () => {
      const result = calculateMostStarredRepos(mockRepositories);
      expect(result).toEqual([
        { repo: "repo3", stars: 3000 },
        { repo: "repo2", stars: 2000 },
        { repo: "repo1", stars: 1000 },
      ]);
    });

    // Verification test: Ensure proper descending order of star counts
    test("should sort repositories by star count in descending order", () => {
      const result = calculateMostStarredRepos(mockRepositories);
      expect(result[0].stars).toBeGreaterThanOrEqual(result[1].stars);
      expect(result[1].stars).toBeGreaterThanOrEqual(result[2].stars);
    });
  });

  // Test suite for calculatePopularLanguages function
  describe("calculatePopularLanguages", () => {
    // Edge case: Test empty input
    test("should return empty array for empty input", () => {
      const result = calculatePopularLanguages([]);
      expect(result).toEqual([]);
    });

    // Edge case: Test repositories with no languages
    test("should return empty array when no languages are present", () => {
      const repoWithNoLanguages: Repository[] = [
        {
          ...mockRepositories[0],
          languages: { edges: [] },
        },
      ];
      const result = calculatePopularLanguages(repoWithNoLanguages);
      expect(result).toEqual([]);
    });

    // Main functionality test: Verify language counting and ranking
    test("should return top 5 most used languages", () => {
      const result = calculatePopularLanguages(mockRepositories);
      expect(result).toEqual([
        { language: "javascript", count: 2 },
        { language: "typescript", count: 2 },
        { language: "python", count: 2 },
      ]);
    });

    // Specific test for accuracy of language occurrence counting
    test("should count language occurrences correctly", () => {
      const result = calculatePopularLanguages(mockRepositories);
      const jsCount = result.find(
        (lang) => lang.language === "javascript"
      )?.count;
      expect(jsCount).toBe(2);
    });
  });
});
```

### Stats Card Test Challenge

- Create a new file named `StatsCard.test.tsx` in the `__tests__` directory

- Add required imports:

  - `import { render, screen } from '@testing-library/react'`
  - `import StatsCard from '@/components/user/StatsCard'`;

- 🧪 Write test cases:

  1. Create a test for basic rendering:

     - Render StatsCard with a title "Total Users" and count 42
     - Verify both text elements are in the document

  2. Create a test for zero values:

     - Render StatsCard with a title "Active Sessions" and count 0
     - Verify both text elements are in the document

  3. Create a test for large numbers:
     - Render StatsCard with a title "Total Views" and count 1000000
     - Verify both text elements are in the document

### Stats Card Test

`src/__tests__/StatsCard.test.tsx`

```tsx
import { render, screen } from "@testing-library/react";
import StatsCard from "@/components/user/StatsCard";

describe("StatsCard", () => {
  test("renders title and count correctly", () => {
    render(<StatsCard title="Total Users" count={42} />);

    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  test("renders with zero count", () => {
    render(<StatsCard title="Active Sessions" count={0} />);

    expect(screen.getByText("Active Sessions")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("renders with large numbers", () => {
    render(<StatsCard title="Total Views" count={1000000} />);

    expect(screen.getByText("Total Views")).toBeInTheDocument();
    expect(screen.getByText("1000000")).toBeInTheDocument();
  });
});
```

### Stats Container Test Challenge

- Create a new file named `StatsContainer.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import StatsContainer component from '@/components/user/StatsContainer'

- Create main describe block for 'StatsContainer'

- Create mock data for GitHub statistics:

  - totalRepos: 25
  - followers: 100
  - following: 50
  - gists: 10

- Create test case for rendering stats cards:

  - Test name: 'renders all stats cards with correct values'
  - Render StatsContainer with mock props
  - Verify repositories card:
    - Check for 'Total Repositories' text
    - Check for '25' value
  - Verify followers card:
    - Check for 'Followers' text
    - Check for '100' value
  - Verify following card:
    - Check for 'Following' text
    - Check for '50' value
  - Verify gists card:
    - Check for 'Gists' text
    - Check for '10' value

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock data structure
  - Explain what each verification checks

### Stats Container Test

`src/__tests__/StatsContainer.test.tsx`

```tsx
// This test file contains unit tests for the StatsContainer component
// It verifies that the container correctly displays multiple StatsCard components
// with their respective GitHub statistics

import { render, screen } from "@testing-library/react";
import StatsContainer from "@/components/user/StatsContainer";

describe("StatsContainer", () => {
  // Test case: Verify all stats cards are rendered with their correct values
  test("renders all stats cards with correct values", () => {
    // Mock data representing a GitHub user's statistics
    const props = {
      totalRepos: 25,
      followers: 100,
      following: 50,
      gists: 10,
    };

    render(<StatsContainer {...props} />);

    // Verify the repositories card displays correctly
    expect(screen.getByText("Total Repositories")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();

    // Verify the followers card displays correctly
    expect(screen.getByText("Followers")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();

    // Verify the following card displays correctly
    expect(screen.getByText("Following")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();

    // Verify the gists card displays correctly
    expect(screen.getByText("Gists")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
```

### User Card Test Challenge

- Create a new file named `UserCard.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import UserCard component from '@/components/user/UserCard'

- Create main describe block for 'UserCard'

- Create mock data for user profile:

  - avatarUrl: '<https://example.com/avatar.jpg>'
  - name: 'John Doe'
  - bio: 'Frontend Developer'
  - url: '<https://github.com/johndoe>'

- Create first test case for complete user information:

  - Test name: 'renders user information correctly'
  - Render UserCard with mock props
  - Verify user name display
  - Verify bio display
  - Verify avatar image:
    - Check presence in document
    - Check src attribute
    - Check alt attribute
  - Verify follow button/link:

    - Check href attribute
    - Check target attribute
    - Check rel attribute

  - Create second test case for missing information:

  - Test name: 'renders default values when name and bio are not provided'
  - Create modified props with empty name and bio
  - Render UserCard with modified props
  - Verify default name display ('Coding Addict')
  - Verify default bio display ('Passionate about coding and technology')

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock data structure
  - Explain test cases and their purposes
  - Document fallback behavior testing

### User Card Test

`src/__tests__/UserCard.test.tsx`

```tsx
// This test file contains unit tests for the UserCard component
// It verifies the component's ability to display user profile information
// and handle cases where some user data is missing

import { render, screen } from "@testing-library/react";
import UserCard from "@/components/user/UserCard";

describe("UserCard", () => {
  // Mock data representing a typical GitHub user profile
  const mockProps = {
    avatarUrl: "https://example.com/avatar.jpg",
    name: "John Doe",
    bio: "Frontend Developer",
    url: "https://github.com/johndoe",
  };

  // Test case: Verify all user information is displayed correctly
  test("renders user information correctly", () => {
    render(<UserCard {...mockProps} />);

    // Verify user's name is displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // Verify user's bio is displayed
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();

    // Verify avatar image is present with correct attributes
    const avatarImage = screen.getByAltText("John Doe");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute(
      "src",
      "https://github.com/images/john_doe.jpg"
    );

    // Verify follow button/link has correct attributes for external navigation
    const followLink = screen.getByRole("link", { name: /follow/i });
    expect(followLink).toHaveAttribute("href", "https://github.com/johndoe");
    expect(followLink).toHaveAttribute("target", "_blank");
    expect(followLink).toHaveAttribute("rel", "noreferrer");
  });

  // Test case: Verify fallback values when required fields are missing
  test("renders default values when name and bio are not provided", () => {
    const propsWithoutNameAndBio = {
      ...mockProps,
      name: "",
      bio: "",
    };

    render(<UserCard {...propsWithoutNameAndBio} />);

    // Verify default name is used when name is empty
    expect(screen.getByText("Coding Addict")).toBeInTheDocument();

    // Verify default bio is used when bio is empty
    expect(
      screen.getByText("Passionate about coding and technology")
    ).toBeInTheDocument();
  });
});
```

### Search Form Test Challenge

- Create a new file named `SearchForm.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import userEvent from '@testing-library/user-event'
  - Import vi from 'vitest'
  - Import SearchForm from '@/components/form/SearchForm'

- Setup mocks:

  - Create mockToast function
  - Create setUserNameMock function
  - Mock useToast hook to return mockToast

- Create main describe block for 'SearchForm'

- Setup test environment:

  - Create userEvent instance
  - Add beforeEach to clear mocks
  - Create helper function getFormElements to return input and button

- Create test cases:

  - Test 'renders the search form correctly':

    - Render form with username 'john_doe'
    - Verify input value
    - Verify button presence

  - Test 'displays empty input when userName is empty':

    - Render form with empty username
    - Verify empty input value

  - Test 'updates input value on change':

    - Render form with empty username
    - Type 'john_doe' in input
    - Verify input value updated

  - Test 'shows toast when submitting empty input':

    - Render form with empty username
    - Click submit button
    - Verify toast called with error message
    - Verify setUserName not called

  - Test 'calls setUserName on valid form submission':
    - Render form with empty username
    - Type 'jane_doe' in input
    - Click submit button
    - Verify setUserName called with correct value
    - Verify toast not called

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock setup
  - Explain helper functions
  - Document test cases and their purposes

### Search Form Test

`src/__tests__/SearchForm.test.tsx`

```tsx
// This test file contains unit tests for the SearchForm component
// It tests form functionality, input validation, and error handling

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchForm from "@/components/form/SearchForm";

// Mock dependencies and setup test doubles
const mockToast = vi.fn();
const setUserNameMock = vi.fn();

// Mock the toast hook to test error notifications
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: mockToast,
  }),
}));

describe("SearchForm", () => {
  const user = userEvent.setup();

  // Reset all mocks before each test to ensure clean state
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Helper function to get form elements used across multiple tests
  function getFormElements() {
    const input = screen.getByRole("textbox", { name: /search/i });
    const button = screen.getByRole("button", { name: /search/i });
    return { input, button };
  }

  // Test case: Verify initial form rendering with provided username
  test("renders the search form correctly", () => {
    render(<SearchForm userName="john_doe" setUserName={setUserNameMock} />);

    const { input, button } = getFormElements();

    expect(input).toHaveValue("john_doe");
    expect(button).toBeInTheDocument();
  });

  // Test case: Verify form handling of empty username
  test("displays empty input when userName is empty", () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);

    const { input } = getFormElements();
    expect(input).toHaveValue("");
  });

  // Test case: Verify input change handling
  test("updates input value on change", async () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);

    const { input } = getFormElements();

    await user.type(input, "john_doe");
    expect(input).toHaveValue("john_doe");
  });

  // Test case: Verify error handling for empty submission
  test("shows toast when submitting empty input", async () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);

    const { button } = getFormElements();
    await user.click(button);
    expect(mockToast).toHaveBeenCalledWith({
      description: "Please enter a valid username",
    });
    expect(setUserNameMock).not.toHaveBeenCalled();
  });

  // Test case: Verify successful form submission
  test("calls setUserName on valid form submission", async () => {
    render(<SearchForm userName="" setUserName={setUserNameMock} />);

    const { input, button } = getFormElements();

    await user.type(input, "jane_doe");
    await user.click(button);

    expect(setUserNameMock).toHaveBeenCalledWith("jane_doe");
    expect(mockToast).not.toHaveBeenCalled();
  });
});
```

### Forked Repos Test Challenge

- Create a new file named `ForkedRepos.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import ForkedRepos from '@/components/charts/ForkedRepos'
  - Import mockRepositories from './utils'

- Setup mocks for UI components:

  - Mock UsedLanguages: return static div
  - Mock PopularRepos: return static div
  - Mock ForkedRepos: return static div

- Mock recharts components:

  - BarChart: div wrapper
  - CartesianGrid: static div
  - XAxis: static div
  - YAxis: static div
  - Bar: static div

- Create main describe block for 'ForkedRepos'

- Setup test environment:

  - Add beforeEach to render ForkedRepos with mockRepositories

- Create test cases:

  - Test 'should render the ForkedRepos component':

    - Verify presence of 'Forked Repos' heading

  - Test 'should render the chart with correct data':
    - Verify presence of CartesianGrid
    - Verify presence of XAxis
    - Verify presence of YAxis
    - Verify presence of Bar
    - Verify presence of Tooltip Content

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock setup for UI components
  - Document mock setup for recharts
  - Explain test cases and their purposes

### Forked Repos Test

`src/__tests__/ForkedRepos.test.tsx`

```tsx
// This test file contains unit tests for the ForkedRepos component
// It verifies the correct rendering of the chart component and its data visualization

import { render, screen } from "@testing-library/react";
import ForkedRepos from "@/components/charts/ForkedRepos";
import { mockRepositories } from "./utils";

// Mock the chart UI components to simplify testing
// Replace complex chart containers with simple div elements
vi.mock("@/components/ui/chart", () => {
  return {
    ChartContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    ChartTooltip: ({ content }: { content: React.ReactNode }) => (
      <div>{content}</div>
    ),
    ChartTooltipContent: () => <div>Tooltip Content</div>,
  };
});

// Mock the recharts library components
// Replace actual chart elements with simple div elements for testing
vi.mock("recharts", () => {
  return {
    BarChart: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    CartesianGrid: () => <div>CartesianGrid</div>,
    XAxis: () => <div>XAxis</div>,
    YAxis: () => <div>YAxis</div>,
    Bar: () => <div>Bar</div>,
  };
});

describe("ForkedRepos", () => {
  // Set up the component before each test
  beforeEach(() => {
    render(<ForkedRepos repositories={mockRepositories} />);
  });

  // Test case: Verify basic component rendering
  test("should render the ForkedRepos component", () => {
    expect(screen.getByText("Forked Repos")).toBeInTheDocument();
  });

  // Test case: Verify that all chart elements are present
  test("should render the chart with correct data", () => {
    // Check for the presence of each chart element
    expect(screen.getByText("CartesianGrid")).toBeInTheDocument();
    expect(screen.getByText("XAxis")).toBeInTheDocument();
    expect(screen.getByText("YAxis")).toBeInTheDocument();
    expect(screen.getByText("Bar")).toBeInTheDocument();
    expect(screen.getByText("Tooltip Content")).toBeInTheDocument();
  });
});
```

### Handlers

`src/mocks/handlers`

```ts
import { graphql, HttpResponse } from "msw";
import { mockRepositories } from "@/__tests__/utils";

export const handlers = [
  graphql.query("GetUser", ({ query, variables }) => {
    console.log("Intercepted GetUser GraphQL query:", query);
    const { login } = variables;
    if (login === "request-error") {
      return HttpResponse.json({
        errors: [{ message: "there was an error" }],
      });
    }
    if (login === "invalid-username") {
      return HttpResponse.json({
        data: {
          user: null,
        },
        errors: [
          {
            message: `Could not resolve to a User with the login of ${login}.`,
          },
        ],
      });
    }
    return HttpResponse.json({
      data: {
        user: {
          name: login,
          avatarUrl: `https://github.com/images/${login}.jpg`,
          bio: "Full-stack developer passionate about open source",
          url: `https://github.com/${login}`,
          repositories: {
            totalCount: 45,
            nodes: mockRepositories,
          },
          followers: {
            totalCount: 234,
          },
          following: {
            totalCount: 156,
          },
          gists: {
            totalCount: 27,
          },
        },
      },
    });
  }),
];
```

### UserProfile Test Challenge

- Create a new file named `UserProfile.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import UserProfile from '@/components/user/UserProfile'
  - Import client from '@/apolloClient'
  - Import ApolloProvider from '@apollo/client'

- Setup mocks for chart components:

  - Mock UsedLanguages: return static div
  - Mock PopularRepos: return static div
  - Mock ForkedRepos: return static div

- Create helper function `renderUserProfile`:

  - Render UserProfile wrapped in ApolloProvider
  - Pass userName as prop

- Create main describe block for 'UserProfile'

- Create test cases:

  - Test 'renders UserProfile component':

    - Use valid userName 'john_doe'
    - Verify username display
    - Verify avatar image with correct src
    - Verify user bio display
    - Verify GitHub profile link

  - Test 'renders error message when request fails':

    - Use userName 'request-error'
    - Verify error message display

  - Test 'renders error message when user not found':
    - Use userName 'invalid-username'
    - Verify user not found message display

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock setup for chart components
  - Explain helper function purpose
  - Document test cases and their purposes

### UserProfile Test

`src/__tests__/UserProfile.test.tsx`

```tsx
// This test file contains integration tests for the UserProfile component
// It tests the component's ability to fetch and display user data using GraphQL,
// as well as proper error handling for various scenarios

import { render, screen } from "@testing-library/react";
import UserProfile from "@/components/user/UserProfile";
import client from "@/apolloClient";
import { ApolloProvider } from "@apollo/client";

// Mock chart components to simplify testing
// Replace complex chart components with simple div elements
vi.mock("@/components/charts/UsedLanguages", () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock("@/components/charts/PopularRepos", () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock("@/components/charts/ForkedRepos", () => ({
  default: () => <div>Forked Repos</div>,
}));

// Helper function to render the UserProfile component with Apollo Provider
// This ensures GraphQL queries work correctly in tests
const renderUserProfile = async (userName: string) => {
  render(
    <ApolloProvider client={client}>
      <UserProfile userName={userName} />
    </ApolloProvider>
  );
};

describe("UserProfile", () => {
  // Test case: Verify successful profile rendering with valid user data
  test("renders UserProfile component", async () => {
    const userName = "john_doe";
    await renderUserProfile(userName);

    // Verify username is displayed
    expect(await screen.findByText(userName)).toBeInTheDocument();
    expect(await screen.findByText(userName)).toBeInTheDocument();

    // Verify avatar image is present with correct URL
    expect(await screen.findByRole("img")).toHaveAttribute(
      "src",
      `https://github.com/images/${userName}.jpg`
    );

    // Verify user bio is displayed
    expect(
      await screen.findByText(/full-stack developer/i)
    ).toBeInTheDocument();

    // Verify GitHub profile link is correct
    expect(await screen.findByRole("link")).toHaveAttribute(
      "href",
      `https://github.com/${userName}`
    );
  });

  // Test case: Verify error handling for failed API requests
  test("renders error message when request fails", async () => {
    const userName = "request-error";
    await renderUserProfile(userName);
    expect(await screen.findByText("there was an error")).toBeInTheDocument();
  });

  // Test case: Verify error handling for non-existent users
  test("renders error message when user not found", async () => {
    const userName = "invalid-username";
    await renderUserProfile(userName);
    expect(
      await screen.findByText(/could not resolve to a user/i)
    ).toBeInTheDocument();
  });
});
```

### App Test Challenge

- Create a new file named `App.test.tsx` in the `__tests__` directory

- Add required imports:

  - Import render and screen from '@testing-library/react'
  - Import userEvent from '@testing-library/user-event'
  - Import ApolloProvider from '@apollo/client'
  - Import client from '@/apolloClient'
  - Import App from '@/App'

- Setup mocks for chart components:

  - Mock UsedLanguages: return static div
  - Mock PopularRepos: return static div
  - Mock ForkedRepos: return static div

- Create helper function `renderApp`:

  - Render App component wrapped in ApolloProvider

- Create main describe block for 'App Integration'

- Create test cases:

  - Test 'should update profile when searching for a user':

    - Setup userEvent
    - Verify default user display
    - Find search input
    - Clear and type new username
    - Submit form
    - Verify new user info display
    - Check avatar src
    - Check profile link href

  - Test 'should show error for invalid username':

    - Setup userEvent
    - Clear search input
    - Type invalid username
    - Submit form
    - Verify error message display

  - Test 'should show error when request fails':
    - Setup userEvent
    - Clear search input
    - Type username causing request error
    - Submit form
    - Verify generic error message display

- Add comments for documentation:
  - Explain purpose of test file
  - Document mock setup for chart components
  - Explain helper function purpose
  - Document test scenarios and expected behaviors

### App Test

`src/__tests__/App.test.tsx`

```tsx
// This test file contains integration tests for the main App component
// It tests the core functionality of the application, including user search and error handling

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApolloProvider } from "@apollo/client";
import client from "@/apolloClient";
import App from "@/App";

// Mock the chart components to avoid error when rendering in simulated browser environment
// Instead of rendering actual charts, we render simple div elements
vi.mock("@/components/charts/UsedLanguages", () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock("@/components/charts/PopularRepos", () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock("@/components/charts/ForkedRepos", () => ({
  default: () => <div>Forked Repos</div>,
}));

// Helper function to render the App component wrapped with ApolloProvider
// This setup is required for GraphQL functionality
const renderApp = () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

describe("App Integration", () => {
  // Test case: Verify that the profile updates when searching for a new user
  test("should update profile when searching for a user", async () => {
    const user = userEvent.setup();
    renderApp();

    // Verify the default user is displayed initially
    expect(await screen.findByText("quincylarson")).toBeInTheDocument();

    // Find the search input field
    const searchInput = screen.getByRole("textbox");

    // Simulate user interaction: clear the input and type a new username
    await user.clear(searchInput);
    await user.type(searchInput, "john_doe");

    // Simulate form submission
    const submitButton = screen.getByRole("button", { name: /search/i });
    await user.click(submitButton);

    // Verify that the new user's information is displayed
    expect(await screen.findByText("john_doe")).toBeInTheDocument();

    // Verify that the user's avatar and profile link are updated correctly
    expect(await screen.findByRole("img")).toHaveAttribute(
      "src",
      "https://github.com/images/john_doe.jpg"
    );
    expect(await screen.findByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/john_doe"
    );
  });

  // Test case: Verify error handling for invalid usernames
  test("should show error for invalid username", async () => {
    const user = userEvent.setup();
    renderApp();

    // Simulate searching for an invalid username
    const searchInput = screen.getByRole("textbox");
    await user.clear(searchInput);
    await user.type(searchInput, "invalid-username");

    const submitButton = screen.getByRole("button", { name: /search/i });
    await user.click(submitButton);

    // Verify that the appropriate error message is displayed
    expect(
      await screen.findByText(/could not resolve to a user/i)
    ).toBeInTheDocument();
  });

  // Test case: Verify error handling for failed API requests
  test("should show error when request fails", async () => {
    const user = userEvent.setup();
    renderApp();

    // Simulate a failed request scenario
    const searchInput = screen.getByRole("textbox");
    await user.clear(searchInput);
    await user.type(searchInput, "request-error");

    const submitButton = screen.getByRole("button", { name: /search/i });
    await user.click(submitButton);

    // Verify that the generic error message is displayed
    expect(await screen.findByText("there was an error")).toBeInTheDocument();
  });
});
```

## Keywords

React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Apollo Client, GraphQL, GitHub API, React Testing Library, Vitest, MSW, automated testing, charts, data visualization, user profile, repository statistics

---

## Conclusion

This project demonstrates a modern, fully tested React application with real-world API integration, advanced UI, and robust error handling. The included tests and code comments make it an excellent resource for learning about React, GraphQL, Apollo Client, and frontend testing best practices.

For more details, see the code comments and test files in the repository.

---
