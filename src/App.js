import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);

  function handleNewItems(item) {
    setItems((prev) => [...prev, item]);
  }

  function deleteItems(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItems} />
      <PackingList
        items={items}
        setItems={setItems}
        deleteItems={deleteItems}
        handleChecked={handleChecked}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
