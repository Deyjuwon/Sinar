import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../data';

const PopularCourses = () => {
  // useRef hook to reference the flex container
  const containerRef = useRef(null);
  // State to track the starting position of touch/mouse event
  const [startX, setStartX] = useState(0);

  // Function to handle touch/mouse start event
  const handleStart = (e) => {
    setStartX(e.pageX || e.touches[0].pageX);
  };

  // Function to handle touch/mouse end event and swipe detection
  const handleEnd = (e) => {
    const endX = e.pageX || e.changedTouches[0].pageX;
    const difference = startX - endX;

    // Set the threshold for swipe action
    const threshold = 100;

    // If the swipe distance is greater than the threshold, move the container
    if (Math.abs(difference) > threshold) {
      // Move left if swiping left, otherwise move right
      if (difference > 0) {
        containerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
      } else {
        containerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
      }
    }
  };
  return (
    <div className='mt-20 ml-6'>
      <p className='font-medium text-2xl pb-6'>Most popular courses</p>

      <div ref={containerRef} // Reference to the flex container
        onTouchStart={handleStart} // Touch start event
        onTouchEnd={handleEnd} // Touch end event
        onMouseDown={handleStart} // Mouse down event
        onMouseUp={handleEnd} // Mouse up event
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
