import  { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import {db} from '../config/firebase-config'
import { getDocs, collection } from 'firebase/firestore'
import SkeletonElement from './Skeleton/SkeletonElement';

const PopularCourses = () => {
  const [popularList, setPopularlist] = useState([])
  const popularCollectionRef = collection(db, 'PopularCourses')
  const [loading, setLoading] = useState(false)


  useEffect (() => {
    const getPopularCourses  = async () =>{
      const data = await getDocs(popularCollectionRef);

      setPopularlist(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setLoading(true);
    };
    getPopularCourses()
   
  }, [])

  return (
    <div className='mt-20 ml-6'>
      <p className='font-medium text-2xl pb-6'>Most popular courses</p>

      <div 
        className='flex gap-10 overflow-x-auto' // Flex container with horizontal scroll 
>

        {loading ? popularList.map((item, index) => (
          
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
              )) : [1,2,3, 4, 5, 6].map(n => <SkeletonElement key={n} />)}
      </div>
      
  
    </div>
  );
};

export default PopularCourses;
