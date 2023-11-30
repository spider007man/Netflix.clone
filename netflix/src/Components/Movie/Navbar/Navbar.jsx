import React from 'react'
import logo from "../../../assets/netflixlogo.png"


const Navbar = () => {
  return (
    <>
    <nav className='bg-black text-white flex justify-between items-center px-8'>
      <img className='h-16 ' src={logo} alt={logo} />
      <div className='flex items-center gap-3'>
        <p className=' text-sm'>UNLIMITED TV SHOWS & MOVIES</p>
        <button className='bg-[#e50914] rounded-sm px-4 py-2 text-sm '>JION NOW</button>
        <button className='border-[1px] rounded-sm border-white px-3 py-2 text-sm' >SIGN IN</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar