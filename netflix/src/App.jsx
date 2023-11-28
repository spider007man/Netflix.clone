import React from 'react'
import Login from './Admin/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Header from './Components/HeroSection/Header'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/pages' element={<Header/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App