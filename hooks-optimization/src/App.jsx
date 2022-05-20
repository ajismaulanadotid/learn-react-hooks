import { memo, useCallback, useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  const user = { name: "Mureng" };

  const userProp = useMemo(() => user, []);

  const inc = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <h1>
        Learn Hooks for Optimization - <code>useMeme & useCallback + memo</code>
      </h1>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>
          Click {count} times
        </button>
      </div>
      <Child name="Mureng" user={userProp} addCount={inc} />
    </div>
  );
};

const Child = memo(({ name, user, addCount }) => {
  console.log("Child Render");
  return (
    <div>
      <h2>
        Hello {name} From {user.name}
      </h2>
      <button onClick={addCount}>Add</button>
    </div>
  );
});

function areEq(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default App;
