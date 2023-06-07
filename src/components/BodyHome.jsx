import React from 'react';
// import ladies_tshirts from '../assets/ladies_tshirts.jpg';
import mens_tshirts from '../assets/mens_tshirts.jpg';
import mens_outwear from '../assets/mens_outerwear.jpg';
import ladies_outerwear from '../assets/ladies_outerwear.jpg';
import ladies_tshirt from '../assets/ladies_tshirtss.jpg';

function BodyHome() {
  return (
    <>
    <div className= "box1">
        <img src ={mens_outwear} className="imgg" ></img>
        <h2 className = "img-title">Men&apos;s Outerwear</h2>
        <button className="shop-btn">
            <a href="/mens_outerwearwear" className="text_btn" aria-label="Men's Outerwear Shop Now">
                Shop Now
            </a>
        </button>
    </div>

    <div className="box1">
    <img src ={ladies_outerwear} className="img"></img>
    <h2 className = "img-title">Ladies Outwear</h2>
    <button className="shop-btn">
        <a href="/ladies_outerwear" className="text_btn" aria-label="Ladies Outerwear Shop Now">
            Shop Now
        </a>
    </button>
   </div>

   <div className="box2">

   <div className="box1 box3">
    <img src={mens_tshirts} className="img img3"></img>
    <h2 className = "img-title">Men&apos;s T-Shirts</h2>
    <button className="shop-btn">
        <a href="/mens_tshirt" className="text_btn" aria-label="Men's T-Shirts Shop Now">
            Shop Now
        </a>
    </button>
   </div>

   <div className="box1 box4">
    <img src ={ladies_tshirt} className="img img4"></img>
    <h2 className = "img-title">Ladies T-Shirts</h2>
    <button className="shop-btn">
        <a href="/ladies_tshirts" className="text_btn" aria-label="Ladies T-Shirts Shop Now">
            Shop Now
        </a>
    </button>
   </div>
   
   </div>
</>
  )
}

export default BodyHome;