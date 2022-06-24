import React, { useEffect, useState } from 'react'
import '../Styles/weekdays.css'
import Test from './Test'




const Days = [
    {
        id: 1,
        day: 'Sun',
        date: '23'
    },
    {
        id: 2,
        day: 'Mon',
        date:  '24'
    },
    {
        id: 3,
        day: 'Tue',
        date:  '25'
    },
    {
        id: 4,
        day: 'Wed',
        date:  '26'
    },
    {
        id: 5,
        day:'Thu',
        date:  '27'
    },
    {
        id: 6,
        day: 'Fri',
        date:  '28'
    },
    {
        id: 7,
        day: 'Sat',
        date: '29'
    },
]

function WeekDays() {
    const [dot, setDot] = useState()
    
    
  return (
    <div className='Date_Task' >

    <div className='Main_day_div'>
        {Days.map((data) =>(
            <div className={ data.day == 'Mon' ?'container' : ''} >
                <h2 className='day_h1'>{data.day}</h2>
                <h4 style={{textAlign: 'center'}}>{data.date} <br></br> {dot == data.id ? <i class="fa-solid fa-circle-dot" ></i>: ''}</h4>
               
            </div>
        ))}
    </div>
    <Test setDot={setDot} />
        </div>
  )
}

export default WeekDays