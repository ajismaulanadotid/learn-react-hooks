import { useState } from "react";

const HandlingInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <label htmlFor="name">Input name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <span>Name is: {name}</span>
    </div>
  );
};

export default HandlingInput;
