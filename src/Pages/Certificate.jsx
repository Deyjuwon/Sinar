import NotificationHeader from "../Components/NotificationHeader";
import shield from '../assets/shield 1.png';

const Certificate = () => {
  return (
    <div className="px-4 bg-white">
      <NotificationHeader />
      <div>
        <p className="font-medium text-2xl pb-2">Certificates</p>
        <p className="pb-8 text-sm  text-slate-500">Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-4 border border-gray-300 rounded-lg w-full h-fit p-4  items-center">
            <div className="rounded-full border border-gray-300 p-3  flex items-center justify-center w-1/5" >
              <img src={shield} className="h-9 w-9" alt="" />
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-btnBlue font-medium text-16">JavaScript</p>
              <p className="text-xs  text-slate-500">Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-300 rounded-lg w-full h-fit p-4  items-center">
            <div className="rounded-full border border-gray-300 p-3  flex items-center justify-center w-1/5" >
              <img src={shield} className="h-9 w-9" alt="" />
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-btnBlue font-medium text-16">JavaScript</p>
              <p className="text-xs  text-slate-500">Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-300 rounded-lg w-full h-fit p-4  items-center">
            <div className="rounded-full border border-gray-300 p-3  flex items-center justify-center w-1/5" >
              <img src={shield} className="h-9 w-9" alt="" />
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-btnBlue font-medium text-16">JavaScript</p>
              <p className="text-xs  text-slate-500">Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-gray-300 rounded-lg w-full h-fit p-4  items-center">
            <div className="rounded-full border border-gray-300 p-3  flex items-center justify-center w-1/5" >
              <img src={shield} className="h-9 w-9" alt="" />
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-btnBlue font-medium text-16">JavaScript</p>
              <p className="text-xs  text-slate-500">Lorem ipsum dolor sit amet consectetur. In tristique facilisi a sit in quis vel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
