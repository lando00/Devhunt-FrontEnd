import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './Profil.scss'
export default function Profil() {
  return (
    <div className='profil'>
      <div className="head-profil">
        <NavLink className='item-nav-profil' to='./activity'>Activité</NavLink>
        <NavLink className='item-nav-profil' to='./setting'>Paramétre</NavLink>
        <NavLink className='item-nav-profil' to='./summary'>Resumé</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
