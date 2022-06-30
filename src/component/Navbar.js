import React, { useEffect, useState } from 'react'
import Join from './Join'
import Post from './Post'

function Navbar() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [showGroups, setShowGroups] = useState(false)

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    console.log(windowSize)
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className='w-[73vw]'>
        
    <nav className='flex items-center justify-between '>
    <ul className='flex items-center justify-between '>
        <li className='mx-2 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black cursor-pointer'>AllPosts(32)</li>
        <li className='mx-2 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black cursor-pointer'>Article</li>
        <li className='mx-2 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black cursor-pointer'>Event</li>
        <li className='mx-2 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black cursor-pointer'>Education</li>
        <li className='mx-2 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black cursor-pointer'>Job</li>
    </ul>
    {
        windowSize > 700 && (

            <ul>
       <button className='p-2 mx-2 bg-gray-500 rounded-lg  pl-0 pr-0 md:pr-1 md:pl-1  lg:pl-8 lg:pr-8 text-gray-300'>Write Post</button>
       <button className='p-2 border-gray-400 border-2 rounded-md pl-0 pr-0 md:pr-1 md:pl-1 lg:pl-7 lg:pr-7 text-gray-500' onClick={()=> setShowGroups(!showGroups)}>{showGroups ? 'Leave Group' : 'Join Group'}</button>
    </ul>
            )
    }
    </nav>
    <div className='flex justify-between border-t-[1px] border-gray'>
    <Post/>
    {
        windowSize > 700 && (
        <Join showGroups={showGroups}/>
        )
    }
    </div>
    </div>
  )
}

export default Navbar