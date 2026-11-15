import { useState } from 'react'
import './App.css'
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProfilePage from "./pages/ProfilePage.jsx"
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/perfil' element={<ProfilePage/>}/>
          </Routes>
      </HashRouter>
  )
}

export default App
