import NotificationHeader from "../Components/NotificationHeader"
import shield from '../assets/shield 1.png'


const Certificate = () => {
  return (
    <div className="px-4">
        <NotificationHeader />
        <div>
            <p className="font-medium text-2xl pb-6'">Certificate</p>
            <p>Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
            <div className="flex gap-4 border border-gray-300 rounded-lg w-fit h-fit items-center p-4">
                <div className="border border-gray-300 p-3 rounded-full ">
                    <img className="object-cover w-9 h-9" src={shield} alt="" />
                </div>
                <div className="flex flex-col gap-2 ">
                    <p>JavaScript</p>
                    <p>Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Certificate
