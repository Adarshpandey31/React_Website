/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1_1 from '../assets/mens_outerwear/10-1B.jpg';
import img1_2 from '../assets/mens_outerwear/10-2B.jpg';
import img1_3 from '../assets/mens_outerwear/10-3B.jpg';
import img1_4 from '../assets/mens_outerwear/10-4B.jpg';
import img1_5 from '../assets/mens_outerwear/10-5B.jpg';
import img1_6 from '../assets/mens_outerwear/10-6B.jpg';
import img1_7 from '../assets/mens_outerwear/10-7B.jpg';
import img1_8 from '../assets/mens_outerwear/10-8.jpg';
import img1_9 from '../assets/mens_outerwear/10-9.jpg';
import img1_0 from '../assets/mens_outerwear/10-0B.jpg';
import img4_1 from '../assets/ladies_tshirts/14-1B.jpg';
import img4_2 from '../assets/ladies_tshirts/14-2B.jpg';
import img4_3 from '../assets/ladies_tshirts/14-3B.jpg';
import img4_4 from '../assets/ladies_tshirts/14-4B.jpg';
import img4_5 from '../assets/ladies_tshirts/14-5B.jpg';
import img4_6 from '../assets/ladies_tshirts/14-6B.jpg';
import img4_7 from '../assets/ladies_tshirts/14-7B.jpg';
import img4_8 from '../assets/ladies_tshirts/14-8B.jpg';
import img4_9 from '../assets/ladies_tshirts/14-9B.jpg';
import img4_0 from '../assets/ladies_tshirts/14-0B.jpg';
import img3_1 from '../assets/mens_tshirts/101-1B.jpg';
import img3_2 from '../assets/mens_tshirts/101-2B.jpg';
import img3_3 from '../assets/mens_tshirts/101-3B.jpg';
import img3_4 from '../assets/mens_tshirts/101-4B.jpg';
import img3_5 from '../assets/mens_tshirts/101-5B.jpg';
import img3_6 from '../assets/mens_tshirts/101-6B.jpg';
import img3_7 from '../assets/mens_tshirts/101-7B.jpg';
import img3_8 from '../assets/mens_tshirts/101-8B.jpg';
import img3_9 from '../assets/mens_tshirts/101-9B.jpg';
import img3_0 from '../assets/mens_tshirts/101-0B.jpg';
import img2_1 from '../assets/ladies_outerwear/11-1B.jpg';
import img2_2 from '../assets/ladies_outerwear/11-2B.jpg';
import img2_3 from '../assets/ladies_outerwear/11-3B.jpg';
import img2_4 from '../assets/ladies_outerwear/11-4B.jpg';
import img2_5 from '../assets/ladies_outerwear/11-5B.jpg';
import img2_6 from '../assets/ladies_outerwear/11-6B.jpg';


function Page5(props) {
    const navigate = useNavigate();
    // const [showPopUp, setShowPopUp] = useState(false);

    //notifying item added to cart
    const popupMessage = () => {
        // setShowPopUp(true);
        // setTimeout(() => {
        //     setShowPopUp(false);
        // }, 3000);

        toast('🦄  Added to Cart');
    };

    //navigating to direct checkout
    const goToPayment = () => {
        navigate('/checkout');
    };
    const params = useParams();
    const id_value = params.id;

    let addCartElement = () => {
        console.log(props.cartList);
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

    return (
        <>
            <div className="main-box">
                <div className="item-img-top-box">
                    <div className="img-display">
                        <div className="selected-item-img">
                            <img src="https://media.istockphoto.com/id/473769326/photo/funny-cat-in-the-store.jpg?s=612x612&w=0&k=20&c=ri8C8fk_0qfbZHwXlC7M1c_vyiPr_Gx2jDAYRti7XYA=" alt="" className="selected-item-image" />
                        </div>
                        <div className="buttons">
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
                            <button onClick={goToPayment} className="buttons cart-button-2">
                                Buy Now
                            </button>
                        </div>

                        {/* {showPopUp && (
                            <div className="popBar">
                                <div className="my-message">
                                    Added to Cart
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
                <div className="item-details-top-box">
                    <div className="item-details-box">
                        <div className="img-detail-title">Go with the Trend</div>
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
                            <div className="img-feature-title">Features</div>
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
                </div>
                < button onClick={() => { addCartElement(); popupMessage(); }} className="cart-button-mobile" >
                    Add to Cart
                </button>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>

        </>
    );
}

export default Page5;
