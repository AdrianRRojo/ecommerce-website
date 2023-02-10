
import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addItemsToCart} = useContext(ShopContext)

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
      <button onClick={() => addItemsToCart(id)}>Add to cart</button>
    </div>
  );
};