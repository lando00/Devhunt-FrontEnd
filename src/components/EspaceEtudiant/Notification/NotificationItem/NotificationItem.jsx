import React from 'react'
import avatar from '../../../../assets/avatars/face-7.jpg'

export default function Notification({ notifications }) {
  return (
    <div className='notification-containe'>
    {
      notifications.map(({ _id, title, content }) => {
        return (
          <div key={_id} className="notif">
            <img src={avatar} alt="" className='img'/>
            <div className="messg">
              <div className="name">{title}</div>
              <div className="action">{content}</div>
            </div>
          </div>
        )
      })
    }
  </div>
  )
}
