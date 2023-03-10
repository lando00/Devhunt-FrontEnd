import React, { useState } from 'react'
import "./Question.scss"
import { NavLink , Outlet } from 'react-router-dom'
export default function Question() {

  return (
    <div className='question-nav'>
      <div className="head-actuality">
        <NavLink to='./newQuestion' className='item-nav-question'>
          Nouvelle question
        </NavLink>
        <NavLink to='./myQuestion'className='item-nav-question'>
          Mes Questions
        </NavLink>
        <NavLink to="./questionResolve" className="item-nav-question">
          Questions r&eacute;solues
        </NavLink>
        <NavLink to="./questionUnresolve" className="item-nav-question">
          Questions non r&eacute;solues
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
