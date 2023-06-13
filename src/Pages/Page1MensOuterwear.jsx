/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page1 from '../components/Page1.jsx';
import Footer from '../components/Footer.jsx';

function Page1MensOuterwear(props) {
  return (
    <>
    <HeaderPart cartList={props.cartList} setcartList={props.setcartList}/>
    <Page1 />
    <Footer />
    </>
  )
}

export default Page1MensOuterwear;