
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
            <Link to={`/mens_outerwear/details/img2_1`} id ="img2_1" className="item-link-to-dscrp" >
              <img src={img2_1} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-2">
            <Link to={`/mens_outerwear/details/img2_2`} id ="img2_2" className="item-link-to-dscrp" >
              <img src={img2_2} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-3">
            <Link to={`/mens_outerwear/details/img2_3`}  id ="img2_3" className="item-link-to-dscrp" >
              <img src={img2_3} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-4">
            <Link to={`/mens_outerwear/details/img2_4`}  id ="img2_4" className="item-link-to-dscrp" >
              <img src={img2_4} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-5">
          <Link to={`/mens_outerwear/details/img2_5`}  id ="img2_5" className="item-link-to-dscrp"  >
              <img src={img2_5} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-6">
          <Link to={`/mens_outerwear/details/img2_6`}  id ="img2_6" className="item-link-to-dscrp" >
              <img src={img2_6} alt="" className="each-img-item" />
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