import React from 'react'
import NotificationHeader from './NotificationHeader'
import backIcon from '../assets/Frame 45.png'
import ListCourses from './ListCourses'
import CourseDetails from './CourseDetails'
import MainCoursesDetails from './MainCoursesDetails'
import master from '../assets/Frame 33850.png'
import visa from '../assets/Frame 33851.png'
import paypal from '../assets/Frame 33852.png'
import Button from './Button'


const CoursesPayment = () => {
  return (
    <div className=' px-4'>
        <NotificationHeader />
        <div className='flex gap-4 items-center py-4 '>
            <img src={backIcon} alt="" className='' />
            <p className='text-base font-medium'>Turn Back</p>
        
        </div>
        <div>
            <MainCoursesDetails />

        </div>
        <div className='pt-10 flex flex-col gap-1'>
          <p className='text-22 text-btnBlue '>Payment Details</p>
          <p className='text-gray-600 pb-6 text-sm '>Complete Your Purchase By Providing Your Payment Details.</p>
          <div className='flex justify-between'>
            <img src={master} alt="" className='w-111 h-69' />
            <img src={visa} alt="" className='w-111 h-69'  />
            <img src={paypal} alt="" className='w-111 h-69' />
          </div>
          <div>
          <form action="" className='flex flex-col '>
            <label className='text-blue-txt text-sm pb-1 font-semibold' htmlFor="">Email Address</label>
            <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="email" placeholder='Email' />
            <label className='text-blue-txt text-sm pb-1 font-semibold' htmlFor="">Card Details</label>
            <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='000-00-00' />
            <label className='text-blue-txt text-sm pb-1 font-semibold' htmlFor="">Card Holder Name</label>
            <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='Oguzhan Yavuz' />
            <label className='text-blue-txt text-sm pb-1 font-semibold' htmlFor="">Blind Address</label>
            <div className='flex gap-3'>
              <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='Zip' />
              <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='State' />
            </div>
           
            <label className='text-blue-txt text-sm pb-1 font-semibold' htmlFor="">Discount Code</label>
            <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='0234' />
            <Button name='Pay $199' />
            
          </form>
        </div>
        </div>
    </div>
  )
}

export default CoursesPayment