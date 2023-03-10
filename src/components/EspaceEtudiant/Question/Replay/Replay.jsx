import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './Replay.scss'
import avatar from '../../../../assets/avatars/face-5.jpg'
import { v4 as uuidv4 } from 'uuid';
import { respons, questions, commentRespons } from '../../../../data/AllData'

export default function Replay() {

  const [showFormReponses, setShowFormReponses] = useState(false)
  const [reponses, setReponses] = useState(respons)
  const { idPost } = useParams();
  const [replayPost , setReplayPost] = useState(
    {
      id: "",
      nbrResponse: 0,
      tittle: "",
      isResolved: "",
      name: '',
      lasteName: "",
      post: "",
      date: ''

    }
  )
  const [replayPostRespons , setReplayPostRespons] = useState(
    {
      id : '',
      id_respons : '',
      respons : '',
      name : '',
      lasteName : '',
      // date : ''
    }
  )
  const [commentRespon, setCommentRespos] = useState(
    [{
      id_respons: '',
      repons: '',
      name: '',
      lasteName: ""
    }]
  )
 
  const [replayPEZZ, setReplay] = useState({
    id: "",
    nbrResponse: 0,
    tittle: "",
    isResolved: "",
    name: '',
    lasteName: "",
    post: "",
    date: ''
  })

  const [comment, setComment] = useState({
    name: 'John',
    lasteName: 'Doe',
    date: '10 mai 2022',
    post: '',
  });
  const post = questions.find(post => post.id === idPost);

  const commentPost = respons.filter(({ id_q }) => id_q === post.id);
  
  const ShowFormReponses = (id_replay) => {
    setReplay(reponses.find(({ id }) => id === id_replay));
    setShowFormReponses(true);
  }
  const handleChangeInput = (e) => {
    setReplayPost(() =>{
      return {
        id : uuidv4(),
        nbrResponse: 0,
        tittle: "",
        id_post : post.id,
        isResolved : false ,
        name : 'Ludo',
        post : e.target.value,
        lasteName : 'Andria',
        date : '10 mars 2023',
        // name: '',
        // isResolved: "",
        // date: ''
        // post: "",
        // lasteName: "",
      }
    })
    setReplayPostRespons(state =>{
      return{
        id_respons : '',
        post : e.target.value,
        name : 'Team',
        lasteName : 'Const'
      }
    })
    setComment(state => {
      return {
        ...state,
        post: e.target.value
      }
    })
  }

  const onAddReplay = (e) => {
    e.preventDefault();
    replayPost.id  = uuidv4()
    if(replayPost.post !== ''){
      console.log(respons)
      respons.push(replayPost);
    }
    setReplayPost(state =>{
      return {
        id : '',
        id_post : '',
        post : '',
        name : '',
        lasteName : '',
        isResolved : false ,
        date : ''
      }
    })
  }
  const onAddReplayComment = (e) => {
    e.preventDefault();
    replayPostRespons.id  = uuidv4()
    if(replayPostRespons.respons != ""){
      console.log(replayPostRespons)
      commentRespons.push(replayPostRespons);
    }
    setReplayPostRespons(state =>{
      return{
        id : '',
        id_respons : '',
        respons : '',
        name : '',
        lasteName : ''
      }
    });

    console.log(commentRespons)
  }
  const formComment = (
    <form className="add-replay" onSubmit={(e) => { onAddReplayComment(e) }}>
      <div className="txt-btn">
        <textarea className='textareaReplay' name="" id="" cols="5" rows="5" onChange={(e) => { handleChangeInput(e) }} value={replayPostRespons.respons}></textarea>
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
              {replayPEZZ.id !== id  &&
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
              {replayPEZZ.id === id && showFormReponses && formComment}
            </div>
          </div>))
        }
      </div>
    </div>
  )
}
