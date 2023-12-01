import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../Movie/Navbar/Navbar"
import { FaStar } from "react-icons/fa";
import Fotter from '../Admin/Fotter';

const IMG_URL = "https://image.tmdb.org/t/p/w500";


const MovieDetail = () => {

  const { id } = useParams()

  const [detailData, setDetailData] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=908c28f134994d3ad9d96002b978e58c`)
      .then((res) => {
        setDetailData(res.data)
      })
  }, [id])
  return (
    <>
      <Navbar />
      <div className='bg-[#181818] h-[100%] text-white p-14'>
        <div className='grid grid-cols-3 items-center   '>
          <img className='w-[400px h-[461px] object-cover border-2 border-red-700 shadow-2xl shadow-red-800' src={`${IMG_URL}${detailData?.poster_path}`} alt="" />
          <div className='flex flex-col gap-y-6 ' >
            <h1 className='text-4xl font-semibold'>{detailData?.title}</h1>
            <div className='flex items-center gap-x-5'>
              <p>{detailData?.release_date} </p> |
              <p className='flex items-center gap-1 justify-center'> <FaStar className='text-yellow-600' />{detailData?.vote_average}</p> |
              <p >{detailData?.original_language}</p>

            </div>
            <div>
              <p className='text-gray-300 font-extralight'>{detailData?.overview}</p>

            </div>
          </div>
        </div>
        <div className='flex items-center mt-14'>
          <span className='w-full'>
              <hr />
            <p className='text-center p-4 text-base font-extralight text-gray-400'>
            Adam Sandler stars in this clever coming-of-age
             comedy with the voices of Bill Burr,<br /> Cecily Strong, 
             Jason Alexander and more.
            </p>
             <hr />
          </span>
          </div>
      </div>
      <Fotter />
    </>
  )
}

export default MovieDetail