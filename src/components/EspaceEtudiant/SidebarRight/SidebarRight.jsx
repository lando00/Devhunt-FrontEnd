import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SidebarRight.scss'

export default function SidebarRight() {

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    const fetchQuestions = async()=>{
      const response = await axios.get('/devHunt2/students/posts/all')
      setQuestions(response.data.data)
    }
    fetchQuestions()
  }, [])

  return (
    <div className='sidebar-right'>
      <div className="containe">
        <div className="question">
          <div className="item"> <div className="txt-question">Questions</div><span>{questions.length}</span></div>
          <div className="item"><div className="txt-answer">Réponses</div><span>30</span></div>
        </div>
        <div className="tag">
          <div className="head-tag">
            Mots clés
          </div>
          <div className="tag-containe">
            <div className="item-tag">Java</div>
            <div className="item-tag">JavaScript</div>
            <div className="item-tag">PHP</div>
            <div className="item-tag">NodeJs</div>
            <div className="item-tag">VueJs</div>
            <div className="item-tag">TypeScript</div>
            <div className="item-tag">C#</div>
            <div className="item-tag">C++</div>
            <div className="item-tag">Laravel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
