/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import mens_outwear from '../assets/mens_outerwear.jpg';
import img1_1 from '../assets/mens_outerwear/10-1B.jpg';
import img1_2 from '../assets/mens_outerwear/10-2B.jpg';
import img1_3 from '../assets/mens_outerwear/10-3B.jpg';
import img1_4 from '../assets/mens_outerwear/10-4B.jpg';
import img1_5 from '../assets/mens_outerwear/10-5B.jpg';
import img1_6 from '../assets/mens_outerwear/10-6B.jpg';
import img1_7 from '../assets/mens_outerwear/10-7B.jpg';
import img1_8 from '../assets/mens_outerwear/10-8.jpg';
import img1_9 from '../assets/mens_outerwear/10-9.jpg';
import img1_0 from '../assets/mens_outerwear/10-0B.jpg';

function MensOuterwearBody() {

  try {
    const [urlId, setId] = useState('');

    const handleclick = (event) => {
      const imageId = event.target.id;
      setId(imageId);
    };

    return (
      <div className="main-body">

        <div className="top-box">
          <img src={mens_outwear} className="imgg-head-pages" ></img>
          <header >
            <h2 className="img-title-page">Men&apos;s Outerwear</h2>
            <span>(10 items)</span>
          </header>
        </div>

        <div className="grid">
          <ul className="items">

            <li className="item item-1-1">
              < Link to={`/mens_outerwear/details/img1_1`} onClick={handleclick} state={{ from: "occupation" }} id="img1_1" className="item-link-to-dscrp" >
                <img src={img1_1} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-2">
              <Link to={`/mens_outerwear/details/img1_2`} onClick={handleclick} state={{ from: "occupation" }} id="img1_2" className="item-link-to-dscrp">
                <img src={img1_2} alt="" className="each-img-item" />
                <div className="img-detail">Anvil L/S Crew Neck - Grey</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-3">
              <Link to={`/mens_outerwear/details/img1_3`} onClick={handleclick} state={{ from: "occupation" }} id="img1_3" className="item-link-to-dscrp">
                <img src={img1_3} alt="" className="each-img-item" />
                <div className="img-detail">Green flex Fleece Zip Hoodie</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-4">
              <Link to={`/mens_outerwear/details/img1_4`} onClick={handleclick} state={{ from: "occupation" }} id="img1_4" className="item-link-to-dscrp">
                <img src={img1_4} alt="" className="each-img-item" />
                <div className="img-detail">Android Nylon Packable Jacket</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-5">
              <Link to={`/mens_outerwear/details/img1_5`} onClick={handleclick} state={{ from: "occupation" }} id="img1_5" className="item-link-to-dscrp">
                <img src={img1_5} alt="" className="each-img-item" />
                <div className="img-detail">Youtube Ultimate Hooded Sweatshirt</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-6">
              <Link to={`/mens_outerwear/details/img1_6`} onClick={handleclick} state={{ from: "occupation" }} id="img1_6" className="item-link-to-dscrp">
                <img src={img1_6} alt="" className="each-img-item" />
                <div className="img-detail">Grey Heather Fleece Zip Hoodie</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-7">
              <Link to={`/mens_outerwear/details/img1_7`} onClick={handleclick} state={{ from: "occupation" }} id="img1_7" className="item-link-to-dscrp">
                <img src={img1_7} alt="" className="each-img-item" />
                <div className="img-detail">Vastrm Hoodie </div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-8">
              <Link to={`/mens_outerwear/details/img1_8`} onClick={handleclick} state={{ from: "occupation" }} id="img1_8" className="item-link-to-dscrp" >
                <img src={img1_8} alt="" className="each-img-item" />
                <div className="img-detail">Recycled Plastic Bottle hoodie - Green</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-9">
              <Link to={`/mens_outerwear/details/img1_9`} onClick={handleclick} state={{ from: "occupation" }} id="img1_9" className="item-link-to-dscrp">
                <img src={img1_9} alt="" className="each-img-item" />
                <div className="img-detail">Rowan Pullover Hood</div>
                <span className="price">$50.20</span>
              </Link>
            </li>
            <li className="item item-1-10">
              <Link to={`/mens_outerwear/details/img1_0`} onClick={handleclick} state={{ from: "occupation" }} id="img1_0" className="item-link-to-dscrp" >
                <img src={img1_0} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Voyage Fleece Jacket</div>
                <span className="price">$50.20</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    );
  } catch (error) {
    // Implement error handling here
    return <div>Error: {error.message}</div>;
  }
}
export default MensOuterwearBody;