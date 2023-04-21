import React, { useEffect, useState } from 'react';
import './ProductPage.css'
import { useParams ,Link } from 'react-router-dom';
import img1 from '../../Assets/Images/1.png';
import img2 from '../../Assets/Images/2.png';
import img3 from '../../Assets/Images/3.png';
import Navbar from '../../Components/Navbar/Navbar';

const ProductPage = () => {
  const {prodid} = useParams()
  const [imageSet,setImageSet] = useState(null)
  const [productData,setProductData] = useState([])
  const [activeImage,setActiveImage] = useState({})
  const [count,setCount] = useState(1)

  const getProductDataById = async()=> {
    let temp = {
      "Code": 200,
            "Message": "Success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "ProductImage": [
                        {
                            id: 1,
                            image: img1
                        },
                        {
                            id: 2,
                            image: img2
                        },
                        {
                            id: 3,
                            image: img3
                        }
                    ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days"}
                  ]
    }
    if (temp.Code==200)
    {
      setImageSet(temp.Data[0].ProductImage)
      setProductData(temp.Data[0])
      setActiveImage(temp.Data[0].ProductImage[0])
    }
  }
  useEffect(()=>{
    getProductDataById()
  },[])
  return (
    <div className='productPage'>
      <Navbar/>
      <div className="pc1">
        <Link to="/"> 
          <button className='goback'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
        </svg>
        Go Back        
          </button>
        </Link>
        <div className='c11'>
                    <div className='imgset'>
                        {
                            imageSet && imageSet?.map((item, index) => {
                                return (
                                    <div className='imgsmall'
                                        onClick={() => {
                                            setActiveImage(item)
                                        }}
                                    >
                                        <img src={item.image} alt=""
                                            className={
                                                activeImage.id == item.id ? 'active' : ''
                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='imgbig'>
                        <img src={activeImage.image} alt="" />
                    </div>
                </div>
        <div className="c12">
          <h1 className='head1'>{productData.ProductName}</h1>
          <div className="c121">
            <p className="price">
              ${productData.SalesPrice * count}
              <span>${productData.ProductPrice * count}</span>  
            </p>
            <div className="incrdecr">  
              <button onClick={()=>{
                if (count > 1){
                  setCount(count-1)
                }
              }}>-</button>
              <p>{count}</p>
              <button onClick={()=>{
                setCount(count+1)
              }}>+</button>
            </div>
          </div>
        </div>
        <div className="btncont">
              <button onClick={()=>{
                alert("Added to Cart")
              }}> Add to Cart</button>
              <button onClick={()=>{
                alert("Buy Now")
              }}>Buy Now</button>
        </div>
      </div>

    </div>
  );
}

export default ProductPage;
