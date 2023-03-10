import React, { useState } from 'react'
import { notification } from '../../../../data/AllData'
import NotificationItem from '../NotificationItem/NotificationItem'
export default function Question() {
  const notif = notification.filter(({ id }) => id === 'question')
  return (
    <NotificationItem notification={notif}></NotificationItem>
  )
}
