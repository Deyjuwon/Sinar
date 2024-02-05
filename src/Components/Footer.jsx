import React from 'react'
import logo from '../assets/sinarlogo.png'
import Button from './Button'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 relative  mt-36 pb-8'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <img src={logo} alt="" className='h-16 w-32 object-contain ' />
            <p className='text-center w-4/5 font-medium  text-gray-400 '>Lorem ipsum dolor sit amet consectetur. Sagittis facilisi nunc vitae morbi odio.</p>

        </div>
        <div className='flex flex-col justify-center items-center mt-4 gap-3'>
            <p className='font-medium text-base'>Subscribe For Updates</p>
            <form action="">
                <input type="email" placeholder='Email' className='w-52 h-11 bg-transparent pl-4 border border-gray-400 rounded-tl-xl rounded-bl-xl' />
                <Button name='Subscribe' />
            </form>
            <p className='text-center w-3/4 font-medium text-xs  text-gray-400'>by subscribing you will be able to hear the latest
                news and technology updates</p>
        </div>

    </div>
  )
}

export default Footer