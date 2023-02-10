import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shopPage.css"

export const Shop = () => {
  return (
    <div>
      <div className="">
        <h1>Adri's One Stop Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};