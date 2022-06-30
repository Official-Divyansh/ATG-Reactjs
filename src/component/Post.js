import React from 'react'
import img1 from '../images/Rectangle 5.jpg'
import img2 from '../images/Rectangle 5 (1).jpg'
import img3 from '../images/Rectangle(3).jpg'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
const data = [
    {
     image: img1,
     title: 'Article',
     Desc: 'What if famous brands had regular fonts? Meet RegulaBrands!',
     experience: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
     userName: 'sarthak Karma',
     userImg : user1
    },
    {
     image: img2,
     title: 'Education',
     Desc: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
     experience: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
     userName: 'Sarah West',
     userImg : user2
   },
    {
     image: img3,
     title: 'Article',
     Desc: 'What if famous brands had regular fonts? Meet RegulaBrands!',
     experience: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
     userName: 'Ronal Jones',
     userImg : user3
   },
   
]
function Post() {
  return (
    <div>
        {
            data.map((data)=>(
                <div className='mb-8'>
                <img src={data.image} />
                <p>{data.title}</p>
                <div>
                <h1 className='font-bold '>{data.Desc}</h1>
                </div>
                <p>{data.experience}</p>
                <div className='flex items-center justify-between'> 
                <div className='flex items-center'>
                <img src={data.userImg} />
                <h2 className='ml-2'>{data.userName}</h2>
                </div>
                <div className='flex'>
                    <p className='mr-9'>1.4k views</p>
                    <p>share</p>
                </div>
                </div>

                </div>
            ))
        }
    </div>
  )
}

export default Post