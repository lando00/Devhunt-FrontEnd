import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Actuality from './components/EspaceEtudiant/Actuality/Actuality'
import Container from './components/EspaceEtudiant/Container/Container'
import Notification from './components/EspaceEtudiant/Notification/Notification'
import Question from './components/EspaceEtudiant/Question/Question'
import Answer from './components/EspaceEtudiant/Answer/Answer'
import Profil from './components/EspaceEtudiant/Profil/Profil'
import PopularQuestions from './components/EspaceEtudiant/Actuality/PopularQuestions/PopularQuestions'
import MostViewQuestions from './components/EspaceEtudiant/Actuality/MostViewQuestions/MostViewQuestions'
import RecentQuestions from './components/EspaceEtudiant/Actuality/RecentQuestions/RecentQuestions'
import Authentification from './components/EspaceAdmin/Authentification/Authentification'
import Response from './components/EspaceEtudiant/Question/Response/Response'
import Unresolve from './components/EspaceEtudiant/Question/Unresolve/Unresolve'
import Resolve from './components/EspaceEtudiant/Question/Resolve/Resolve'
import NewQuestion from './components/EspaceEtudiant/Question/NewQuestion/NewQuestion'
import MyQuestion from './components/EspaceEtudiant/Question/MyQuestion/MyQuestion'
import Video from './components/EspaceEtudiant/Notification/Video/Video'
import QuestionNotif from './components/EspaceEtudiant/Notification/Question/QuestionNotif'
import All from './components/EspaceEtudiant/Notification/All/All'
import Replay from './components/EspaceEtudiant/Question/Replay/Replay'
import './App.scss'
import Activity from './components/EspaceEtudiant/Profil/Activity/Activity'
import Setting from './components/EspaceEtudiant/Profil/Setting/Setting'
import Summary from './components/EspaceEtudiant/Profil/Summary/Summary'
import LiveEnCours from './components/EspaceEtudiant/Live/LiveEnCours/LiveEnCours'
import LiveAvenir from './components/EspaceEtudiant/Live/LiveAvenir/LiveAvenir'
import LiveTerminer from './components/EspaceEtudiant/Live/LiveTerminer/LiveTerminer'

//test1
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentification />} />
        <Route path="/" element={<Container />} >
          <Route path="/actuality" element={<Actuality />} >
            <Route path="/actuality/recentQuestions" element={<RecentQuestions />} />
            <Route path="/actuality/popularQuestions" element={<PopularQuestions />} />
            <Route path="/actuality/MostViewQuestions" element={<MostViewQuestions />} />
            <Route path="/actuality/replay/:idPost" element={<Replay />}></Route>
          </Route>
          <Route path="/notifications" element={<Notification />}>
            <Route path='/notifications/all' element={<All />}></Route>
            <Route path='/notifications/questions' element={<QuestionNotif />}></Route>
            <Route path='/notifications/video' element={<Video />}></Route>
          </Route>
          <Route path="/questions" element={<Question />}>
            <Route path="/questions/newQuestion" element={<NewQuestion />}></Route>
            <Route path="/questions/myQuestion" element={<MyQuestion />}></Route>
            <Route path="/questions/questionResolve" element={<Resolve />}></Route>
            <Route path="/questions/questionUnresolve" element={<Unresolve />}></Route>
            <Route path="/questions/question/:idPost" element={<Response />} />
          </Route>
          <Route path="/answers" element={<Answer />}> 
            <Route path='/answers/liveEnCours' element={<LiveEnCours />} />
            <Route path='/answers/liveAvenir' element={<LiveAvenir />} />
            <Route path='/answers/liveTerminer' element={<LiveTerminer />} />
          </Route>
          <Route path="/profil" element={<Profil />} >
            <Route path='/profil/activity' element={<Activity />}></Route>
            <Route path='/profil/Setting' element={<Setting />}></Route>
            <Route path='/profil/summary' element={<Summary />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
