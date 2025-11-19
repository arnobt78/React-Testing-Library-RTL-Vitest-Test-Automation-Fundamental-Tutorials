// Sandbox.tsx - Demo component for role-based queries in React Testing Library
import { useEffect, useState } from "react";

// The Sandbox component demonstrates navigation, headings, images, lists, articles, and buttons for testing purposes.
const Sandbox = () => {
  // State for showing async button
  const [showAsyncButton, setShowAsyncButton] = useState(false);
  // State for showing error button (not used in UI by default)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Show async button after 500ms
    const timer = setTimeout(() => {
      setShowAsyncButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Main container with Tailwind styling
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      {/* Navigation bar with Home and About links */}
      <nav className="flex gap-6 mb-4 text-lg font-medium" role="navigation">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
      </nav>
      {/* Main heading and subheading for role-based heading tests */}
      <h1 className="text-2xl font-semibold mb-2">Main Heading</h1>
      <h2 className="text-xl mb-2 text-gray-700">Subheading</h2>
      {/* Example image and label */}
      <div className="flex items-center gap-2 mb-2">
        <img src="example.jpg" alt="Example" className="w-8 h-8 rounded" />
        <span className="text-base">Example</span>
      </div>
      {/* List with two items */}
      <ul className="list-disc list-inside space-y-1 mb-2">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      {/* Three card articles for article role tests */}
      <div className="flex gap-2 mb-2">
        <article className="bg-gray-100 px-3 py-1 rounded shadow">card</article>
        <article className="bg-gray-100 px-3 py-1 rounded shadow">card</article>
        <article className="bg-gray-100 px-3 py-1 rounded shadow">card</article>
      </div>
      {/* Buttons for interaction tests */}
      <div className="flex gap-4 mb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click me
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
          Cancel
        </button>
        {showAsyncButton && (
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Async Button
          </button>
        )}
      </div>
      {/* Conditional error button to demonstrate queryByRole */}
      {showError && (
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Error
        </button>
      )}
      {/* Form for form-related tests */}
      <form className="grid grid-cols-3 gap-4 items-end">
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="border px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border px-2 py-1 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sandbox;
