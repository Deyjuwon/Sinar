import React from 'react'
import Button from './Button'
import logo from '../assets/sinarlogo.png'
import google from '../assets/flat-color-icons_google.png'

const SignIn = () => {
  return (
    <div className='h-screen md:h-full pt-32 md:pt-0 flex flex-col gap-5 p-4 pb-20 '>
      <div className='md:p-4 md:border md:border-gray-300 md:mt-20 md:w-2/4 md:h-fill md:m-auto md:bg-white md:rounded-xl flex flex-col gap-5'>

      
        <div className='flex flex-col items-center gap-4'> 
          <img src={logo} alt=""  />
          <h1 className=' text-3xl text-blue-txt font-medium'>Welcome back</h1>
          <p className='text-blue-txt text-sm text-center'>Glad to see you again <br /> Login to your account below</p>

        </div>
          
          <button className='w-full bg-white border border-gray-300 min-h-14 flex items-center gap-3 justify-center rounded-xl hover:bg-black text-blue-txt hover:text-white transition '> 
            <span><img src={google} alt="" /></span>
            <span className='text-sm font-semibold '>Continue with Google</span>
          </button>
          <div>
            <form action="" className='flex flex-col '>
              <label className='text-blue-txt text-sm pb-1' htmlFor="">Email</label>
              <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="email" placeholder='Enter email...' />
              <label className='text-blue-txt text-sm pb-1' htmlFor="">Password</label>
              <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="password" placeholder='Enter password...' />
              <Button name='Login' />
            </form>
          </div>
          <p className='text-blue-txt text-sm text-center '>Dont have an account? <span className='font-bold text-blue-txt text-sm '>Sign up for Free</span></p>
        </div>
    </div>
  )
}

export default SignIn