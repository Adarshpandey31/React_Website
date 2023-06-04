import React, { useState, useEffect, useRef } from "react";
import logo_img from '../assets/logo1.png';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderPart() {
  const [sidebarOpen, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebar(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 510) {
        setSidebar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="topContainer">
        <a href="/" className="title">SHOP</a>
        <div className="logo">
          <img src={logo_img} alt="" className="logo1" />
        </div>
        <nav className="navbar">
          <a href="/mens_outerwear" className="column first">Men's Outerwear</a>
          <a href="/ladies_outerwear" className="column second">Ladies Outerwear</a>
          <a href="/mens_tshirts" className="column third">Men's T-Shirts</a>
          <a href="/ladies_tshirts" className="column fourth">Ladies T-Shirts</a>
        </nav>

        <Link to='#' className="hamburger-icon" onClick={toggleSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay">
          <div className="sidebar" useRef={sidebarRef}>
            <ul className="sidebar-menu">
              <li>
                <Link to='#' className="Sidebaricon" onClick={toggleSidebar}>
                  <FaIcons.FaBars />
                </Link>
              </li>
              <li>
                <div className="horizontal-line"></div>
              </li>
              <li><a href="/mens_outerwear" className="column first">Men's Outerwear</a></li>
              <li><a href="/ladies_outerwear" className="column second">Ladies Outerwear</a></li>
              <li><a href="/mens_tshirts" className="column third">Men's T-Shirts</a></li>
              <li><a href="/ladies_tshirts" className="column fourth">Ladies T-Shirts</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderPart;
