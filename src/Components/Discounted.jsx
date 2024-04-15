import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard';
import discountedData from '../discountedData';

const Discounted = () => {
  // useRef hook to reference the flex container
  

  return (
    <div className='mt-14 ml-6'>
      <p className='font-medium text-2xl pb-6'>Discounted trainings</p>

      <div
     
        className='flex gap-10 overflow-x-auto' // Flex container with horizontal scroll
      >
        {discountedData.map((item) => (
          <CourseCard
            key={item.id}
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

export default Discounted;
