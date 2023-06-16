/*eslint-disable*/
import React, { useState, useParams, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import img1_2 from '../assets/mens_outerwear/10-2B.jpg';
import img1_1 from '../assets/mens_outerwear/10-1B.jpg';
import img1_3 from '../assets/mens_outerwear/10-3B.jpg';
import img1_4 from '../assets/mens_outerwear/10-4B.jpg';
import img1_5 from '../assets/mens_outerwear/10-5B.jpg';
import img1_6 from '../assets/mens_outerwear/10-6B.jpg';
import img1_7 from '../assets/mens_outerwear/10-7B.jpg';
import img1_8 from '../assets/mens_outerwear/10-8.jpg';
import img1_9 from '../assets/mens_outerwear/10-9.jpg';
import img1_0 from '../assets/mens_outerwear/10-0B.jpg';
import img2_1 from '../assets/ladies_outerwear/11-1B.jpg';
import img2_2 from '../assets/ladies_outerwear/11-2B.jpg';
import img2_3 from '../assets/ladies_outerwear/11-3B.jpg';
import img2_4 from '../assets/ladies_outerwear/11-4B.jpg';
import img2_5 from '../assets/ladies_outerwear/11-5B.jpg';
import img2_6 from '../assets/ladies_outerwear/11-6B.jpg';
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

  // const incNum = () => {
  //   setNum(num + 1);
  //   props.addItemtoCart(props.itemId, props.size, num + 1);
  // };

  // const decNum = () => {
  //   if (num > 0) {
  //     setNum(num - 1);
  //     props.addItemtoCart(props.itemId, props.size, num - 1);
  //   }
  //   if (num === 1) {
  //     removeItem();
  //   }
  // };

  const id = props.itemId;
  console.log(id);
  const imageMap = {
    img1_2 : img1_2,
    img1_1 : img1_1,
    img1_3 : img1_3,
    img1_4 : img1_4,
    img1_5 : img1_5,
    img1_6 : img1_6,
    img1_7 : img1_7,
    img1_8 : img1_8,
    img1_9 : img1_9,
    img1_0 : img1_0,
    img2_1 : img2_1,
    img2_2 : img2_2,
    img2_3 : img2_3,
    img2_4 : img2_4,
    img2_5 : img2_5,
    img2_6 : img2_6,
    img3_1 : img3_1,
    img3_2 : img3_2,
    img3_3 : img3_3,
    img3_4 : img3_4,
    img3_5 : img3_5,
    img3_6 : img3_6,
    img3_7 : img3_7,
    img3_8 : img3_8,
    img3_9 : img3_9,
    img3_0 : img3_0,
    img4_1 : img4_1,
    img4_2 : img4_2,
    img4_3 : img4_3,
    img4_4 : img4_4,
    img4_5 : img4_5,
    img4_6 : img4_6,
    img4_7 : img4_7,
    img4_8 : img4_8,
    img4_9 : img4_9,
    img4_0 : img4_0
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

  const setValue = (e) => {
    setNum(e.target.value);
    props.addItemtoCart(props.itemId, props.size, e.target.value);
  }

  return (
    <div className="top-cart-item">
      <div className="cart-item">
        <div className="prod-img-and-name">
          <div className="prod-img">
            <img src={imageMap[id]} alt="" className='prod-image' />
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