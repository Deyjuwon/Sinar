import React from 'react'
import Button from './Button'
import Livechat from '../assets/live-chat 1.png';
import caliders from '../assets/callinder.png'

const LivePanel = () => {
  return (
    <div className='relative pb-44 mt-20 flex justify-center items-center'>
        <img className='' src={caliders}  alt=""  />
        <div className='bg-white flex flex-col gap-3 items-center   w-52 h-fit py-4 rounded-xl absolute top top-52 right-28 shadow-2xl md:right-80'>
            <img src={Livechat} alt="" className='w-11 h-11' />
            <p className='text-sm font-medium text-center'>Live lesson panel and chat <br /> section</p>
            <Button  name='Go to meeting' />
        </div>
    </div>
  )
}

export default LivePanel