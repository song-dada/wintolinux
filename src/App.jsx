import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './com/Navbar';
import Home from './pages/Home';
import Guestbook from './pages/Guestbook';
import './style/main.scss'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/guestbook' element={<Guestbook/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App