import React from 'react';
import rec43 from '../assets/Rectangle 43.png';
import rec44 from '../assets/Rectangle 44.png';
import rec45 from '../assets/Rectangle 45.png';
import rec46 from '../assets/Rectangle 46.png';
import rec47 from '../assets/Rectangle 47.png';
import rec48 from '../assets/Rectangle 48.png';
import Button from './Button';

const StartTraining = () => {
  return (
    <div className='bg-white  w-358 h-498  flex flex-col m-auto rounded-md text-center border md:w-4/5'>
      <ul className='flex flex-wrap justify-center items-center bg-white pt-2'>
        <li>
          <img src={rec45} alt="Rectangle 45" className='' />
        </li>
        <li>
          <img src={rec46} alt="Rectangle 46" className='' />
        </li>
        <li>
          <img src={rec43} alt="Rectangle 43" className='' />
        </li>
        <li>
          <img src={rec47} alt="Rectangle 47" className='' />
        </li>
        <li>
          <img src={rec48} alt="Rectangle 48" className='' />
        </li>
        <li>
          <img src={rec44} alt="Rectangle 44" className='' />
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
