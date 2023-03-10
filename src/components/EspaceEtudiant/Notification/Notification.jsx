import React, { useState } from 'react'
import './Notification.scss'
import { NavLink , Outlet } from 'react-router-dom'

export default function Notification() {

  return (
    <div className='notification'>
      <div className="head-notification">
        <NavLink className='item-nav-notification' to="./all">Tous</NavLink>
        <NavLink className='item-nav-notification' to="./questions">Questions</NavLink>
        <NavLink className='item-nav-notification' to="./video">Vid&eacute;os</NavLink>
      </div>
        <Outlet />
    </div>
  )
}
