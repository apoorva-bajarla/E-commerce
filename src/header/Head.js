import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import Signup from '../signup'
function Header({ isLoggedIn, onLogin, cart }) {
  return (
    <>
      <div id="header">
        {isLoggedIn && (
          <>
          <Link to="/" className="color">
         <span>Home</span>
        </Link>
        <Link to="/products" className="color">
           Products
            </Link>
        <Link to="/cart" className="color">
          <i class="fa-solid fa-cart-shopping fa-xs"></i>
          ({cart.length})
        </Link>
        {/* <Link to="/signup">
        </Link> */}
         </>
        )}
        <Link to="signup"><button className="log" onClick={onLogin}>{isLoggedIn ? "Logout" : "Login"}</button></Link>
      </div>
    </>
  );
}

export default Header;


























