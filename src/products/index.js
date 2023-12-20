import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './products.css';
import { useNavigate } from 'react-router-dom';
import ProductDetails from './productdetails'; 

function Products() {
  let navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
  
     axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
      <h1 className='product' style={{ textAlign: 'center' }}>Productscomponent</h1>
      <div id="product-wrapper">
        {products.map((product, i) => {
          return (
            <div
              className="product-card"
              onClick={() => {
                navigate(`/products/${product.id}`); // Added a forward slash
              }}
              key={i}
            >
              <img className="product-thumbnail" src={product.thumbnail} alt={`Product ${i}`} />
              <p>
                <b>Title:</b>
                {product.title}
              </p>
              <p>
                <b>Price:</b> {product.price}
              </p>
              <p>
                <b>Rating:</b>
                {product.rating}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;