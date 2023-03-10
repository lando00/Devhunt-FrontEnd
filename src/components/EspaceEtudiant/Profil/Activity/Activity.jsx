import React from 'react'
import { users, post } from '../../../../data/questions'
import './Activity.scss'
export default function Activity() {
  const user = users.find(({ serealNumber }) => serealNumber === '2199')
  const numberPost = post.filter(({ id_s }) => id_s === '2199')
  return (
    <div className='profil-item-activity'>
      {
        user ? <div className="question-activity">
          <div className="item">
            <div className="txt-level">Grade</div>
            <span>{user.level}</span>
          </div>          
          <div className="item">
            <div className="txt-question">Question</div>
            <span>{numberPost.length}</span>
          </div>
          <div className="item">
            <div className="txt-answer">Reponse</div>
            <span>{numberPost.length}</span>
          </div>
        </div> : <div className="question-activity">
          <div className="item">
            <div className="txt-question">Question</div>
            <span>0</span>
          </div>
          <div className="item">
            <div className="txt-answer">Reponse</div>
            <span>0</span>
          </div>
        </div>
      }
    </div>
  )
}
