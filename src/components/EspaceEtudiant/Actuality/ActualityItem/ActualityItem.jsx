import React , {useEffect , useState , useRef}from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../assets/avatars/face-8.jpg'
import { onLike } from '../../../../data/function'
export default function ActualityItem({ actuality }) {
  const [increment, setIncrement] = useState(false)
  const [like, setLike] = useState(12)
  const likeColor = useRef(null)

    const onlikes = () => {
      setIncrement(!increment)
      setLike(onLike(like, increment))
    }
const populary =  actuality.map(({ id , nbrResponse , tittle , isResolved , name , lasteName , post , date}) => (
    <div key={id} className="actuality-items">
      <img src={avatar} alt="" className='pdp' />
      <div className="detail-post">
        <div className="head-post">
          <div className="name">{lasteName} {name}</div>
          <div className="date"> {date} </div>
        </div>
        <div className="detail">
          <div className="tittle"> {tittle} {isResolved ? <div className="resolved">(Résolue)</div> : <div className="unresolved" >(Non résolue)</div>}</div>
          <div className="post"> {post}</div>
          <div className="replay">
          <div className="btn-like" onClick={onlikes}>
              J'aime {like}
            </div>
            <div className="btn-singal">
              Singaler
            </div>
            <NavLink to={`/questions/question/${id}`}>
              <div className="answer">Réponses {nbrResponse}</div>
            </NavLink>
            <NavLink to={`/actuality/replay/${id}`}>
              <div className="replay-post">
                <div className="icon-replay" />
                Répondre
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="all-actuality">
      { populary }
    </div>
  )
}
