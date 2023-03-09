import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


export default function Login() {

  const [serialNumber, setSerialNumber] = useState('');
  const [passWord, setPassWord] = useState('');

  return (
    <div className='loginContainer'>
      <div className="login">
        <h1>Welcome ! 👋</h1>
        <label className='label' htmlFor='serialNumber'>Num&eacute;ro matricule</label>
        <input type="text" placeholder='example@gmail.com' id='serialNumber' onChange={(e) => setSerialNumber(e.target.value)}/>
        <label className='label' htmlFor='passWord'>Mot de passe</label>
        <input type="password" placeholder='**********' id='passWord' onChange={(e) => setPassWord(e.target.value)} />
        <p className='remember'>
          <input type="checkbox" id='remember' />
          <label htmlFor="remember">Se souvient de moi</label>
          <span>Mot de passe oublié?</span>
        </p>

        <Link to="/actuality/recentQuestions">
            Login
        </Link>

      </div>
    </div>
  )
}
