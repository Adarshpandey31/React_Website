/*eslint-disable*/
import React from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page7 from '../components/Page7.jsx';
import Footer from '../components/Footer.jsx';

function Page7Payment(props) {
    return (
        <>
            <HeaderPart cartList={props.cartList} setcartList={props.setcartList} />
            <Page7 />
            <Footer />
        </>
    )
}

export default Page7Payment;
