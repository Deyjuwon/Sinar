import React from 'react'

import Shimmer from './Shimmer'

const SkeletonElement = () => {
  return (
    <div className='bg-white  min-w-266  flex flex-col gap-5  px-4 rounded-xl pt-5 pb-5 mr-2  h-72'>
        <img src='' alt=""  />
        <img src='' alt="" className='absolute hidden' />
        <div className='flex items-center justify-between gap-10'>
            <div className='bg-dirty-white  min-w-fit  h-10 border shadow-lg  flex gap-2  items-center px-2  rounded-xl'>
                <img src='' alt="" className=' h-2 w-2'   />
                <p className=' text-sm font-medium'></p>
            </div>
            
            <p className='font-semibold text-2xl'></p>
        </div>

        <p className=' font-semibold text-sm w-full'></p>

        <div className='flex justify-between items-center'>
            <img src='' alt="" className='h-11 w-11' />
            <div className='flex gap-1 items-center'>
                <img src='' alt="" className='w-4 h-4' />
                <p></p>
                </div>
            <div className='flex gap-1 items-center'>
                <img src='' alt="" className='w-4 h-4' />
                <p></p>
            </div>
            <div className='flex gap-1 items-center'>
                <img src='' alt="" className='w-4 h-4' />
                <p>'</p>
            </div>

            
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonElement