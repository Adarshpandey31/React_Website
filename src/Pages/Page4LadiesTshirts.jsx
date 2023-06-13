/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page4 from '../components/Page4.jsx';
import Footer from '../components/Footer.jsx';

function Page4LadiesTshirts(props) {
  return (
    <>
    <HeaderPart cartList={props.cartList} setcartList={props.setcartList} />
    <Page4 />
    <Footer />
    </>
  )
}

export default  Page4LadiesTshirts;