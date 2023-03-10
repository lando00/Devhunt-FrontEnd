import React, { useState } from 'react'
import { questions } from '../../../../data/questions'
import QuestionItem from '../QuestionItems/QuestionItem'
export default function Unresolve() {
  const questionUnresolved = questions.filter(({isResolved})=> !isResolved)
  return (
    <div className='my-question'>
      <QuestionItem questions={questionUnresolved}></QuestionItem>
    </div>
  )
}
