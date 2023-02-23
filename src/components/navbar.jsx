import React from "react";
import logo from '../components/Logo.png'
// import resume from '../components/AdrianRojo.pdf'
import './navbar.css';

export default function Navbar(){
    
    return(
        <div>

            <div>
            <header className="bg-white shadow-lg h-24 hidden md:flex">
                <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <img className="w-20" src={logo} alt="" />
                </a>
                <nav className="header-links contents font-semibold text-base lg:text-lg">
                    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                        <li className="p-3 xl:p-6 active">
                            <a href="/">
                                <span>SHOP</span>
                            </a>
                        </li>
                        <li className="p-3 xl:p-6">
                            <a href="/about">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="p-3 xl:p-6">
                            <a href="/Login">
                                <span>Account</span>
                            </a>
                        </li>
                        <li className="p-3 xl:p-6">
                            <a href="/cart">
                                <span>Cart</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            </div>
        </div>
    )
}