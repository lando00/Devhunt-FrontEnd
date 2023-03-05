import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
export default function Actuality() {
  const change = ()=>{
    const getOutet = <Outlet />;
    const vu = getOutet.key ? 'ok' : 'ko'
    console.log(vu , getOutet)
  }
  return (
    <div className='actuality'>
      <div className="head-actuality">
        <div className="item">
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