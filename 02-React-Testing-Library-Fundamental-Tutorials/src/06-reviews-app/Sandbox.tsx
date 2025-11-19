// Sandbox.tsx - Demo component for reviews app with form and list in React Testing Library
import { useState } from "react";
import Form from "./Form";
import List from "./List";

// Review type for the reviews app
export type Review = {
  email: string;
  rating: string;
  text: string;
};

// The Sandbox component manages reviews and renders the form and list
const Sandbox = () => {
  // State for storing reviews
  const [reviews, setReviews] = useState<Review[]>([]);

  // Add a new review to the list
  const addReview = (review: Review) => {
    setReviews([...reviews, review]);
  };
  return (
    // Main container with Tailwind styling
    <div className="max-w-xl mx-auto p-8">
      {/* App heading */}
      <h1 className="text-2xl font-bold mb-8">Reviews App</h1>
      {/* Review form and list */}
      <Form onSubmit={addReview} />
      <List reviews={reviews} />
    </div>
  );
};
export default Sandbox;
