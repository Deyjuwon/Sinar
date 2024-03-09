import React from 'react'
import NotificationHeader from './NotificationHeader'
import backIcon from '../assets/Frame 45.png'
import ListCourses from './ListCourses'

const CoursesPayment = () => {
  return (
    <div>
        <NotificationHeader />
        <div className='flex gap-4 items-center p-4 '>
            <img src={backIcon} alt="" className='' />
            <p className='text-base font-medium'>Turn Back</p>
        
        </div>
        <div>
              <ListCourses />
            </div>
    </div>
  )
}

export default CoursesPayment