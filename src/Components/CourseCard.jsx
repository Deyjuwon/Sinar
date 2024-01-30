import React from 'react'
import rec49 from '../assets/Rectangle 49.png';
import baghappy from '../assets/bag-happy.png';
import ellipse from '../assets/Ellipse 5.png';

const CourseCard = () => {
  return (
    <div className='bg-white  w-72 h-96 flex flex-col gap-5  px-4 rounded-xl pt-5'>
        <img src={rec49} alt=""  />
        <img src={baghappy} alt="" className='absolute hidden' />
        <div className='flex items-center justify-between'>
            <div className='bg-gray p-3 border border-black flex gap-3 items-center rounded-2xl'>
                <img src={ellipse} alt="" className=' h-2 w-2'   />
                <p className='text-lg font-medium'>Web Design</p>
            </div>
            
            <p className='font-semibold text-2xl'>$150</p>
        </div>

        <p className=' font-semibold text-base'>Launch career as a web designer and learning more.</p>

        <div className='flex'>
            <img src="" alt="" />
            <p>5.3k</p>
            <p>3.2k</p>
            <p>128</p>
            
        </div>
    </div>
  )
}

export default CourseCard