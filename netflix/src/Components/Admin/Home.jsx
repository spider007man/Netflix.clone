import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/netflixlogo.png"
import bgimage from "../../assets/netflix_background_image.jpg"
import { HiTranslate } from "react-icons/hi";
import Fotter from './Fotter';

const Home = () => {
    const moviePages =useNavigate()

    const [loginHere,setLoginHere]=useState({
        email:"",
    })
    console.log(loginHere);
    console.log(loginHere);

    const inputChange = (e) => {
        const { name, value } = e.target
        setLoginHere({ ...loginHere, [name]: value })
    }
    const handleClick = ()=>{
        const loginData= JSON.parse (localStorage.getItem("userID"));
        if(loginHere.email===loginData.email){
            moviePages("/movie");
            alert("succufully") 
        } else if(loginHere.email!==loginData.email){
            alert("you are not ragister")
        }
    }
    return (
        <>
            <div className='text-white m-0'>
                <img className=' absolute h-[100%] w-[100vw] overflow-auto' src={bgimage}alt="" />
                <div className='bg-[#000000a0] relative'>

                <div className='relative'>
                    {/* navbar section */}
                    <div className='flex justify-around items-center mt-1 '>
                        <img className=' h-[100px]' src={logo} alt="logo" />
                        <div className='flex justify-around gap-3'>
                            <HiTranslate className='absolute  mr-[12rem] mt-2 ' />
                            <select className='border-2 bg-[#282626] border-gray-400 rounded-md p-[0.2rem] w-[8rem] pl-8'>
                                <option value="">ENGLISH</option>
                                <option value="">हिन्दी</option>
                            </select>
                            <Link to="/login">
                            <button className='bg-red-600 w-24 h-8 rounded-sm  font-bold '>Sign in</button>
                            </Link>
                        </div>
                    </div>
                    {/* navbar section end */}

                    {/* hero section */}
                    <div className='flex flex-col justify-center items-center mt-20 pb-12 gap-6'>
                        <div className='flex flex-col justify-center items-center  '>
                            <h1 className='text-5xl font-bold'>The biggest Indian hits. Ready to watch here</h1>
                            <h1 className='text-5xl font-bold'>from ₹ 149.</h1>
                        </div>
                        <p className='text-3xl'>Join today. Cancel anytime.</p>
                        <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                        {/* login section */}
                        <div className='flex items-center gap-2 mb-6'>
                            <div className='border-2 border-gray-500 h-12 w-[20rem] rounded-md'>
                                <input onChange={inputChange}
                                name='email'
                                value={loginHere.value} className=' bg-[#282626] h-11 w-[19.8rem] rounded-md p-2 text-lg' type="text" placeholder='Email address' />
                            </div>
                            <div>
                            <button onClick={handleClick} className='bg-red-600 h-12 w-36 rounded-md flex items-center justify-center gap-1 font-bold text-lg'>
                                Get Started
                            <svg  className="bg-red-600"width="20" height="20" >
                                <path className="bg-red-600"  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                             </button>
                            </div>
                        </div>
                        {/* login section end */}
                    </div>
                    {/* hero section end */}
                </div>
            </div>
            <Fotter/>
                </div>
        </>
    )
}

export default Home