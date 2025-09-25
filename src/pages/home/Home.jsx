import React from 'react'
import Hero from "./hero/Hero";
import SectionOne from './section-one/SectionOne';


function Home() {
  return (
    <div className='bg-[#110526] min-h-screen md:p-6 p-4 relative'>
        
          {/* <div className=' h-screen p-6'> */}

        <Hero/>
        <SectionOne/>
      
    </div>
  )
}

export default Home
