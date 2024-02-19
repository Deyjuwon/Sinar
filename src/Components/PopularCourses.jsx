import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard';
import data from '../data';

const PopularCourses = () => {
  
  return (
    <div className='mt-20 ml-6'>
      <p className='font-medium text-2xl pb-6'>Most popular courses</p>

      <div 
        className='flex gap-10 overflow-x-auto' // Flex container with horizontal scroll 
>

        {data.map((item, index) => (
          
            <CourseCard
              key={index}
              course={item.course}
              description={item.description}
              likes={item.likes}
              profile={item.profile}
              views={item.views}
              price={item.price}
              img_={item.img_}
            />
              ))}
      </div>
      
  
    </div>
  );
};

export default PopularCourses;
