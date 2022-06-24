import React, { useEffect } from 'react'

function Modal({ value, setDot, start, setStart, end, setEnd, title, setTitle, setIsModal}) {
     
    const center= {
        display: 'grid', placeItems: 'center', background: 'rgba(0,0,0,.7)' , height: '100%', position: 'absolute',top: 0,left: 0, width: '100%',
        overflow: 'hidden'
    }
    const input_div ={
        display: 'flex',
        flexDirection: 'column',
        padding: '10px'
    }
    const Button = {
        padding: '9px 30px', background: 'skyblue', border: 'none', borderRadius: '10px', color: 'rgba(0,0,0,.7)', letterSpacing: '2px',
        cursor: 'pointer',
        marginBottom: '10px'
    }
   
    const Input = {
        padding: '10px',
         marginBottom: '10px',
         borderRadius: '10px',
         outline: 'none',
         border: 'none',
         width: "40vw"
    }
     const P  = {
        color: 'white',
        letterSpacing: '2px'
     }

     const closeModal = ()=>{
        if(title && start && end)
        setIsModal(false)
        setDot( value)
     }
     const cancelModal = ()=>{
        setIsModal(false)
        setTitle('')
        setStart()
        setEnd()
     }


  return (
    <div style={center}>
        <div style={input_div}>
            <input name='title' placeholder='Enter title'  
            style={Input}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            
            <p style={P} >Enter Start time:</p> 
            <input name='start-Date' placeholder='Start Time'
            type='time'  
             style={Input}
            value={start}
            onChange={(e)=>setStart(e.target.value)}
            />

            <p style={P} >Enter End time:</p>

            <input name='start-Date' placeholder='End Time'
            type='time'  
            style={Input}      
             value={end}
            onChange={(e)=>setEnd(e.target.value)}
            />

            <button onClick={closeModal} style={Button} >SET TASK</button>
            <button onClick={()=> cancelModal()} style={Button} >CANCEL</button>
        </div>
    </div>
  )
}

export default Modal