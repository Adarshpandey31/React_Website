import React from 'react';
// import ladies_tshirts from '../assets/ladies_tshirts.jpg';
import mens_tshirts from '../assets/mens_tshirts.jpg';
import mens_outwear from '../assets/mens_outerwear.jpg';
import ladies_outerwear from '../assets/ladies_outerwear.jpg';
import ladies_tshirt from '../assets/ladies_tshirtss.jpg';

function Body_Home() {
  return (
    <>
    <div className="box1">
        <img src ={mens_outwear} className="imgg"></img>
        <h2>Men's Outwear</h2>
        <shop-button className="btn">
            <a href="/mens_outerwearwear" className="text_btn" aria-label="Men's Outerwear Shop Now">
                Shop Now
            </a>
        </shop-button>
    </div>

    <div className="box1">
    <img src ={ladies_outerwear} className="img"></img>
    <h2>Ladies Outwear</h2>
    <shop-button className="btn">
        <a href="/ladies_outerwear" className="text_btn" aria-label="Ladies Outerwear Shop Now">
            Shop Now
        </a>
    </shop-button>
   </div>

   <div className="box2">

   <div className="box1 box3">
    <img src={mens_tshirts} className="img img3"></img>
    <h2>Men's T-Shirts</h2>
    <shop-button className="btn">
        <a href="/mens_tshirt" className="text_btn" aria-label="Men's T-Shirts Shop Now">
            Shop Now
        </a>
    </shop-button>
   </div>

   <div className="box1 box4">
    <img src ={ladies_tshirt} className="img img4"></img>
    <h2>Ladies T-Shirts</h2>
    <shop-button className="btn">
        <a href="/ladies_tshirts" className="text_btn" aria-label="Ladies T-Shirts Shop Now">
            Shop Now
        </a>
    </shop-button>
   </div>
   
   </div>
</>
  )
}

export default Body_Home;