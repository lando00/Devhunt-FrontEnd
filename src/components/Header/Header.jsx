import React from 'react'
import './Header.css'
import iconMenu from '../../assets/icon/menu.svg'
import iconSearch from '../../assets/icon/search.svg'
import iconSun from '../../assets/icon/sun.svg'
import iconNotif from '../../assets/icon/notification.svg'
import avatar from '../../assets/avatar.png'
import arrow from '../../assets/icon/arrow.svg'


export default function Header() {
  return (
    <header>
      <img src={iconMenu} alt="" className='icon iconMenu '/>
      <img src={iconSearch} alt="" className='icon iconSearch input'/>
      <input type="text" placeholder='Recherche...' className='search'/>
      <img src={iconSun} alt="" className='icon'/>
      <img src={iconNotif} alt="" className='icon'/>
      <div className="user-connected">
        <img src={avatar} alt="" className='icon-avatar'/>
        <div className="info-user">
          <span className='nom'>John Doe</span>
        </div>
        <img src={arrow} alt="" className='icon-arrow'/>
      </div>
    </header>
  )
}
