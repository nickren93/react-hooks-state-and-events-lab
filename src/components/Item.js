import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const liClassName = inCart ? "in-cart" : ""
  function handleClick(){
    setInCart((inCart) => !inCart)
  }
  const buttonContent = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonContent}</button>
    </li>
  );
}

export default Item;
