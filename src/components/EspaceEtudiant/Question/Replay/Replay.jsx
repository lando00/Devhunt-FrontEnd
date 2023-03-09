import React, { useState } from 'react'
import { useParams } from 'react-router'
import './Replay.scss'
import avatar from '../../../../assets/avatars/face-5.jpg'
export default function Replay() {
  const { idPost } = useParams()
  const [posts, setUser] = useState(
    [
      { id: '1', nbrResponse: 6, tittle: 'How to approach applying for a job at a company owned by a friend?', isResolved: true, name: 'mika', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '0', nbrResponse: 30, tittle: 'Tittre du post', isResolved: false, name: 'mari', lasteName: 'ko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '2', nbrResponse: 20, tittle: 'Tittre du post', isResolved: false, name: 'wel', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '3', nbrResponse: 10, tittle: 'Tittre du post', isResolved: false, name: 'mika', lasteName: 'feno', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '4', nbrResponse: 9, tittle: 'Tittre du post', isResolved: true, name: 'mika', lasteName: 'blabla', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '5', nbrResponse: 2, tittle: 'Tittre du post', isResolved: false, name: 'lodo', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '6', nbrResponse: 7, tittle: 'Tittre du post', isResolved: false, name: 'Chat', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '7', nbrResponse: 4, tittle: 'Tittre du post', isResolved: true, name: 'Gpt', lasteName: 'tieko', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
    ]
  )
  const [responses, setResponse] = useState(
    [
      { id: '1', nbrResponse: 6, isResolved: true, name: 'Lando', lasteName: 'Julien', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '0', nbrResponse: 30, isResolved: false, name: 'Ludor', lasteName: 'Be', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '2', nbrResponse: 20, isResolved: false, name: 'naka', lasteName: 'michel', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '3', nbrResponse: 10, isResolved: false, name: 'wey', lasteName: 'ley', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '4', nbrResponse: 9, isResolved: true, name: 'mbappe', lasteName: 'rakoto', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '5', nbrResponse: 2, isResolved: false, name: 'Faneva', lasteName: 'rabe', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '6', nbrResponse: 7, isResolved: false, name: 'Andria', lasteName: 'Rajao', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
      { id: '7', nbrResponse: 4, isResolved: true, name: 'flave', lasteName: 'Hasimbahoaka', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, esse asperiores? Veritatis ipsa eius vero ea mollitia consequatur pariatur ut quae. Reprehenderit odio delectus qui provident molestias voluptatibus? Veniam, quae.', date: '10 mars 2023' },
    ]
  )
  const post = posts.find(({ id }) => id === idPost);
  function onAddReplay(e) {
    e.preventDefault()
    console.log('ok')
  }

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
            <div className="tittle"> {post.tittle} {post.isResolved ? <div className="resolved">Résolue</div> : <div className="not-resolved">Non Resolue</div>}</div>
            <div className="post"> {post.post}</div>
          </div>
        </div>
      </div>)}
      <div className="all-response">
        <form className="add-replay" onSubmit={(e) => { onAddReplay(e) }}>
          <label htmlFor="">Votre reponse</label>
          <div className="txt-btn">
            <textarea className='textareaReplay' name="" id="" cols="30" rows="10"></textarea>
            <button type='submit' className='btn-post'>Publier</button>
          </div>
        </form>
        {
          responses.map(({ date, isResolved, name, lasteName, post }, index) =>
          (<div key={index} className="actuality-item">
            <img src={avatar} alt="" className='pdp' />
            <div className="detail-post">
              <div className="head-post">
                <div className="name"> {name} {lasteName}</div>
                <div className="date"> {date} </div>
              </div>
              <div className="detail">
                <div className="tittle">{isResolved && <div className="icon-done" />}</div>
                <div className="post"> {post}</div>
              </div>
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
