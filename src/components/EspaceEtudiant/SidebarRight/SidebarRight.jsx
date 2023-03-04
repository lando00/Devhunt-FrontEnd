import React, { useState } from 'react'
import './SidebarRight.scss'

export default function SidebarRight() {
  const [user, setUser] = useState(
    [
      { nbrResponse: 4, tittle: 'Tittre du post', isResolved: true, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
    ]
  )
  const Actu = user.map(({ nbrResponse, isResolved, name, tittle, post, lasteName, date }, index) => (
    <div key={index} className="actuality-item">
      <div className="detail-post">
        <div className="top">
          <div className="pdp"></div>
          <div className="head-post">
            <div className="name">{lasteName} {name}</div>
            <div className="date"> {date} </div>
          </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">Résolue</div> : <div className="not-resolved">Non Resolue</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
            <div className="answer">Reponse : {nbrResponse}</div>
            {/* <div className="replay-post">Repondre</div> */}
          </div>
        </div>
      </div>
    </div>))
  return (
    <div className='sidebar-right'>
      <div className="containe">
        <div className="question">
          <div className="item"> <div className="txt-question">Question</div><span>11</span></div>
          <div className="item"><div className="txt-answer">Reponse</div><span>30</span></div>
        </div>
        <div className="tag">
          <div className="head-tag">
            Mot clé
          </div>
          <div className="tag-containe">
            <div className="item-tag">Java</div>
            <div className="item-tag">JavaScript</div>
            <div className="item-tag">PHP</div>
            <div className="item-tag">Node.js</div>
            <div className="item-tag">Vue.js</div>
            <div className="item-tag">TypeScripte</div>
            <div className="item-tag">C#</div>
            <div className="item-tag">C++</div>
            <div className="item-tag">Laravel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
