import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className='loginContainer'>
      <div className="login">
        <h1>Welcome ! 👋</h1>
        <p className='label'>Email or Username</p>
        <input type="text" placeholder='example@gmail.com' />
        <p className='label'>Password</p>
        <input type="password" placeholder='**********' />
        <p className='remember'>
          <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
          <span>Forgot Your Password?</span>
        </p>
        
        <button type='button'>
          <Link to="/app/dashboard">Login</Link>
        </button>
        <p className='createAccount'>Not registered? Create an account</p>
        
      </div>
    </div>
  )
}
