import React from 'react'
import Output from './Output'

const OuterLoop =[
    {
    id: 1
   },
    {
    id: 2
   },
    {
    id: 3
   },
    {
    id: 4
   },
    {
    id: 5
   },
    {
    id: 6
   },
    {
    id: 7
   },
]
const InnerLoop =[
    {
    id: 1
   },
    {
    id: 2
   },
    {
    id: 3
   },
    {
    id: 4
   },
    {
    id: 5
   },
    {
    id: 6
   },
    {
    id: 7
   },
    
]

function Test({setDot }) {
  return (
    <div>
        {
            OuterLoop.map((id) => (
                <div style={{display: 'flex', marginLeft: '10%'}}>
               { InnerLoop.map((data) =>(
                    <Output setDot={setDot} value={data.id} />
                ))}
                </div>
            ))
        }
    </div>
  )
}

export default Test