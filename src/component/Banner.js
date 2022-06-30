import React from 'react'
import banner from '../images/Banner2.jpg'

function Banner() {
  return (
    <div className='relative h-[150px] sm:h-[270px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px] '>
        
    <img
    alt='Banner Image'
    src={banner}
    layout='fill'
    objectFit='cover'
    />
    <div className='absolute
    -left-1/4  top-[50%] w-full text-center'>
        <h1 className='text-1xl
        sm:text-2xl lg:text-4xl
      font-medium text-white '>Computer Engineering</h1>
        <p className='text-white my-3 
        text-[8px] md:text-base
         active:scale-90 transition duration-150
        '>12,4777 Computer Engineerings follow this</p >
    </div>
    <div className='flex items-center justify-between absolute sm:hidden
     top-[5%] w-full text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-10" fill="white" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>

<button className=' border-gray-400 border-[1px] pl-5 pr-5 text-gray-300 mx-10 sm:hidden'>Join Group</button>
    </div>
</div>
  )
}

export default Banner