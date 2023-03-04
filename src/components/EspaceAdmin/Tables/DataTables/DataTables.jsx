import React from 'react';
import './DataTables.css';
import contacts from '../../../data/contacts';

export default function DataTables() {

  return ( 
    <div className='data-tables'>
      <div className="row1">
        <span>Show</span>
        <select>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="all">All</option>
        </select>
        <span>entries</span>
        <span className='search'>Search: </span>
        <input type="search" />
      </div>

      <table>
        <thead>
            <tr>
                <th className='left'>Id</th>
                <th>Name</th>
                <th>Departement</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>Date</th>
                <th className='right'>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                contacts.map(contact => (
                    <tr>
                        <td className='left'>{contact.id}</td>
                        <td>{contact.Name}</td>
                        <td>{contact.Department}</td>
                        <td>{contact.Company}</td>
                        <td>{contact.Phone}</td>
                        <td>{contact.Address}</td>
                        <td>{contact.City}</td>
                        <td>{contact.Date}</td>
                        <td className='right'>...</td>
                    </tr>
                ))
            }
            
        </tbody>
      </table>
        <ul className='pagination'>
            <li>
                <a href="#" className='prev'>Previous</a>
            </li>
            <li>
                <a href="#" className='pagination-active'>1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
            <li>
                <a href="#" className='next'>Next</a>
            </li>
        </ul>
    </div> 
  )
}
