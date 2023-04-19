import React from 'react';
import './Footer2.css'
import payimg from '../../Assets/pay.png';
import logo from '../../Assets/logo.png'
import social from '../../Assets/social.png'

const Footer2 = () => {
  return (
    <div className='footer2'>
      <div className="footerin1">
        <div className="f1">
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae ex nostrum aliquid voluptate veniam quae eum fuga. Molestias, velit.</p>
        <img src={social} alt="" />
        </div>
        <div className="f2">
        <h3>About Us</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Customer Support</p>
        <p>About Team</p>
        </div>
        <div className="f2">
        <h3>Our Information</h3>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Return Policy</p>
        <p>Site Map</p>
        </div>
        <div className="f2">
        <h3>Commuinty</h3>
        <p>Announcements</p>
        <p>Answer Center</p>
        <p>Discussion Boards</p>
        <p>Giving works</p>
        </div>
        <div className="f2">
            <h1>Subscribe Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate maiores aliquam dolore fugit reiciendis, quae sequi quo. Suscipit, dicta.</p>
            <div className="inputContainer">
                <span className="icon1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                </svg>

                <input type="text" placeholder='Enter your Email' />
            </span>
                <span className="icon2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

                </span>
            </div>
        </div>
      </div>
      <div className="footerin2">
      <h3>© Copyright 2023 Fit Grocery, Inc.  All rights reserved</h3>
        <img src={payimg} alt="" />
      </div>
    </div>
  );
}

export default Footer2;
