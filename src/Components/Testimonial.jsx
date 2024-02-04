import React from 'react'

import people from '../assets/people 1.png'
import ellipse13 from '../assets/Ellipse 13.png'

const Testimonial = () => {
  return (
    <div className='bg-bg2 relative mt-16 flex flex-col justify-center items-center'>
        <p className='pb-7 text-sm'>Testimonial</p>
        <h1 className='font-semibold text-2xl text-center pb-8'>What Our Client Says <br /> About Us</h1>
        <img src={people} alt="" />
        <div className='bg-white flex flex-col gap-3 items-center w-213 h-fit py-4 rounded-xl absolute top-80 right-24 shadow-2xl'>
            <img src={ellipse13} alt="" />
            <p className='font-semibold'>Dilara cinar</p>
            <p className='text-center text-sm text-gray-400'>Lorem ipsum dolor sit consectetur. Sagittis facilisi.</p>
        </div>
    </div>
  )
}

export default Testimonial