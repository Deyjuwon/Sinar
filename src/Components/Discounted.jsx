import React from 'react'
import CourseCard from './CourseCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import discountedData  from '../discountedData';


const Discounted = () => {

  return (
    <div className='mt-14 ml-6'>
        <p className=' font-medium text-2xl pb-6 '>Discounted trainings</p>

        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={
              {
                480: {
                    slidesPerView: 1,
               
                },
                600: {
                    slidesPerView: 2
                },
                750: {
                    slidesPerView: 3
                },
                1100: {
                    slidesPerView: 4
                }
        
            }
            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            
            <div className=''>
                {discountedData.map((item) => 
                <SwiperSlide key={item.id} className='pr-64'>
                    <CourseCard   
                      course={item.course} 
                      description={item.description} 
                      likes={item.likes} 
                      profile={item.profile} 
                      views={item.views} 
                      price={item.price}
                      img_={item.img_}  
                      /> 
                </SwiperSlide>
                        
                    )}
            </div>
            
             
        </Swiper>
        
        
        
    
        
    </div>
  )
}

export default Discounted