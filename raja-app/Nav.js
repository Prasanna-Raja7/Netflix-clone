import React from "react"
import { useState, useEffect } from "react";
import './Nav.css'
function Nav() {
    const [show, handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true);
            }
            else handleshow(false);
        });
        return () => {
            window.removeEventListener(true);
        };

    }, []);
    return (
        <div className={`Nav ${show && "Nav_black"}`}>
            <img
                className="Nav-logo"
                src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;