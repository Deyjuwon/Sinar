import React from 'react'
import frame102 from '../assets/Frame 102.png'
import stars from '../assets/Frame 33590.png'
import Button from './Button'

const CourseDetails = () => {
  return (
    <div className='flex flex-col gap-4 py-6 px-4'>
        <p className='text-2xl text-btnBlue '>Detail Courses</p>
        <img src={frame102} alt="" className='rounded-xl' />
        <div id='ratings' className='flex items-center gap-2'>
            <img src={stars} alt="" />
            <div className='flex items-center gap-2 text-base'>
                <p className='font-bold text-base'>5.0</p>
                <p className='text-gray-400'>Ratings</p>
            </div>
        </div>
        <div>
            <p className='text-2xl text-btnBlue '>Java Script Lessons</p>
            <p className='text-gray-600 pb-6 text-sm'>Lorem ipsum dolor sit amet consectetur. Nulla vel nec morbi donec senectus pulvinar quis.</p>
            <p className='text-btnBlue text-sm font-bold pb-1'>Enroll to start your 7 - day full acess free trial</p>
            <p className='text-sm text-gray-600 pb-5'>Start March 29, 2024</p>
            <div className='flex gap-3 items-center'>
                <p className='text-base'>Price:</p>
                <p className='font-semibold text-btnBlue text-2xl'>$199</p>
            </div>
        </div>
        
    
        <Button name='Buy the course' />
    </div>
  )
}

export default CourseDetails