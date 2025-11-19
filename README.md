# React Testing Library with Vitest - Complete Learning Path

A comprehensive collection of progressive React Testing Library tutorials designed to take you from beginner to advanced. This repository contains five complete projects that build upon each other, teaching you everything from basic setup to advanced testing patterns including GraphQL API mocking and complex integration testing.

---

## 📋 Table of Contents

- [Repository Overview](#repository-overview)
- [Learning Path](#learning-path)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Descriptions](#project-descriptions)
- [Environment Variables](#environment-variables)
- [Testing Setup Across Projects](#testing-setup-across-projects)
- [Running Projects](#running-projects)
- [Key Learning Outcomes](#key-learning-outcomes)
- [Resources](#resources)
- [Contributing](#contributing)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Repository Overview

This repository is a complete learning resource for React Testing Library with Vitest. It contains five progressive projects that teach you:

- ✅ **Project 1** - Basic setup and boilerplate configuration
- ✅ **Project 2** - Fundamental testing concepts and query methods
- ✅ **Project 3** - Test-Driven Development (TDD) workflow
- ✅ **Project 4** - API mocking with Mock Service Worker (MSW)
- ✅ **Project 5** - Advanced GraphQL testing with Apollo Client and MSW

Each project is self-contained with its own dependencies, configuration, and comprehensive documentation. You can follow them sequentially for a complete learning experience or jump to specific topics of interest.

---

## Learning Path

### 📚 Recommended Learning Sequence

1. **Start Here:** `01-React-Testing-Library-Vitest-Boilerplate`

   - Learn basic setup and configuration
   - Understand the testing environment
   - Write your first tests

2. **Fundamentals:** `02-React-Testing-Library-Fundamental-Tutorials`

   - Master query methods (text, role, label)
   - Learn user interaction testing
   - Understand form testing patterns

3. **TDD Practice:** `03-Focus-Flow-Test-Driven-Development-Testing-Tutorial`

   - Practice Test-Driven Development
   - Build a complete application with TDD
   - Learn Context API testing

4. **API Mocking:** `04-Mock-Service-Worker-Testing-Tutorial`

   - Mock REST APIs with MSW
   - Test components with API calls
   - Handle async operations in tests

5. **Advanced Topics:** `05-GitHub-Users-Search-Application-Testing-Tutorial`
   - Mock GraphQL APIs
   - Test Apollo Client integration
   - Test data visualization components

### 🎯 Learning Outcomes

By completing all projects, you will:

- Understand React Testing Library philosophy and best practices
- Master all query methods (getBy, queryBy, findBy, getAllBy, etc.)
- Write comprehensive unit and integration tests
- Practice Test-Driven Development (TDD)
- Mock REST and GraphQL APIs with MSW
- Test components with Context API
- Test async operations and error scenarios
- Write maintainable, accessible, and reliable tests

---

## Project Structure

```bash
react-testing-library-tutorials/
├── 01-React-Testing-Library-Vitest-Boilerplate/
│   ├── src/
│   │   ├── __tests__/           # Basic component tests
│   │   ├── App.tsx              # Main app component
│   │   ├── Random.tsx           # Example component
│   │   └── vitest.setup.ts      # Vitest configuration
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md                # Complete documentation
│
├── 02-React-Testing-Library-Fundamental-Tutorials/
│   ├── src/
│   │   ├── __tests__/           # Component tests
│   │   ├── 01-search-by-text/   # Tutorial 1: Text queries
│   │   ├── 02-tdd-example/      # Tutorial 2: TDD basics
│   │   ├── 03-search-by-role/   # Tutorial 3: Role queries
│   │   ├── 04-user-interactions/# Tutorial 4: User events
│   │   ├── 05-form-testing/     # Tutorial 5: Form tests
│   │   └── 06-reviews-app/      # Tutorial 6: Integration
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md                # Complete documentation
│
├── 03-Focus-Flow-Test-Driven-Development-Testing-Tutorial/
│   ├── src/
│   │   ├── __tests__/           # TDD tests
│   │   ├── components/          # Task management components
│   │   ├── FlowContext.tsx      # Context API implementation
│   │   └── utils.ts             # Custom hooks
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md                # Complete documentation
│
├── 04-Mock-Service-Worker-Testing-Tutorial/
│   ├── src/
│   │   ├── __tests__/           # Tests with MSW
│   │   ├── components/          # Posts management components
│   │   ├── hooks/
│   │   │   └── usePosts.ts      # API hook with Axios
│   │   └── mocks/               # MSW handlers
│   │       ├── handlers.ts      # REST API handlers
│   │       └── server.ts        # MSW server setup
│   ├── public/
│   │   └── mockServiceWorker.js # MSW service worker
│   ├── db.json                  # json-server database
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md                # Complete documentation
│
├── 05-GitHub-Users-Search-Application-Testing-Tutorial/
│   ├── src/
│   │   ├── __tests__/           # GraphQL tests
│   │   ├── components/
│   │   │   ├── charts/          # Chart components (Recharts)
│   │   │   ├── form/            # Search form
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   └── user/            # User profile components
│   │   ├── apolloClient.ts      # Apollo Client setup
│   │   ├── queries.ts           # GraphQL queries
│   │   ├── mocks/               # MSW GraphQL handlers
│   │   └── utils.ts             # Data processing utilities
│   ├── .env.local               # GitHub token (see setup)
│   ├── components.json          # shadcn/ui config
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md                # Complete documentation
│
├── .gitignore                   # Git ignore file
└── README.md                    # This file
```

---

## Technology Stack

### Core Technologies (All Projects)

- **React 18.3.1** - Modern React library for building user interfaces
- **TypeScript 5.5.3+** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.8+** - Next-generation frontend build tool for fast development

### Testing Stack (All Projects)

- **Vitest 2.1.3+** - Fast unit test framework powered by Vite
- **React Testing Library 16.0.1+** - Simple and complete React DOM testing utilities
- **@testing-library/jest-dom 6.5.0+** - Custom Jest matchers for DOM elements
- **@testing-library/user-event 14.5.2+** - Simulate user interactions in tests
- **jsdom 25.0.1+** - JavaScript implementation of the DOM for testing

### Additional Technologies by Project

#### Project 2: Fundamental Tutorials

- **react-icons 5.3.0** - Icon library
- **validator 13.12.0** - Form validation library

#### Project 3: Focus Flow (TDD)

- **lucide-react 0.461.0** - Icon library

#### Project 4: Mock Service Worker

- **MSW 2.6.6** - Mock Service Worker for API mocking
- **Axios 1.7.8** - HTTP client for API calls
- **json-server 1.0.0-beta.3** - Mock REST API server (optional)

#### Project 5: GitHub Users Search

- **Apollo Client 3.11.10** - GraphQL client for React
- **GraphQL 16.9.0** - Query language for APIs
- **MSW 2.6.8** - Mock Service Worker for GraphQL mocking
- **Recharts 2.13.3** - Charting library for React
- **Radix UI** - Unstyled, accessible UI components
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-toast`
- **shadcn/ui** - High-quality React components
- **lucide-react 0.456.0** - Icon library
- **Tailwind CSS 3.4.14** - Utility-first CSS framework

### Development Tools (All Projects)

- **ESLint 9.11.1+** - Code linting and quality assurance
- **Tailwind CSS 3.4.14** - Utility-first CSS framework (Projects 1-4)
- **PostCSS 8.4.47+** - CSS transformation tool

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** (for cloning the repository)
- A code editor (VS Code recommended)

### Required Knowledge

- Basic knowledge of React and JavaScript/TypeScript
- Understanding of HTML and CSS
- Familiarity with terminal/command line
- Basic understanding of testing concepts (helpful but not required)

### For Project 5 (GitHub Users Search)

- **GitHub Personal Access Token** - Required for accessing GitHub GraphQL API
  - Instructions: Go to GitHub Settings → Developer settings → Personal access tokens
  - Required scopes: `read:user` and `public_repo`

### Verifying Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
git --version   # Any recent version
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd react-testing-library-tutorials
```

### 2. Navigate to a Project

Each project is independent and has its own dependencies. Navigate to any project directory:

```bash
cd 01-React-Testing-Library-Vitest-Boilerplate
```

### 3. Install Dependencies

Each project needs its dependencies installed separately:

```bash
npm install
```

### 4. Run the Project

See the [Running Projects](#running-projects) section for details.

### 5. Run Tests

```bash
npm test
```

For detailed instructions on each project, see their individual README files.

---

## Project Descriptions

### 🎯 Project 1: React Testing Library Vitest Boilerplate

**Location:** `01-React-Testing-Library-Vitest-Boilerplate/`

**Learning Objectives:**

- Set up Vitest and React Testing Library
- Configure TypeScript for testing
- Write basic component tests
- Understand test file structure
- Learn Jest-DOM matchers

**Key Features:**

- Minimal React application setup
- Pre-configured testing environment
- Example test files
- TypeScript configuration for testing
- Basic testing patterns

**Technologies Used:**

- React, TypeScript, Vite
- Vitest, React Testing Library
- Tailwind CSS

**Read More:** See [01-React-Testing-Library-Vitest-Boilerplate/README.md](./01-React-Testing-Library-Vitest-Boilerplate/README.md)

---

### 📚 Project 2: React Testing Library Fundamental Tutorials

**Location:** `02-React-Testing-Library-Fundamental-Tutorials/`

**Learning Objectives:**

- Master all query methods (getBy, queryBy, findBy, getAllBy)
- Learn text-based and role-based queries
- Understand user interaction testing
- Practice form validation testing
- Build integration tests

**Key Features:**

- Six progressive sandbox tutorials:
  1. Search by Text - Text query methods
  2. TDD Example - Test-Driven Development basics
  3. Search by Role - Role-based queries
  4. User Interactions - fireEvent vs userEvent
  5. Form Testing - Form validation patterns
  6. Reviews App - Complete integration testing

**Technologies Used:**

- React, TypeScript, Vite
- Vitest, React Testing Library
- react-icons, validator
- Tailwind CSS

**Read More:** See [02-React-Testing-Library-Fundamental-Tutorials/README.md](./02-React-Testing-Library-Fundamental-Tutorials/README.md)

---

### 🧪 Project 3: Focus Flow - Test-Driven Development

**Location:** `03-Focus-Flow-Test-Driven-Development-Testing-Tutorial/`

**Learning Objectives:**

- Practice Test-Driven Development (TDD)
- Write tests before implementation
- Understand Red-Green-Refactor cycle
- Test React Context API
- Test custom hooks
- Build integration tests

**Key Features:**

- Task management application
- Two implementation patterns (custom hook and Context)
- Comprehensive test coverage
- TDD workflow demonstration
- Component integration testing

**Technologies Used:**

- React, TypeScript, Vite
- Vitest, React Testing Library
- lucide-react
- Tailwind CSS

**Read More:** See [03-Focus-Flow-Test-Driven-Development-Testing-Tutorial/README.md](./03-Focus-Flow-Test-Driven-Development-Testing-Tutorial/README.md)

---

### 🔌 Project 4: Mock Service Worker Testing Tutorial

**Location:** `04-Mock-Service-Worker-Testing-Tutorial/`

**Learning Objectives:**

- Set up Mock Service Worker (MSW)
- Mock REST API calls in tests
- Mock API calls in development
- Test components with API integration
- Handle async operations in tests
- Test error scenarios

**Key Features:**

- Posts management application
- MSW setup for browser and Node.js
- REST API mocking with MSW
- CRUD operations testing
- Error handling tests
- Real API simulation

**Technologies Used:**

- React, TypeScript, Vite
- Vitest, React Testing Library
- MSW, Axios
- json-server (optional)
- Tailwind CSS

**Read More:** See [04-Mock-Service-Worker-Testing-Tutorial/README.md](./04-Mock-Service-Worker-Testing-Tutorial/README.md)

---

### 🚀 Project 5: GitHub Users Search Application

**Location:** `05-GitHub-Users-Search-Application-Testing-Tutorial/`

**Learning Objectives:**

- Integrate Apollo Client with React
- Query GitHub GraphQL API
- Mock GraphQL queries with MSW
- Test GraphQL-based components
- Test data visualization components
- Mock chart components in tests

**Key Features:**

- GitHub user search application
- GraphQL API integration
- Data visualization with Recharts
- shadcn/ui components
- Comprehensive testing with MSW
- Error handling and loading states

**Technologies Used:**

- React, TypeScript, Vite
- Vitest, React Testing Library
- Apollo Client, GraphQL
- MSW (GraphQL mocking)
- Recharts
- Radix UI (shadcn/ui)
- Tailwind CSS

**Special Requirements:**

- GitHub Personal Access Token (see Environment Variables section)

**Read More:** See [05-GitHub-Users-Search-Application-Testing-Tutorial/README.md](./05-GitHub-Users-Search-Application-Testing-Tutorial/README.md)

---

## Environment Variables

### Project 5: GitHub Users Search

This project requires a GitHub Personal Access Token to access the GitHub GraphQL API.

#### Setting Up GitHub Token

1. **Create a GitHub Personal Access Token:**

   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name (e.g., "GitHub Search App")
   - Select scopes: `read:user` and `public_repo`
   - Click "Generate token"
   - Copy the token (you won't see it again!)

2. **Create `.env.local` file:**

   ```bash
   cd 05-GitHub-Users-Search-Application-Testing-Tutorial
   touch .env.local
   ```

3. **Add your token:**

   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

   **Important Notes:**

   - Replace `your_github_token_here` with your actual GitHub token
   - Never commit `.env.local` to version control (it's already in `.gitignore`)
   - The `VITE_` prefix is required for Vite to expose the variable

4. **For Testing:**

   MSW mocks handle GraphQL queries in tests, so you don't need a real token for testing. However, if you want to test against the real API, you can use a token in tests.

### Other Projects

Projects 1-4 do not require environment variables.

---

## Testing Setup Across Projects

### Common Testing Configuration

All projects share similar testing setup patterns:

#### 1. Vitest Configuration (`vite.config.ts`)

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

#### 2. Vitest Setup (`src/vitest.setup.ts`)

```typescript
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

#### 3. MSW Setup (Projects 4 & 5)

Projects 4 and 5 include MSW setup:

```typescript
import server from "./mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
```

### Running Tests

All projects use the same test command:

```bash
npm test              # Watch mode (default)
npm test -- --run     # Run once (CI mode)
npm test -- --ui      # UI mode
npm test -- --coverage # With coverage
```

---

## Running Projects

### Development Server

All projects use the same command to start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Project-Specific Commands

#### Project 4: Mock Service Worker

Optional json-server for manual API testing:

```bash
npm run server
```

This starts a mock REST API server at `http://localhost:4000`.

---

## Key Learning Outcomes

### After Completing All Projects

You will be able to:

✅ **Setup and Configure Testing Environment**

- Set up Vitest and React Testing Library
- Configure TypeScript for testing
- Set up MSW for API mocking

✅ **Master Query Methods**

- Use `getBy`, `queryBy`, `findBy` variants
- Use `getAllBy` for multiple elements
- Choose appropriate queries based on use case

✅ **Test User Interactions**

- Simulate user events with `userEvent`
- Test form submissions and validations
- Handle async user interactions

✅ **Practice Test-Driven Development**

- Write tests before implementation
- Follow Red-Green-Refactor cycle
- Build confidence with TDD

✅ **Mock APIs**

- Mock REST APIs with MSW
- Mock GraphQL queries with MSW
- Test error scenarios
- Handle async operations

✅ **Test Complex Applications**

- Test Context API
- Test custom hooks
- Test data visualization components
- Write integration tests

✅ **Follow Best Practices**

- Write accessible tests
- Test user behavior, not implementation
- Keep tests maintainable
- Write fast and reliable tests

---

## Resources

### Official Documentation

- [React Testing Library](https://testing-library.com/react) - Official RTL documentation
- [Vitest](https://vitest.dev/) - Vitest documentation
- [MSW](https://mswjs.io/) - Mock Service Worker documentation
- [Apollo Client](https://www.apollographql.com/docs/react/) - Apollo Client documentation
- [GraphQL](https://graphql.org/learn/) - GraphQL documentation

### Learning Resources

- [Common Mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) - Kent C. Dodds
- [Testing JavaScript](https://testingjavascript.com/) - Testing course by Kent C. Dodds
- [React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library/) - Robin Wieruch
- [TDD Best Practices](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not/) - FreeCodeCamp

### Video Tutorials

- [React Testing Library Crash Course](https://www.youtube.com/watch?v=7dTTFW7yACQ) - YouTube
- [MSW Tutorial](https://www.youtube.com/watch?v=v77fjkKQTH0) - YouTube
- [Apollo Client Tutorial](https://www.youtube.com/watch?v=YyUWW04HwKY) - YouTube

### Community

- [React Testing Library GitHub](https://github.com/testing-library/react-testing-library) - GitHub repository
- [Vitest GitHub](https://github.com/vitest-dev/vitest) - GitHub repository
- [MSW GitHub](https://github.com/mswjs/msw) - GitHub repository

---

## Contributing

This is an educational repository. Contributions, improvements, and suggestions are welcome!

### Ways to Contribute

1. **Report Issues** - Found a bug or have a suggestion? Open an issue
2. **Improve Documentation** - Help make the documentation clearer
3. **Add Examples** - Share additional testing patterns
4. **Fix Bugs** - Submit pull requests for bug fixes

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits clear and focused

---

## Keywords

### Testing Keywords

- **React Testing Library (RTL)** - Testing utilities for React
- **Vitest** - Modern test runner built on Vite
- **Jest-DOM** - Custom matchers for DOM assertions
- **jsdom** - DOM implementation for Node.js
- **Test-Driven Development (TDD)** - Development approach writing tests first
- **Unit Testing** - Testing individual components
- **Integration Testing** - Testing component interactions
- **Mocking** - Simulating dependencies in tests

### Query Methods

- **getBy\*** - Find element, throws if not found
- **queryBy\*** - Find element, returns null if not found
- **findBy\*** - Find element asynchronously
- **getAllBy\*** - Find all elements, throws if none found
- **queryAllBy\*** - Find all elements, returns empty array if none found
- **findAllBy\*** - Find all elements asynchronously

### User Interaction Keywords

- **userEvent** - Simulate user interactions (preferred)
- **fireEvent** - Simulate DOM events (legacy)
- **click** - Simulate click events
- **type** - Simulate typing
- **clear** - Clear input field

### API Mocking Keywords

- **Mock Service Worker (MSW)** - API mocking library
- **Service Worker** - Browser API for intercepting requests
- **Request Handler** - Function defining mock responses
- **GraphQL Mocking** - Mocking GraphQL queries
- **REST API Mocking** - Mocking REST endpoints

### React Keywords

- **Component** - Reusable UI building blocks
- **Props** - Data passed to components
- **State** - Component internal data
- **Context API** - React's built-in state management
- **Custom Hooks** - Reusable stateful logic
- **useQuery** - Apollo Client hook for GraphQL queries

### GraphQL Keywords

- **GraphQL** - Query language for APIs
- **Apollo Client** - GraphQL client for React
- **Query** - GraphQL operation for fetching data
- **Variables** - Parameters passed to queries
- **Schema** - GraphQL API structure

---

## Conclusion

This repository provides a complete learning path for mastering React Testing Library. By following the projects in sequence, you'll progress from basic setup to advanced testing patterns, building real-world applications along the way.

### Learning Path Summary

1. **Start Simple** - Learn basic setup with Project 1
2. **Master Fundamentals** - Build testing skills with Project 2
3. **Practice TDD** - Develop TDD habits with Project 3
4. **Mock APIs** - Learn API mocking with Project 4
5. **Advanced Testing** - Master complex scenarios with Project 5

### What You'll Build

- ✅ Simple React components with tests
- ✅ Complete form validation systems
- ✅ Task management applications
- ✅ Posts management with API integration
- ✅ GitHub user search with GraphQL and data visualization

### Next Steps

1. **Start with Project 1** - Set up your testing environment
2. **Follow the sequence** - Complete projects in order
3. **Practice regularly** - Testing is a skill that improves with practice
4. **Build your own projects** - Apply what you've learned
5. **Share your work** - Help others learn by sharing

### Tips for Success

- **Read the documentation** - Each project has comprehensive README files
- **Write code along** - Don't just read, write the code yourself
- **Experiment** - Try modifying examples and see what happens
- **Test your own code** - Apply patterns to your own projects
- **Join communities** - Engage with the testing community
- **Stay updated** - Testing libraries evolve, stay current

Remember: The goal is not just to write tests, but to write good tests that help you build better applications with confidence.

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
