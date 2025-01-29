import Navbar from '@/components/Navbar';
import TitleNav from '@/components/TitleNav';
import React from 'react';




const page = () => {
  return (
    <div className="bg_destination">
        <Navbar />
        <div className='lg:px-56'>
         <TitleNav title='Pick your destination' num='01' />
         <div>
            
         </div>

        </div>
    </div>
  )
}

export default page