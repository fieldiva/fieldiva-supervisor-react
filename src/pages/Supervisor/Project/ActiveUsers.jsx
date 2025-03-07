import React from "react";

const ActiveUsers = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow-md pt-[100px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">Active Users</h2>
          <span className="text-sm text-[#959595]">Sub heading</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="w-[32px]">
                <img src="/assets/searchBar.svg" alt="search" />
            </span>
            <span className="w-[32px]">
                <img src="/assets/filter.svg" alt="filter" />
            </span>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {[...Array(10)].map((_, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 text-white flex items-center justify-center rounded-full">
                F
              </div>
              <div>
                <p className="font-semibold">Active name</p>
                <p className="text-xs bg-white text-gray-500 py-[2px] px-[6px] rounded-sm">Assigned 100</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                Pending 50
              </span>
              <span
                className={`w-3 h-3 rounded-full ${
                  index % 2 === 0 ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsers;
