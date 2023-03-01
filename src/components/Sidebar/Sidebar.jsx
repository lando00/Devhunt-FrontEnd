import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import iconSettings from '../../assets/icon/settings.svg'
import iconLogo from '../../assets/icon/logo.svg'
import iconArrow from '../../assets/icon/arrow.svg'

export default function Sidebar() {

  const [indexSelected, setIndexSelected] = useState(1);
  const sousMenuRef = useRef(null);

  const showSousMenu = () => {
      sousMenuRef.current.classList.toggle('show');
  }

  const hiddenSousMenu = () => {
    sousMenuRef.current.classList.remove('show')
  }

  return (
    <div className='sidebar'>
        <div className="logo">
          <img src={iconLogo} alt="" />
        </div>
      <ul className='menu'>
        <li className='item' onClick={hiddenSousMenu}>
          <Link to="/app/dashboard" id="1" className={indexSelected == "1" && 'link-active'} onClick={(e) => {setIndexSelected(e.target.id)}}>
            <i className='fa fa-home icon'></i>
            Dashboard
          </Link>
        </li>
        
        <li className='item' onClick={showSousMenu}>
            <a href='#' id="2" className={indexSelected == "2" && 'link-active'} onClick={(e) =>       {setIndexSelected(e.target.id)}}>  
              <i className='fa fa-users icon' />
              Users
              <img src={iconArrow} alt="" className='icon-arrow'/>
            </a> 
            <ul className='sous-menu' ref={sousMenuRef}>
              <li className='item'>
                <Link to="/app/users/listUsers">List User</Link>
              </li>
              <li className='item'>
                <Link to="/app/users/addUser">Add User</Link>
              </li>
            </ul>
        </li>

        <li className='item' onClick={hiddenSousMenu}>
          <Link to="/app/products" id="3" className={indexSelected == "3" && 'link-active'} onClick={(e) => {setIndexSelected(e.target.id)}}>
            <i className='fa fa-shopping-cart icon' />
            Products
          </Link>
        </li>

        <li className='item' onClick={hiddenSousMenu}>
          <Link to="/app/tables" id="4" className={indexSelected == "4" && 'link-active'} onClick={(e) => {setIndexSelected(e.target.id)}}>
          <i className='fa fa-table icon' />
            Tables
          </Link>
        </li>

        <li className='item' onClick={hiddenSousMenu}>
          <Link to="/app/settings" id="5" className={indexSelected == "5" && 'link-active'} onClick={(e) => {setIndexSelected(e.target.id)}}>
          <img src={iconSettings} className='icon' alt="" />
            Settings
          </Link>
        </li>

      </ul>
    </div>
  )
}
