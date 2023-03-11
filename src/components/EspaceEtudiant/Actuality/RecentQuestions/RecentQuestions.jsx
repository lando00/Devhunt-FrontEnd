import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
import ActualityItem from '../ActualityItem/ActualityItem'
export default function RecentQuestions () {

  const [actualities, setActualities] = useState([])
  const [student, setStudent] = useState([])

  useEffect(()=>{
    const fetchActualities = async() =>{
      const response = await axios.get('/devHunt2/students/posts/all')
      setActualities(response.data.data)
    }
    fetchActualities()
  }, [])
console.log(actualities)
const actualitiesItems = actualities.map(({ _id, created, title, isResolved, likeCount, content, idStudent }) => {

  return (
      <div key={_id} className="actuality-items">
        <img src={avatar} alt="" className="pdp" />
        <div className="detail-post">
          <div className="head-post">
            <div className="name">{idStudent.name} {idStudent.secondName}</div>
            <div className="date"> {created} </div>
          </div>
          <div className="detail">
            <div className="tittle">
              {title}{" "}
              {isResolved ? (
                <div className="resolved">(Résolue)</div>
              ) : (
                <div className="unresolved">(Non résolue)</div>
              )}
            </div>
            <div className="post"> {content}</div>
            <div className="replay">
              <div className="btn-like">J'aime : {likeCount}</div>
              <div className="btn-singal">Singaler</div>
              <NavLink to={`/questions/question/${_id}`}>
                <div className="answer">Réponses : {}</div>
              </NavLink>
              <NavLink to={`/actuality/replay/${_id}`}>
                <div className="replay-post">
                  <div className="icon-replay" />
                  Répondre
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  return(
    <div className="all-actuality">
      {
      actualitiesItems
     }
    </div>
  )
  }
