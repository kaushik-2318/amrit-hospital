'use client'

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Humberger from './Humburger'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

export default function App() {

    const menuItems = ['Home', 'Blog', 'Contact Us', 'Admin Login'];
    const [sidepanel, setSidepanel] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sidepanel) {
            gsap.to('.sidebar', {
                x: '300px',
                duration: 0.7,
                ease: "power1.out",
            });
            gsap.to('.menu-item', {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.1,
                delay: 0.5,
                ease: 'back.out',
            });
            gsap.to('.background', {
                opacity: 0.8,
                duration: 0.7,
            });
        } else {
            gsap.to('.sidebar', {
                x: '-300px',
                duration: 0.5,
            });
            gsap.to('.menu-item', {
                opacity: 0,
                x: -50,
                duration: 0.5,
            });
            gsap.to('.background', {
                opacity: 0,
                duration: 0.5,
            })
        }
    }, [sidepanel]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node) ) {
                setSidepanel(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [panelRef]);

    return (
        <>
            <div className="grid grid-cols-4 sm:grid-cols-12 border-b-2 pt-2 pb-2 duration-200 fixed w-full backdrop-blur-lg">

                <div className="grid col-start-1 col-end-4 sm:col-end-4 sm:grid-cols-3">
                    <div className="col-start-1 col-end-2 justify-center items-center flex sm:hidden">
                        <div className="absolute z-50 left-5">
                            <Humberger setSidepanel={setSidepanel} sidepanel={sidepanel} />
                        </div>
                    </div>
                    <div className="col-start-2 shrink col-end-3 sm:col-end-4 flex justify-center items-center">
                        <Image className="min-w-36 max-w-36 sm:min-w-48 sm:max-w-48 " src='/logo-full.png' width={1000} height={1000} alt="logo" priority />
                    </div>
                </div>

                <div className="background bg-white sm:hidden w-full h-screen overflow-hidden absolute top-0 left-0 z-10"></div>

                <div className={`sidebar bg-white sm:hidden absolute -left-[300px] top-0 duration-200 w-[55%] h-screen z-20`} ref={panelRef}>
                    <div className="py-3 text-center font-bold text-xl">
                        Menu
                    </div>
                    {menuItems.map((item, index) => (
                        <div key={`${item}-${index}`} onClick={() => setSidepanel(!sidepanel)} className="menu-item w-full text-center p-2 hover:bg-slate-300 hover:font-bold duration-200">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="col-start-5 col-end-10 sm:flex justify-center items-center gap-6 uppercase hidden text-[#071836]">
                    <div className="cursor-pointer hover:text-blue-600 hover:scale-110 duration-200">Home</div>
                    <div className="cursor-pointer hover:text-blue-600 hover:scale-110 duration-200">Blog</div>
                    <div className="cursor-pointer hover:text-blue-600 hover:scale-110 duration-200">Contact Us</div>
                </div>

                <div className="col-start-4 col-end-5 sm:col-start-11 sm:col-end-13 flex justify-center items-center gap-6 mx-2">
                    <Button className="sm:w-40 text-center p-2 text-xs sm:text-sm py-6 bg-blue-500 text-white text-wrap" as={Link} href="#" color="primary">Book an Appointment</Button>
                </div>

            </div>
        </>
    );
}

