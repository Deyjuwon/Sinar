import React from 'react'

const Feedback = () => {
  return (
    <div className='bg-white w-full text-center p-5  h-screen flex flex-col gap-6'>
        <p className='text-base text-black-txt text-center px-10'>How likely are you to recommend UI Design Daily to your colleagues?</p>
        <div className='flex gap-4 flex-wrap justify-center'>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>1</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>2</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>3</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>4</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>5</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>6</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>7</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>8</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>9</div>
          <div className='rounded-full h-14 w-14 flex justify-center items-center border border-gray-400 text-black-txt text-2xl'>10</div>
        </div>
        
    </div>
  )
}

export default Feedback