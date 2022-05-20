import { useState } from "react";

const SimpleList = () => {
  const [list, setList] = useState(["Item 1"]);

  const addList = () => {
    const newList = `Item ${list.length + 1}`;
    setList((prevList) => [...prevList, newList]);
  };

  return (
    <div>
      <ul>
        {list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
      <div>
        <button onClick={addList}>Add List</button>
        <button onClick={() => setList([])}>Clear List</button>
      </div>
    </div>
  );
};

export default SimpleList;
