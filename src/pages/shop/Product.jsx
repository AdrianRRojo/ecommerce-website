
import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;


  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        
      </div>
      {/* Add tail wind hover style / and rounded buttons */}
      <button>Add to cart</button>
    </div>
  );
};