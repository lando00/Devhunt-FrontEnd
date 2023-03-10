import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
export default function Actuality() {

  return (
    <div className='actuality'>
      <div className="head-actuality">
        <NavLink className='item-nav-actuality' to="./recentQuestions">Questions récentes</NavLink>
        <NavLink className='item-nav-actuality' to="./popularQuestions">Populaires</NavLink>
        <NavLink className='item-nav-actuality' to="./MostViewQuestions">Plus visitées</NavLink>
      </div>
      <Outlet />
    </div>
  )
}