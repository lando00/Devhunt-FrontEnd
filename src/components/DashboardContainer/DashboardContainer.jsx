import React, { useRef } from 'react'
import './DashboardContainer.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function DashboardContainer() {
  const hideSidebar = useRef(null)
  const [hide , setHide] = useState(true)
  const hideNav = ( none )=>{
    setHide(!hide)
    if(hide){
      hideSidebar.current.style.display = none;
    }
    else hideSidebar.current.style.display = 'flex'
  }
  return (
    <div className='dashboardContainer'>
      <div className="side" ref={hideSidebar}>
        <Sidebar />
      </div>
        <div  className="container">
            <Header hideNav={hideNav}/>
            <div className="section">
                <Outlet />
            </div>
        </div>
    </div>
  )
}
