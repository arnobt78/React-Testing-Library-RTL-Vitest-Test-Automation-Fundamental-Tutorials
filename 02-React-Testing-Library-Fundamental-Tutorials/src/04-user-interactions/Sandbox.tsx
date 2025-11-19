// Sandbox.tsx - Demo component for user interaction testing in React Testing Library
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// The Sandbox component demonstrates counter and like button for interaction tests
const Sandbox = () => {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Increase count handler
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Decrease count handler
  const handleDecrease = () => {
    setCount(count - 1);
  };

  // Toggle like handler
  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    // Main container with Tailwind styling
    <div className="p-8 text-center">
      {/* Counter heading */}
      <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>
      {/* Increase and Decrease buttons */}
      <button
        onClick={handleIncrease}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increase
      </button>
      <button
        onClick={handleDecrease}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrease
      </button>
      {/* Like button with icon */}
      <div>
        {isLiked ? (
          <button
            onClick={handleToggleLike}
            className="block mx-auto text-2xl text-red-500 mt-16"
            aria-label="like button"
          >
            <FaHeart />
          </button>
        ) : (
          <button
            onClick={handleToggleLike}
            className="block mx-auto text-2xl text-red-500 mt-16"
            aria-label="unlike button"
          >
            <FaRegHeart />
          </button>
        )}
      </div>
      {/* <div>
        <button
          onClick={handleToggleLike}
          className='block mx-auto text-2xl text-red-500 mt-16'
          aria-label={isLiked ? 'like button' : 'unlike button'}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div> */}
    </div>
  );
};
export default Sandbox;
