import React, { useEffect } from 'react'
import logo from "../../../assets/netflixlogo.png"
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const homePage =useNavigate()
  const movieLogin= JSON.parse (localStorage.getItem("userID"));
  // console.log(movieLogin);
  

  const logOutClick = ()=>{
    localStorage.removeItem("userID");
    homePage('/')
  }


  return (
    <>
    <nav className='bg-black text-white flex justify-between items-center px-8'>
      <img className='h-16 ' src={logo} alt={logo} />
      <div className='flex items-center gap-3'>
        <p className=' text-sm'>UNLIMITED TV SHOWS & MOVIES</p>
        <button className='bg-[#e50914] rounded-sm px-4 py-2 text-sm '>JION NOW</button>
        {
          movieLogin ?  <button onClick={logOutClick} className='border-[1px] rounded-sm
         border-white px-3 py-2 text-sm' >LOG OUT</button> 
         :
         <Link to="/login">
          <button className='border-[1px] rounded-sm
         border-white px-3 py-2 text-sm' >SIGN IN</button></Link>
        }
       
      
      </div>
    </nav>
    </>
  )
}

export default Navbar