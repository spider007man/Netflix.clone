import React from 'react';
import Slider from "react-slick";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Card = ({movieNow}) => {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.07,
    slidesToScroll: 3
  };

  return (
    <>

<Slider {...settings}>
    {
// console.log(movieNow)

      movieNow && movieNow.map((data)=>{
        return(
          <>
       
       <div className='w-flex flex-col items-center justify-center'>
         <div className='h-[180px] w-[300px] m-2 overflow-hidden'>
           <img className='h-[180px] w-[300px] object-cover' src={`${IMG_URL}${data.backdrop_path}`} alt="" />
         </div>
         <div className='w-[300px] whitespace-nowrap'>
           <h1 className='pl-10 text-lg font-light overflow-hidden'>{data.title}</h1>
         </div>
       </div>
     
          </>
        )
      })
      
    }
    </Slider>
    </>
  );
}

export default Card;
