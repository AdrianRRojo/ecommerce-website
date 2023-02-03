import React from "react";

export const Product = (props) => {
    const {id, productName, price, productImage, description} = props.data
    return(
        <div> 
           <img src={productImage} />
           <div>
            <p>{productName}</p>
            <p>${price}</p>
           </div>
        </div>
    )
}