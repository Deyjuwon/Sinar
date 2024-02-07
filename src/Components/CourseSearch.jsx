import React from 'react'

const CourseSearch = () => {
  return (
    <div className='flex flex-col gap-5 py-6 px-4'>
        <p className=' text-2xl'>Courses</p>
        <form action="" className=''>
            <input type="text" className='w-full h-14 rounded-xl border border-gray-300' placeholder='Search for courses ' />
        </form>
    </div>
  )
}

export default CourseSearch