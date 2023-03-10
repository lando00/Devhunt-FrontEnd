import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login() {

  const [serialNumber, setSerialNumber] = useState();
  const [passWord, setPassWord] = useState();
  const [user, setUser] = useState({
    student: {},
    authToken: ''
  })

  const navigate = useNavigate();

  // const login = async () => {
  //   axios
  //     .post("/devHunt2/login", {
  //       serialNumber,
  //       passWord
  //     })
  //     .then(response => {
  //       const authenticated = response.data.data
  //       authentication(authenticated);
  //       // navigate('/actuality')
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const login = async (event) =>{
    event.preventDefault();
    const response = await axios.post('/devHunt2/login', {
      serialNumber,
      passWord
    })
    setUser(user =>({
      ...user,
      ...response.data.data
    }))
  }

  useEffect(() => {
    console.log(user)
  }, [user])

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
