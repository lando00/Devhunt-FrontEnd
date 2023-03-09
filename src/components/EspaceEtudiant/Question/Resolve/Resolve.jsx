import React, { useState } from 'react'
import QuestionItem from '../QuestionItems/QuestionItem'
import { questions } from '../../../../data/questions'
export default function Resolve() {
  const questionResolved = questions.filter(({isResolved})=> isResolved === true)
  return (
    <div className='my-question'>
      <QuestionItem questions={questionResolved}></QuestionItem>
    </div>
  )
}
