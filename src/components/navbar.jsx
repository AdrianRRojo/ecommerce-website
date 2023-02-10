import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart, House} from 'phosphor-react'
import './navbar.css';
export default function Navbar(){
    return(
        <div>
            <div className="">
                {/* <Link to='/'>Shop</Link> */}
                <Link to='/cart' className="absolute right-0">
                    <ShoppingCart size={40}/>
                </Link>
                <Link to='/' className="absolute left-0">
                    <House size={40} />
                </Link>
            </div>
        </div>
    )
}