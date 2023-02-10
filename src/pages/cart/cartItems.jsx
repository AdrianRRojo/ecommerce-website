import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addItemsToCart, removeItemsFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="">
      <img src={productImage} />
      <div className="">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="">
          <button onClick={() => removeItemsFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addItemsToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};