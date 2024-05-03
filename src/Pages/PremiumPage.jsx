import NotificationHeader from '../Components/NotificationHeader'
import backIcon from '../assets/Frame 45.png'
import premiumlogo from '../assets/Frame 33666.png'
import Button from '../Components/Button'
import bagcheck from '../assets/solar_bag-check-bold.png'
import Header from '../Components/Header'

const PremiumPage = () => {
  return (
    <div className=' md:h-full bg-white  md:pt-0 flex flex-col gap-5 pb-20'> 
      <div className='hidden md:block'>
        <Header />
      </div>
      <div className='md:p-4 md:border md:border-gray-300 md:mt-20 md:w-3/4 md:h-fill md:m-auto md:bg-white md:rounded-xl flex flex-col gap-5 '>
        <div className='px-4 md:hidden' >
          <NotificationHeader />
        </div>
          
        <div className='flex gap-4 items-center py-4 px-4 '>
            <img src={backIcon} alt="" className='' />
            <p className='text-base font-medium'>Turn Back</p>
        
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-white via-pink1 to-white '>
          <div className='flex flex-col justify-center items-center gap-5'>
            <img src={premiumlogo} alt="" />
            <p className='text-22 text-center font-semibold'>Become a Professional in Your Business with Sinar Education Premium!</p>
          </div>
          
          <div className='flex flex-col items-center '>
            <p className='text-sinarpurple text-2xl font-semibold'>$199</p>
            <p className='text-light-gray text-sm'>premium price</p>

          </div>
          

        </div>
        <div className='pt-6 flex justify-center flex-col items-center px-4 gap-10'>
          <Button name='Be premium' />
          <div className='flex flex-col gap-5 text-sm font-medium text-slate-500'>
            <div className='bg-bg-gray border border-gray-300 rounded-xl h-fit flex gap-5 items-center p-5'>
              <img src={bagcheck} alt="" />
              <p>Complex or Specialized Subjects: Premium content can be justified for advanced or specialized subjects that require deeper understanding or unique expertise.</p>
            </div>
            <div className='bg-bg-gray border border-gray-300 rounded-xl h-fit flex gap-5 items-center p-5'>
              <img src={bagcheck} alt="" />
              <p>Certification or Accreditation: If your platform offers certification or accreditation upon completion of courses, consider making these certification tracks part of your</p>
            </div>
            <div className='bg-bg-gray border border-gray-300 rounded-xl h-fit flex gap-5 items-center p-5'>
              <img src={bagcheck} alt="" />
              <p>Exclusive Content: Create premium content by offering exclusive access to expert-led sessions, workshops, or live Q&A sessions that delve deeper into specific topics.</p>
            </div>
            <div className='bg-bg-gray border border-gray-300 rounded-xl h-fit flex gap-5 items-center p-5'>
              <img src={bagcheck} alt="" />
              <p>Personal Development or Soft Skills: Some learners are interested in personal development topics like leadership, time management, communication skills, etc.</p>
            </div>
          </div>
        </div>

      </div>
      
      
    </div>
  )
}

export default PremiumPage

