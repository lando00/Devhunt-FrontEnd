import React, { useState } from 'react'
import avatar from '../../../../assets/avatars/face-3.jpg'
import { NavLink } from 'react-router-dom'
import { questions } from '../../../../data/AllData';
import Question from '../QuestionItems/QuestionItem';
export default function MyQuestion() {
  return (
    <div className='my-question'>
      <Question questions={questions}></Question>
    </div>
  )
}
