import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  const listClass = isAdded ? "in-cart" : "";

  function handleAddItem() {
    setIsAdded((isAdded) => !isAdded);
  }

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>
        {isAdded ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
