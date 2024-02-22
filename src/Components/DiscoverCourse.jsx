import React from 'react'
import Button from './Button'
import note from '../assets/note-2.png';
import arrowDown from '../assets/arrow-down.png';
import securityTime from '../assets/security-time.png';
import book from '../assets/book.png';



const DiscoverCourse = () => {
  return (
    <div className='bg-white w-11/12 min-h-80  mt-10 flex flex-col gap-7 p-5 m-auto rounded-lg'>
      <div className='w-full h-14 border border-gray-300 p-4 rounded-lg bg-disc-blue text-black-txt flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <img src={book} alt="" />
          <p className='text-base'>Education</p>
        </div>
        <img src={arrowDown} alt="" />
      </div>
      <div className='w-full h-14 border border-gray-300 p-4 rounded-lg bg-disc-blue text-black-txt flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <img src={securityTime} alt="" />
          <p className='text-base'>Education time</p>
        </div>
        <img src={arrowDown} alt="" />
      </div>
      <div className='w-full h-14 border border-gray-300 p-4 rounded-lg bg-disc-blue text-black-txt flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <img src={note} alt="" />
          <p className='text-base'>Courses</p>
        </div>
        <img src={arrowDown} alt="" />
      </div>

      <Button name='Find me a course' />
 
    </div>
  )
}

export default DiscoverCourse