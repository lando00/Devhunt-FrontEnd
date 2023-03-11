import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
import { onLike } from '../../../../data/function'

export default function QuestionItem({ questions }) {
  const [increment, setIncrement] = useState(false)
  const [like, setLike] = useState(12)
  const likeColor = useRef(null)

    const onlikes = () => {
      setIncrement(!increment)
      if(increment){
        likeColor.current.classList.add('liked');
      }
      else{
        likeColor.current.classList.remove('liked');
      }
      setLike(onLike(like, increment))
      console.log(likeColor)
    }
  const post = questions.map(({ _id, content, created, isResolved, likeCount, title }) => (
    <div key={_id} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          {/* <div className="name">{lasteName} {name}</div> */}
          <div className="date"> {created} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {title} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non résolue)</div>}</div>
          <div className="post"> {content} </div>
          <div className="replay">
            <div onClick={onlikes} className="btn-like" ref={likeColor}>
              J'aime : {like}
            </div>
            <NavLink to={`/questions/question/${_id}`}>
              <div className="answer">Réponse(s) :  </div>
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
