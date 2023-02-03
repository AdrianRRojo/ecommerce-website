import React from "react";
import {PRODUCTS} from '../../products'
import {Product} from "./Product";

export default function Shop(){
    return(
        <div>
            <div>
                <h1>Good Shop!</h1>
            </div>
            <div>
                {PRODUCTS.map((product) => {
                    <Product 
                        data={product}
                    />
                })}
            </div>
        </div>
    )
}