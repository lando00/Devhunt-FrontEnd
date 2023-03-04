import React from 'react'
import './Section.scss'
import { Outlet } from 'react-router'
export default function Section() {
  return (
    <div className='section'>
      <Outlet />
    </div>
  )
}
