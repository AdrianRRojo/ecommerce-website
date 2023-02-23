import React, { useState } from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
export default function Filter() {
  const [sortingOrder, setSortingOrder] = useState('lowToHigh');
  const [products, setProducts] = useState([PRODUCTS]);

  function sortProducts(order, products) {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === 'lowToHigh') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  }

  function handleSortClick() {
    const newOrder = sortingOrder === 'lowToHigh' ? 'highToLow' : 'lowToHigh';
    setSortingOrder(newOrder);
    sortProducts(newOrder, products);
  }

  return (
    <div>
      <button onClick={handleSortClick}>
        Sort {sortingOrder === 'lowToHigh' ? 'Low to High' : 'High to Low'}
      </button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}