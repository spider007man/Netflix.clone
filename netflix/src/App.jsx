import React from 'react'
import Login from './Components/Admin/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Admin/Home'
// import MoviePage from './Components/Movie/Home/MoviePage'
import Fotter from './Components/Admin/Fotter'
import Layout from './Components/Movie/Layout/Layout'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/pages' element={<Fotter/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/movie' element={<MoviePage/>} /> */}
          <Route path='/movie' element={<Layout/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App