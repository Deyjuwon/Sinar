import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Discover from '../Components/Discover'
import StartTraining from '../Components/StartTraining'
import PopularCourses from '../Components/PopularCourses'
import Discounted from '../Components/Discounted'
import Acheivement from '../Components/Acheivement'
import LivePanel from '../Components/LivePanel'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=' '>
     
        <Header />
        <Hero />
        <Discover />
        
        <StartTraining />
        <PopularCourses />
        <Discounted />
        <Acheivement />
        {/* <LivePanel /> */}
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home