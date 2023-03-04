import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Actuality from './components/EspaceEtudiant/Actuality/Actuality'
import Container from './components/EspaceEtudiant/Container/Container'
import Notification from './components/EspaceEtudiant/Notification/Notification'
import Question from './components/EspaceEtudiant/Question/Question'
import Answer from './components/EspaceEtudiant/Answer/Answer'
import Profil from './components/EspaceEtudiant/Profil/Profil'
import Header from './components/EspaceEtudiant/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} >
          <Route path="/actuality" element={<Actuality />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/answers" element={<Answer />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
