import React from 'react'
import { HiTranslate } from "react-icons/hi";


const Header = () => {
    return (
        <>
            <div className='bg-black text-gray-400 relative '>
                <div className=' gap-5 flex flex-col pl-[12rem] p-16 place-stretch'>
                    <h1>Questions? Call <a className='underline md:underline-offset-2' href="/"> 000-800-919-1694</a></h1>
                    <div className='grid grid-rows-4 grid-flow-col gap-3'>
                        <a className='underline md:underline-offset-2' href="/">FAQ </a>
                        <a className='underline md:underline-offset-2' href="/">Help Centre</a>
                        <a className='underline md:underline-offset-2' href="/">Account</a>
                        <a className='underline md:underline-offset-2' href="/">Media Centre</a>
                        <a className='underline md:underline-offset-2' href="/">Investor Relations</a>
                        <a className='underline md:underline-offset-2' href="/">Jobs</a>
                        <a className='underline md:underline-offset-2' href="/">Ways to Watch</a>
                        <a className='underline md:underline-offset-2' href="/">Terms of Use</a>
                        <a className='underline md:underline-offset-2' href="/">Privacy</a>
                        <a className='underline md:underline-offset-2' href="/">Cookie Preferences</a>
                        <a className='underline md:underline-offset-2' href="/">Corporate Information</a>
                        <a className='underline md:underline-offset-2' href="/">Contact Us</a>
                        <a className='underline md:underline-offset-2' href="/">Speed Test</a>
                        <a className='underline md:underline-offset-2' href="/">Legal Notices</a>
                        <a className='underline md:underline-offset-2' href="/">Only on Netflix</a>
                    </div>
                    <div>
                        <HiTranslate className='absolute  ml-[1rem] mt-2 ' />
                        <select className='border-2 bg-black border-gray-400 rounded-md p-[0.2rem] w-[8rem] pl-8'>
                            <option value="">ENGLISH</option>
                            <option value="">हिन्दी</option>
                        </select>
                    </div>
                    <p>Netflix India</p>
                </div>
                </div>
        </>
    )
}

export default Header