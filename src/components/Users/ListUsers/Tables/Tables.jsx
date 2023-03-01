import React from 'react';
import './Tables.css';
import { Link } from 'react-router-dom';
import users from '../../../../data/users';
import swal from 'sweetalert'

export default function Tables() {

    const alert = () => {
        swal("Voulez-vous vraiment supprimer ?", {
          icon : "warning",
          buttons: ["Non", 'Oui'],
          dangerMode: true,
        }
        ).then((willDelete) => {
          if (willDelete) {
            swal("L'utilisateur a été bien supprimé !", {
              icon: "success",
            });
          }
      })}

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
                <th>Id</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Departement</th>
                <th>Company</th>
                <th>Address</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            <img src={user.Photo} alt="" className='avatar-user' />
                        </td>
                        <td>{user.Name}</td>
                        <td>{user.Phone}</td>
                        <td>{user.Department}</td>
                        <td>{user.Company}</td>
                        <td>{user.Address}</td>
                        <td>{user.City}</td>
                        <td className='action'>
                            <Link to={`/app/users/updateUser/${user.id}`}>
                                <i className='fa fa-edit' title='Editer'></i>
                            </Link>
                            <span> / </span>
                            <span onClick={alert}>
                                <i className='fa fa-trash' title='supprimer'></i>
                            </span>
                        </td>
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
