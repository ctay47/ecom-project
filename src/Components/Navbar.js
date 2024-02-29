// src/Navbar.js
import React from 'react';

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            {/* Your brand/logo and burger icon for mobile */}
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Categories</a>
                <a className="navbar-item">About</a>
            </div>
            <div className="navbar-end">
                {/* Potential for a sign-in or cart icon */}
            </div>
        </div>
    </nav>
);

export default Navbar;
