import React from 'react'
import sugarCube from '../assets/sugar-cube 3.png';

const Acheivement = () => {
  return (
    <div className='bg-white mt-20 w-full h-362 gap-6 flex flex-col items-center pt-8'>
        <p className='font-semibold text-2xl'>Everything is Achievement</p>
        <p className='text-gray-400 text-xs w-5/6 text-center'>Lorem ipsum dolor sit amet consectetur. Nulla vel nec morbi donec senectus pulvinar quis.</p>
        <div className='flex gap-4 items-center'>
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-32 bg-gradient-to-r from-sinarpurple to-sinarblue inline-block text-transparent bg-clip-text'>3000+</p>
                <p className='font-medium text-sm'>Learners</p>
            </div>
            <img src={sugarCube} alt="" className='w-11 h-11' />
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-32 text-sinarpurple bg-gradient-to-r from-sinarpurple to-sinarblue inline-block text-transparent bg-clip-text'>100+</p>
                <p className='font-medium text-sm'>Courses</p>
            </div>
        </div>

        <div className='flex gap-4 items-center'>
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-32 text-sinarpurple bg-gradient-to-r from-sinarpurple to-sinarblue inline-block text-transparent bg-clip-text'>25+</p>
                <p className='font-medium text-sm'>Years of service</p>
            </div>
            <img src={sugarCube} alt="" className='w-11 h-11' />
            <div className='flex flex-col items-center'>
                <p className='font-semibold text-32 text-sinarpurple bg-gradient-to-r from-sinarpurple to-sinarblue inline-block text-transparent bg-clip-text'>150+</p>
                <p className='font-medium text-sm'>Countries connected</p>
            </div>
            
        </div>

    </div>
  )
}

export default Acheivement