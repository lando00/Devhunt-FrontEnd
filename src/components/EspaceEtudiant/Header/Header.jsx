import React from 'react';
import './Header.scss';
import logoAeeni from '../../../assets/Logo/aeeniLogo.png';
import avatar from '../../../assets/avatars/face-1.jpg'

export default function Header() {
  return (
    <div className='header'>
      <img className='logo-aeeni' src={logoAeeni} alt="logo aeeni" />
        <div className="search">
          <i className='fab fa-sistrix icon-search'></i>
          <input type="text" placeholder='Recherche...' />
        </div>
        <div className="user-info">
          <div className="notif" />
          <img src={avatar} alt="image avatar" />
          <div className="name">Team Const</div>
        </div>
    </div>
  )
}
