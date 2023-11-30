import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const MovieDetail = () => {
    const {id}=useParams()
    const [detailData,setDetailData]=useState()
    // console.log(detailData);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=908c28f134994d3ad9d96002b978e58c`)
        .then((res)=>{
            setDetailData(res.data)
        })
    },[id])
  return (
    <h1>{detailData?.title}</h1>
  )
}

export default MovieDetail