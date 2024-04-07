import React from 'react'
import sapiens from '../assets/sapiens 1.png'
import logo from '../assets/sinarlogo.png'

const SignUp = () => {
  return (
    <div className='p-6'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt="" />
            <img src={sapiens} alt="" />
        </div>
        <div className='flex flex-col gap-3 py-5'>
          <h1 className=' text-3xl text-blue-txt font-medium'>Sign Up</h1>
          <p className='tetext-blue-txt text-base font-medium'>Enter your details below to create your account and get started.</p>
        </div>

        <form action="" className='flex flex-col'>
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Full Name</label>
          <input type="text" placeholder='Enter...' className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' />
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Date of Birth</label>
          <input type="date" name="" id=""  className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3'/>
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Nationality</label>
          <input type="text"  className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3'/>
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Password</label>
          <input type="password"  className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3'/>
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Email</label>
          <input type="email" className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' />
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Phone Number</label>
          <input type="text" className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' />
          <label htmlFor=""  className='text-blue-txt text-sm pb-1 font-semibold'>Confirm Paasword</label>
          <input type="password"  className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3'/>
        </form>
    </div>
  )
}

export default SignUp