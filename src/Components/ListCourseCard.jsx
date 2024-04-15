import React from 'react'
import rec55 from '../assets/Rectangle 55.png'

const ListCourseCard = (props) => {
  return (
    <div className='flex gap-2'>
        <img src={rec55} alt="" className='bg-white' />
        <div className='flex w-full flex-col gap-1'>
            <p className=' text-base font-semibold'>{props.course}</p>
            <p className='text-gray-600 text-sm  w-2/3'>{props.details}</p>
        </div>
    </div>
  )
}

export default ListCourseCard