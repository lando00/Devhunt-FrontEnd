import React from 'react'
import avatar from '../../../../assets/avatars/face-7.jpg'

export default function Notification({notification}) {
  return (
    <div className='notification-containe'>
    {
      notification.map(({ name, action }, index) => {
        return (
          <div key={index} className="notif">
            <img src={avatar} alt="" className='img'/>
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
