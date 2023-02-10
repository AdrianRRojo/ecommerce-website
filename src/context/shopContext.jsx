import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)

const defaultCart = () => {
    let cart = {}
    for(let i = 1; i< PRODUCTS.length; i++){
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
    const contextValue = {cartItems, addItemsToCart, removeItemsFromCart}

    // console.log(cartItems)
    return(
       
            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
       
    )
}