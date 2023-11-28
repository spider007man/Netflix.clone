import React, { useState } from 'react'
import logo from "../../assets/netflixlogo.png"
import bgimage from "../../assets/netflix_background_image.jpg"
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const  ragister=useNavigate()

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })
    const inputType = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
    }

    const loginClick = (event) => {
        const {email,password} = inputData
        event.preventDefault();
        
        if (inputData.email === "") {
            alert("Please enter email id");
          } else if (!email.includes("@gmail.com")) {
            alert("Please check the email");
          }else if(password===""){
            alert("Please enter email id");
          }
          else{
            ragister("/")
              StoreData = localStorage.setItem("userID", JSON.stringify(inputData));
          }
    }


    return (
        <>
            <div>
                <img className='absolute h-[100vh] w-[100vw] overflow-auto' src={bgimage} alt="" />
                <div className='bg-[#000000a0] h-[100vh] text-gray-500 relative'>
                    <img className='pl-20 h-28 text-red-600' src={logo} alt="" />
                    <form onSubmit={loginClick}
                        className=' mt-16 px-14 py-8 max-w-[400px] w-full mx-auto bg-[#000000c4] flex flex-col justify-start gap-4' >
                        <h1 className='font-medium text-3xl text-white'>Sign in</h1>
                        <div className='flex flex-col justify-start gap-3'>
                            <input onChange={inputType} name='email' value={inputData.email} className='h-10 rounded-md pl-2 bg-[#282626] border-[1px] border-gray-500' type="text" placeholder='Email' />
                            <input onChange={inputType} name='password' value={inputData.password} className='h-10 rounded-md pl-2 bg-[#282626] border-[1px] border-gray-500' type="text" placeholder='Password' />
                            <button className='h-10 mt-6 rounded-md font-bold text-lg text-white bg-red-600'>Sing in</button>
                        </div>
                        <div className='flex justify-between'>
                            <p ><input type="checkbox" /> Remembar me</p>
                            <a href="/">Need help?</a>
                        </div>
                        <div className='flex flex-col gap-y-3 mt-6'>
                            <h3 className='text-lg'>New to Netflix?<a className='text-blue-700 font-medium md:underline-offset-4s underline' href="/">Sign up now.</a></h3>
                            <p className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot
                                <a href="/"> Learn more.</a>
                            </p>
                        </div>
                    </form>

                </div>
                <Header />
            </div>
        </>
    )
}

export default Login