import React from 'react'
import frame102 from '../assets/Frame 102.png'
import stars from '../assets/Frame 33590.png'
import Button from './Button'
import MainCoursesDetails from './MainCoursesDetails'

const CourseDetails = () => {
  return (
    <div className='flex flex-col gap-4 py-6 px-4'>
        <p className='text-2xl text-btnBlue '>Detail Courses</p>
        <MainCoursesDetails />
        
    
        <Button name='Buy the course' />
    </div>
  )
}

export default CourseDetails