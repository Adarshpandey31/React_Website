import React from 'react';
import { Link } from 'react-router-dom';
import ladies_tshirts from '../assets/ladies_tshirts.jpg';
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


function MensOuterwearBody() {
  return (
    <div className="main-body">

      <div className="top-box">
        <img src={ladies_tshirts} className="imgg-head-pages" ></img>
        <header >
          <h2 className="img-title-page">Ladies T-Shirts</h2>
          <span>(10 items)</span>
        </header>
      </div>

      <div className="grid">
        <ul className="items">

          <li className="item item-1-1">
            <Link to={`/mens_outerwear/details/img4_1`} id ="img4_1" className="item-link-to-dscrp">
              <img src={img4_1} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Chrome T-Shirt</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-2">
            <Link to={`/mens_outerwear/details/img4_2`} id ="img4_2" className="item-link-to-dscrp">
              <img src={img4_2} alt="" className="each-img-item" />
              <div className="img-detail">Ladies Google New York T-Shirt</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-3">
            <Link to={`/mens_outerwear/details/img4_3`} id ="img4_3" className="item-link-to-dscrp">
              <img src={img4_3} alt="" className="each-img-item" />
              <div className="img-detail">LAdies Gmail T-Shirt</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-4">
            <Link to={`/mens_outerwear/details/img4_4`} id ="img4_4" className="item-link-to-dscrp">
              <img src={img4_4} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-5">
          <Link to={`/mens_outerwear/details/img4_5`} id ="img4_5" className="item-link-to-dscrp">
              <img src={img4_5} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-6">
          <Link to={`/mens_outerwear/details/img4_6`} id ="img4_6" className="item-link-to-dscrp">
              <img src={img4_6} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-7">
             <Link to={`/mens_outerwear/details/img4_7`} id ="img4_7" className="item-link-to-dscrp">
              <img src={img4_7} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-8">
             <Link to={`/mens_outerwear/details/img4_8`} id ="img4_8" className="item-link-to-dscrp" >
              <img src={img4_8} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-9">
             <Link to={`/mens_outerwear/details/img4_9`} id ="img4_9" className="item-link-to-dscrp" >
              <img src={img4_9} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
          <li className="item item-1-10">
          <Link to={`/mens_outerwear/details/img4_0`} id ="img4_0" className="item-link-to-dscrp" >
              <img src={img4_0} alt="" className="each-img-item" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default MensOuterwearBody;