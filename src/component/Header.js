import React, { useState } from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, } from '@heroicons/react/solid'
import logo from '../images/whole.png'
import log from '../images/log.svg'
import search from '../images/search.png'
import facebook from '../images/facebook.png'
function Header() {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
    if(open){
     document.body.style.overflow = 'hidden'
    }
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'
      >
        <img
          alt='Header'
          src={logo}
          layout="fill"
          objectFit='contain'
          objectPosition="left"
        />


      </div>

      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input placeholder="Start your search"
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600' />
        <SearchIcon className='hidden md:inline-flex h-8 bg-green-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      <div className='flex items-center space-x-4 justify-end text-gray-500'
        onClick={showModal}
      >
        <p className='hidden md:inline'> Create a account.
        </p>
        <button className='text-blue-600'>It's free</button>
      </div>


      {
        open &&
   <div className='w-[100vw] h-screen bg-black bg-opacity-50 fixed left-0 top-0 flex items-end sm:items-center justify-center overflow-hidden'
   
   >
     <div className='bg-white w-screen rounded-lg sm:w-[60vw] h-[80vh]'>
     <button onClick={()=>setOpen(false)} type="button" className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white -translate-x-[1000%] invisible	sm:visible  " >
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
          <div className='flex items-center justify-around my-4'>
            <h1 className='text-xl font-bold sm:-mx-[50px]'>Create Account</h1>
            <h1 className='invisible	sm:visible md:visible lg:visible'>Already have an account</h1>
            <button onClick={()=>setOpen(false)} type="button" className='sm:hidden' >
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
          </div>

          <div className='flex sm:justify-around justify-center'>
          <div  className='pr-10 pl-10'>
             <div >
                 <input type="email" name="email" id="email" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80vw] sm:w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="FirstName" required />
             </div>
             <div>
                
                 <input type="text" name="name" id="password" placeholder="LastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
             </div>
             <div>
                
                 <input type="email" name="name" id="email" placeholder="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
             </div>
             <div>
                
                 <input type="password" name="password" id="email" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
             </div>
             <div>
                
                 <input type="password" name="confirm" id="email" placeholder="Confirm-Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
             </div>
                    <div className='flex items-center justify-between sm:'>
                    <button type="submit" class="mt-2 sm:w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[40vw]">Signup to your account</button>
                    <p className='sm:hidden'>or Sign In</p>
                    </div>
                    </div>

                    <div className='hidden sm:block'>
                      <img src={log}  />
                    </div>
                    </div>

                    <div className=' flex sm:flex-row flex-col justify-around items-center'>
                      <div className='my-2 sm:my-0'>
                    <button className='flex items-center px-4 py-2 border-2 
                    sm:text-sm sm:font-extralight
                  border-gray-200 w-[70vw] sm:w-[100%] mb-2'>
                      <img src={facebook} />
                      Signup with facebook</button> 
                   
                    <button
                    className='flex items-center px-4 py-2 border-2 sm:text-sm sm:font-extralight
                    border-gray-200 w-[100%]
                    
                    '
                    >
                    <img src={search} />
                      Signup with Google</button> 
                      </div>
                      <p className='
                 font-thin text-sm'>By signing up, you agree to our Terms & <br></br> conditions, Privacy policy</p>
                    </div>
      </div>
      </div>
      }
      
    </header>
  )
}

export default Header


// <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
// <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
// </button>