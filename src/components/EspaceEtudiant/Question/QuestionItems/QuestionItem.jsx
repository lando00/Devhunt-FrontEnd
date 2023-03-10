import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
export default function QuestionItem({question}) {
  return (
    <div className='QuestionItem'>

      <div key={question.id} className="actuality-item">

        <img src={avatar} alt="" className='pdp' />
        
        <div className="detail-post">
          <div className="head-post">
            <div className="name">{lasteName} {name}</div>
            <div className="date"> {date} </div>
          </div>
          
          <div className="detail">
            <div className="tittle"> {tittle} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non résolue)</div>}</div>
            <div className="post"> {post}</div>
            <div className="replay">
              <NavLink to={`/questions/question/${id}`}>
                <div className="answer">Reponse : {nbrResponse}</div>
              </NavLink>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
