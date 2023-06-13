/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page2 from '../components/Page2.jsx';
import Footer from '../components/Footer.jsx';

function Page2LadiesOuterwear(props) {
  return (
    <>
    <HeaderPart cartList={props.cartList} setcartList={props.setcartList} />
    <Page2 />
    <Footer />
    </>
  )
}

export default Page2LadiesOuterwear;