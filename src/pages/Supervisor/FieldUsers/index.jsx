import React from "react";

const FieldUsers = () => {
  return (
    <div className="px-4 md:px-[50px] bg-gray-100 pt-[100px]">
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center bg-[#F7F7F7] px-4 py-2 rounded-sm gap-6">
            <div className="left flex flex-col md:flex-row justify-between w-full md:w-[60%] items-center gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-[#333] font-medium text-xl">field users</h1>
                <span className="text-[#959595] text-sm">Sub heading</span>
              </div>
              <div>
                <button className="border-[1.5px]  border-[#0052CC] rounded-md py-2 px-4 text-[#333]">
                  Add new staffs
                </button>
              </div>
            </div>
            <div className="right w-full md:w-[40%] flex flex-col md:flex-row items-center gap-2 py-2 px-4">
              <div className="flex items-center gap-2 bg-white w-full md:w-[424px] rounded-sm py-2 px-4">
                <img src="/assets/search.svg" alt="search" />
                <input type="text" placeholder="search" className="w-full outline-none" />
              </div>
              <button className="flex items-center bg-white py-2 px-4 rounded-sm">
                <img src="/assets/sort.svg" alt="sort" />
                sort
              </button>
              <button className="bg-[#0052CC] text-white py-2 px-4 md:px-8 rounded-md">Export</button>
            </div>
          </div>
          <table className="w-full mt-4 border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b-[1px] border-b-[#f7f5f5]">
                <th className="p-2 text-left text-[#4A4A4A] font-normal">Customer Name</th>
                <th className="p-2 text-left text-[#4A4A4A] font-normal">Task name</th>
                <th className="p-2 text-left text-[#4A4A4A] font-normal">Mobile number</th>
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
                    <span className="text-[#333]">Darlene Robertson</span>
                  </td>
                  <td className="p-2 text-[#333]">Technical problem</td>
                  <td className="p-2 text-[#333]">987456321</td>
                  <td className="px-2 text-[#333]">
                    <span
                      className={`px-4 md:px-6 py-1 rounded-4xl ${
                        index % 3 === 0 ? "bg-[#D2FDE6] text-[#1FC16B]" : "bg-[#FFF3F2] text-[#D00416]"
                      }`}
                    >
                      {index % 3 === 0 ? "Completed" : "Not visited"}
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="border-[1.5px] border-[#0052CC] px-2 py-1 rounded-md text-[#333] bg-gray-100">
                      View more
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm md:text-base gap-2">
            <button className="border border-[#0052CC] px-4 py-1 rounded">Previous</button>
            <span>Page 1 of 10</span>
            <button className="border border-[#0052CC] px-4 py-1 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldUsers;