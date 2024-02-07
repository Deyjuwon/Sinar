import React from 'react'
import Searchicon from '../assets/Search.png'

const CourseSearch = () => {
  return (
    <div className='flex flex-col gap-5 py-6 px-4'>
        <p className=' text-2xl'>Courses</p>
        <form action="" className='relative'>
            <input type="text" className='w-full h-14 rounded-xl border outline-none border-gray-300 pl-10' placeholder='Search for courses ' />
            <img src={Searchicon} className='absolute top-5 left-5' alt="" />

        </form>
    </div>
  )
}

export default CourseSearch