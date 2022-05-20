import { useState } from "react";

const ObjectState = () => {
  const [data, setData] = useState({ name: "Mureng", age: 17 });
  const [name, setName] = useState(data.name);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => ({ ...prevData, name }));
  };
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button
          onClick={() =>
            setData((prevData) => ({ ...prevData, age: prevData.age + 1 }))
          }
        >
          Add Age
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Change name..."
          />
          <button>Change</button>
        </form>
      </div>
    </div>
  );
};

export default ObjectState;
