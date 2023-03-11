import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { notification } from '../../../../data/AllData'
import NotificationItem from '../NotificationItem/NotificationItem'
export default function All() {

  const [notifications, setNotifications] = useState([])

  useEffect(()=>{
    const getNotifications = async () =>{
      const response = await axios.get('/devHunt2/notifications/all')
      console.log(response.data.data)
      setNotifications(response.data.data)
    }
    getNotifications()
  }, [])

  return (
    <NotificationItem notifications={notifications}></NotificationItem>
  )
}
