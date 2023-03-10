import React, { useState } from 'react'
import avatar from '../../../../assets/avatars/face-4.jpg'
import { NavLink } from 'react-router-dom'
import {questions} from '../../../../data/questions'
import ActualityItem from '../ActualityItem/ActualityItem'

export default function RecentQuestions() {

  return (
    <div className='containe-actuality'>
      <ActualityItem actuality={questions}></ActualityItem>
    </div>
  )
}
