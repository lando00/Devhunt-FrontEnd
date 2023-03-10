import React, { useState } from 'react'
import { notification } from '../../../../data/questions'
import NotificationItem from '../NotificationItem/NotificationItem'
export default function All() {
  return (
    <NotificationItem notification={notification}></NotificationItem>
  )
}
