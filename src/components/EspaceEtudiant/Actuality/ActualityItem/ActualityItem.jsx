import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
export default function ActualityItem({ actuality }) {

  // id: string;
  // nbrResponse: number;
  // tittle: string;
  // isResolved: boolean;
  // name: string;
  // lasteName: string;
  // post: string;
  // date: string;
const populary =  actuality.map(({ id , nbrResponse , tittle , isResolved , name , lasteName , post , date}) => (
    <div key={id} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non Resolue)</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <NavLink to={`/questions/question/${id}`}>
              <div className="answer">Reponse : {nbrResponse}</div>
            </NavLink>
            <NavLink to={`/actuality/replay/${id}`}>
              <div className="replay-post">
                <div className="icon-replay" />
                Repondre
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="all-actualy">
      { populary }
    </div>
  )
}
