import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='flex items-center gap-28 h-full'>
      <img src="/orbital.png" alt="orbital" id='orbital' className=' absolute left-0 bottom-0 opacity-5' />
      <div id='left' className=' flex-1 flex flex-col items-center justify-center gap-4 text-center '>
        <h1 className=' text-9xl font-black bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-transparent'>Gemini Clone AI</h1>
        <h2 className=' font-bold text-xl'>Supercharge your Productivity and Creativity with Gemini Clone AI.</h2>
        <h3 className='max-w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas voluptate aperiam minima eos qui sit similique fugit quod impedit!</h3>
        <Link to='/dashboard' className='px-6 py-4 bg-[#217bfe] rounded-full text-sm mt-5 hover:bg-white hover:text-[#217bfe] transition-colors duration-300 ease-in '>Get Started</Link>        

      </div>
      <div id='right' className='flex-1'>
        </div>
    </div>
  )
}

export default index