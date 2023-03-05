import React, { useState } from 'react'
import './Answer.scss'
import Video from './VideoOn/VideoOn'

export default function Answer() {

  const [onVideo, setonVideo] = useState(false)
  const [directDetail, setDetail] = useState([])
  return (
    <div className='Answer'>
      <div className="bock1">
        {
          directDetail.map((detail, i) => {
            return (
              <div key={i} className="item">
                aaa
              </div>
            )
          })
        }
      </div>
      <div className="new-live" onClick={() => setonVideo(true)}>
        <div className="icon" />
        <div className="text">Creer un salon</div>
      </div>
      {onVideo && <Video showSetting={setonVideo} />}
    </div>
  )
}
