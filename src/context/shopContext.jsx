import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)

const defaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart
}

export default function ShopContextProvider(props){
    const [cartItems, setCartItems] = useState(defaultCart())

    const addItemsToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeItemsFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    
    const checkout = () => {
    setCartItems(defaultCart());
    };

    const getTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
    };


    const contextValue = {cartItems, addItemsToCart, removeItemsFromCart, updateItemCount, checkout, getTotal}

    // console.log(cartItems)
    return(
       
            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
       
    )
}