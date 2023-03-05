import React, {useState} from 'react'
import avatar from '../../../../assets/avatars/face-4.jpg'
import { NavLink } from 'react-router-dom'
// import "./RecentQuestions.scss"

export default function RecentQuestions() {

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
        <div className="tittle"> {tittle} {isResolved ? <div className="resolved"/> : <div className="unresolved" />}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <NavLink to={`/questions/question/${index}`}>
              <div className="answer">Reponse : {nbrResponse}</div>
            </NavLink>
            <div className="replay-post">
              <div className="icon-replay" />Repondre
            </div>
          </div>
        </div>
      </div>
    </div>))

  return (
    <div className='containe-actuality'>
      {Actu}
    </div>
  )
}
