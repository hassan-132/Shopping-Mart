import React from 'react';
import './HomeCategories.css';
import img1 from '../../../Assets/Images/1.png';
import img2 from '../../../Assets/Images/2.png';
import img3 from '../../../Assets/Images/3.png';
import img4 from '../../../Assets/Images/4.png';

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className="container">
        <img src={img1} alt="" />
        <div className="content">
        <h1>Vegetables at your doorstep</h1>
        <p>Shop your vegetables now</p>
        </div>
      </div>
      <div className="container">
      <img src={img2} alt="" />
      <div className="content">
      <h1>Vegetables at your doorstep</h1>
      <p>Shop your vegetables now</p>
        </div>      
      </div>
      <div className="container">
      <img src={img3} alt="" />
      <div className="content">
      <h1>Vegetables at your doorstep</h1>
      <p>Shop your vegetables now</p>
        </div> 
      </div>
      <div className="container">
      <img src={img4} alt="" />
      <div className="content">
      <h1>Vegetables at your doorstep</h1>
      <p>Shop your vegetables now</p>
        </div>   
      </div>
    </div>
  );
}

export default HomeCategories;
