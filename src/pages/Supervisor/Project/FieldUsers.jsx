import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAssignTask } from "../../../Redux/Reducers/allModalReducer";

const FieldUsers = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 rounded-sm mb-4 mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Field users</h2>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="selected" className="w-4 h-4" />
          <label htmlFor="selected" className="text-sm">
            Selected
          </label>
        </div>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 rounded-md text-sm bg-[#F7F7F7]"
        />
      </div>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 mt-2 rounded-md bg-[#F7F7F7]"
        >
          <div>
            <h3 className="text-sm font-medium">Users name</h3>
            <div className="flex gap-2 mt-1">
              <span className="bg-gray-200 px-2 py-1 text-xs rounded-md">
                Assigned 100
              </span>
              <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-md">
                Pending 50
              </span>
            </div>
          </div>
          <input type="checkbox" className="w-4 h-4" />
        </div>
      ))}
      <div className="button-section flex flex-col sm:flex-row mt-4 gap-4">
        <button className="w-full sm:w-[50%] py-[6px] border-1 border-[#D00416] text-[#D00416] rounded-md">
          Clear
        </button>
        <button
          className="w-full sm:w-[50%] !bg-[#0052CC] py-[6px] text-white rounded-md"
          onClick={() => dispatch(toggleAssignTask())}
        >
          Assign
        </button>
      </div>
    </div>
  );
};

export default FieldUsers;
