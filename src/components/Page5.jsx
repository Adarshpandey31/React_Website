/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Page5() {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);

    const popupMessage = () => {
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
        }, 3000);
    };

    const goToPayment = () => {
        navigate('/checkout');
    };

    return (
        <>
            <div className="main-box">
                <div className="item-img-top-box">
                    <div className="img-display">
                        <div className="selected-item-img">
                            Image
                        </div>
                        <div className="buttons">
                            <button onClick={popupMessage} className="cart-button-1">
                                Add to Cart
                            </button>
                            <button onClick={goToPayment} className="cart-button-2">
                                Buy Now
                            </button>
                        </div>

                        {showPopUp && (
                        <div className="popBar">
                            <div className="my-message">
                                Added to Cart 
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="item-details-top-box">
                    <div className="title"></div>
                </div>

            </div>

        </>
    );
}

export default Page5;
