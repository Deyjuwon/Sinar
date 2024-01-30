import React from 'react'
import CourseCard from './CourseCard'

const PopularCourses = () => {
  return (
    <div className='mt-20 ml-8'>
        <p className=' font-medium text-2xl pb-6 '>Most popular courses</p>
        <CourseCard />
    </div>
  )
}

export default PopularCourses