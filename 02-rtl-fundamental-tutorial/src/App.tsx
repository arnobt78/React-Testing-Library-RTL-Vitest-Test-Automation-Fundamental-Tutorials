import Sandbox1 from "./01-search-by-text/Sandbox";

import Sandbox2 from "./02-tdd-example/Sandbox";

import Sandbox3 from "./03-search-by-role/Sandbox";

import Sandbox4 from "./04-user-interactions/Sandbox";

import Sandbox5 from "./05-form-testing/Sandbox";

import Sandbox6 from "./06-reviews-app/Sandbox";

function App() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">
        React Testing Library (Default App Test)
      </h1>
      <p className="mt-4 text-gray-700">
        React Testing Library and Vitest work together to provide a robust
        testing environment.
      </p>
      <div className="p-8">
        <h1 className="font-bold text-2xl">01-search-by-text Test</h1>
        <Sandbox1 />
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">02-tdd-example Test</h1>
        <Sandbox2 />
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">03-search-by-role Test</h1>
        <Sandbox3 />
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">04-user-interactions Test</h1>
        <Sandbox4 />
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">05-form-testing Test</h1>
        <Sandbox5 />
      </div>
      <div className="p-8">
        <h1 className="font-bold text-2xl">06-reviews-app Test</h1>
        <Sandbox6 />
      </div>
    </div>
  );
}
export default App;
