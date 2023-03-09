import React, { useState } from 'react'
import avatar from '../../../../assets/avatars/face-3.jpg'
import { NavLink } from 'react-router-dom'
export default function Unresolve() {
  const [user, setUser] = useState(
    [
      { nbrResponse: 10, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' }
    ]
  )
  const post = user.map(({ nbrResponse, isResolved, name, tittle, post, lasteName, date }, index) => (
    <div key={index} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved" >(Resolue)</div> : <div className="unresolved" >(Non Resolue)</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <NavLink to={`/questions/question/${index}`}>
              <div className="answer">Reponse : {nbrResponse}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>))
  return (
    <div className='my-question'>
      {post}
    </div>
  )
}
