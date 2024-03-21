import React from 'react'
import Header from '../Components/Header'
import CourseSearch from '../Components/CourseSearch'
import CourseDetails from '../Components/CourseDetails'
import ListCourses from '../Components/ListCourses'

const Courses = () => {
  return (
    <div>
        <Header />
        <div className='md:w-3/4 md:m-auto'>
          <CourseSearch />
          <CourseDetails />
          <ListCourses />
        </div>
        
    </div>
  )
}

export default Courses