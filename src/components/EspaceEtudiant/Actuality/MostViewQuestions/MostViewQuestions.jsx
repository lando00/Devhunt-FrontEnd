import React from 'react'
import { questions } from '../../../../data/questions'
import ActualityItem from '../ActualityItem/ActualityItem'

export default function MostViewQuestions() {

  const populary = questions.filter(({ nbrResponse }) => nbrResponse > 10);

  return (
    <div className='containe-actuality'>
      <ActualityItem actuality={populary}></ActualityItem>
    </div>
  )
}
