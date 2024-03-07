import React, { useState } from 'react'
import logo from '../assets/sinarlogo.png'
import notifications from '../assets/Notification.png'
import messages from '../assets/messages.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import genProfile from '../assets/genProfile.png'
import Button from './Button';
import NotificationHeader from './NotificationHeader';


const Account = () => {
    
    

    return (
        <div className='px-4'>
            <NotificationHeader />
                
            <div className='flex flex-col gap-2 items-center'>
                <img src={genProfile} alt="" />
                <h1 className=' text-2xl text-blue-txt font-semibold'>Public profile</h1>
                <p className='text-blue-txt text-sm text-center'>Add Information about yourself</p>
            </div>
            <div>
                <form action="" className='flex flex-col '>
                    <label className='text-blue-txt text-sm pb-1' htmlFor="">Name</label>
                    <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="text" placeholder='' />
                    <label className='text-blue-txt text-sm pb-1' htmlFor="">Country</label>
                    <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='' />
                    <label className='text-blue-txt text-sm pb-1' htmlFor="">Email Address</label>
                    <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="email" placeholder='' />
                    <label className='text-blue-txt text-sm pb-1' htmlFor="">New password</label>
                    <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="password" placeholder='' />
                    <label className='text-blue-txt text-sm pb-1' htmlFor="">New password repeat</label>
                    <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-4 outline-none pl-3' type="password" placeholder='' />
                    <Button name='Change password' />
                </form>
            </div>

        </div>
    )
    }

export default Account