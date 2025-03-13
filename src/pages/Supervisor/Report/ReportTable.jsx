import React from "react";

const ReportTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4 border-collapse text-sm md:text-base min-w-[600px]">
        <thead>
          <tr className="border-b-[1px] border-b-[#f7f5f5]">
            <th className="p-4 text-left text-[#4A4A4A] font-normal">Title</th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Latitude
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Longitude
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Created by
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Created time
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Assigned to
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Assigned by
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal">
              Re assigned by
            </th>
            <th className="p-4 text-left text-[#4A4A4A] font-normal flex items-center gap-2 md:gap-[58px]">
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
                <span className="text-[#333] text-sm">Darlene Robertson</span>
              </td>
              <td className="p-4 text-[#333] text-sm">52.256584789</td>
              <td className="p-4 text-[#333] text-sm">85.321456412</td>
              <td className="p-4 text-[#333] text-sm">Darlene Robertson</td>
              <td className="p-4 text-[#333] text-sm">02:35 Am</td>
              <td className="p-4 text-[#333] text-sm">Darlene Robertson</td>
              <td className="p-4 text-[#333] text-sm">Darlene Robertson</td>
              <td className="p-4 text-[#333] text-sm">Darlene Robertson</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
