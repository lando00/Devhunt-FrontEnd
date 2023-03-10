import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'


export default function QuestionItem({ questions }) {
  const onLike = () => {
    const like = document.getElementsByClassName('btn-like')
    console.log(like)
  }

  const post = questions.map(({ _id, content, created, isResolved, likeCount, title }) => (
    <div key={_id} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          {/* <div className="name">{lasteName} {name}</div> */}
          <div className="date"> {created.toLocaleDateString()} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {title} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non résolue)</div>}</div>
          <div className="post"> {content} </div>
          <div className="replay">
            <div onClick={onLike} className="btn-like">
              J'aime : {likeCount}
            </div>
            <NavLink to={`/questions/question/${_id}`}>
              <div className="answer">Réponse(s) : </div>
            </NavLink> 
          </div>
        </div>
      </div>
    </div>))

  return (
    <div className='QuestionItem'>
      {post}
    </div>
  )
}
