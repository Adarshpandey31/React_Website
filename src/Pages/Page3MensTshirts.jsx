/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page3 from '../components/Page3.jsx';
import Footer from '../components/Footer.jsx';

function Page3MensTshirts(props) {
  return (
    <>
    <HeaderPart cartList={props.cartList} setcartList={props.setcartList} />
    <Page3 />
    <Footer />
    </>
  )
}

export default  Page3MensTshirts;