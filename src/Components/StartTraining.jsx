import React from 'react';
import rec43 from '../assets/Rectangle 43.png';
import rec44 from '../assets/Rectangle 44.png';
import rec45 from '../assets/Rectangle 45.png';
import rec46 from '../assets/Rectangle 46.png';
import rec47 from '../assets/Rectangle 47.png';
import rec48 from '../assets/Rectangle 48.png';

const StartTraining = () => {
  return (
    <div className='bg-white  w-10/12  flex flex-col m-auto h-96 rounded-md'>
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
      <div >
        <h1 className='bg-white'>yes</h1>
      </div>
    </div>
  );
};

export default StartTraining;
