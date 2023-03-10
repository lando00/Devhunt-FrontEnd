import React, { useState } from 'react'
import { useParams } from 'react-router'
import './Response.scss'
import { questions , respons } from '../../../../data/questions'
import avatar from '../../../../assets/avatars/face-4.jpg'
export default function Response() {
  const { idPost } = useParams()
  const post = questions.find(({ id }) => id === idPost)
  const allRespons = respons.filter(({id_q})=> id_q ===idPost )
  return (
    <div className='response'>
      {post && (<div className="actuality-item">
        <img src={avatar} alt="" className='pdp' />
        <div className="detail-post">
          <div className="head-post">
            <div className="name"> {post.name} {post.lasteName}</div>
            <div className="date"> {post.date} </div>
          </div>
          <div className="detail">
            <div className="tittle"> {post.tittle} {post.isResolved ? <div className="resolved">Résolue</div> : <div className="unresolved">(Non Resolue)</div>}</div>
            <div className="post"> {post.post}</div>
          </div>
        </div>
      </div>)}
      <div className="all-response">
        {
          allRespons.map(({ date, isResolved, name, lasteName, post , id}) =>
          (<div key={id} className="actuality-item">
            <img src={avatar} alt="" className='pdp' />
            <div className="detail-post">
              <div className="head-post">
                <div className="name"> {name} {lasteName}</div>
                <div className="date"> {date} </div>
              </div>
              <div className="detail">
                <div className="tittle">{isResolved && <div className="icon-done"/>}</div>
                <div className="post"> {post}</div>
              </div>
              <div className="replay-post-single">
                <div className="icon-replay"/>
                Repondre
              </div>
            </div>
          </div>))
        }
      </div>
    </div>
  )
}
