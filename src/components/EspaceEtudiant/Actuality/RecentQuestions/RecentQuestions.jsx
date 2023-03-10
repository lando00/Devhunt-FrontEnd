import React, { useState } from 'react'
import avatar from '../../../../assets/avatars/face-4.jpg'
import { NavLink } from 'react-router-dom'
import {questions} from '../../../../data/questions'
import ActualityItem from '../ActualityItem/ActualityItem'

export default function RecentQuestions() {
  const [user, setUser] = useState(questions);

  const Actu = user.map(({ nbrResponse, isResolved, name, tittle, post, lasteName, date, id }, index) => (
    <div key={index} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non resolue)</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <NavLink to={`/questions/question/${index}`}>
              <div className="answer">Reponse : {nbrResponse}</div>
            </NavLink>
            <NavLink to={`/actuality/replay/${id}`}>
              <div className="replay-post">
                <div className="icon-replay" />
                Repondre
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>))
  return (
    <div className='containe-actuality'>
      <ActualityItem actuality={questions}></ActualityItem>
    </div>
  )
}
