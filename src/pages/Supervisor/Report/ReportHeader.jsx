import React from "react";
import { useDispatch } from "react-redux";
import { toggleReportFilter } from "../../../Redux/Reducers/allModalReducer";

const ReportHeader = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="relative w-full sm:w-[300px]">
        <div
          className="relative w-full border border-black bg-white py-[8px] px-[6px] pr-8 rounded-sm cursor-pointer"
          onClick={() => dispatch(toggleProjectModal())}
        >
          Change Project name
        </div>
        <div className="absolute inset-y-2 right-2 flex items-center pointer-events-none bg-[#F7F7F7] rounded-full p-[5px] w-[24px] h-[24px]">
          <img src="/assets/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-[#F7F7F7] px-4 py-2 rounded-sm gap-6 w-full mt-4">
        <div className="left flex flex-col md:flex-row justify-between w-full md:w-[60%] items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-[#333] font-medium text-xl">User view</h1>
            <span className="text-[#959595] text-sm">Sub heading</span>
          </div>
        </div>
        <div className="right w-full md:w-[40%] flex flex-col md:flex-row items-center gap-2 py-2 px-4">
          <div className="flex items-center gap-2 bg-white w-full md:w-[424px] rounded-sm py-2 px-4">
            <img src="/assets/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none placeholder:text-[#000000] placeholder:text-sm"
            />
          </div>
          <div className="relative" onClick={() => dispatch(toggleReportFilter())}>
            <button className="flex items-center bg-white py-1 px-4 rounded-sm">
              <img src="/assets/filter.svg" alt="sort" />
              filter
            </button>
          </div>
          <button className="bg-[#0052CC] text-white py-2 px-4 md:px-8 rounded-md">
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportHeader;
