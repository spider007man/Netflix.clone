import React from 'react'
import Popular from '../Home/Popular'
import TopRated from "../Home/TopRated"
import UpComing from '../Home/UpComing'
import NowPlay from '../Home/NowPlay'
import Navbar from "../Navbar/Navbar"
import Fotter from "../../Admin/Fotter"

const Layout = () => {
  return (
    <div className='bg-[#181818] h-[100%] text-white'>
      <Navbar />
      <div className='flex flex-col justify-start py-14 px-10 gap-8  '>
        <div className='flex flex-col justify-start gap-3'>
          <h1 className='text-5xl font-bold '>Movies</h1>
          <p className='font-normal text-lg'>Movies move us like nothing else can, whether they’re scary, funny, dramatic,
            romantic or <br /> anywhere in-between. So many titles, so much to experience.</p>
        </div>
            <div className='flex flex-col justify-start gap-y-14'>
        <NowPlay />
        <TopRated />
        <Popular />
        <UpComing />
            </div>
      </div>
            <Fotter/>

    </div>
  )
}

export default Layout