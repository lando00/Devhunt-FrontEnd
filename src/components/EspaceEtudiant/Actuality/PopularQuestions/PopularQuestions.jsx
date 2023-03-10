import React, { useState } from 'react'
import ActualityItem from '../ActualityItem/ActualityItem'
import { questions } from '../../../../data/AllData';
// import "./Populary.scss"

export default function PopularQuestions() {
  const populary = questions.filter(({ nbrResponse } ) => nbrResponse > 30);

  return (
    <div className='containe-actuality'>
      <ActualityItem actuality={populary}></ActualityItem>
    </div>
  )
}
