import React, { useState } from 'react'
import './Notification.scss'

export default function Notification() {

  const [notifications, setNotif] = useState([
    {name: 'Jean Polo', action: 'a aimé votre publication'},
    {name: 'Rigo', action: 'a repondu votre question'},
    {name: 'Marthin', action: 'est actuellement en direct'},
    {name: 'MIcKAEL', action: 'is pangalabadinolo '},
    {name: 'Angelo', action: 'a publié un question'},
    {name: 'eren Ymir', action: 'a besoin d\'aide sur react'},
    {name: 'eren Ymir', action: 'a besoin d\'aide sur react'},
    {name: 'eren Ymir', action: 'a besoin d\'aide sur react'},
    {name: 'Marc', action: 'a aimé votre publication'}
  ])

  return (
    <div className='Notification'>
      {
        notifications.map(({name , action }, index) => {
          return (
            <div key={index} className="notif">
              <div className="image"></div>
              <div className="messg">
                <div className="name">{name}</div>
                <div className="action">{action}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
