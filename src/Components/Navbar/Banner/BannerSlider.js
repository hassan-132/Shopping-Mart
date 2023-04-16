import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = () => {
  const data = [
    {
    id : 1,
    img : 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title : 'Fresh Vegatables and Fruits at your Door Step',
    description : 'We deliver fresh vegetables and fruits at your door step',
    button : 'https://www.google.com'
    },{
      id : 2,
      img : 'https://media.istockphoto.com/id/1412353077/photo/happy-woman-working-at-a-supermarket.jpg?b=1&s=170667a&w=0&k=20&c=yLq4HI-WKmpPVMbE_CcFxJJtRiDt13UDapoQ7kwcsqI=',
      title : 'Fresh Vegatables and Fruits at your Door Step',
    description : 'We deliver fresh vegetables and fruits at your door step',
    button : 'https://www.google.com'
    
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='bannerSlider'>
      <Slider className='bannerSlider' {...settings}>
      {
        data.map(item=>{
          return (
            <div className='imagcont' key={item.id}>
            <img src={item.img} alt="noimg" />
            <div className="content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>Shop Now</button>
            </div>
          </div>
          )
        })
      }
      </Slider>
    </div>
  );
}

export default BannerSlider;
