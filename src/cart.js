import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./cart.css"

function Cart({ cart, removeFromCart }) {
  const [quantity, setQuantity] = useState({});
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart, quantity]);

  const handleIncrement = (index) => {
    const updatedQuantity = { ...quantity };
    updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
    setQuantity(updatedQuantity);
  };

  const handleDecrement = (index) => {
    const updatedQuantity = { ...quantity };
    if (updatedQuantity[index] > 0) {
      updatedQuantity[index] -= 1;
      setQuantity(updatedQuantity);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    removeFromCart(updatedCart);
    const updatedQuantity = { ...quantity };
    delete updatedQuantity[index];
    setQuantity(updatedQuantity);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.price * (quantity[index] || 1);
    });
    setTotalCartPrice(totalPrice);
  };
  return (
    <div className="card-wrapper">
      <div className="div-cont">
      <h2  className="cart">Cart</h2>
      <Link  to="/products"><button className="carts">Back to products</button></Link>&nbsp;&nbsp;
      <Link className="back" to="/"><button className="carts2">Back to HomePage</button></Link>
      </div>
      <div className="product-wrapper">
        {cart.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
            <p>
              <b>Title:</b> {item.title}
            </p>
            <p>
              <b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}
            </p>
            <p>
              <b>Quantity:</b> {item.quantity}
            </p>
            <button className="incre" onClick={() => handleIncrement(index)}>+</button>
            <span className="one">{quantity[index] || 1}</span>
            <button className="incre" onClick={() => handleDecrement(index)}>-</button>
            <br/>
            <p> 
              <b>Total Price:</b> {item.price * (quantity[index] || 0)} 
            </p>
            <button className="btn-rem" onClick={() => handleRemoveFromCart(index)} >Remove</button>
          </div>
        ))}
      </div>
      <h2 style={{textAlign:"center" }}>
       <b className="sub-t"> Sub Total: </b> <i class="fa-solid fa-indian-rupee-sign"></i> <span className="cost">{totalCartPrice}</span>
      </h2>

    </div>
  );
}
export default Cart;


