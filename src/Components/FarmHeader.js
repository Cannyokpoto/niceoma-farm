import "./Farm.css";
import React from "react";
import { useRef } from "react";
import PHOTOS from "./images/index";
import { NavLink } from 'react-router-dom';


//Header

function Header(){

    //Mobile Navbar

    const navRef = useRef();

    function Navbar(){
            navRef.current.classList.toggle("mobile-navbar-open");
        };


        return(
            <div>

                <header id="header">
                    <div className="logo">
                        <img src={ PHOTOS.PHOTO26 } alt="" />
                    </div>

                    {/* desktopNav navigation */}

                    <nav className="navbar">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/about">ABOUT</NavLink>
                        <NavLink to="/services">SERVICES</NavLink>
                        <NavLink to="/contact">CONTACT US</NavLink>
                        <NavLink to="/work">WORK WITH US</NavLink>
                    </nav>
        
                    <div className="icons">
                        <i className="fas fa-bars" id="menu-bars" onClick={Navbar}></i>
                    </div>

                    {/* mobile-navigation */}

                    <nav className="mobile-navbar" id="mobile-navbar" ref={navRef}>
                        <div className="mobile-navbar-header">
                            <img src={PHOTOS.PHOTO26} alt=""/>
                            <i className="fas fa-times" id="close" onClick={Navbar}></i>
                        </div>
                        <div className="mobile-navbar-items">
                            <NavLink to="/">HOME</NavLink>
                            <hr/>
                            <NavLink to="/about">ABOUT</NavLink>
                            <hr/>
                            <NavLink to="/services">SERVICES</NavLink>
                            <hr/>
                            <NavLink to="/contact">CONTACT US</NavLink>
                            <hr/>
                            <NavLink to="/work">WORK WITH US</NavLink>
                            <hr/>
                        </div>
                    </nav>
                </header>
            </div>
        )
};


    

export default Header ;