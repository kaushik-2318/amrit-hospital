import React from 'react'
import logo from "../assets/logo/logo - Copy.png";
import "./CSS/navBar.css"

function navBar() {
    return (
        <>
            <nav className="shadow z-10">
                <div className="logo">
                    <img className="h-20 w-100" src={logo} alt="Logo" />
                </div>

                <div className="link mr-16">
                    <ul className="link_list">
                        <li className="mx-4 my-6 md:my-0 "><a href="">HOME</a></li>
                        <li className="mx-4 my-6 md:my-0"><a href="">ABOUT</a></li>
                        <li className="mx-4 my-6 md:my-0"><a href="">BLOGS</a></li>
                        <li className="mx-4 my-6 md:my-0"><a href="">CONTACT US</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navBar
