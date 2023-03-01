import React from 'react'
import './DashboardContainer.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardContainer() {
  return (
    <div className='dashboardContainer'>
        <Sidebar />
        <div className="container">
            <Header />
            <div className="section">
                <Outlet />
            </div>
        </div>
    </div>
  )
}
