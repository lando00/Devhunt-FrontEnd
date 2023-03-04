import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>
            <Link to="/actuality">
                <i className='fa fa-home icon'></i>
                <span>Actualités</span>
            </Link>
        </li>
        <li>
            <Link to="/notifications">
                <i className="fa fa-bell icon"></i>
                <span>Notifications</span>
            </Link>
        </li>
        <li>
            <Link to="/questions">
                <i className='fas fa-question icon'></i>
                <span>Questions</span>
            </Link>
        </li>
        <li>
            <Link to="/answers">
                <i className='fas fa-question icon'></i>
                <span>Réponses</span>
            </Link>
        </li>
        <li>
            <Link to="/profil">
                <i className='fas fa-user icon'></i>
                <span>Profil</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}
