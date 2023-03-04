import React from 'react';
import './Menu.scss';

export default function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>
            <a href="#">
                <i className='fa fa-home icon'></i>
                <span>Actualités</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="fa fa-bell icon"></i>
                <span>Notifications</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className='fas fa-question icon'></i>
                <span>Questions</span>
            </a>
        </li>
        <li>
            <a href="#"><i className='fas fa-question icon'></i>
                <span>Réponses</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className='fas fa-user icon'></i>
                <span>Profil</span>
            </a>
        </li>
      </ul>
    </div>
  )
}
