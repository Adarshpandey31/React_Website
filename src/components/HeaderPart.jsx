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

  const closeSidebar = () => {
    if(sidebarOpen)
    {
      setSidebar(!sidebarOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 500) {
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

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  
  return (
    <>
      <div className={`topContainer ${show && 'hidden'}`} >
        <Link to="/" className="title">SHOP</Link>
        <div className="logo">
          <img src={logo_img} alt="" className="logo1" />
        </div>
        <nav className="navbar" >
          <Link to="/mens_outerwear" className="column first">Men&apos;s Outerwear</Link>
          <Link to="/ladies_outerwear" className="column second">Ladies Outerwear</Link>
          <Link to="/mens_tshirts" className="column third">Men&apos;s T-Shirts</Link>
          <Link to="/ladies_tshirts" className="column fourth">Ladies T-Shirts</Link>
        </nav>

        <Link to='#' className="hamburger-icon" onClick={toggleSidebar}>
          <FaIcons.FaBars className="ham-icon" />
        </Link>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}>
          <div className="sidebar" > {/***useRed*/}
            <ul className="sidebar-menu">
              <li>
                <Link to='#' className="Sidebaricon" onClick={toggleSidebar}>
                  <FaIcons.FaBars />
                </Link>
              </li>
              <li>
                <div className="horizontal-line"></div>
              </li>
              <li><Link to="/mens_outerwear" className="column first">Men&apos;s Outerwear</Link></li>
              <li><Link to="/ladies_outerwear" className="column second">Ladies Outerwear</Link></li>
              <li><Link to="/mens_tshirts" className="column third">Men&apos;s T-Shirts</Link></li>
              <li><Link to="/ladies_tshirts" className="column fourth">Ladies T-Shirts</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderPart;
