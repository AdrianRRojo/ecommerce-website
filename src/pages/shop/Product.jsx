
import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addItemsToCart, cartItems} = useContext(ShopContext)

  const amountOfItems = cartItems[id]
  return (
    <div className="">
      <img src={productImage} />
      <div className="">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        
      </div>
      {/* Add tail wind hover style / and rounded buttons */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => addItemsToCart(id)}>Add to cart {amountOfItems > 0 && <> ({amountOfItems})</>}</button>
    </div>
  );
};