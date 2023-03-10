import React, { useEffect, useState } from 'react'
import avatar from '../../../../assets/avatars/face-3.jpg'
import { NavLink } from 'react-router-dom'
import { questions } from '../../../../data/AllData';
import Question from '../QuestionItems/QuestionItem';
import axios from 'axios';
export default function MyQuestion() {

  const [questions, setQuestions] = useState([])

  const idStudent = JSON.parse(localStorage.getItem('user'));
  useEffect(() =>{
    const getQuestions = async(id) => {
      const response  = await axios.get(`/devHunt2/students/posts/${id}`)
      setQuestions(response.data.data)
    }
    getQuestions(idStudent);
  },[])
  console.log(questions)


  return (
    <div className='my-question'>
      <Question questions={questions}></Question>
    </div>
  )
}
