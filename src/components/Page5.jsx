/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1_1 from '../assets/mens_outerwear/10-1B.jpg';
import * as FaIcons from 'react-icons/fa';

function Page5(props) {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);
    const popupRef = useRef(null);

    //notifying item added to cart
    const popupMessage = () => {
        setShowPopUp(true);
        // setTimeout(() => {
        //     setShowPopUp(false);
        // }, 3000);
    };
    const removeRemovePopupMessage = () => {
        setShowPopUp(false);
    }

    //navigating to direct checkout
    const goToPayment = () => {
        navigate('/checkout');
    };
    const goToCart = () =>{
        navigate("/cart")
    };
    const params = useParams();
    const id_value = params.id;

    let addCartElement = () => {
        // console.log(props.cartList);
        const cartList = props.cartList || [];
        const idValue = id_value; // Specify the value for the ID
        const sizeValue = document.getElementById('size-select').value; // Get the selected size
        const quantityValue = document.getElementById('quantity-select').value; // Get the selected quantity    
        const priceElement = document.getElementById('items-price');
        const price = parseInt(priceElement.getAttribute('value'), 10); // Get the price as an integer

        // Check if item is present or not
        const isItemInCart = (id, size) => {
            return cartList.some(item => item.id === id && item.size === size);
        };

        if (typeof props.setcartList === 'function') {
            if (isItemInCart(idValue, sizeValue)) {
                const updatedCartList = cartList.map(item => {
                    if (item.id === idValue && item.size === sizeValue) {
                        return { ...item, quantity: item.quantity + parseInt(quantityValue) };
                    }
                    return item;
                });
                props.setcartList(updatedCartList);
            } else {
                const createItem = {
                    id: idValue,
                    size: sizeValue,
                    quantity: parseInt(quantityValue),
                    price: price
                };
                props.setcartList([...cartList, createItem]);
            }
        } else {
            console.error('setcartList is not a function');
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopUp(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {showPopUp && (
                <>
                <div className="popBar" ref={popupRef}>
                    <div onClick={removeRemovePopupMessage} className="close-popup-button">
                        <FaIcons.FaTimes />    
                    </div>
                    <div className="popbar-message">
                        Added to Cart
                    </div>
                    <div className="pop-cart-buttons">
                        <button onClick={() => { goToCart(); }} className="pop-cart-button-1">
                            View Cart
                        </button>
                        <button onClick={() => { addCartElement(); goToPayment(); }} className="pop-cart-button-2">
                            Checkout
                        </button>
                    </div>
                </div>
                
                </>
            )}
            <div className="main-box">
                <div className="item-img-top-box">
                    <div className="img-display">
                        <div className="selected-item-img">
                            <img src={img1_1} alt="" className="selected-item-image" />
                        </div>
                    </div>
                </div>
                <div className="item-details-top-box">
                    <div className="item-details-box">
                        <div className="img-detail-title">Anvil L/S Crew Neck - Grey</div>
                        <div className="img-detail-price" id="items-price" > $ 23.45</div>
                        <div className="img-detail-size">
                            <label style={{ color: "grey", fontSize: "14px" }}>Size</label>
                            <select name="Size" id="size-select" className="img-select-size">
                                <option value="M">M</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div className="img-detail-quantity">
                            <label style={{ color: "grey", fontSize: "14px" }} > Quantity </label>
                            <select name="Quantity" id="quantity-select" className="img-select-quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="img-detail-description-heading">
                            Description
                        </div>
                        <div className="description-detail">
                            A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.
                        </div>
                        <div className="img-detail-features">
                            <div className="img-feature-title">Features :</div>
                            <div className="img-feature-content">
                                <ul>
                                    <li className="img-features-details"> 100% polyester.</li>
                                    <li className="img-features-details">Smooth, technical front with textured mesh back.</li>
                                    <li className="img-features-details">Drawstring bottom for adjustable fit.</li>
                                    <li className="img-features-details">Raglan sleeves.</li>
                                    <li className="img-features-details">Available in forest green with the white Google logo embroidered at left chest.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={() => { addCartElement(); popupMessage(); }} className="cart-button">
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <button onClick={() => { addCartElement(); popupMessage(); }} className="cart-button-mobile">
                    ADD TO CART
                </button>
            </div>

        </>
    );
}

export default Page5;
{/* <button onClick={goToPayment} className="buttons cart-button-2">
Buy Now
</button> */}
{/* <div className="buttons">
    <button onClick={() => { addCartElement(); popupMessage(); }} className="buttons cart-button-1">
        Add to Cart
    </button>
    <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />

</div> */}

// < button onClick={() => { addCartElement(); popupMessage(); }} className="cart-button-mobile" >
//                     Add to Cart
//                 </button>
//                 <ToastContainer
//                     position="bottom-center"
//                     autoClose={3000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light"
//                 />
//                    <div onClick={removeRemovePopupMessage} className="closing-popup-bar-window"></div>