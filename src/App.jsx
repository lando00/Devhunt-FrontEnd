import React from 'react'
import DashboardContainer from './components/DashboardContainer/DashboardContainer'
import Authentification from './components/Authentification/Authentification'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tables from './components/Tables/Tables'
import Products from './components/Products/Products'
import Dashboard from './components/Dashboard/Dashboard'
import Settings from './components/Settings/Settings'
import ListUsers from './components/Users/ListUsers/ListUsers'
import AddUser from './components/Users/AddUser/AddUser'
import UpdateUser from './components/Users/UpdateUser/UpdateUser'

function App() {
  return (        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/app" element={<DashboardContainer />}>
          <Route path='/app/dashboard' element={<Dashboard />} />
          <Route path='/app/users/listUsers' element={<ListUsers />} />
          <Route path='/app/users/addUser' element={<AddUser />} />
          <Route path='/app/users/updateUser/:id' element={<UpdateUser />} />
          <Route path='/app/tables' element={<Tables />} />
          <Route path='/app/products' element={<Products />} />
          <Route path='/app/settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
