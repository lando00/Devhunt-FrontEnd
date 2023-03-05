import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className='loginContainer'>
      <div className="login">
        <h1>Welcome ! 👋</h1>
        <label className='label' htmlFor='email'>Email</label>
        <input type="text" placeholder='example@gmail.com' id='email' />
        <label className='label' htmlFor='motDePasse'>Mot de passe</label>
        <input type="password" placeholder='**********' id='motDePasse' />
        <p className='remember'>
          <input type="checkbox" id='remember' />
          <label htmlFor="remember">Se souvient de moi</label>
          <span>Mot de passe oublié?</span>
        </p>

        <Link to="/app/dashboard">
            Login
        </Link>

      </div>
    </div>
  )
}
