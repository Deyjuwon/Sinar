import React from 'react'
import umbrella from '../assets/umbrella.png';

const DiscoverHero = () => {
  return (
    <div className='w-11/12 h-284 rounded-lg m-auto bg-gradient-to-r from-bg-disc1 via-disc2 to-disc4 relative' >
        <p className='text-white text-3xl pt-10 text-center'>Discover the course <br /> you are looking for</p>
        <img src={umbrella} alt="" className='absolute top-0' />
        <img src={umbrella} alt="" className='absolute top-4 left-40' />

    </div>
  )
}

export default DiscoverHero