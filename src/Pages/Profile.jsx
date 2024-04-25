import NotificationHeader from "../Components/NotificationHeader"
import proPic from '../assets/blackman.jpeg'
import location from '../assets/Component 5.png'
import cam from '../assets/Frame 33875.png'
import progress from '../assets/Frame 33685.png'
import cbanner from '../assets/Rectangle 59.png'
import progress20 from '../assets/Frame 33685 (3).png'
import progress18 from '../assets/Frame 33685 (4).png'
import { ProgressBar } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import arrowup from '../assets/Directing the arrow up-cuate 1.png'
import rec58 from '../assets/Rectangle 58.png'
import rec581 from '../assets/Rectangle 58 (1).png'
import rec582 from '../assets/Rectangle 58 (2).png'
import rec583 from '../assets/Rectangle 58 (3).png'
import ongoing from '../assets/Frame 33692.png'
import complete from '../assets/Frame 33692 (1).png'
import certificate from '../assets/Frame 33692 (2).png'
import hourspent from '../assets/Frame 33692 (3).png'

const Profile = () => {
  return (
    <div className="px-4 bg-white">
      <NotificationHeader />
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 border border-gray-300 rounded-lg w-fit h-fit items-center p-4">
            <img className="h-10 rounded-full w-10 object-cover relative " src={proPic} alt="" />
            <img src={cam} className="absolute left-16 top-44" alt="" />
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Adejuwon Temitayo</p>
                <span className="flex gap-2">
                    <img src={location} alt="" />
                    <p className="text-xs text-slate-500">Lagos / Nigeria</p>
                </span>
                
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-btnBlue ">Continue Learning</h1>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">UI/UX Design</p>
                        <p className="text-xs text-slate-500">12/16 Lessons</p>
                    </div>
                </div>
                <img src={progress} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">Business</p>
                        <p className="text-xs text-slate-500">6/16 Lessons</p>
                    </div>
                </div>
                <img src={progress20} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">JavaScript</p>
                        <p className="text-xs text-slate-500">12/16 Lessons</p>
                    </div>
                </div>
                <img src={progress} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">Music</p>
                        <p className="text-xs text-slate-500">5/16 Lessons</p>
                    </div>
                </div>
                <img src={progress18} alt="" />

            </div>
        </div>

        <div>
            <p className="text-2xl text-btnBlue mb-4">Course Topic</p>
            <div className="border border-gray-300 rounded-lg w-full h-fit px-4 py-5 mb-5">
                <p className="text-3xl text-btnBlue font-semibold">42</p>
                <p className="pb-3">Total Course</p>
                
                <ProgressBar className='h-10 '>
                    <ProgressBar variant="" now={50} key={1} className='h-20 bg-prblue'  />
                    <ProgressBar variant="" now={20} key={2} className='bg-prdark' />
                    <ProgressBar  variant="" now={20} key={3} className='bg-prgreen' />
                    <ProgressBar  variant="" now={20} key={3} className='bg-prpurple' />

                </ProgressBar>
                <img className="m-auto pt-3" src={arrowup} alt="" />
                <div className="flex flex-col gap-3 p
                t-5">
                    <div className="flex gap-3">
                        <img className="object-cover" src={rec58} alt="" />
                        <p>UI/UX Design (%50)</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="object-cover" src={rec581} alt="" />
                        <p>Bussiness (%20)</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="object-cover" src={rec582} alt="" />
                        <p>Music (%20)</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="object-cover"src={rec583} alt="" />
                        <p>JavaScript (%20)</p>
                    </div>
                </div>
                    
                
                
            </div>
        </div>

        <div className="pb-10">
            <p className="text-2xl text-btnBlue pb-5">Dashboard</p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <div className="border border-gray-300 rounded-lg h-fit flex flex-col items-center justify-center py-4 gap-3 w-full">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <img src={ongoing} alt="" />
                            <p>Ongoing</p>
                        </div>
                        <p className="text-32 text-btnBlue">5</p>
                    </div>
                    <div className="border border-gray-300 rounded-lg h-fit flex flex-col items-center justify-center py-4 gap-3 w-full">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <img src={complete} alt="" />
                            <p>Complete</p>
                        </div>
                        <p className="text-32 text-btnBlue">25</p>

                    </div>

                </div>
                <div className="flex gap-3">
                    <div className="border border-gray-300 rounded-lg h-fit flex flex-col items-center justify-center py-4 gap-3 w-full">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <img src={certificate} alt="" />
                                <p>Certificate</p>
                            </div>
                            <p className="text-32 text-btnBlue">15</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg h-fit flex flex-col items-center justify-center py-4 gap-3 w-full">
                            <div className="flex flex-col items-center justify-center gap-1"> 
                                <img src={hourspent} alt="" />
                                <p>Hour Spent</p>
                            </div>
                            <p className="text-32 text-btnBlue">200</p>
                        </div>

                </div>

                    
                    </div>
                
                <div>

                </div>
                

            </div>
            

      </div>
      
    </div>
  )
}

export default Profile
