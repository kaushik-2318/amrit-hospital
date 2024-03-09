import React from 'react'
import logo from "../assets/logo/logo - Copy.png";
import "./CSS/navBar.css"
import whatsapp from "../assets/Icon/whatsapp-fill.svg";
import emergency from "../assets/Icon/emergency.svg";
import menu from "../assets/Icon/menu-line.svg";

function navBar() {
    return (
        <>
            <nav className="grid shadow z-10 bg-white w-full fixed">
                <div className='menu flex justify-center'>
                    <img className='w-[35px]' src={menu} alt="" />
                </div>
                <div className="logo flex justify-center items-center">
                    <img className="h-20 w-100" src={logo} alt="Logo" />
                </div>

                <div className="link mr-3">
                    <ul className="flex flex-row justify-center items-center h-full gap-3">
                        <li className="mx-4 my-6 md:my-0 hidden"><a href="">HOME</a></li>
                        <li className="mx-4 my-6 md:my-0 hidden"><a href="">ABOUT</a></li>
                        <li className="mx-4 my-6 md:my-0 hidden"><a href="">BLOGS</a></li>
                        <li className="mx-4 my-6 md:my-0 hidden"><a href="">CONTACT US</a></li>

                        <li className="">
                            <a className='flex flex-col justify-center items-center' href="">
                                <img className='w-[35px]' src={whatsapp} alt="Whatsapp" />
                                <p className='text-[10px]'>WhatsApp</p>
                            </a>
                        </li>
                        <li className="">
                            <a className='flex flex-col justify-center items-center' href="">
                                <img className='w-[35px]' src={emergency} alt="Emergency" />
                                <p className='text-[10px]'>Emergency</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navBar
