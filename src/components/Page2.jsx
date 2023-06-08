
import React from 'react';
import { Link } from 'react-router-dom';
import ladies_outerwear from '../assets/ladies_outerwear.jpg';
import img2_1 from '../assets/ladies_outerwear/11-1B.jpg';
import img2_2 from '../assets/ladies_outerwear/11-2B.jpg';
import img2_3 from '../assets/ladies_outerwear/11-3B.jpg';
import img2_4 from '../assets/ladies_outerwear/11-4B.jpg';
import img2_5 from '../assets/ladies_outerwear/11-5B.jpg';
import img2_6 from '../assets/ladies_outerwear/11-6B.jpg';


function MensOuterwearBody() {
  return (
    <div className="main-body">

      <div className="top-box">
        <img src={ladies_outerwear} className="imgg-head-pages" ></img>
        <header >
          <h2 className="img-title-page">Ladies Outerwear</h2>
          <span>(6 items)</span>
        </header>
      </div>

      <div className="grid">
        <ul className="items">

          <li className="item item-1-1">
            <Link to="/" className='page1-item-img-link'>
              <img src={img2_1} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-2">
            <Link to="/" className='page1-item-img-link'>
              <img src={img2_2} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-3">
            <Link to="/" className='page1-item-img-link'>
              <img src={img2_3} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-4">
            <Link to="/" className='page1-item-img-link'>
              <img src={img2_4} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-5">
          <Link to="/" className='page1-item-img-link' >
              <img src={img2_5} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-6">
          <Link to="/" className='page1-item-img-link'>
              <img src={img2_6} alt="" className="page-1-items" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
        
        </ul>
      </div>

    </div>
  );
}

export default MensOuterwearBody;