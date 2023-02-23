import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="">
      <img src={productImage} />
      <div className="">
        <p>
          <b className="text-white">{productName}</b>
        </p>
        <p className="text-white"> ${price}</p>
      </div>

      {/* Add tail wind hover style / and rounded buttons */}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};