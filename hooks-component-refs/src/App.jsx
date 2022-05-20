import { useRef } from "react";
import Input from "./components/Input";

const App = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <h1>
        Learn Component Refs - <code>useRef + forwardRef</code>
      </h1>
      <div>
        <Input ref={inputRef} type="email" />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
    </div>
  );
};

export default App;
