import React from 'react'
import rec55 from '../assets/Rectangle 55.png'
import courseList from '../courseList'

const ListCourses = () => {
  return (
    <div className='py-6 px-4 flex flex-col gap-4'>
        <p className='text-2xl text-btnBlue '>List Courses</p>

        
        <div className='flex gap-3 items-center'>
           <img src={rec55} alt="" className='bg-white' />
            <div className='flex flex-col gap-1'>
                <p className=' text-base font-semibold'>Slider Application</p>
                <p className='text-gray-600 text-sm  w-2/3'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        
        


    </div>
  )
}

export default ListCourses