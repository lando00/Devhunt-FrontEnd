import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Actuality from './components/EspaceEtudiant/Actuality/Actuality'
import Container from './components/EspaceEtudiant/Container/Container'
import Notification from './components/EspaceEtudiant/Notification/Notification'
import Question from './components/EspaceEtudiant/Question/Question'
import Answer from './components/EspaceEtudiant/Answer/Answer'
import Profil from './components/EspaceEtudiant/Profil/Profil'
import PopularQuestions from './components/EspaceEtudiant/PopularQuestions/PopularQuestions'
import MostViewQuestions from './components/EspaceEtudiant/MostViewQuestions/MostViewQuestions'
import RecentQuestions from './components/EspaceEtudiant/RecentQuestions/RecentQuestions'
import Authentification from './components/EspaceAdmin/Authentification/Authentification'
import Response from './components/EspaceEtudiant/Question/Response/Response'
import Unresolve from './components/EspaceEtudiant/Question/Unresolve/Unresolve'
import Resolve from './components/EspaceEtudiant/Question/Resolve/Resolve'
import NewQuestion from './components/EspaceEtudiant/Question/NewQuestion/NewQuestion'
import MyQuestion from './components/EspaceEtudiant/Question/MyQuestion/MyQuestion'

//test
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentification />} />
        <Route path="/" element={<Container />} >
          <Route path="/actuality" element={<Actuality />} >
            <Route path="/actuality/recentQuestions" element={<RecentQuestions />}/>
            <Route path="/actuality/popularQuestions" element={<PopularQuestions />} />
            <Route path="/actuality/MostViewQuestions" element={<MostViewQuestions />} />
          </Route>
          
          <Route path="/notifications" element={<Notification />} />
          <Route path="/questions" element={<Question />}>
            <Route path="/questions/newQuestion" element={<NewQuestion/>}></Route>
            <Route path="/questions/myQuestion" element={<MyQuestion/>}></Route>
            <Route path="/questions/questionResolve" element={<Resolve/>}></Route>
            <Route path="/questions/questionUnresolve" element={<Unresolve/>}></Route>
          </Route>
          <Route path="/answers" element={<Answer />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="questions/question/:idPost" element={<Response />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
