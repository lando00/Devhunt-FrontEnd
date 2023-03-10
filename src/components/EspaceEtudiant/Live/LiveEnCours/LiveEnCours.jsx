import React, { useState } from 'react'
import './LiveEnCours.scss'
import LiveItem from './LiveItem/LiveItem'
import LiveToLive from './LiveToLive/LiveToLive'

export default function LiveEnCours() {
  const aa = [1, 2, 3, 2, 1, 3, 1];
  const [showProgramme, setshow] = useState(false)
  const [live, showLive] = useState(false)
  return (
    <div className='LiveEnCours'>
      <div className="new-live" onClick={() => showLive(true)}>
        show live
      </div>
      {!showProgramme && (<div className="new-live" onClick={() => setshow(!showProgramme)}>
        Programmer un direct
      </div>)}
      {!showProgramme && <div className="list">
        {aa.map(element => {
          return <LiveItem />
        })}
      </div>}
      {
        showProgramme && <div className="new-live" onClick={() => setshow(!showProgramme)}>
          Direct en cours
        </div>
      }
      {live && <LiveToLive showSetting={showLive} />}
    </div>
  )
}
