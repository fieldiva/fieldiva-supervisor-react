import React, { useState } from "react";
import FieldUsers from "./FieldUsers";

const AssignTab = () => {
  const [apply, setApply] = useState(false);
  return (
    <div className="bg-white p-4 rounded-md mt-[80px] py-8">
      <div className="container w-[95%] mx-auto">
        {/* Field Users Section */}

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center bg-[#F7F7F7] w-full sm:w-[50%] py-2 px-2 rounded-sm text-sm gap-2">
            <img src="/assets/select.svg" alt="" />
            Select
          </button>
          <button className="flex items-center bg-[#0052CC] w-full sm:w-[50%] py-2 px-2 rounded-sm gap-2 text-white text-sm">
            <img src="/assets/geo.svg" alt="" />
            Geo Fencing
          </button>
        </div>
        <h1 className="mt-4 text-[#333333] font-medium">
          Assign Selected marker
        </h1>
        <span className="text-[#959595] text-sm">Sub heading</span>

        <div className="selection mt-8 py-[4px] px-[6px] border rounded-sm flex justify-between">
          <span className="text-[#1A1A1A] font-medium text-sm">
            Marker Selected
          </span>
          <span className="text-[#1A1A1A] font-medium text-sm">80562</span>
        </div>

        {apply && <FieldUsers />}

        {!apply && (
          <div className="button-section flex flex-col sm:flex-row mt-4 gap-4">
            <button className="w-full sm:w-[50%] py-[6px] border-1 border-[#D00416] text-[#D00416] rounded-md">
              Clear
            </button>
            <button
              className="w-full sm:w-[50%] !bg-[#0052CC] py-[6px] text-white rounded-md"
              onClick={() => setApply((prev) => !prev)}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignTab;
