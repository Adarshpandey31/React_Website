/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import ItemsList from './Page6ItemList';
import logo_img from '../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {addToCart, setCartList,removeFromCart} from '../features/items/cartSlice'

function CartItem(props) {
  const cartList = useSelector((state) => state.cart.cartList );
  const dispatch = useDispatch();
  const [emptyCart, setEmptyCart] = useState(cartList.length === 0);
  const [cartSize, setCartSize] = useState(cartList ? cartList.length : 0);
  const [totalPrice, setTotalPrice] = useState(cartList ? cartSize*12.30 : 0)
  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/checkout');
  }
  useEffect(() => {
    if (cartList && cartList.length !== 0)
    {
      const cartsize = cartList.reduce((count, item)=>{
        count = count + item.quantity ;
        return count;
      }, 0);
      setCartSize(cartsize);
      setTotalPrice(cartsize*12.30);
    }
    else{
      setCartSize(0);
      setTotalPrice(0);
      setEmptyCart(true);
    }
    
  }, [cartList]);

  return (
    <>
      {emptyCart ? (
        <div className="empty-cart">
          Your
          <div className="empty-cart-message"> <img src={logo_img} alt="" className="cart-symbol" /></div>
          is empty!
        </div>
      ) : (

        <>
        <div className="cart-item-top-box">
          <div className="cart-item-checkout-Heading">
           Your Cart 
           <div className="span-cart-items">
            ({cartSize} item)
          </div>
          </div>
         
          {cartList.map((cartItem) => (
            <ItemsList
              key={cartItem.id}
              itemId={cartItem.id}
              size={cartItem.size}
            />
          )
          )}
          {/* <div className="cart-remove-button">
            <button type="button" onClick={removeAll} className="cart-item-remove">
              Remove all
            </button>
          </div> */}
          <div className="total-checkout">
            <div className="total-price"> Total: &nbsp; &nbsp; &nbsp; &nbsp; ${totalPrice.toFixed(2)}</div>
            <button onClick={goToPayment} className="checkout-button">CHECKOUT</button>
          </div>
        </div>
        <button onClick={goToPayment} className="checkout-button-bottom">CHECKOUT</button>
        </>
      )}
    </>
  );
}

export default CartItem;