import React from 'react'
import './SkeletonElement.css'
import Shimmer from './Shimmer'

const SkeletonElement = () => {
  return (
    <div className='animate-pulse bg-white  min-w-266  flex flex-col gap-5  px-4 rounded-xl pt-5 pb-5 mr-2  h-fit'>
      
        <div className=' bg-gray-300 w-60 rounded-2xl h-36'></div>
        <img src='' alt="" className='absolute hidden' />
        <div className='flex justify-between'>
            <p className='h-7 w-20 bg-gray-300 rounded-lg'></p>
            <p className='h-7 w-20 bg-gray-300 rounded-lg'></p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='h-3 w-full bg-gray-300'></p>
            <p className='h-3 w-1/2 bg-gray-300'></p>

        </div>
        <div className='flex items-center justify-between'>
            <p className='rounded-full h-11 w-11 bg-gray-300' ></p>
            <p className='h-3 w-8 bg-gray-300'></p>
            <p className='h-3 w-8 bg-gray-300'></p>
            <p className='h-3 w-8 bg-gray-300'></p>
        </div>
        

        

        
        <Shimmer />
    </div>
  )
}

export default SkeletonElement