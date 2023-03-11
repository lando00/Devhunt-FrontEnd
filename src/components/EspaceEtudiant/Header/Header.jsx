import React, { useEffect, useState } from 'react';
import './Header.scss';
// import logoAeeni from '../../../assets/Logo/aeeniLogo.png';
import avatar from '../../../assets/avatars/face-1.jpg'
import axios from 'axios';

export default function Header() {

  const idStudent = JSON.parse(localStorage.getItem('user'))

  const [student, setStudent] = useState({})

  useEffect(()=>{
    const getStudent = async (idStudent) =>{
      const response = await axios.get(`/devHunt2/students/${idStudent}`)
      const res = response.data.data
      setStudent(res)
    }
    getStudent(idStudent)
  },[])

  return (
    <div className='header'>
      <div className="name-platforme">ENIFanampy</div>
      {/* <img className='logo-aeeni' src={logoAeeni} alt="logo aeeni" /> */}
      <div className="search">
        <i className='fab fa-sistrix icon-search'></i>
        <input type="text" placeholder='Recherche...' />
      </div>
      <div className="user-info">
        
        <img src={avatar} alt="image avatar" />
        <div className="detail-user">
          <div className="detail">{student.name}</div>
          <div className="level">{student.secondName}</div>
        </div>
      </div>
    </div>
  )
}
