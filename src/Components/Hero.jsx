import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex justify-center items-center flex-col px-6 pt-6'>
        <p className='font-semibold text-2xl pb-4 flex flex-col items-center justify-center  md:text-57 md:gap-7'>
          <span>Unlock your potential with</span>
          <span className=' bg-gradient-to-r from-sinarblue2 via-sinarpurple to-sinarblue text-transparent bg-clip-text  md:text-45'>Sinar Education</span>
        </p>
        <p className='font-medium text-xs pb-6 text-center md:text-sm md:w-2/5'>Education isn't about acquiring knowledge; it's the key that opens doors to new worlds, empowers individuals, and shapes a brighter future.</p>
        <Button name='Start training' />
    </section>
  )
}

export default Hero