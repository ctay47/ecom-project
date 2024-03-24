// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss'; 

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-fixed-top" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="path-to-your-logo.svg" alt="Logo" height="28" /> {/* Using an SVG for scalability */}
                    </Link>
                    <span role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={toggleNavbar}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/products">Products</Link>
                        <Link className="navbar-item" to="/contact">Contact</Link>
                        {/* You can add more navbar items here */}
                    </div>
                    <div className="navbar-end">
                        {/* You can add a button or icons here */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
