import React from 'react';
import './Footer1.css'
import veges from '../../Assets/veges.png' 

const Footer1 = () => {
  return (
    <div className='footer1'>
      <div className="left">
        <img src={veges} alt="no img" />
      </div>
      <div className="right">
      <h1>Fresh Fruits and Vegetables</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis cupiditate voluptatibus eos at quas distinctio placeat beatae explicabo hic.</p></div>
    </div>
  );
}

export default Footer1;
