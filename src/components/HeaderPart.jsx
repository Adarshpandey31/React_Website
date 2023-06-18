/*eslint-disable*/
import React, { useState, useEffect, useRef } from "react";
import logo_img from '../assets/logo1.png';
import * as FaIcons from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function HeaderPart(props) {
  try {
    const cartList  = useSelector((state) => state.cart.cartList)
    const [sidebarOpen, setSidebar] = useState(false);
    const [cartSize, setCartSize] = useState(cartList ? cartList.length : 0);
    const [activeLink, setActiveLink] = useState('');
    const sidebarRef = useRef(null);
    const location = useLocation();
    const toggleSidebar = () => {
      setSidebar(!sidebarOpen);
    };
    const closeSidebar = () => {
      if (sidebarOpen) {
        setSidebar(!sidebarOpen);
      }
    };
    const removeCartSize = () => {
      if (cartList && cartList.length === 0) {
        setCartSize(0);
      }
    }
    useEffect(() => {
      if (cartList && cartList.length !== 0)
      {
        const cartsize = cartList.reduce((count, item)=>{
          count = count + item.quantity ;
          return count;
        }, 0);
        setCartSize(cartsize);
      }
      else{
        setCartSize(0);
      }
      setActiveLink(location.pathname);
    }, [cartList, location]);
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 699) {
          setSidebar(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
      <>
        <div className={`topContainer`} >
          <Link to="/" className="title">SHOP</Link>
          <div className="logo">
            <Link to="/cart" className="logo-link">
            { cartSize > 0 && ( <div className="cart-size-display" onChange={removeCartSize}>{cartSize}</div> ) }
              <img src={logo_img} alt="" className="logo1" />
            </Link>
          </div>
          <nav className="navbar" >
            <Link to="/mens_outerwear" className={`column first ${activeLink === '/mens_outerwear' ? 'active' : ''}`}>Men&apos;s Outerwear</Link>
            <Link to="/ladies_outerwear" className={`column second ${activeLink === '/ladies_outerwear' ? 'active' : ''}`}>Ladies Outerwear</Link>
            <Link to="/mens_tshirts" className={`column third ${activeLink === '/mens_tshirts' ? 'active' : ''}`}>Men&apos;s T-Shirts</Link>
            <Link to="/ladies_tshirts" className={`column fourth ${activeLink === '/ladies_tshirts' ? 'active' : ''}`}>Ladies T-Shirts</Link>
          </nav>

          <Link to='#' className="hamburger-icon" onClick={toggleSidebar}>
            <FaIcons.FaBars className="ham-icon" />
          </Link>
        </div>

        {sidebarOpen && (
          <div className="top-sidebar-box">
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <div className="sidebar">
              <ul className="sidebar-menu">
                <li>
                  <Link to='#' className="Sidebaricon" onClick={toggleSidebar}>
                    <FaIcons.FaBars />
                  </Link>
                </li>
                <li>
                  <div className="horizontal-line"></div>
                </li>
                <Link to="/mens_outerwear" className={`sidebar-column first ${activeLink === '/mens_outerwear' ? 'active' : ''}`}>Men&apos;s Outerwear</Link>
                <Link to="/ladies_outerwear" className={`sidebar-column second ${activeLink === '/ladies_outerwear' ? 'active' : ''}`}>Ladies Outerwear</Link>
                <Link to="/mens_tshirts" className={`sidebar-column third ${activeLink === '/mens_tshirts' ? 'active' : ''}`}>Men&apos;s T-Shirts</Link>
                <Link to="/ladies_tshirts" className={`sidebar-column fourth ${activeLink === '/ladies_tshirts' ? 'active' : ''}`}>Ladies T-Shirts</Link>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    // Implement error handling here
    return <div>Error: {error.message}</div>;
  }
}

export default HeaderPart;
