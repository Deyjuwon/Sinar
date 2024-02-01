import React from 'react'
import CourseCard from './CourseCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import data  from '../data';


const PopularCourses = () => {


  return (
    <div className='mt-20 ml-6'>
        <p className=' font-medium text-2xl pb-6 '>Most popular courses</p>

        <Swiper
            spaceBetween={200}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            
            <div className=''>
                {data.map((item, index) => 
                <SwiperSlide>
                    <CourseCard key={index}  course={item.course} description={item.description} likes={item.likes} profile={item.profile} views={item.views} price={item.price}  /> 
                </SwiperSlide>
                        
                    )}
            </div>
            
             
        </Swiper>
        <div className='flex gap-4'>
            

        </div>
        
        
    
        
    </div>
  )
}

export default PopularCourses