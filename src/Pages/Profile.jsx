import NotificationHeader from "../Components/NotificationHeader"
import proPic from '../assets/blackman.jpeg'
import location from '../assets/Component 5.png'
import cam from '../assets/Frame 33875.png'
import progress from '../assets/Frame 33685.png'
import cbanner from '../assets/Rectangle 59.png'
import progress20 from '../assets/Frame 33685 (3).png'
import progress18 from '../assets/Frame 33685 (4).png'

const Profile = () => {
  return (
    <div className="px-4 bg-white">
      <NotificationHeader />
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 border border-gray-300 rounded-lg w-fit h-fit items-center p-4">
            <img className="h-10 rounded-full w-10 object-cover relative " src={proPic} alt="" />
            <img src={cam} className="absolute left-16 top-44" alt="" />
            <div className="flex flex-col gap-2">
                <p className="text-sm ">Adejuwon Temitayo</p>
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
                        <p className="text-sm">UI/UX Design</p>
                        <p className="text-xs text-slate-500">12/16 Lessons</p>
                    </div>
                </div>
                <img src={progress} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Business</p>
                        <p className="text-xs text-slate-500">6/16 Lessons</p>
                    </div>
                </div>
                <img src={progress20} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">JavaScript</p>
                        <p className="text-xs text-slate-500">12/16 Lessons</p>
                    </div>
                </div>
                <img src={progress} alt="" />

            </div>
            <div className="flex justify-between border border-gray-300 rounded-lg w-full h-fit items-center p-6">
                <div className="flex gap-5 items-center">
                    <img src={cbanner} alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Music</p>
                        <p className="text-xs text-slate-500">5/16 Lessons</p>
                    </div>
                </div>
                <img src={progress18} alt="" />

            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Profile
