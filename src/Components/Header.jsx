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
    <header className='w-full  h-32 border-2 border-emerald-600 flex items-center justify-between p-4'>
        <div>
            <img src={logo} alt="" className='h-16 w-32 object-contain ' />
        </div>
        <div>
            <ul className='hidden'>
                {navItems.map((item, index) => (
                        <NavLink key={index} to={item.to}>
                        <li>{item.label}</li>
                        </NavLink>
                    ))}
            </ul>

        </div>
        {isOpened ? <IoMdClose className='' size={25} onClick={() => setIsOpened(!isOpened)} /> : <RxHamburgerMenu className='' size={25} onClick={() => setIsOpened(!isOpened)} />}
        <div className='hidden'>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </header>
  )
}

export default Header