import React, { useState } from 'react'
import Header from '../Components/Header'
import DiscoverHero from '../Components/DiscoverHero'
import DiscoverCourse from '../Components/DiscoverCourse'
import DiscoverCourses from '../Components/DiscoverCourses'

const DiscoverPage = () => {

  return (
    <div className='pb-10 '>
        <Header />
        <DiscoverHero />
        <DiscoverCourse />
        <DiscoverCourses />

        

        
    </div>
  )
}

export default DiscoverPage