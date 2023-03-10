import React, { useState } from 'react'
import { useParams } from 'react-router'
import './Replay.scss'
import avatar from '../../../../assets/avatars/face-5.jpg'
import { v4 as uuidv4 } from 'uuid';
import {respons, questions} from '../../../../data/questions'


export default function Replay() {

  const {idPost} = useParams();

  const post = questions.find(post => post.id === idPost);
  
  const [reponses, setReponses] = useState(respons);
  const [comment, setComment] = useState({
    name : 'John',
    lasteName : 'Doe',
    date : '10 mai 2022',
    post : '',
  });

  const [showFormReponses, setShowFormReponses] = useState(false); 

  const handleChangeInput = (e) => {
      setComment(state => {
        return {
          ...state,
          post : e.target.value
        }
      })
  }

  const onAddReplay = (e) => {
      e.preventDefault();
      setReponses(state => {
        return [
          comment,
          ...state
        ]
      })
      setComment(state => {
        return {
          ...state,
          post : '',
        }
      })
  }

  const formReponseComment = (

    <form className="add-replay" onSubmit={(e) => { onAddReplay(e) }}>
        <div className="txt-btn">
          <textarea className='textareaReplay' name="" id="" cols="30" rows="10" onChange={(e)=>{handleChangeInput(e)}} value={comment.post}></textarea>
          <button type='submit' className='btn-post'>Repondre</button>
        </div>
    </form>

  )

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
            <div className="tittle"> <h2>{post.tittle}</h2> {post.isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved">(Non Resolue)</div>}</div>
            <div className="post"> {post.post}</div>
          </div>
        </div>
      </div>)}
      <div className="all-response">
        <form className="add-replay" onSubmit={(e) => { onAddReplay(e) }}>
          <label htmlFor="">Votre réponse</label>
          <div className="txt-btn">
            <textarea className='textareaReplay' name="" id="" cols="30" rows="10" onChange={(e)=>{handleChangeInput(e)}} value={comment.post}></textarea>
            <button type='submit' className='btn-post'>Commenter</button>
          </div>
        </form>
        <h2>Tous les réponses</h2>
        {
          reponses.map(({ date, isResolved, name, lasteName, post }, index) =>
          (<div key={index} className="actuality-item">
            <img src={avatar} alt="" className='pdp' />
            <div className="detail-post">
              <div className="head-post">
                <div className="name"> {name} {lasteName}</div>
                <div className="date"> {date} </div>
              </div>
              <div className="detail">
                <div className="post"> {post}</div>
              </div>
               
              <div key={index} className="actuality-item reponses">
                <img src={avatar} alt="" className='pdp' />
                <div className="detail-post">
                  <div className="head-post">
                    <div className="name"> {name} {lasteName}</div>
                    <div className="date"> {date} </div>
                  </div>
                  <div className="detail">
                    <div className="post"> {post}</div>
                  </div>
                </div>
              </div>

              {showFormReponses && formReponseComment}

              <div className="replay-post-single">
                <div className="icon-replay" />
                Repondre
              </div>
              

            </div>
            
          </div>))
        }
      </div>
    </div>
  )
}
