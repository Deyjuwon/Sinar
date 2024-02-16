import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex justify-center items-center flex-col px-6 pt-6'>
        <h1 className='font-semibold text-2xl pb-4'>Unlock your potential with <br /><span className='flex items-center justify-center bg-gradient-to-r from-sinarblue to-sinarpurple text-transparent bg-clip-text'>Sinar Education</span></h1>
        <p className='font-medium text-sm pb-6 text-center'>Education isn't about acquiring knowledge; it's the key that opens doors to new worlds</p>
        <Button name='Start training' />
    </section>
  )
}

export default Hero