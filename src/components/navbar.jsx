import React from "react";
import { Link } from "react-router-dom";
import {LinkedinLogo, GithubLogo, FileArrowDown, Code} from 'phosphor-react'
import logo from '../components/Logo.png'
import './navbar.css';

export default function Navbar(){
    
    return(
        <div>

            <div>
                {/* <Link to='/'>Shop</Link> */}
                {/* <Link to='/cart' className="absolute right-0 ">
                    <ShoppingCart size={35}/>
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
                <Link to='/' className="absolute left-0 w-12">
                    <img src={logo} />
                </Link>
                 */}


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
                        {/* <li className="p-3 xl:p-6">
                            <a href="">
                                <span>Services</span>
                            </a>
                        </li> */}
                        <li className="p-3 xl:p-6">
                            <a href="/about">
                                <span>About</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="hidden xl:contents">
                    <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
                        <li class="p-1">
                            <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <GithubLogo size="24" />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <LinkedinLogo size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <FileArrowDown size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <Code size={24} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            </div>
        </div>
    )
}