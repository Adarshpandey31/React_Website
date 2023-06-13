/*eslint-disable*/
import React, { useState, useParams, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';

// function ItemList(props) {

//     let id = props.itemsId;
//     let [num, setNum] = useState(Number());
//     let [price, setPrice] = useState(Number(12.30));
//     //num = item[id].quantity

//     const removeItem = () =>{
//          props.cartList.filter( items => items.id != props.itemsId ); 
//     };

//     let handleChange = (e) => {
//         setNum(e.target.value);
//         setPrice(e.target.value);
//     }

function ItemList(props) {
  const [num, setNum] = useState(0);
  const [price, setPrice] = useState(12.30);

  useEffect(() => {
    setPrice(num * 12.30);
  }, [num]);

  const incNum = () => {
    setNum(num + 1);
    props.addItemtoCart(props.itemId, props.size, num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
      props.addItemtoCart(props.itemId, props.size, num - 1);
    }
    if (num === 1) {
      removeItem();
    }
  };

  const removeItem = () => {
    props.removeItem(props.itemId, props.size);
  };

  useEffect(() => {
    const item = props.cartList.find(item => item.id === props.itemId && item.size === props.size);
    if (item) {
      setNum(item.quantity);
    }
  }, [props.cartList, props.itemId]);

  return (
    <div className="cart-item">
      <div className="prod-img-and-name">
        <div className="prod-img">Image</div>
        <h2 className="cart-item-name">Product-1</h2>
      </div>
      <div className="cart-item-details">
        <div className="cart-item-details-size">Size: {props.size}</div>
        <div className="cart-item-details-qty">
          <div className="cart-item-details-qty-heading">Qty:</div>
          {/* <div className="incr-decr-button"> */}
            <button type="button" className="decr" onClick={() => {decNum(); }}>-</button>
            <div>{num}</div>
            <button type="button" className="incr" onClick={incNum}>+</button>
          {/* </div> */}
        </div>
        <div className="cart-item-price">
          ${price.toFixed(2)}
          <div className="trash-icon" onClick={removeItem}><FaIcons.FaTrash /></div>
        </div>
      </div>
    </div>
  );
}

ItemList.propTypes = {
  itemId: PropTypes.number,
  removeItem: PropTypes.func,
  size: PropTypes.string,
  cartList: PropTypes.arrayOf(PropTypes.object),
};

export default ItemList;