import React from 'react'
import '../AddUser/Forms/Forms.css'

export default function FormUpdate({user}) {
  return (
    <div className="forms">
        <form action='#'>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name' id='name' value={user.Name}/>
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='Phone' id='phone' value={user.Phone} />
            </div>
            <div className="input-group">
                <label htmlFor="departement">Departement</label>
                <input type="text" placeholder='Departement' id='departement' value={user.Departement} />
            </div>
            <div className="input-group">
                <label htmlFor="company">Company</label>
                <input type="text" placeholder='Company' id='company' value={user.Company} />
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder='Address' id='Address' value={user.Address} />
            </div>
            <div className="input-group">
                <label htmlFor="city">City</label>
                <input type="text" placeholder='City' id='city' value={user.City} />
            </div>
            <div className="input-group">
                <label htmlFor="city">Photo</label>
                <input type="file" />
            </div>
            <button type="button">Ajouter</button>
        </form>
    </div>
  )
}
