/*eslint-disable*/
import React, { useState, useParams, useRef} from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page5 from '../components/Page5.jsx';
import Footer from '../components/Footer.jsx';

function Page5ItemDetails(props) {

  return (
    <>
      <HeaderPart  />
      <Page5 />
      <div className="cart-item-footer">
      <Footer /></div>
    </>
  )
}

export default Page5ItemDetails;