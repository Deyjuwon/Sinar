import React, { useState } from 'react'
import logo from '../assets/sinarlogo.png'
import notifications from '../assets/Notification.png'
import messages from '../assets/messages.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import genProfile from '../assets/genProfile.png'
import Button from './Button';


const Account = () => {
    const [isOpened, setIsOpened] = useState(false)
    

    return (
        <div className='px-4'>
            
            <header className='w-full  h-32  flex items-center justify-between p-4'>

                {isOpened ? <div className='bg-white rounded-full flex items-center justify-center h-11 w-11'><IoMdClose className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div> : <div className='bg-white rounded-full flex items-center justify-center h-11 w-11'><RxHamburgerMenu className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div>}
                <div>
                    <img src={logo} alt="" className='h-16 w-32 object-contain ' />
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='relative'>
                        <img src={messages} className='h-6 w-6' alt="" />
                        <div className='rounded-full bg-red-600 text-white h-3 w-3 flex text-6 font-medium items-center justify-center absolute bottom-4 right-0'>1</div>
                    </div>
                    <div className='relative'>
                        <img src={notifications} alt="" className=' h-6 w-6'  />
                        <div className='rounded-full bg-red-600 text-white h-3 w-3 text-xs flex items-center justify-center absolute bottom-4 right-0 text-6 font-medium'>2</div>
                    </div>
                    
                    
                </div>
                
                
        </header>
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
                <input className='w-full bg-white border border-gray-300 h-14 rounded-xl mb-8 outline-none pl-3' type="text" placeholder='Ent' />
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