import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart, House} from 'phosphor-react'
import logo from '../components/Logo.png'
import './navbar.css';
export default function Navbar(){
    return(
        <div>

            <div>
                {/* <Link to='/'>Shop</Link> */}
                <Link to='/cart' className="absolute right-0 ">
                    <ShoppingCart size={40}/>
                </Link>
                <Link to='/' className="">
                    <b>GAMING MICE  | </b>
                </Link>
                <Link to='/' className="">
                    <b>ABOUT  | </b>
                </Link>
                <Link to='/' className="">
                    <b>ABOUT</b>
                </Link>
                <Link to='/' className="absolute left-0 w-14">
                    <img src={logo} />
                </Link>
                

            </div>
        </div>
    )
}