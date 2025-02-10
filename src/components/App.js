import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [isDark, setIsDark] = useState(false)
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  //const appClass = isDark ? "Light Mode" : "Dark Mode"
  const buttonContent = isDark ? "Light Mode" : "Dark Mode"

  function handleClick(){
    setIsDark((isDark) => !isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonContent}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
