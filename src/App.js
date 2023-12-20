// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './Home'; 
// import Products from './products';
// import Header from './header/Head';
// import ProductDetails from './products/productdetails'; 
// import Cart from './cart';
// import './App.css';
// import Signup from './signup'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const handleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };
  
//   return (
//     <>
//       <BrowserRouter>
//         <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
//         <Routes>
//           <Route
//             path="/"
//             element={<HomePage />} 
//           />
//           <Route
//             path="/products"
//             element={<Products />} 
//           />
//           <Route
//             path="/products/:id"
//             element={<ProductDetails addToCart={addToCart} />} 
//           />
          
//           <Route
//             path="/cart"
//             element={<Cart cart={cartItems} />} 
//           />
//           <Route
//             path="/signup"
//             element={<Signup />} 
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;





import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home'; 
import Products from './products';
import Header from './header/Head';
import ProductDetails from './products/productdetails'; 
import Cart from './cart';
import './App.css';
import Signup from './signup'
import Signin from'./signin'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (updatedCart) => {
    setCartItems(updatedCart); 
  };
  

  
  
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<HomePage />} 
          />
          <Route
            path="/products"
            element={<Products />} 
          />
          <Route
            path="/products/:id"
            element={<ProductDetails addToCart={addToCart} />} 
          />
          
          <Route
            path="/cart"
            element={<Cart cart={cartItems} />} />
            {/* <Cart cart={cartItems} removeFromCart={removeFromCart} /> */}
            {/* <Route
            path="/cart"
            element={<Cart cart={cartItems} removeFromCart={removeFromCart} />} /> */}
          
          <Route
            path="/signup"
            element={<Signup />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;