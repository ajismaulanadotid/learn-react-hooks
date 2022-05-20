import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <span>Count: {count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
