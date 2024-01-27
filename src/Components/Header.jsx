import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

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
    
    <header>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <ul>
                {navItems.map((item, index) => (
                        <NavLink key={index} to={item.to}>
                        <li>{item.label}</li>
                        </NavLink>
                    ))}
            </ul>

        </div>
        {isOpened ? <IoMdClose className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} /> : <RxHamburgerMenu className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} />}
        <div>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </header>
  )
}

export default Header