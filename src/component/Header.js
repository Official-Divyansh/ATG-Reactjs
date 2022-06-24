import React from 'react'
import '../Styles/header.css'
function Header() {

    return (
        <>
            <nav className='navBar'>
                <h1 style={{marginLeft: '10px', color:'rgba(0,0,0,.8)'}}>Timeline</h1>

                <div className='left-side'>
                    <div className='week-cal'>
                        <h1><i class="fa-solid fa-calendar-check"></i> &nbsp;&nbsp; Weeks</h1>
                    </div>

                    &nbsp;&nbsp; 
                    <h1 style={{color: 'rgb(95, 94, 94)', fontSize: 'x-large'}}>10-16 June 2022</h1>
                    &nbsp;&nbsp; 
                    <div className='arrow'>
                    <i class="fa-solid fa-angle-left"></i>
                    &nbsp;&nbsp; 
                    &nbsp;&nbsp; 
                    <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header