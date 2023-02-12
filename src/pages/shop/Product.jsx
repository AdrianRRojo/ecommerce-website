
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
          <b className="text-white">{productName}</b>
        </p>
        <p className="text-white"> ${price}</p>
        
      </div>
      {/* Add tail wind hover style / and rounded buttons */}
      <button className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => addItemsToCart(id)}>Add to cart {amountOfItems > 0 && <> ({amountOfItems})</>}</button>
    </div>
  );
};