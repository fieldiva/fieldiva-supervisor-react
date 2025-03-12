import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const FieldUsers = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <div className="flex flex-col md:flex-row items-center bg-[#F7F7F7] px-4 py-2 rounded-sm gap-6 w-full">
            <div className="left flex flex-col md:flex-row justify-between w-full md:w-[60%] items-center gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-[#333] font-medium text-xl">Field Users</h1>
                <span className="text-[#959595] text-sm">Sub heading</span>
              </div>
                 <div>
                <Link to="addNewStaff"><button className="border-[1.5px] border-[#0052CC] rounded-md py-2 px-4 text-[#333] cursor-pointer">
                  Add new staffs
                </button></Link>
              </div>
            </div>
            <div className="right w-full md:w-[40%] flex flex-col md:flex-row items-center gap-2 py-2 px-4">
              <div className="flex items-center gap-2 bg-white w-full md:w-[424px] rounded-sm py-2 px-4">
                <img src="/assets/search.svg" alt="search" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none"
                />
              </div>
              <div className="relative">
                <button
                  className="flex items-center bg-white py-2 px-4 rounded-sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img src="/assets/sort.svg" alt="sort" />
                  Sort
                </button>
                {isOpen && (
                  <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-50 z-10 px-2 py-2 text-[#333]"
                >
                  <label className="flex items-center justify-between px-4 py-2 bg-[#F7F7F7] cursor-pointer mb-2 rounded-md text-sm">
                    <span>Assigned</span>
                    <input type="radio" name="assignment" value="assigned" className="form-radio" />
                  </label>
                  
                  <label className="flex items-center justify-between px-4 py-2 bg-[#F7F7F7] cursor-pointer rounded-md text-sm">
                    <span>Not Assigned</span>
                    <input type="radio" name="assignment" value="not-assigned" className="form-radio text-sm" />
                  </label>
                </motion.div>
                
                )}
              </div>
              <button className="bg-[#0052CC] text-white py-2 px-4 md:px-8 rounded-md">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full mt-4 border-collapse text-sm md:text-base min-w-[600px]">
              <thead>
                <tr className="border-b-[1px] border-b-[#f7f5f5]">
                  <th className="p-2 text-left text-[#4A4A4A] font-normal">
                    Customer Name
                  </th>
                  <th className="p-2 text-left text-[#4A4A4A] font-normal">
                    Task Name
                  </th>
                  <th className="p-2 text-left text-[#4A4A4A] font-normal">
                    Mobile Number
                  </th>
                  <th className="p-2 text-left text-[#4A4A4A] font-normal flex items-center gap-2 md:gap-[58px]">
                    Status
                    <img src="/assets/sortArrow.svg" alt="sortArrow" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="">
                    <td className="p-2 flex items-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-full mr-2"></div>
                      <span className="text-[#333] text-sm">
                        Darlene Robertson
                      </span>
                    </td>
                    <td className="p-2 text-[#333] text-sm">
                      Technical Problem
                    </td>
                    <td className="p-2 text-[#333] text-sm">987456321</td>
                    <td className="px-2 text-[#333] text-sm status-btn">
                      <span
                        className={`px-4 md:px-6 py-1 rounded-4xl ${
                          index % 3 === 0
                            ? "bg-[#D2FDE6] text-[#1FC16B]"
                            : "bg-[#FFF3F2] text-[#D00416] text-sm"
                        }`}
                      >
                        {index % 3 === 0 ? "Completed" : "Not Visited"}
                      </span>
                    </td>
                    <td className="p-2">
                      <Link to="viewMore"><button className="border-[1.5px] border-[#0052CC] px-2 py-1 rounded-md text-[#333] bg-gray-100 text-sm cursor-pointer">
                        View More
                      </button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm md:text-base gap-2">
            <button className="border border-[#0052CC] px-4 py-1 rounded">
              Previous
            </button>
            <span>Page 1 of 10</span>
            <button className="border border-[#0052CC] px-4 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
  );
};

export default FieldUsers;
