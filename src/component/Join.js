import React, { useState } from 'react'
import group from '../images/group.jpg'
import group2 from '../images/group2.jpg'
import group3 from '../images/group3.jpg'
import group1 from '../images/group1.png'
const Groups= [
    {
      name: 'Leisure',
      follow: 'followed',
      img:group
   },
    {
      name: 'Activism',
      follow: 'follow',
      img: group1
   },
    {
      name: 'MBA',
      follow: 'follow',
      img: group2
   },
    {
      name: 'Philosophy',
      follow: 'follow',
      img: group3
   },
]
function Join({showGroups}) {
    

  return (
      <>
    <div className='flex flex-col items-center  justify-center h-screen w-56  ml-5'>

         <div className='flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,.7)" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <input type='text' placeholder="Enter Your location" className=" flex-grow outline-none border-b-[2px] border-gray" />

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="rgba(0,0,0.7)" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
    </div>
    <div className='flex items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p className='font-thin text-xs my-4 mx-2'>
    Your location will help us serve better and extend a personalised experience.</p>
    </div>
    {
        showGroups && (
    <div>
       <h1>RECOMMENDED GROUPS</h1>
       <div>
        {
            Groups.map((data)=>(
                <div className='flex items-center
                justify-between my-4'>
                <img src={data.img} />
                <p className='items-start'>{data.name} </p>
                {
                    data.follow == 'followed' ? 
                    <p className='bg-black rounded-lg text-white p-1 font-thin' >{data.follow}</p>
                    :
                    <p  >{data.follow}</p>

                }
                </div>
            ))
        }
       </div>
    </div>
    )
}
    </div>

      </>
  )
}

export default Join
