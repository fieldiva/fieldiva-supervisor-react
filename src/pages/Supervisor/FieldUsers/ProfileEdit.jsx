import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileEditFormSection from "./ProfileEditFormSection";

const ProfileEdit = () => {
  const [changePassword, setChangePassword] = useState(false);
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
        <div className="left md:w-[30%] lg:w-[20%] bg-white flex flex-col pb-4 px-4 rounded-md min-h-[70vh]">
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

          <div>
            <button
              className="flex items-center bg-[#F7F7F7] gap-2 border-[1.5px] border-[#0052CC] w-full py-1 px-1 text-[#000000] font-medium text-lg cursor-pointer rounded-sm"
              onClick={() => setChangePassword((prev) => !prev)}
            >
              <img src="/assets/key.svg" alt="key-icon" />
              <span>Change password</span>
            </button>
          </div>
          {changePassword && (
            <form className="space-y-4 mt-4">
              {["Password", "Confirm password"].map((label, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-[#1A1A1A]">
                    {label}
                  </label>
                  <input
                    type={
                      label.toLowerCase().includes("password")
                        ? "password"
                        : "text"
                    }
                    placeholder={`Enter the ${label.toLowerCase()}`}
                    className="mt-1 py-2 px-4 w-full border border-[#AEAEAE] rounded-md placeholder:text-[#1A1A1A] placeholder:text-sm"
                  />
                </div>
              ))}
              <button className="mt-1 py-2 px-4 w-full bg-[#0052CC] text-white text-sm rounded-md placeholder:text-[#1A1A1A] placeholder:text-sm cursor-pointer">
                Confirm
              </button>
            </form>
          )}
          <div className="bottom flex items-center gap-1 text-center md:text-left mt-4">
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
        <ProfileEditFormSection />
      </div>
    </>
  );
};

export default ProfileEdit;
