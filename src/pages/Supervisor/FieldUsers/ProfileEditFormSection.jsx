import React from "react";

const ProfileEditFormSection = () => {
  return (
    <div className="right md:w-[60%] lg:w-[70%] bg-white rounded-md">
      <div className="px-4 py-4">
        <form className="space-y-4">
          {[
            "User name",
            "Staff name",
            "Designation",
            "Add mobile number",
          ].map((label, index) => (
            <div key={index}>
              <label className="block text-xl font-medium text-[#1A1A1A]">
                {label}
              </label>
              <input
                type={
                  label.toLowerCase().includes("password") ? "password" : "text"
                }
                placeholder={`Enter the ${label.toLowerCase()}`}
                className="mt-1 py-2 px-4 w-full border border-[#AEAEAE] rounded-md placeholder:text-[#1A1A1A] placeholder:text-sm"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ProfileEditFormSection;
