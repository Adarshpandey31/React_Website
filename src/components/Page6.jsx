/*eslint-disable*/
import React, { useState } from 'react';
import ItemsList from './Page6ItemList';

function CartItem(props) {
  const [emptyCart, setEmptyCart] = useState(props.cartList.length === 0);

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
          Your cart is empty!
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
              cartList = {props.cartList}
              setcartList = {props.setcartList}
              size = {cartItem.size}
            />
          ))}

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