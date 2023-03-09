import React, { useState } from 'react'
import { useParams } from 'react-router'
import './Response.scss'
import { questions , respons } from '../../../../data/questions'
import avatar from '../../../../assets/avatars/face-4.jpg'
import QuestionItem from '../QuestionItems/QuestionItem'
export default function Response() {
  const { idPost } = useParams()
  const post = questions.find(({ id }) => id === idPost);

  return (
    <div className='response'>
      {post &&<QuestionItem questions={post}></QuestionItem>}
      <div className="all-response">
        {
          respons.map(({ date, isResolved, name, lasteName, post }, index) =>
          (<div key={index} className="actuality-item">
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
