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
      img : 'https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjE1NjU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
