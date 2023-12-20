import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './products.css';
import Cart from '../cart'; 

function ProductDetails({ addToCart }) {
  let params = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  
  useEffect(() => {
    if (params.id) {
         axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
        setProductDetails(res.data);
      });
    }            
  }, [params.id]);    

  if (!productDetails) {
    return <h1 id="load">Loading...</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'fantasy' }}>Product     <span> Details</span></h1>               
      <div id="product-spec-wrapper">
        <img id="product-spec-image" src={productDetails.thumbnail} alt={productDetails.title} />
        <div id="small-images-wrapper">
          {productDetails.images.map((smallimage, i) => (
            <div
              onClick={() => {
                setProductDetails((prevDetails) => ({
                  ...prevDetails,
                  thumbnail: smallimage,
                }));
              }}
              className="small-image-wrapper"
              key={i}>
              <img className="small-image-thumbnail" src={smallimage} alt={`Small Image ${i}`} />
            </div>
          ))}
        </div>
        <div id="product-spec-content">
          <p className='pp'><b className='tex'>Title : </b>{productDetails.title}</p>
          <p className='pp'><b className='tex'>Price : </b>{productDetails.price}</p>
          <p className='pp'><b className='tex'>discountPercentage : </b>{productDetails.discountPercentage}</p>
          <p className='pp'><b className='tex'>Rating : </b>{productDetails.rating}</p>
          <p className='pp'><b className='tex'>Left over stock : </b> {productDetails.stock} </p>
          {/* <p><b>Discount:</b> {productDetails.discountPercentage}</p> */}
         <p className='pp'><b className='tex'> brand : </b>{productDetails.brand}</p>
            <p className='pp'><b className='tex'>category : </b>{productDetails.category}</p>
          <p className='pp'><b className='tex'>Description : </b>{productDetails.description}</p>
          <button className='add2' onClick={() => addToCart(productDetails)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;





