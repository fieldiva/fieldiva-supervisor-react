import React from "react";
import ReportHeader from "./ReportHeader";
import ReportTable from "./ReportTable";
import ReportFilterModal from "./ReportFilterModal";
import { useSelector } from "react-redux";

const Report = () => {
    const reportFilter = useSelector(state => state.modal.reportFilter)
  return (
    <>
      <div className={`px-4 md:px-[50px] bg-gray-100 pt-[100px] min-h-screen ${reportFilter ? 'blur-xs' : ""}`}>
        <div className="p-4 bg-gray-100 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <ReportHeader />
            <ReportTable />
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
      </div>

      <ReportFilterModal />
    </>
  );
};

export default Report;
