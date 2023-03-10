import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './Replay.scss'
import avatar from '../../../../assets/avatars/face-5.jpg'
import { v4 as uuidv4 } from 'uuid';
import { respons, questions, commentRespons } from '../../../../data/questions'

export default function Replay() {

  const { idPost } = useParams();
  const [commentRespon, setCommentRespos] = useState(
    [{
      id_respons: '',
      repons: '',
      name: '',
      lasteName: ""
    }]
  )

  const post = questions.find(post => post.id === idPost);

  const commentPost = respons.filter(({ id_q }) => id_q === post.id);
 
  const [replay, setReplay] = useState({
    id: "",
    nbrResponse: 0,
    tittle: "",
    isResolved: "",
    name: '',
    lasteName: "",
    post: "",
    date: ''
  })

  const [showFormReponses, setShowFormReponses] = useState(false);
  const [reponses, setReponses] = useState(respons);
  const [comment, setComment] = useState({
    name: 'John',
    lasteName: 'Doe',
    date: '10 mai 2022',
    post: '',
  });
  
  
  const ShowFormReponses = (id_replay) => {
    setReplay(reponses.find(({ id }) => id === id_replay));
    setShowFormReponses(true);
  }
  const handleChangeInput = (e) => {
    setComment(state => {
      return {
        ...state,
        post: e.target.value
      }
    })
  }

  const onAddReplay = (e) => {
    //   let v = {
    //     id: "efad3",
    //     id_q : 'ggg',
    //     nbrResponse: 10,
    //     tittle: "TITEYT",
    //     isResolved: true,
    //     name: 'Name',
    //     lasteName: "Laste",
    //     post: "Post",
    //     date: 'Date'
    //   }
    //  let y =  respons.find(({id})=> id === v.id);
    //  if(!y) respons.push(v);
    //   console.log(respons);
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
        post: '',
      }
    })
  }
  const onAddReplayComment = (e) => {
    //   let v = {
    //     id: "efad3",
    //     id_q : 'ggg',
    //     nbrResponse: 10,
    //     tittle: "TITEYT",
    //     isResolved: true,
    //     name: 'Name',
    //     lasteName: "Laste",
    //     post: "Post",
    //     date: 'Date'
    //   }
    //  let y =  respons.find(({id})=> id === v.id);
    //  if(!y) respons.push(v);
    //   console.log(respons);
    e.preventDefault();
    console.log(comment)
  }
  const formComment = (
    <form className="add-replay" onSubmit={(e) => { onAddReplayComment(e) }}>
      <div className="txt-btn">
        <textarea className='textareaReplay' name="" id="" cols="5" rows="5" onChange={(e) => { handleChangeInput(e) }} value={comment.post}></textarea>
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
          <label htmlFor="">Votre reponse</label>
          <div className="txt-btn">
            <textarea className='textareaReplay' name="" id="" cols="30" rows="8" onChange={(e) => { handleChangeInput(e) }} value={comment.post}></textarea>
            <button type='submit' className='btn-post'>Commenter</button>
          </div>
        </form>
        <h2>Tous les reponse</h2>
        {
          commentPost.map(({ date, isResolved, name, lasteName, post, id }) =>
          (<div key={id} className="actuality-item">
            <img src={avatar} alt="" className='pdp' />
            <div className="detail-post">
              <div className="head-post">
                <div className="name"> {name} {lasteName}</div>
                <div className="date"> {date} </div>
              </div>
              <div className="detail">
                <div className="post"> {post}</div>
              </div>
              {replay.id !== id  &&
                (<div className="replay-post-single">
                  <button type='button' onClick={() => { ShowFormReponses(id) }}>
                    <i className="fas fa-reply icon-replay"></i>
                    Repondre
                  </button>
                </div>)
              }
              {useEffect(() => {
                setCommentRespos(commentRespons.filter(({ id_respons }) => id_respons === id))
              }, [])}
              {commentRespon && commentRespon.map(({ name, lasteName, repons }) => (
                <div key={id} className="actuality-item reponses">
                  <img src={avatar} alt="" className='pdp' />
                  <div className="detail-post">
                    <div className="head-post">
                      <div className="name"> {name} {lasteName}</div>
                      {/* <div className="date"> {date} </div> */}
                    </div>
                    <div className="detail">
                      <div className="post"> {repons}</div>
                    </div>
                  </div>
                </div>
              ))}
              {replay.id === id && showFormReponses && formComment}
            </div>
          </div>))
        }
      </div>
    </div>
  )
}
