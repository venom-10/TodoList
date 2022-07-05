import React, { useState } from "react";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick() {
    setItems((preVal) => {
      return [...preVal, item];
    });
    setItem("");
  }
  function deleteItem(id) {
    setItems((preVal) => {
      return preVal.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <List
              key={index}
              id={index}
              item={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
