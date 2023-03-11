import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
export default function ActualityItem( { created, title,isResolved, likeCount } ) {
  return (
    (
      <div className="actuality-items">
        <img src={avatar} alt="" className='pdp' />
        <div className="detail-post">
          <div className="head-post">
            <div className="name">{} {}</div>
            <div className="date"> {created} </div>
          </div>
          <div className="detail">
            <div className="tittle"> {title} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non résolue)</div>}</div>
            <div className="post"> {content}</div>
            <div className="replay">
            <div className="btn-like">
                J'aime : {likeCount}
              </div>
              <div className="btn-singal">
                Singaler
              </div>
              <NavLink to={`/questions/question/${_id}`}>
                <div className="answer">Réponses : {}</div>
              </NavLink>
              <NavLink to={`/actuality/replay/${_id}`}>
                <div className="replay-post">
                  <div className="icon-replay" />
                  Répondre
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  )
}