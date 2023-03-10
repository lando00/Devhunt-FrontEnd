import React from 'react'
import { users } from '../../../../data/AllData'
import './setting.scss'
export default function Setting() {
  const user = users.find(({ serealNumber }) => serealNumber === '2199')
  function update (e){
    e.preventDefault();
    console.log('e')
  }
  return (
    <div className='profil-item-setting'>
      <form className='form-update-profil' onSubmit={(e)=> {update(e)}}>
        <input type="text"  placeholder='Nom'/>
        <input type="text"  placeholder='Prenom'/>
        <input type="e-mail"  placeholder='e-mail'/>
        <button type='submit'>Modifier</button>
      </form>
    </div>
  )
}
