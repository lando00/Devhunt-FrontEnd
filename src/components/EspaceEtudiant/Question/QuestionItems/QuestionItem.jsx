import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
export default function QuestionItem({questions}) {
  const post = questions.map(({ nbrResponse, isResolved, name, tittle, post, lasteName, date , id}) => (
    <div key={id} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Nom Resolue)</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <NavLink to={`/questions/question/${id}`}>
              <div className="answer">Reponse : {nbrResponse}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>))
  return (
    <div className='QuestionItem'>
      {post }
    </div>
  )
}
