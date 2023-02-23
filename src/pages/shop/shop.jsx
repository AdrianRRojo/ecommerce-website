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
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Banner Image" />
        </div>
          <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Banner Image"/>
        </div>
        {/* <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
        </div> */}
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      <div className="bg-zinc-900">
      <nav className="hidden xl:contents ">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
              <li className="p-1">
                  <a href="/cart" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <ShoppingCart size={24} color="#fff5f5"/>
                  </a>
                </li>
            </ul>
        </nav>
        </div>
      <div className="grid grid-cols-3 gap-4 content-evenly bg-zinc-900">
        {PRODUCTS.map((product, i) => (
          <Product key={i} data={product} />
        ))}
      </div>
    </div>
  );
};