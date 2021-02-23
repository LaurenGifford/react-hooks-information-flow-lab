import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import Filter from "./Filter"
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} toggleDark={isDarkMode}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
