import React from 'react'
import Login from './Components/Admin/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Admin/Header'
import Home from './Components/Admin/Home'
import MoviePage from './Components/Movie/Home/MoviePage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/pages' element={<Header/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/movie' element={<MoviePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App