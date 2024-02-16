import React from 'react'
import Header from '../Components/Header'
import CourseSearch from '../Components/CourseSearch'
import CourseDetails from '../Components/CourseDetails'

const Courses = () => {
  return (
    <div>
        <Header />
        <CourseSearch />
        <CourseDetails />
    </div>
  )
}

export default Courses