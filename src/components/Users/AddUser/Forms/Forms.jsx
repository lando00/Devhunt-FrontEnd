import React from 'react'
import './Forms.scss'

export default function Forms() {
  return (
    <form action='#' className='forms-add'>
      <div className="form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name' id='name' />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder='Phone' id='phone' />
        </div>
      </div>
      <div className="form">
        <div className="input-group">
          <label htmlFor="departement">Departement</label>
          <input type="text" placeholder='Departement' id='departement' />
        </div>
        <div className="input-group">
          <label htmlFor="company">Company</label>
          <input type="text" placeholder='Company' id='company' />
        </div>
      </div>
      <div className="form">
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder='Address' id='Address' />
        </div>
        <div className="input-group">
          <label htmlFor="city">City</label>
          <input type="text" placeholder='City' id='city' />
        </div>
      </div>

      {/* <div className="input-group">
        <label htmlFor="city">Photo</label>
        <input type="file" />
      </div> */}
      <button type="button">Ajouter</button>
    </form>
  )
}
