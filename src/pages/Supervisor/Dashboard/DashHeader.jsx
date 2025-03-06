import { useState } from "react";
import { Menu } from "lucide-react";

const DashHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-section flex justify-between py-5 items-center">
      {/* Left Section */}
      <div className="left flex items-center">
        <a className="block w-[108px] h-[24px]">
          <img src="assets/Vector.png" alt="Logo" className="block w-full" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row items-center gap-[16px] absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 p-4 md:p-0 shadow-md md:shadow-none transition-all ${
            menuOpen ? "flex" : "hidden"
          } md:ml-6`} // Added spacing here
        >
          <li>
            <a className="text-sm px-2 py-2 bg-[#0052CC] text-[#fff] rounded-sm block">Dashboard</a>
          </li>
          <li>
            <a className="text-sm block">Project</a>
          </li>
          <li>
            <a className="text-sm block">Field users</a>
          </li>
          <li>
            <a className="text-sm block">Report</a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right">
        <ul className="flex gap-[10px] items-center">
          <li>
            <a className="block w-[28px] h-[28px]">
              <img src="assets/settings.svg" alt="Settings" className="block w-full" />
            </a>
          </li>
          <li>
            <a className="block w-[28px] h-[28px]">
              <img src="assets/warning.svg" alt="Warning" className="block w-full" />
            </a>
          </li>
          <li>
            <a className="block w-[24px] h-[24px]">
              <img src="assets/f-icon.svg" alt="Profile" className="block w-full" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashHeader;
