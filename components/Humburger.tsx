'use client'

import React, { useEffect } from 'react'
import './CSS/humberger.css'

interface HumbergerProps {
    setSidepanel: React.Dispatch<React.SetStateAction<boolean>>;
    sidepanel: boolean;
}

export default function Humburger({ setSidepanel, sidepanel }: HumbergerProps) {

    useEffect(() => {
        const handleClick = () => {
            setSidepanel(!sidepanel);
        };

        const navIcon = document.getElementById('nav-icon');
        navIcon?.addEventListener('click', handleClick);

        if (sidepanel) {
            navIcon?.classList.add('open');
        } else {
            navIcon?.classList.remove('open');
        }

        return () => {
            navIcon?.removeEventListener('click', handleClick);
        };
    }, [sidepanel, setSidepanel]);

    return (
        <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
