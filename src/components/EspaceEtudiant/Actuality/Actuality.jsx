import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
import avatar from '../../../assets/avatars/face-5.jpg'
export default function Actuality() {

  const [user, setUser] = useState(
    [
      { nbrResponse: 6, tittle: 'How to approach applying for a job at a company owned by a friend?', isResolved: true, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 30, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 20, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 10, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 9, tittle: 'Tittre du post', isResolved: true, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 2, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 7, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { nbrResponse: 4, tittle: 'Tittre du post', isResolved: true, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
    ]
  )
  const Actu = user.map(({ nbrResponse, isResolved, name, tittle, post, lasteName, date }, index) => (
    <div key={index} className="actuality-item">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">Résolue</div> : <div className="unresolved">Non Resolue</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <div className="answer">Reponse : {nbrResponse}</div>
            <div className="replay-post">Repondre</div>
          </div>
        </div>
      </div>
    </div>))

  return (
    <div className='actuality'>
      <div className="head-actuality">
        <div className="item">
          <NavLink to="/actuality/recentQuestions">Question Recente</NavLink>
        </div>
        <div className="item">
          <NavLink to="/actuality/popularQuestions">Populaires</NavLink> 
        </div>
        <div className="item">
          <NavLink to="/actuality/MostViewQuestions">Plus visitées</NavLink>
        </div>
      </div>
      <div className="containe-actuality">
        <Outlet />
      </div>
    </div>
  )
}