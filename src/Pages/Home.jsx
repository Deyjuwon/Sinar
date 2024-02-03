import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Discover from '../Components/Discover'
import StartTraining from '../Components/StartTraining'
import PopularCourses from '../Components/PopularCourses'
import Discounted from '../Components/Discounted'
import Acheivement from '../Components/Acheivement'
import LivePanel from '../Components/LivePanel'

const Home = () => {
  return (
    <div className='bg-blue-200'>
     
        <Header />
        <Hero />
        <Discover />
        
        <StartTraining />
        <PopularCourses />
        <Discounted />
        <Acheivement />
        <LivePanel />
    </div>
  )
}

export default Home