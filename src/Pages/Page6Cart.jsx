/*eslint-disable*/
import React, { useState, useParams, useRef} from 'react';
import HeaderPart from '../components/HeaderPart.jsx';
import Page6 from '../components/Page6.jsx';
import Footer from '../components/Footer.jsx';

function Page6Cart(props) {

    return (
        // style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        <>
            <div className='hide-navbar'>
               <HeaderPart />
            </div>
            <Page6 />
            <Footer />
        </>
    );
}

export default Page6Cart;
