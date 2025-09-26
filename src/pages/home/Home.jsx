import React from 'react'
import Hero from "./hero/Hero";
import SectionOne from './section-one/SectionOne';
import SectionTwo from './section-two/SectionTwo';
import SectionThree from './section-three/SectionThree';
import GamingSection from './Game';


function Home() {
  return (
    <div className='bg-[#110526] min-h-screen md:p-6 p-4 relative'>
        
          {/* <div className=' h-screen p-6'> */}

        <Hero/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        {/* <GamingSection/> */}
      
    </div>
  )
}

export default Home
