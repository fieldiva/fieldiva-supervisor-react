import { Link } from "react-router-dom";
import ProfileFormSection from "./ProfileFormSection";

const Profile = () => {
  return (
    <>
      <div className="bg-white flex gap-2 py-2 px-2 items-center rounded-md">
        <Link to="/supervisor/fieldUsers">
          <div className="left">
            <img src="/assets/back-icon.svg" alt="back-icon" />
          </div>
        </Link>
        <div className="right flex flex-col justify-center">
          <h1 className="text-[#333333] font-medium text-lg">Profile</h1>
          <span className="text-[#959595] text-sm">Manage your profile</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between py-[16px]">
        <div className="left md:w-[30%] lg:w-[20%] bg-white flex flex-col justify-between pb-4 px-4 rounded-md min-h-[70vh]">
          <div className="top py-4">
            <div className="profile flex justify-center">
              <img
                src="/assets/Ellipse.svg"
                alt="profile-icon"
                className="mx-auto w-[30%]"
              />
            </div>
            <h1 className="text-[#333333] font-medium text-xl mt-2">
              Name of field user
            </h1>
            <div className="flex mt-2">
              <button className="bg-[#F7F7F7] flex px-2 py-1 rounded-sm gap-2 text-sm items-center">
                #6646544664654
                <img src="/assets/copy-icon.svg" alt="copy-icon" />
              </button>
            </div>
          </div>
          <div className="bottom flex items-center gap-1 text-center md:text-left">
            <div>
              <img src="/assets/tick.svg" alt="tick-icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#000] text-sm">
                Account created on 15 Feb
              </span>
              <span className="text-[#000] text-sm">2025, 02:45 AM</span>
            </div>
          </div>
        </div>
        <ProfileFormSection />
      </div>
    </>
  );
};

export default Profile;
