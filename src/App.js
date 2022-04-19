import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import './App.css'
import Home from './pages/Home/Home'
import ServiceDetail from './pages/ServiceDetail'
import NotFound from './pages/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import RequireAuth from './pages/Shared/RequireAuth'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/service/:serviceId'
          element={
            <RequireAuth>
              <ServiceDetail />
            </RequireAuth>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
