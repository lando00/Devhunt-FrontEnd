import React, { useState } from 'react'
import "./Question.scss"
import { NavLink , Outlet } from 'react-router-dom'
export default function Question() {

  return (
    <div className='question-nav'>
      <div className="head-actuality">
        <NavLink to='./newQuestion' className='item-nav-question'>
          Nouvelle Question
        </NavLink>
        <NavLink to='./myQuestion'className='item-nav-question'>
          Mes Question
        </NavLink>
        <NavLink to="./questionResolve" className="item-nav-question">
          Question Resolue
        </NavLink>
        <NavLink to="./questionUnresolve" className="item-nav-question">
          Question non Resolue
        </NavLink>
      </div>
      <div className="containe-actuality">
      <Outlet />
      </div>
    </div>
  )
}
