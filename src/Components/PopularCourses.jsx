import React, { useEffect, useRef, useState } from 'react';
import CourseCard from './CourseCard';
import data from '../data';
import {db} from '../config/firebase-config'
import { getDocs, collection } from 'firebase/firestore'

const PopularCourses = () => {
  const [popularList, setPopularlist] = useState([])
  const popularCollectionRef = collection(db, 'PopularCourses')
  useEffect (() => {
    const getPopularCourses  = async () =>{
      const data = await getDocs(popularCollectionRef);

      setPopularlist(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    };
    getPopularCourses()
  })

  return (
    <div className='mt-20 ml-6'>
      <p className='font-medium text-2xl pb-6'>Most popular courses</p>

      <div 
        className='flex gap-10 overflow-x-auto' // Flex container with horizontal scroll 
>

        {popularList.map((item, index) => (
          
            <CourseCard
              key={index}
              course={item.courseName}
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
