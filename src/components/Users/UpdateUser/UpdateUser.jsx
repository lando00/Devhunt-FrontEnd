import React from 'react'
import FormUpdate from './FormUpdate';
import '../AddUser/AddUser.css'
import { useParams } from 'react-router-dom';
import users from '../../../data/users';


export default function UpdateUser() {

  const {id} = useParams();

  const user = users.filter(user => user.id == id)

  return (
    <div className='add-user'>
      <h1>Update user</h1>
      <FormUpdate user={user[0]} />
    </div>
  )
}