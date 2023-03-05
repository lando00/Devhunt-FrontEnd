import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
export default function Actuality() {
  

  return (
    <div className='actuality'>
      <div className="head-actuality">
        <div className="item item-active">
          <NavLink to="/actuality/recentQuestions">Question Recente</NavLink>
        </div>
        <div className="item">
          <NavLink to="/actuality/popularQuestions">Populaires</NavLink> 
        </div>
        <div className="item">
          <NavLink to="/actuality/MostViewQuestions">Plus visitées</NavLink>
        </div>
      </div>
      <div className="containe-actuality">
        <Outlet />
      </div>
    </div>
  )
}
