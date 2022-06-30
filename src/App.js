import React from 'react'
import Banner from './component/Banner'
import Header from './component/Header'
import Navbar from './component/Navbar'

function App() {
  return (
   <>
   <Header />
   <Banner />
   <div className='flex align-center justify-center'>
   <Navbar />
   </div>
   </>
  )
}

export default App