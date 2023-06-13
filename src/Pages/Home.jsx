/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import BodyHome from '../components/BodyHome.jsx';
import Footer from '../components/Footer.jsx';


function Home(props) {
  return (
    <>
    <HeaderPart  cartList={props.cartList} setcartList={props.setcartList} />
    <BodyHome  />
    <Footer />
    </>
  )
}

export default Home;