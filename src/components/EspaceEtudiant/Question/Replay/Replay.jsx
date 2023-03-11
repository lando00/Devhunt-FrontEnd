import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './Replay.scss'
import avatar from '../../../../assets/avatars/face-5.jpg'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import swal from 'sweetalert'

export default function Replay() {

  const formComment = (
    <form className="add-replay" onSubmit={(e) => { onAddReplayComment(e) }}>
      <div className="txt-btn">
        {/* <textarea className='textareaReplay' name="" id="" cols="5" rows="5" onChange={(e) => { handleChangeInput(e) }} value={replayPostRespons.respons}></textarea> */}
        <button type='submit' className='btn-post'>Repondre</button>
      </div>
    </form>
  )
  // New

  const [question, setQuestion] = useState({
    _id:'',
    idStudent:{
      name: '',
      secondName: '',
    },
    title: '',
    content: '',
    tagsId: '',
    isResolved: false,
    likeCount: 0,
  })

  const {idQuestion} = useParams()

  useEffect(()=>{
    const getQuestion = async(id) => {
      const response = await axios.get(`/devHunt2/students/post/${id}`)
      setQuestion(response.data.data)
    }
    getQuestion(idQuestion)
    setAnswer({idPost : question._id})
    console.log(answer)
  },[])


  const [answer, setAnswer] = useState({
    idStudent: JSON.parse(localStorage.getItem('user')),
    idPost: JSON.stringify(idQuestion),
    content: ''
  })

  const post = async () => {
    const response = await axios.post('/devHunt2/students/posts/answers', answer)
    console.log(response.data)

    swal({
      icon:'success',
      text: 'Vous avez repondu a la question'
    }).then(
      document.getElementById('content').value = ''
    )
  }

  const handleChange = event => {
    event.preventDefault();
    setAnswer({content: event.target.value})
  }

  return (
    <div className='response'>
      {question && (<div className="actuality-item">
        <img src={avatar} alt="" className='pdp' />
        <div className="detail-post">
          <div className="head-post">
            <div className="name"> {question.idStudent.name} {question.idStudent.secondName}</div>
            <div className="date"> {question.created} </div>
          </div>
          <div className="detail">
            <div className="tittle"> <h2>{question.title}</h2> {question.isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved">(Non Resolue)</div>}</div>
            <div className="post"> {question.content}</div>
          </div>
        </div>
      </div>)}
      <div className="all-response">
        <div className="add-replay">
          <label htmlFor="">Votre réponse</label>
          <div className="txt-btn">
            <textarea className='textareaReplay' id="content" name="content" cols="30" rows="8" onChange={handleChange}></textarea>
            <button className='btn-post' onClick={post}>Commenter</button>
          </div>
        </div>
        <h2>Tous les réponses</h2>
        {/* {
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
                       <div className="date"> {date} </div> 
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
        } */}
      </div>
    </div>
  )
}
