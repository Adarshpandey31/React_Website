/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import ItemsList from './Page6ItemList';
import logo_img from '../assets/logo1.png';
import { useNavigate } from 'react-router-dom';


function CartItem(props) {
  const [emptyCart, setEmptyCart] = useState(props.cartList.length === 0);
  const [cartSize, setCartSize] = useState(props.cartList ? props.cartList.length : 0);
  const [totalPrice, setTotalPrice] = useState(props.cartList ? props.cartList.length*12.30 : 0)

  let addCartitem = (id, size, quantity) => {
    console.log(props.cartList);

    if (typeof props.setcartList === 'function') {
      const updatedCartList = props.cartList.map(item => {
        if (item.id === id && item.size === size) {
          //set value according to the value showing in quantity tab
          return { ...item, quantity: parseInt(quantity) };
        }
        return item;
      });
      props.setcartList(updatedCartList);
    } else {
      console.error('setcartList is not a function');
    }
  };

  const removeAll = () => {
    props.setcartList([]);
    setEmptyCart(true);
  };

  const removeItem = (itemId, size) => {
    const updatedCartList = props.cartList.filter(item => item.id !== itemId || item.size !== size);
    props.setcartList(updatedCartList);

    //if no elements are present, make the cart empty
    if (updatedCartList.length === 0) {
      setEmptyCart(true);
    }
  };

  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/checkout');
  }

  useEffect(() => {
    if (props.cartList && props.cartList.length !== 0)
    {
      const cartsize = props.cartList.reduce((count, item)=>{
        count = count + item.quantity ;
        return count;
      }, 0);
      setCartSize(cartsize);
      setTotalPrice(cartsize*12.30);
    }
    else{
      setCartSize(0);
      setTotalPrice(0);
    }
    
    
  }, [props.cartList]);

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
         

          {props.cartList.map((cartItem) => (
            <ItemsList
              key={cartItem.id}
              itemId={cartItem.id}
              removeItem={removeItem}
              cartList={props.cartList}
              setcartList={props.setcartList}
              size={cartItem.size}
              addItemtoCart={addCartitem}
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