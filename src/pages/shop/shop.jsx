import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import banner1 from "../images/bannerOne.png"
import banner2 from "../images/banner2.png"
import { ShoppingCart } from "phosphor-react";
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
      <div className="bg-zinc-900">
      <nav className="hidden xl:contents ">
          <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
              <li class="p-1">
                  <a href="/cart" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <ShoppingCart size={32} color="#fff5f5"/>
                  </a>
                </li>
            </ul>
        </nav>
        </div>
      <div className="grid grid-cols-3 gap-4 content-evenly bg-zinc-900">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};