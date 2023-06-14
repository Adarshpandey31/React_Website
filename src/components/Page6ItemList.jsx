/*eslint-disable*/
import React, { useState, useParams, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import img2_2 from '../assets/ladies_outerwear/11-2B.jpg';

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

  const setValue = (e) =>{
    setNum(e.target.value);
  }

  return (
    <div className="top-cart-item">
      <div className="cart-item">
        <div className="prod-img-and-name">
          <div className="prod-img">
            <img src={img2_2} alt="" className='prod-image' />
          </div>
          <h2 className="cart-item-name">Ladies Google New York T-shirt</h2>
          <div className="close-icon" onClick={removeItem}>✖ {/*<FaIcons.FaTrash />*/}</div>
          
          
          <div className="cart-details-col">
          <h2 className="cart-details-col-item-name">Ladies Google New York T-shirt</h2>
          <div className="cart-details-col-qty">
              <div className="cart-details-col-qty-heading">Qty:</div>
              <select name="Quantity" id="quantity-select" className="cart-details-col-qty" value={num} onChange={setValue} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="cart-details-col-size">Size: {props.size}</div>
            <div className="cart-details-col-item-price">
              ${price.toFixed(2)}
            </div>
          </div>
          <div className="close-icon-1" onClick={removeItem}>✖ {/*<FaIcons.FaTrash />*/}</div>
        </div>
        <div className="cart-item-details">
          {/* <div className="cart-item-details-2"> */}
            <div className="cart-item-details-qty">
              <div className="cart-item-details-qty-heading">Qty:</div>
              {/* <div className="incr-decr-button"> */}
              {/* <button type="button" className="decr" onClick={() => {decNum(); }}>-</button>
            <div>{num}</div>
            <button type="button" className="incr" onClick={incNum}>+</button> */}
              {/* </div> */}
              <select name="Quantity" id="quantity-select" className="cart-item-details-qty" value={num} onChange={setValue}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="cart-item-details-size">Size: {props.size}</div>
            <div className="cart-item-price">
              ${price.toFixed(2)}
            </div>
          {/* </div> */}
          <div className="trash-icon" onClick={removeItem}>✖ {/*<FaIcons.FaTrash />*/}</div>
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