// Sandbox.tsx - Demo component for text-based queries in React Testing Library
import { useEffect, useState } from "react";

// The Sandbox component demonstrates text, regex, async, and conditional rendering for testing purposes.
function Sandbox() {
  // State for showing async message
  const [showMessage, setShowMessage] = useState(false);
  // State for showing error message (not used in UI by default)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Show async message after 500ms
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Main container with Tailwind styling
    <div className="p-8 max-w-xl mx-auto space-y-6">
      {/* Heading for text query test */}
      <h1 className="text-lg font-bold mb-2">React Testing Library Examples</h1>
      {/* Paragraph with phone number for regex test */}
      <p className="mb-2 text-gray-700">
        You can search me with regular expression:{" "}
        <span className="font-mono">123-456-7890</span>
      </p>
      {/* Conditional error message for negative query test */}
      {showError && <p className="text-red-500 font-semibold">Error message</p>}
      {/* List for getAllByText test */}
      <ul className="list-disc list-inside space-y-1 mb-2">
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
      {/* Info spans for getAllByText test */}
      <div className="flex gap-2 mb-2">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
          info
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
          info
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
          info
        </span>
      </div>
      {/* Async message for findByText test */}
      {showMessage && (
        <p className="text-green-600 font-medium">Async message</p>
      )}
    </div>
  );
}

export default Sandbox;
