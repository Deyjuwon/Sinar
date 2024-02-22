import React from 'react'
import CourseCard from './CourseCard';
import data from '../data';
import discountedData from '../discountedData';

const DiscoverCourses = () => {
  return (
    <div className='mt-10 ml-6 flex flex-col gap-10'>
        <div className='flex gap-10 overflow-x-auto'>

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
        <div className='flex gap-10 overflow-x-auto'>

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
  )
}

export default DiscoverCourses