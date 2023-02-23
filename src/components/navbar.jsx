import React from "react";
import { Link } from "react-router-dom";
import {LinkedinLogo, GithubLogo, FileArrowDown, Code} from 'phosphor-react'
import logo from '../components/Logo.png'
import resume from '../components/AdrianRojo.pdf'
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
                <nav className="hidden xl:contents">
                    <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
                        <li class="p-1">
                            <a href="https://github.com/AdrianRRojo" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <GithubLogo size="24" />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="https://www.linkedin.com/in/adrianrrojo/" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <LinkedinLogo size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href={resume} target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                                <FileArrowDown size={24} />
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="https://adrirojo.vercel.app/" target="_blank" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
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