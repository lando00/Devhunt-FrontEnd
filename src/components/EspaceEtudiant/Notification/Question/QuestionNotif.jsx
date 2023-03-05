import React, { useState } from 'react'

export default function Question() {
  const [notifications, setNotif] = useState([
    { name: 'Jean Polo', action: 'a aimé votre publication', id: 'video' },
    { name: 'Rigo', action: 'a repondu votre question', id: 'question' },
    { name: 'Marthin', action: 'est actuellement en direct', id: 'video' },
    { name: 'MIcKAEL', action: 'is pangalabadinolo ' },
    { name: 'Angelo', action: 'a publié un question' },
    { name: 'eren Ymir', action: 'a besoin d\'aide sur react', id: 'question' },
    { name: 'eren Ymir', action: 'a besoin d\'aide sur react' },
    { name: 'eren Ymir', action: 'a besoin d\'aide sur react' },
    { name: 'Marc', action: 'a aimé votre publication', id: 'question' }
  ])
  const notif = notifications.filter(({ id }) => id === 'question')
  return (
    <div className='notification-containe'>
      {
        notif.map(({ name, action }, index) => {
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
