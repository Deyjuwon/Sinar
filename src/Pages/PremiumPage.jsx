import React from 'react'
import NotificationHeader from '../Components/NotificationHeader'
import backIcon from '../assets/Frame 45.png'

const PremiumPage = () => {
  return (
    <div className='px-4'> 
        <NotificationHeader />
        <div className='flex gap-4 items-center py-4 '>
            <img src={backIcon} alt="" className='' />
            <p className='text-base font-medium'>Turn Back</p>
        
        </div>
      
    </div>
  )
}

export default PremiumPage

