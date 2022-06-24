import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import '../Styles/box.css'

const color = [
    {
        clr: '#FFD6C4'
    },
    {
        clr: '#C8EBDC'
    },
    {
        clr: '#D7D7F3'
    }
]

function Output({value, setDot}) {
    const [isModal, setIsModal] = useState(false)
    const [title, setTitle] = useState('')
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const changeValue = ()=>{
        window.scrollTo(0, 0);
        setIsModal(true)
    }

    const findClr = color[Math.floor(Math.random() * 3)]
    const boxex={
        display:'grid',
        placeItems: 'center',
        border: '1px solid gray',
        width: '120px', 
        // height: '120px',
        padding: '20px',
        borderLeft:'none', 
        borderBottom: 'none',
        background: title.length > 0 ? findClr.clr : 'none',
        overflow: 'hidden'
    }
    
    const para = {
        color: title.length > 0 ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.4)',
        fontSize:  title.length > 0 ? '16px' : '14px',
        fontFamily: 'Arial (sans-serif)',
        textAlign: 'start',
        fontWeight: '900'
    }
    
  
    return (
    <>
    <div onClick={changeValue} className='box' style={boxex}>
     <h4 style={para}>
      { title? title :  "Click To Schedule"}
        </h4 >
        {
            start &&  (
                <h4 style={{fontSize: '14px'}} >{start} - {end}</h4>
            )
        }
        </div>
        {
            isModal && (
                <Modal  value={value} setDot={setDot} start={start} setStart={setStart} end={end} setEnd={setEnd} title={title} setTitle={setTitle} setIsModal={setIsModal} />
            )
        }
    </>
  )
}

export default Output