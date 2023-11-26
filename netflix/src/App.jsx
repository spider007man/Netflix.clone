import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Header from './Header/Header'


const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes >
          <Route path='/pages' element={<Header/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App