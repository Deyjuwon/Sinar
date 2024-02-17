import React from 'react'
import Header from '../Components/Header'
import CourseSearch from '../Components/CourseSearch'
import CourseDetails from '../Components/CourseDetails'
import ListCourses from '../Components/ListCourses'

const Courses = () => {
  return (
    <div>
        <Header />
        <CourseSearch />
        <CourseDetails />
        <ListCourses />
    </div>
  )
}

export default Courses