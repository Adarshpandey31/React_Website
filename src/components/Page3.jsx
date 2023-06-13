import React from 'react';
import { Link } from 'react-router-dom';
import mens_tshirts from '../assets/mens_tshirts.jpg';
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


function MensOuterwearBody() {
  try {
    return (
      <div className="main-body">

        <div className="top-box">
          <img src={mens_tshirts} className="imgg-head-pages" ></img>
          <header >
            <h2 className="img-title-page">Men&apos;s T-Shirts</h2>
            <span>(10 items)</span>
          </header>
        </div>

        <div className="grid">
          <ul className="items">

            <li className="item item-1-1">
              <Link to={`/mens_outerwear/details/img3_1`} id="img3_1" className="item-link-to-dscrp">
                <img src={img3_1} alt="" className="each-img-item" />
                <div className="img-detail">Youtube Organic Cotton T-Shirts - Grey</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-2">
              <Link to={`/mens_outerwear/details/img3_2`} id="img3_2" className="item-link-to-dscrp">
                <img src={img3_2} alt="" className="each-img-item" />
                <div className="img-detail">Inbox - Subtle Actions T- Shirt</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-3">
              <Link to={`/mens_outerwear/details/img3_3`} id="img3_3" className="item-link-to-dscrp">
                <img src={img3_3} alt="" className="each-img-item" />
                <div className="img-detail">Adult Android Superhero T - Shirt</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-4">
              <Link to={`/mens_outerwear/details/img3_4`} id="img3_4" className="item-link-to-dscrp">
                <img src={img3_4} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-5">
              <Link to={`/mens_outerwear/details/img3_5`} id="img3_5" className="item-link-to-dscrp" >
                <img src={img3_5} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-6">
              <Link to={`/mens_outerwear/details/img3_6`} id="img3_6" className="item-link-to-dscrp">
                <img src={img3_6} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-7">
              <Link to={`/mens_outerwear/details/img3_7`} id="img3_7" className="item-link-to-dscrp">
                <img src={img3_7} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-8">
              <Link to={`/mens_outerwear/details/img3_8`} id="img3_8" className="item-link-to-dscrp" >
                <img src={img3_8} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>

            <li className="item item-1-9">
              <Link to={`/mens_outerwear/details/img3_9`} id="img3_9" className="item-link-to-dscrp" >
                <img src={img3_9} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>
            <li className="item item-1-10">
              <Link to={`/mens_outerwear/details/img3_0`} id="img3_0" className="item-link-to-dscrp" >
                <img src={img3_0} alt="" className="each-img-item" />
                <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
                <span className="price">$50.20</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    );
  }
  catch (error) {
    return <div> Error : {error.message}</div>
  }
}

export default MensOuterwearBody;