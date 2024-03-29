import React from 'react';
import rec43 from '../assets/Rectangle 43.png';
import rec431 from '../assets/Rectangle 43 (1).png';
import rec44 from '../assets/Rectangle 44.png';
import rec441 from '../assets/Rectangle 44 (1).png';
import rec45 from '../assets/Rectangle 45.png';
import rec451 from '../assets/Rectangle 45 (1).png';
import rec46 from '../assets/Rectangle 46.png';
import rec461 from '../assets/Rectangle 46 (1).png';
import rec47 from '../assets/Rectangle 47.png';
import rec471 from '../assets/Rectangle 47 (1).png';
import rec48 from '../assets/Rectangle 48.png';
import rec481 from '../assets/Rectangle 48 (1).png';
import Button from './Button';

const StartTraining = () => {
  return (
    <div className='bg-white  w-358 h-498  flex flex-col m-auto rounded-md text-center border md:w-4/5 md:h-full md:pb-10'>
      <ul className='flex flex-wrap justify-center items-center bg-white pt-2'>
        <li>
          <img src={rec45} alt="Rectangle 45" className='md:hidden' />
          <img src={rec451} alt="" className='hidden md:block' />
          
        </li>
        <li>
          <img src={rec46} alt="Rectangle 46" className='md:hidden' />
          <img src={rec461} alt="" className='hidden md:block' />
        </li>
        <li>
          <img src={rec43} alt="Rectangle 43" className='md:hidden' />
          <img src={rec431} alt="" className='hidden md:block' />
        </li>
        <li>
          <img src={rec47} alt="Rectangle 47" className='md:hidden' />
          <img src={rec471} alt="" className='hidden md:block' />
        </li>
        <li>
          <img src={rec48} alt="Rectangle 48" className='md:hidden' />
          <img src={rec481} alt="" className='hidden md:block' />
        </li>
        <li>
          <img src={rec44} alt="Rectangle 44" className='md:hidden' />
          <img src={rec441} alt="" className='hidden md:block' />
        </li>
      </ul>

      <h1 className='font-medium text-28s text-center pb-3 pt-6 '>Start training with the <br /> <span className='bg-gradient-to-r from-sinarpurple to-sinarblue inline-block text-transparent bg-clip-text'>professional</span> team</h1>
      <p className='font-medium text-base pb-3 px-7 '>Come on, it's time to start training now!</p>
      <div>
        <Button name='Start training' />
      </div>
      
    </div>
  );
};

export default StartTraining;
