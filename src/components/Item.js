import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCartState] = useState(false)

  function handleCartClick(){
    setCartState(state => !state)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
