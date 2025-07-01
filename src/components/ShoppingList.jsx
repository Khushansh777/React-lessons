import React, { useState } from "react";

function ShoppingList() {
  const [list, setList] = useState([]);
  const [input, setinput] = useState({ name: "", quantity: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (input.name && input.quantity) {
      setList((prev) => [
        ...prev,
        { name: input.name, quantity: input.quantity },
      ]);
      setinput({ name: "", quantity: "" });
    }
  };

  return (
    <div>
      <h1>ShoppingList</h1>
      <h2>Name:</h2>
      <input
        type="text"
        value={input.name}
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <h2>Quantity</h2>
      <input
        type="number"
        value={input.quantity}
        name="quantity"
        placeholder="Enter Quantity"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
