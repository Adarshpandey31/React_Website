/*eslint-disable*/
import React, { useState } from 'react';
import ItemsList from './Page6ItemList';
import logo_img from '../assets/logo1.png';

function CartItem(props) {
  const [emptyCart, setEmptyCart] = useState(props.cartList.length === 0);

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

  return (
    <>
      {emptyCart ? (
        <div className="empty-cart">
          Your
          <div className="empty-cart-message"> <img src={logo_img} alt="" className="cart-symbol" /></div>
          is empty!
        </div>
      ) : (
        <div className="cart-item-top-box">
          <div className="cart-item-checkout-Heading">
            Please Checkout here!
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
          <div className="cart-remove-button">
            <button type="button" onClick={removeAll} className="cart-item-remove">
              Remove all
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;