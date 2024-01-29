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
    <div className='bg-white  w-10/12  flex flex-col m-auto h-full rounded-md text-center border pb-6'>
      <ul className='flex flex-wrap bg-white p-2'>
        <li>
          <img src={rec45} alt="Rectangle 45" />
        </li>
        <li>
          <img src={rec46} alt="Rectangle 46" />
        </li>
        <li>
          <img src={rec43} alt="Rectangle 43" />
        </li>
        <li>
          <img src={rec47} alt="Rectangle 47" />
        </li>
        <li>
          <img src={rec48} alt="Rectangle 48" />
        </li>
        <li>
          <img src={rec44} alt="Rectangle 44" />
        </li>
      </ul>

      <h1 className='font-medium text-3xl  text-center pb-6 pt-6'>Start training with the <br /> professional team</h1>
      <p className='font-medium text-base pb-6 px-7 '>Come on, it's time to stat training now!</p>
      <div>
        <Button name='Start training' />
      </div>
      
    </div>
  );
};

export default StartTraining;
