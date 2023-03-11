import React, { useState } from 'react'
import './LiveEnCours.scss'
import LiveItem from './LiveItem/LiveItem'
import LiveToLive from './LiveToLive/LiveToLive'

export default function LiveEnCours() {
  const aa = [1, 2, 3, 2, 1, 3, 1];
  const [showProgramme, setshow] = useState(false)
  const [live, showLive] = useState(false)
  const [isOwner, becomeOwner] = useState(false)

  function create_my_live(){
    becomeOwner(true)
    showLive(true)
  }

  function see_live_other(){
    becomeOwner(false)
    showLive(true)
  }
  return (
    <div className='LiveEnCours'>
      <div className="new-live" onClick={create_my_live}>
        show live
      </div>
      {!showProgramme && (<div className="new-live" onClick={() => setshow(!showProgramme)}>
        Programmer un direct
      </div>)}
      {!showProgramme && <div className="list">
        {aa.map(element => {
          return <div onClick={see_live_other}><LiveItem/> </div>
        })}
      </div>}
      {
        showProgramme && <div className="new-live" onClick={() => setshow(!showProgramme)}>
          Direct en cours
        </div>
      }
      {live && <LiveToLive showSetting={showLive} isOwner= {isOwner}/>}
    </div>
  )
}
