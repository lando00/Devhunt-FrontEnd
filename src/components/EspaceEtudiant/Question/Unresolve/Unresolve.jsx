import React, { useState, useEffect } from 'react'
import QuestionItem from '../QuestionItems/QuestionItem'
import { questions } from '../../../../data/AllData'
import axios from 'axios'
export default function Resolve() {

  const [questions, setQuestions] = useState([])

  const idStudent = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const getQuestions = async (id) => {
      const response = await axios.get(`/devHunt2/students/posts/${id}`)
      setQuestions(response.data.data)
    }
    getQuestions(idStudent);
  }, [])
  console.log(questions)

  const questionResolved = questions.filter(({isResolved})=> !isResolved)
  return (
    <div className='my-question'>
      <QuestionItem questions={questionResolved}></QuestionItem>
    </div>
  )
}
