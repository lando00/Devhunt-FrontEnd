import React, { useState } from 'react'
import { notification } from '../../../../data/AllData'
import NotificationItem from '../NotificationItem/NotificationItem'
export default function video() {
  const notif = notification.filter(({ id }) => id === 'video')
  return (
    <NotificationItem notification={notif}></NotificationItem>
  )
}
