import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'

export default function Navbar(){
    return(
        <div>
            <div>
                {/* <Link to='/'>Shop</Link> */}
                <Link to='/cart'>
                    <ShoppingCart size={40}/>
                </Link>
            </div>
        </div>
    )
}