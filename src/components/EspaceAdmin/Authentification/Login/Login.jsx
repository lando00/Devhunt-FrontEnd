import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login() {

  const [serialNumber, setSerialNumber] = useState();
  const [passWord, setPassWord] = useState();
  const [userId, setUserId] = useState()
  const [token, setToken] = useState()
  const [auth, setAuth] = useState(false)

  const navigate = useNavigate();

  const login = async (event) =>{
    event.preventDefault();
    const response = await axios.post('/devHunt2/login', {
      serialNumber,
      passWord
    })
    setUserId(response.data.data.student._id)
    setToken(response.data.data.authToken)
    setAuth(true)
  }

  useEffect(() => {
    console.log(userId)
    localStorage.setItem('user', JSON.stringify(userId))
    localStorage.setItem('token', JSON.stringify(token))
  }, [userId, token])

  useEffect(() => {
    if(auth){
      navigate('/actuality')
    }
  },[auth])

  return (
      <div className='loginContainer'>
        <div className="login">
          <h1>Welcome ! 👋</h1>
          <label className='label' htmlFor='serialNumber'>Num&eacute;ro matricule</label>
          <input type="text" placeholder="Numéro d'inscription" id='serialNumber' onChange={(e) => setSerialNumber(e.target.value)}/>
          <label className='label' htmlFor='passWord'>Mot de passe</label>
          <input type="password" placeholder='**********' id='passWord' onChange={(e) => setPassWord(e.target.value)} />
          <p className='remember'>
            <input type="checkbox" id='remember' />
            <label htmlFor="remember">Se souvient de moi</label>
            <span>Mot de passe oublié?</span>
          </p>

          <button onClick={login}>
              Login
          </button>

        </div>
      </div>
  )
}
