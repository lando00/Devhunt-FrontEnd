import React from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>
          <NavLink to="/actuality">
            <i className='fa fa-home icon'></i>
            <span>Actualités</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <i className="fa fa-bell icon"></i>
            <span>Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/questions">
            <i className='fas fa-question icon'></i>
            <span>Questions</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/answers">
            <i className='fas fa-question icon'></i>
            <span>Réponses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profil">
            <i className='fas fa-user icon'></i>
            <span>Profil</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
