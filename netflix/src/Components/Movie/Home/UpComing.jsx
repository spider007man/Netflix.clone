import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../Card/Card'
import Slider from "react-slick";




const UpComing = () => {

  const [movieNow,setMovieNow] = useState([]);
  

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=908c28f134994d3ad9d96002b978e58c")
    .then((res)=>{
      setMovieNow(res.data.results);

    })
  },[])



 

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Up_Comeing Movie</h1>
    <Card movieNow={movieNow} /> 
    </div>
  )
}

export default UpComing