import React, { useState } from 'react'
import logo from '../assets/sinarlogo.png'
import notifications from '../assets/Notification.png'
import messages from '../assets/messages.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Account = () => {
    const [isOpened, setIsOpened] = useState(false)
    

    return (
        <div>
            
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
        </div>
    )
    }

export default Account