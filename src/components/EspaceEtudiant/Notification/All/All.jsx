import React, { useState } from 'react'
import { notification } from '../../../../data/AllData'
import NotificationItem from '../NotificationItem/NotificationItem'
export default function All() {
  return (
    <NotificationItem notification={notification}></NotificationItem>
  )
}
