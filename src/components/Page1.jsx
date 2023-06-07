
import React from 'react';
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
  return (
    <div className="main-body">

      <div className="box1-page1">
        <img src={mens_outwear} className="imgg-menswear-head-page1" ></img>
        <header >
          <h2 className="img-title-page1">Men&apos;s Outerwear</h2>
          <span>(16 items)</span>
        </header>
      </div>

      <div className="grid">
        <ul className="items">

          <li className="item item-1-1">
            <Link to="/" className='page1-item-img-link'>
              <img src={img1_1} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-2">
            <Link to="/" className='page1-item-img-link'>
              <img src={img1_2} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-3">
            <Link to="/" className='page1-item-img-link'>
              <img src={img1_3} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-4">
            <Link to="/" className='page1-item-img-link'>
              <img src={img1_4} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-5">
          <Link to="/" className='page1-item-img-link' >
              <img src={img1_5} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-6">
          <Link to="/" className='page1-item-img-link'>
              <img src={img1_6} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-7">
             <Link to="/" className='page1-item-img-link'>
              <img src={img1_7} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-8">
             <Link to="/" className='page1-item-img-link' >
              <img src={img1_8} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-9">
             <Link to="/" className='page1-item-img-link' >
              <img src={img1_9} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
          <li className="item item-1-10">
          <Link to="/" className='page1-item-img-link' >
              <img src={img1_0} alt="" className="page-1-items" />
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