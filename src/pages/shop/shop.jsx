import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import banner1 from "../images/bannerOne.png"
import banner2 from "../images/banner2.png"
import "./shopPage.css"

export const Shop = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src={banner1} class="d-block w-100" alt="Banner Image" />
        </div>
          <div class="carousel-item">
          <img src={banner2} class="d-block w-100" alt="Banner Image"/>
        </div>
        {/* <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="..."/>
        </div> */}
        </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      <div className="grid grid-cols-3 gap-4 content-evenly bg-zinc-900">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};