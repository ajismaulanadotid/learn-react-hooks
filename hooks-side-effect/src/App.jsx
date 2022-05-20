import { useState } from "react";
import Basic from "./Basic";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>
        Learn Components Side Effect - <code>useEffect</code>
      </h1>
      <hr />
      <div>
        <button onClick={() => setIsOpen((o) => !o)}>Toggle</button>
        {isOpen && <Basic />}
      </div>
    </div>
  );
};

export default App;
