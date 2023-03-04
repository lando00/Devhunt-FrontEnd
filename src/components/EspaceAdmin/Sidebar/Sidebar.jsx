import React, { useState, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Sidebar.scss'
import iconSettings from '../../assets/icon/settings.svg'

export default function Sidebar() {

  const [indexSelected, setIndexSelected] = useState(1);
  const sousMenuRef = useRef(null);

  const showSousMenu = () => {
    sousMenuRef.current.classList.toggle('show');
  }

  const hiddenSousMenu = () => {
    sousMenuRef.current.classList.remove('show')
  }

  return (
    <div className='sidebar'>
      <div className="logo" />
      <div className='menu'>
        <NavLink to="/app/dashboard" className="item" onClick={hiddenSousMenu} >
          <i className='fa fa-home icon'></i>
          Dashboard
        </NavLink>
        <div className='btn-sous-menu item' onClick={showSousMenu}>
          <div className="btn-containe">
            <i className='fa fa-users icon' />
            <div className="txt">Users</div>
            <div className="icon-arrow" />
          </div>
          <div className='sous-menu' ref={sousMenuRef}>
            <NavLink  to="/app/users/listUsers" className="item">
              <i className='fa fa-users icon' />
              List User
            </NavLink>
            <NavLink to="/app/users/addUser" className="item">
              <i className='fa fa-users icon' />
              Add User
            </NavLink>
          </div>
        </div>
        <NavLink to="/app/products" className="item" onClick={hiddenSousMenu}>
          <i className='fa fa-shopping-cart icon' />
          Products
        </NavLink>
        <NavLink to="/app/tables" className="item" onClick={hiddenSousMenu}>
          <i className='fa fa-table icon' />
          Tables
        </NavLink>
        <NavLink to="/app/settings" className="item" onClick={hiddenSousMenu}>
          <img src={iconSettings} className='icon' alt="" />
          Settings
        </NavLink>
      </div>
    </div>
  )
}
