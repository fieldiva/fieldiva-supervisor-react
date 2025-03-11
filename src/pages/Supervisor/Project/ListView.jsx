import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDelete, toggleListEdit } from "../../../Redux/Reducers/allModalReducer";

const data = [
  {
    id: 1,
    name: "Darlene Robertson ",
    task: "Technical problem",
    lat: "52.256584789",
    lng: "85.321456412",
    mobile: "987456321",
    status: "Completed",
  },
  {
    id: 2,
    name: "Theresa Cooper",
    task: "Technical problem",
    lat: "52.256584789",
    lng: "85.321456412",
    mobile: "987456321",
    status: "Completed",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    task: "Technical problem",
    lat: "52.256584789",
    lng: "85.321456412",
    mobile: "987456321",
    status: "Not visited",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    task: "Technical problem",
    lat: "52.256584789",
    lng: "85.321456412",
    mobile: "987456321",
    status: "Not visited",
  },
];

const ListView = () => {
  const dispatch = useDispatch()
  const filterModal = useSelector(state => state?.modal?.listFilter)
  return (
    <div className={`p-4 overflow-x-auto bg-white ${filterModal ? "blur-xs" : ""}`}>
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden table-auto min-w-[600px]">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Title</th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Task Name</th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Latitude</th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Longitude</th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Mobile Number</th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal flex justify-between">
                Status
                <img src="/assets/sortArrow.svg" alt="sortArrow" className="inline" />
              </th>
              <th className="p-3 text-left text-[#4A4A4A] font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="">
                <td className="p-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  {item.name}
                </td>
                <td className="p-3 text-[#333333] font-normal">{item.task}</td>
                <td className="p-3 text-[#333333] font-normal">{item.lat}</td>
                <td className="p-3 text-[#333333] font-normal">{item.lng}</td>
                <td className="p-3 text-[#333333] font-normal">{item.mobile}</td>
                <td className="p-3 text-[#333333] font-normal">
                  <span
                    className={`py-[4px] px-[24px] rounded-full text-sm ${
                      item.status === "Completed"
                        ? "bg-[#D2FDE6] text-[#1FC16B]"
                        : "bg-[#FFF3F2] text-[#D00416]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <img
                    src="/assets/delete.svg"
                    alt="delete"
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => dispatch(toggleDelete())}
                  />
                  <img
                    src="/assets/edit.svg"
                    alt="edit"
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => dispatch(toggleListEdit())}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <button className="px-4 py-2 border border-[#0052CC] rounded-lg cursor-pointer">
          Previous
        </button>
        <span className="my-2 sm:my-0">Page 1 of 10</span>
        <button className="px-4 py-2 border border-[#0052CC] rounded-lg cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default ListView;