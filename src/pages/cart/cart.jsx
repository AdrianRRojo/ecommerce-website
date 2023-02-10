import React, {useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItems";

import { useNavigate } from "react-router-dom";
export default function Cart(){
    const { cartItems, updateItemCount, checkout, getTotal } = useContext(ShopContext);
    const totalAmount = getTotal();
    const navigate = useNavigate();
    return(
        <div>
            <h1>Your Cart</h1>
        <div>
            {PRODUCTS.map((Product) => {
                if (cartItems[Product.id] !== 0) {
                    return <CartItem data={Product} />;
                  }
                })}
        </div>
        {totalAmount > 0 ? (
        <div className="">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping? </button>
          <button
            onClick={() => {
              checkout();
              navigate("/contact");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};