import React from 'react';
import './Authentification.css';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import Login from './Login/Login';

export default function Authentification() {
  return (
    <div className='authentification'>
      <HeaderAuth />
      <Login />
    </div>
  )
}
