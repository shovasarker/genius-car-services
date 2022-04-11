import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
