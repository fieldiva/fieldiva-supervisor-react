import { useState } from "react";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeMenu,
  changeSubMenu,
} from "../../../Redux/Reducers/HeaderReducer";

const DashHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = useSelector((state) => state?.header?.menu);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-section flex justify-between py-5 items-center bg-gray-100 px-[50px] fixed w-full z-10">
      {/* Left Section */}
      <div className="left flex items-center">
        <a className="block w-[108px] h-[24px]">
          <img src="/assets/Vector.png" alt="Logo" className="block w-full" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row items-center gap-[16px] absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 p-4 md:p-0 shadow-md md:shadow-none transition-all ${
            menuOpen ? "flex" : "hidden"
          } md:ml-6`} // Added spacing here
        >
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("/supervisor");
              dispatch(changeMenu("supervisor"));
              dispatch(changeSubMenu("mapView"));
            }}
          >
            <a
              className={`text-sm rounded-sm block ${
                menu === "supervisor"
                  ? "bg-[#0052CC] text-[#fff] px-2 py-2"
                  : ""
              }`}
            >
              Dashboard
            </a>
          </li>
          <li
            className={`cursor-pointer`}
            onClick={() => {
              navigate("projects/mapView");
              dispatch(changeMenu("project"));
            }}
          >
            <a
              className={`text-sm rounded-sm block ${
                ["project", "listView", "mapView"].includes(menu)
                  ? "bg-[#0052CC] text-[#fff] px-2 py-2"
                  : ""
              }`}
            >
              Project
            </a>
          </li>
          <li
            className={`cursor-pointer`}
            onClick={() => {
              navigate("fieldUsers");
              dispatch(changeMenu("fieldUsers"));
            }}
          >
            <a
              className={`text-sm rounded-sm block ${
                ["fieldUsers", "addNewStaff", "viewMore"].includes(menu)
                  ? "bg-[#0052CC] text-[#fff] px-2 py-2"
                  : ""
              }`}
            >
              Field users
            </a>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("report");
              dispatch(changeMenu("report"));
            }}
          >
            <a
              className={`text-sm rounded-sm block ${
                menu === "report"
                  ? "bg-[#0052CC] text-[#fff] px-2 py-2"
                  : ""
              }`}
            >
              Report
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right">
        <ul className="flex gap-[10px] items-center">
          <li>
            <a className="block w-[28px] h-[28px]">
              <img
                src="/assets/settings.svg"
                alt="Settings"
                className="block w-full"
              />
            </a>
          </li>
          <li>
            <a className="block w-[28px] h-[28px]">
              <img
                src="/assets/warning.svg"
                alt="Warning"
                className="block w-full"
              />
            </a>
          </li>
          <li>
            <a className="block w-[24px] h-[24px]">
              <img
                src="/assets/f-icon.svg"
                alt="Profile"
                className="block w-full"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashHeader;
