import React from 'react'
import rec49 from '../assets/Rectangle 49.png';
import baghappy from '../assets/bag-happy.png';
import ellipse from '../assets/Ellipse 5.png';
import profilePhoto from '../assets/Ellipse 6.png';
import profiles from '../assets/profile.png';
import eye from '../assets/eye.png';
import like from '../assets/like.png';



const CourseCard = (props) => {
  return (
    <div className='bg-white  w-266 h-379 flex flex-col gap-4  px-4 rounded-xl pt-5 pb-4'>
        <img src={rec49} alt=""  />
        <img src={baghappy} alt="" className='absolute hidden' />
        <div className='flex items-center justify-between'>
            <div className='bg-dirty-white w-116 h-10 border shadow-lg  flex gap-3 items-center justify-center rounded-xl'>
                <img src={ellipse} alt="" className=' h-2 w-2'   />
                <p className=' text-sm font-medium'>{props.course}</p>
            </div>
            
            <p className='font-semibold text-2xl'>{props.price}</p>
        </div>

        <p className=' font-semibold text-base'>{props.description}</p>

        <div className='flex justify-between items-center'>
            <img src={profilePhoto} alt="" className='h-11 w-11' />
            <div className='flex gap-1 items-center'>
                <img src={profiles} alt="" className='w-4 h-4' />
                <p>{props.profile}</p>
                </div>
            <div className='flex gap-1 items-center'>
                <img src={eye} alt="" className='w-4 h-4' />
                <p>{props.views}</p>
            </div>
            <div className='flex gap-1 items-center'>
                <img src={like} alt="" className='w-4 h-4' />
                <p>{props.likes}</p>
            </div>

            
        </div>
    </div>
  )
}

export default CourseCard