import React from 'react';
import { Link } from 'react-router-dom';
import mens_tshirts from '../assets/mens_tshirts.jpg';
import mens_outwear from '../assets/mens_outerwear.jpg';
import ladies_outerwear from '../assets/ladies_outerwear.jpg';
import ladies_tshirt from '../assets/ladies_tshirtss.jpg';

function BodyHome() {
  try {
    return (
      <>
        <div className="main-body-home">
          <div className="box1">
            <img src={mens_outwear} className="imgg" alt="Men's Outerwear"></img>
            <h2 className="img-title">Men&apos;s Outerwear</h2>
            <button className="shop-btn">
              <Link to="/mens_outerwear" className="text_btn" aria-label="Men's Outerwear Shop Now">
                Shop Now
              </Link>
            </button>
          </div>

          <div className="box1">
            <img src={ladies_outerwear} className="imgg" alt="Ladies Outerwear"></img>
            <h2 className="img-title">Ladies Outerwear</h2>
            <button className="shop-btn">
              <Link to="/ladies_outerwear" className="text_btn" aria-label="Ladies Outerwear Shop Now">
                Shop Now
              </Link>
            </button>
          </div>

          <div className="box2">
            <div className="box1 box3">
              <img src={mens_tshirts} className="imgg img3" alt="Men's T-Shirts"></img>
              <h2 className="img-title">Men&apos;s T-Shirts</h2>
              <button className="shop-btn">
                <Link to="/mens_tshirts" className="text_btn" aria-label="Men's T-Shirts Shop Now">
                  Shop Now
                </Link>
              </button>
            </div>

            <div className="box1 box4">
              <img src={ladies_tshirt} className="imgg img4" alt="Ladies T-Shirts"></img>
              <h2 className="img-title">Ladies T-Shirts</h2>
              <button className="shop-btn">
                <Link to="/ladies_tshirts" className="text_btn" aria-label="Ladies T-Shirts Shop Now">
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    // Implement error handling here
    return <div>Error: {error.message}</div>;
  }
}

export default BodyHome;
