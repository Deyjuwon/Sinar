import NotificationHeader from "../Components/NotificationHeader"
import proPic from '../assets/blackman.jpeg'
import location from '../assets/Component 5.png'
import cam from '../assets/Frame 33875.png'

const Profile = () => {
  return (
    <div className="px-4 bg-white">
      <NotificationHeader />
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
    </div>
  )
}

export default Profile
