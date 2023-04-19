import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../../Assets/ProdImage/1.jpg';
import img2 from '../../Assets/ProdImage/2.jpg';
import img3 from '../../Assets/ProdImage/3.jpg';
import img4 from '../../Assets/ProdImage/4.jpg';
import img5 from '../../Assets/ProdImage/5.jpg';
import './AllProduct.css'
const AllProduct = () => {
    const products = [{
        id : 1,
        productImage : img1,
        productName : 'product 1',
        productPrice : 100,
        countType : '1 each',
        discountPercent : 12
    },
    {
        id : 2,
        productImage : img2,
        productName : 'product 2',
        productPrice : 200,
        countType : '1 per kg',
        discountPercent : 12
    },
    {
        id : 3,
        productImage : img3,
        productName : 'product 3',
        productPrice : 300,
        countType : '1 per kg',
        discountPercent : 19
    },{
        id : 4,
        productImage : img4,
        productName : 'product 4',
        productPrice : 400,
        countType : '1 per kg',
        discountPercent : 35
    },{
        id : 5,
        productImage : img5,
        productName : 'product 5',
        productPrice : 100,
        countType : '1 each',
        discountPercent : 12
    },
    {
        id : 6,
        productImage : img1,
        productName : 'product 6',
        productPrice : 200,
        countType : '1 per kg',
        discountPercent : 12
    },
    {
        id : 7,
        productImage : img2,
        productName : 'product 7',
        productPrice : 300,
        countType : '1 per kg',
        discountPercent : 19
    },{
        id : 8,
        productImage : img3,
        productName : 'product 8',
        productPrice : 400,
        countType : '1 per kg',
        discountPercent : 19
    },{
        id : 9,
        productImage : img4,
        productName : 'product 9',
        productPrice : 100,
        countType : '1 each',
        discountPercent : 12
    },
    {
        id : 10,
        productImage : img5,
        productName : 'product 10',
        productPrice : 200,
        countType : '1 per kg',
        discountPercent : 15
    }
]
  return (
    <div className='allProducts'>
    <h1>All Products</h1>
    <div className='products'>
    {
        products.map((item)=>{
            return (<ProductCard data={item} key={item.id}/>)
        })
    }
    </div>
    </div>
  );
}

export default AllProduct;
