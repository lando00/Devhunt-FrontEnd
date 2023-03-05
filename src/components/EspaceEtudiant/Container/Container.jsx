import React from 'react'
import './Container.scss'
import Header from '../Header/Header'
import SidebarLeft from '../SidebarLeft/SidebarLeft'
import SidebarRight from '../SidebarRight/SidebarRight'
import Section from '../Section/Section'

export default function Container() {

  return (
    <div className='container'>
      <Header />
      <div className="contain">
        <SidebarLeft />
        <Section />
        <SidebarRight />
      </div>
    </div>
  )
}
