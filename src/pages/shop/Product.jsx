
import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;


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
      <button className="bg-transparent hover:bg-violet-600 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">Add to cart</button>
    </div>
  );
};