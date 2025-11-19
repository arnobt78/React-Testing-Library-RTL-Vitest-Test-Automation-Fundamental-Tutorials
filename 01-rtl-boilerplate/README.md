# React Testing Environment Project Template (Empty but Ready for Prototyping & Testing)

![Screenshot 2025-06-18 at 04 00 08](https://github.com/user-attachments/assets/59cb3d87-e246-4a2c-a71a-17b7bd57dde5)
![Screenshot 2025-06-18 at 03 59 47](https://github.com/user-attachments/assets/b1df46ad-416c-4e02-b039-8d85deffc338)

---

A modern starter template for building and testing React applications using Vite, TypeScript, Vitest, and React Testing Library. This project is designed for both learning and rapid prototyping, with a focus on best practices for testing React components.

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Testing Setup & Instructions](#testing-setup--instructions)
8. [Teaching Content: React Testing Walkthrough](#teaching-content-react-testing-walkthrough)
9. [Keywords](#keywords)
10. [License](#license)

---

## Project Summary

This template provides a robust environment for developing and testing React applications. It leverages Vite for fast development, TypeScript for type safety, Tailwind CSS for styling, and Vitest with React Testing Library for comprehensive testing. The included teaching content will guide you through setting up and using these tools for effective React testing.

---

## Features

- ⚡ Fast development with Vite
- 🛡️ TypeScript support
- 🎨 Tailwind CSS for utility-first styling
- 🧪 Vitest for unit and component testing
- 🧰 React Testing Library for testing React components
- 📝 Pre-configured ESLint for code quality
- 📚 Teaching content and step-by-step testing instructions

---

## Technology Stack

- **React** (v18+)
- **TypeScript**
- **Vite**
- **Vitest**
- **React Testing Library**
- **JSDOM**
- **Tailwind CSS**
- **ESLint**

---

## Project Structure

```bash
.
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── Random.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── vitest.setup.ts
│   └── __tests__/
│       ├── App.test.tsx
│       └── Random.test.tsx
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd 02-testing-project-template
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build
- `npm run test` — Run all tests with Vitest
- `npm run lint` — Lint the codebase with ESLint

---

## Testing Setup & Instructions

This project is pre-configured for React Testing Library and Vitest. See the next section for a detailed walkthrough and teaching content.

---

## Teaching Content: React Testing Walkthrough

You can use it as a starting point for your own projects.

A brief walkthrough on how to set up Vite (TypeScript Template), Vitest, and React Testing Library.

### Vitest

1. **Create a new Vite project (React + TypeScript):**

   ```sh
   npm create vite@latest
   ```

2. **Install Vitest:**

   ```sh
   npm install vitest --save-dev
   ```

3. **Add the test script to your `package.json`:**

   ```json
   "scripts": {
     "test": "vitest"
   }
   ```

4. **Create a test file, e.g., `random.test.ts`:**

   ```ts
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

5. **Run the test:**

   ```sh
   npm run test
   ```

### React Testing Library

1. **Install React Testing Library and dependencies:**

   ```sh
   npm install @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event --save-dev
   ```

   - `@testing-library/react` — Core testing utilities for React components
   - `@testing-library/jest-dom` — Custom matchers to simplify assertions
   - `jsdom` — Simulates a browser-like environment for tests to run in Node.js
   - `@testing-library/user-event` — Simulates user interactions (clicks, typing, etc.) in tests

2. **Update `vite.config.ts`:**

   ```ts
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

3. **Create a setup file `src/vitest.setup.ts`:**

   ```ts
   import { expect, afterEach } from "vitest";
   import { cleanup } from "@testing-library/react";
   import * as matchers from "@testing-library/jest-dom/matchers";

   expect.extend(matchers);

   afterEach(() => {
     cleanup();
   });
   ```

4. **Update `tsconfig.app.json` to use Vitest globals:**

   ```json
   {
     "compilerOptions": {
       "types": ["vitest/globals", "@testing-library/jest-dom"]
     }
   }
   ```

5. **Example React component and test:**

   - `src/Random.tsx`

     ```tsx
     const Random = () => {
       return <div>Random Component</div>;
     };
     export default Random;
     ```

   - `src/__tests__/Random.test.tsx`

     ```tsx
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

6. **Run your tests:**

   ```sh
   npm run test
   ```

   You should see output indicating your tests have passed.

---

## Keywords

React, Vite, TypeScript, Vitest, React Testing Library, JSDOM, Tailwind CSS, ESLint, Testing, Unit Test, Component Test, Template, Boilerplate, Teaching, Walkthrough

---

## License

This project is for educational purposes. See the course or repository for license details.

---
