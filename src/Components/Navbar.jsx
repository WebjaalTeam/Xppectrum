import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

import './Navbar.css';

function Navbar() {
    const [open,setOpen]=useState(false)
    return (
        <nav className="navbar">
            <Link to="/"><img src='./public/logo.png' alt='Xppectrum' className='logo-img' /></Link>
             <div className='hamburger'onClick={()=>setOpen(!open)}>
                <RxHamburgerMenu/>
                </div>
            <div className={open?"nav-links show":"nav-links"}>
                <Link to="/about">About</Link>
                <Link to="/service">Services</Link>
                <Link to="/technology">Technology</Link>
                <Link to="/industury">Industury</Link>
                <Link to="/carrers">Careers</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <button className='contact-number'>
                +91 9121400470
            </button>
            
        </nav>
    );
}
export default Navbar;