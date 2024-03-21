import React from 'react'
import rec55 from '../assets/Rectangle 55.png'
import courseList from '../courseList'
import arrow from '../assets/arrow-circle-right.png'
import sparkle1 from '../assets/sparkler (1) 6.png'
import sparkle2 from '../assets/sparkler (1) 1.png'
import ListCourseCard from './ListCourseCard'

const ListCourses = () => {
  return (
    <div className='py-6 px-4 flex flex-col gap-4'>
        <p className='text-2xl text-btnBlue '>List Courses</p>
        <div className='flex gap-10 flex-col '>
          {
            courseList.map((item, index) => (
              <ListCourseCard
                key={index}
                course={item.course}
                details={item.details}
              />
            ) )
          }
        </div>
        
        
        {/* <div className='flex gap-3 items-center'>
           <img src={rec55} alt="" className='bg-white' />
            <div className='flex flex-col gap-1'>
                <p className=' text-base font-semibold'>Slider Application</p>
                <p className='text-gray-600 text-sm  w-2/3'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div> */}

        <div className='w-full h-60  mt-4 bg-gradient-to-b from-bg-purple  to-bg-blue rounded-lg flex flex-col gap-4 text-white pt-10 pl-6 relative'>
            <p className='text-sm'>ONLINE COURSE</p>
            <p className=' text-2xl'>Sharpen Your Skills with <br /> Professional Online Courses</p>

            <button className='bg-btnBlue w-36 h-12 rounded-3xl border border-white flex items-center text-base justify-around'><span>Join Now</span><span><img src={arrow} alt="" /></span></button>
            <img src={sparkle1} alt="" className='absolute left-80 top-2' />
            <img src={sparkle2} alt="" className='absolute left-72 top-40' />
            <img src={sparkle1} alt="" className='absolute  left-44  top-44' />
                

            

        </div>
        
        


    </div>
  )
}

export default ListCourses