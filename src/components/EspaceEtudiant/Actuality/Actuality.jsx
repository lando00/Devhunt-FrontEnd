import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
export default function Actuality() {
  const getOutet = <Outlet />;
  const change = () => {
    const vu = getOutet ? 'ok' : 'ko'
    console.log(vu, getOutet)
  }
  const vu = getOutet ? 'ok' : 'ko'
  console.log(getOutet , vu);
  return (
    <div className='actuality'>
      <div className="head-actuality">
        <NavLink onClick={change} className='item-nav-actuality' to="./recentQuestions">Question Recente</NavLink>
        <NavLink className='item-nav-actuality' to="./popularQuestions">Populaires</NavLink>
        <NavLink className='item-nav-actuality' to="./MostViewQuestions">Plus visitées</NavLink>
      </div>
      <Outlet />
    </div>
  )
}