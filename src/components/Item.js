import React, { useState } from "react";

function Item({ name, category }) {

  const [itemState, setState] = useState(false)

  function handleClick(){
    setState((itemState) => !itemState)
  }

  const myClassName = itemState ? "in-cart" : "";
  const cartState = itemState ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={myClassName}>
      <span>{name}</span>
      <span className="category" >{category}</span>
      <button className="add" onClick = {()=> handleClick()} >{cartState}</button>
    </li>
  );
}

export default Item;
