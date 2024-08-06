// File path: src/components/Item.js

import React, { useState } from 'react';

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
};

export default Item;
