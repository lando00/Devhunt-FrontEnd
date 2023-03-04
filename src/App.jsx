import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './components/EspaceEtudiant/Container/Container'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
