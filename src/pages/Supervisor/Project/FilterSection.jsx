import { useDispatch, useSelector } from "react-redux";
import { toggleAssignTask, toggleListFilter } from "../../../Redux/Reducers/allModalReducer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterModal = useSelector((state) => state?.modal?.listFilter);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={`bg-white px-[12px] py-[16px] ${filterModal ? "blur-xs" : ""}`}>
      <div className="flex flex-wrap md:flex-nowrap bg-[#F7F7F7] px-[12px] py-3 rounded-sm gap-4 md:gap-6 items-center filter-section-div">
        {/* Left Section */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-[63%] justify-between items-center">
          <div>
            <h1 className="font-semibold text-base">Map View</h1>
            <span className="text-xs text-[#959595]">Sub heading</span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center bg-white py-2 px-3 rounded-md cursor-pointer">
              <img src="/assets/location.svg" alt="location-img" className="w-5 h-5" />
              <span className="ml-2 text-sm">Live Location</span>
            </div>
            <div className="flex items-center bg-white py-2 px-3 rounded-md cursor-pointer" onClick={() => dispatch(toggleAssignTask())}>
              <img src="/assets/assign.svg" alt="assign" className="w-5 h-5" />
              <span className="ml-2 text-sm">Assign</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 w-full md:w-auto relative">
          <div className="flex items-center bg-white py-2 px-3 rounded-md w-[200px]">
            <img src="/assets/search.svg" alt="search" className="w-5 h-5" />
            <input className="ml-2 text-sm" placeholder="Search" />
          </div>

          {/* Sort Button */}
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-white py-2 px-3 rounded-md"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <img src="/assets/sort-radius.svg" alt="sort" className="w-5 h-5" />
              <span className="text-sm">Sort</span>
            </button>
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-full left-0 bg-white shadow-md rounded-md p-2 mt-5 w-[220px] z-10"
                >
                  <div className="flex flex-col w-full gap-2">
                    {["Table view", "Satellite", "User location", "Assignments"].map((option, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center px-4 py-2 bg-[#F7F7F7] cursor-pointer rounded-md"
                        onClick={() => setSelectedOption(option)}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="sortOption"
                          className="form-radio text-blue-600"
                          checked={selectedOption === option}
                          readOnly
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Filter Button */}
          <button
            className="flex items-center gap-2 bg-white py-2 px-3 rounded-md"
            onClick={() => dispatch(toggleListFilter())}
          >
            <img src="/assets/filter.svg" alt="filter" className="w-5 h-5" />
            <span className="text-sm">Filter</span>
          </button>

          {/* Export Button */}
          <button className="bg-[#0052CC] text-white py-2 px-5 rounded-md text-sm">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
