import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/sinarlogo.png'

const Header = () => {

    const [isOpened, setIsOpened] = useState(false)

    const navItems = [
    { to: '/', label: 'Home' },
    { to: '/Courses', label: 'Courses' },
    { to: '/Discover', label: 'Discover' },
    { to: '/LiveLessons', label: 'Live lessons' },
    { to: '/MyContents', label: 'My Contents' },
    ];

  return (
    <header className='w-full  h-32  flex items-center justify-between p-6'>
        <div>
            <img src={logo} alt="" className='h-16 w-32 object-contain ' />
        </div>
        <div>
            <ul className='hidden md:flex text-16 font-medium items-center gap-10 text-gray-500  cursor-pointer'>
                {navItems.map((item, index) => (
                        <NavLink key={index} to={item.to}>
                        <li className='hover:text-black'>{item.label}</li>
                        </NavLink>
                    ))}
            </ul>

        </div>
        <div className='flex items-center gap-8'>
            <div className='hidden md:flex items-center gap-2'>
                <div>
                    <Link to='/login' className='w-24 h-11 bg-transparent rounded-xl font-medium cursor-pointer'>Log in</Link>
                </div>
                <button className='w-24 h-11 bg-white rounded-xl font-medium border border-gray-300 cursor-pointer'>Sign Up</button>
            </div>
            
            {isOpened ? <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden'><IoMdClose className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div> : <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden'><RxHamburgerMenu className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div>}
        </div>
       
        
    </header>
  )
}

export default Header