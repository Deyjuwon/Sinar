import React from 'react'
import rec49 from '../assets/Rectangle 49.png';
import baghappy from '../assets/bag-happy.png';
import ellipse from '../assets/Ellipse 5.png';
import profilePhoto from '../assets/Ellipse 6.png';
import profile from '../assets/profile.png';
import eye from '../assets/eye.png';
import like from '../assets/like.png';



const CourseCard = () => {
  return (
    <div className='bg-white  w-72 h-fit flex flex-col gap-5  px-4 rounded-xl pt-5 pb-4'>
        <img src={rec49} alt=""  />
        <img src={baghappy} alt="" className='absolute hidden' />
        <div className='flex items-center justify-between'>
            <div className='bg-dirty-white py-3 px-2 border shadow-lg  flex gap-3 items-center rounded-2xl'>
                <img src={ellipse} alt="" className=' h-2 w-2'   />
                <p className=' text-base font-medium'>Web Design</p>
            </div>
            
            <p className='font-semibold text-2xl'>$150</p>
        </div>

        <p className=' font-semibold text-base'>Launch career as a web designer and learning more.</p>

        <div className='flex justify-between items-center'>
            <img src={profilePhoto} alt="" className='h-11 w-11' />
            <div className='flex gap-1 items-center'>
                <img src={profile} alt="" className='w-4 h-4' />
                <p>5.3k</p>
                </div>
            <div className='flex gap-1 items-center'>
                <img src={eye} alt="" className='w-4 h-4' />
                <p>3.2k</p>
            </div>
            <div className='flex gap-1 items-center'>
                <img src={like} alt="" className='w-4 h-4' />
                <p>128</p>
            </div>

            
        </div>
    </div>
  )
}

export default CourseCard