import React from 'react'
import './Header.scss'

export default function Header({hideNav}) {
  const none = 'none';
  return (
    <header>
      <div className="head-left">
        <div className="icon icon-menu" onClick={() => hideNav(none)} />
        <div className="input">
          <div className="icon icon-search" />
          <input type="text" placeholder='Recherche...' className='search' />
        </div>
      </div>
      <div className="rigth">
        <div className="icon icon-notif" />
        <div className="icon icon-sun" />
        <div className="user-connected">
          <div className="icon icon-avatar" />
          <div className="info-user">
            <span className='nom'>John Doe</span>
          </div>
          <div className="icon icon-arrow"></div>
        </div>
      </div>
    </header>
  )
}
