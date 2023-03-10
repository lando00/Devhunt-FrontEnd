import React, { useState } from 'react'
import './Answer.scss'
import { NavLink, Outlet } from 'react-router-dom'


export default function Answer() {

  return (
    
    <div className='actuality'>
      <div className="head-actuality">
        <NavLink className='item-nav-actuality' to="./liveEnCours">En cours</NavLink>
        <NavLink className='item-nav-actuality' to="./liveAvenir">A venir</NavLink>
        <NavLink className='item-nav-actuality' to="./liveTerminer">Terminer</NavLink>
      </div>
      <Outlet />
    </div>

  )
}
