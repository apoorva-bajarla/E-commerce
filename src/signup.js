
 import React, { useState } from 'react';
 import Cart from './cart';
 import './signup.css'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2 className=''>Login Form</h2>
      <form style={{height:"550px"}} onSubmit={handleSubmit}>
       <div className='sign'> 
    <i class="fa-brands fa-google"></i>&nbsp; &nbsp; sign in with Google
   
    </div>
    <div className='sign'> 
    <i class="fa-brands fa-facebook-f"></i>&nbsp; &nbsp; sign in with Facebook
   
    </div>
        <div className='log2'>
          <label>Email:</label>
          <input className='inp'
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='log2'>
          <label>Password:</label>
          <input className='inp1'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
           <>
          <Link to ="/products" > <button className='btn-log2'>Login</button></Link>
                </>
            </div>
      </form>
    </div>
  );
}

export default Login;