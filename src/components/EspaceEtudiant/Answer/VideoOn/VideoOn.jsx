import './VideoOn.scss'
import { useState } from 'react'
import WebCam from './WebCam'

export default function Video ({showSetting}) {
  
  const [showCamera, setShow] = useState(true)
  const [theme, settheme] = useState('')
  const [isthem, setting] = useState(false)

  function hideVideo() {
    showSetting(false)
  }
  function onWebCam() {
    if(theme){
      showCamera ? setShow(false) : setShow(true)
    }
    else setting(true)
  }
  const [user, setUser] = useState({name: "BEJERY Ludores"})
  return (
    <div className="bloc-modal">
      <div className="overlay" onClick={hideVideo} />
      <div className="modal">
        <div className="user">
          <div className="pdp" />
          <div className="name">
            <div className="nom">{ user.name }</div>
            <div className="action">#en direct</div>
          </div>
        </div>
        {showCamera ? (<div className="container">
          <div className="theme">
            <div className="them">theme:{isthem && <span>obligatoire</span>}</div>
            <input type="text" onInput={ (e) => settheme(e.target.value)}/>
          </div>
          <div className="begin">
            <div className="pic" onClick={ onWebCam }>
              <div className="sary"></div>
            </div>
            <div className="commence">commencer maintenant</div>
          </div>
        </div>)
      : 
      (
        <div className="web">
            <div className='theme'>#{ theme }</div>
            <WebCam />
            <div className="annuler" onClick={ onWebCam }>Terminer</div>
        </div>
      )  
      }
      </div>
    </div>
  )
}