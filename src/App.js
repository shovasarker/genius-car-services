import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import './App.css'
import Home from './pages/Home/Home'
import ServiceDetail from './pages/ServiceDetail'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
