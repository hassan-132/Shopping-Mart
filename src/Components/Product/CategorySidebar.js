import React from 'react';
import img1 from '../../Assets/Images/1.png';
import img2 from '../../Assets/Images/2.png';
import img3 from '../../Assets/Images/3.png';
import img4 from '../../Assets/Images/4.png';
import './CategorySidebar.css';

const CategorySidebar = () => {
  const data = [
    {
        id : 1,
        categoryimage : img1,
        categoryname : 'Category1'
    },
    {
        id : 2,
        categoryimage : img2,
        categoryname : 'Category2'
    },
    {
        id : 3,
        categoryimage : img3,
        categoryname : 'Category3'
    },
    {
        id : 4,
        categoryimage : img4,
        categoryname : 'Category4'
    },{
        id : 5,
        categoryimage : img1,
        categoryname : 'Category5'
    },
    {
        id : 6,
        categoryimage : img2,
        categoryname : 'Category6'
    },
    {
        id : 7,
        categoryimage : img3,
        categoryname : 'Category7'
    },
    {
        id : 8,
        categoryimage : img4,
        categoryname : 'Category8'
    }
  ]
    return (
    <div className='categorySidebar'>
      {
        data.map((item)=>{
            return(
                <div className='category'>
                <img src={item.categoryimage} alt="no img" />
                <p>{item.categoryname}</p>
                </div>
            )
        })
      }
    </div>
  );
}

export default CategorySidebar;
