const FilterSection = () => {
    return (
      <div className="bg-white px-[12px] py-[16px]">
        <div className="flex flex-wrap md:flex-nowrap bg-[#F7F7F7] px-[12px] py-3 rounded-sm gap-10">
          <div className="flex flex-wrap md:flex-nowrap w-full md:w-[63%] justify-between items-center gap-2 md:gap-0 mb-2 md:mb-0">
            <div className="w-full md:w-auto">
              <h1 className="font-semibold text-base">Map View</h1>
              <span className="text-xs text-[#959595]">Sub heading</span>
            </div>
            <div className="w-full md:w-auto flex justify-start md:justify-end">
              <ul className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
                <li className="flex py-1 px-2 items-center rounded-sm bg-white w-full md:w-auto">
                  <span className="w-[32px]">
                    <img src="/assets/location.svg" alt="location-img" />
                  </span>
                  <a className="text-sm">Live Location</a>
                </li>
                <li className="flex py-1 px-2 items-center rounded-sm bg-white w-full md:w-auto">
                  <span className="w-[32px]">
                    <img src="/assets/assign.svg" alt="assign" />
                  </span>
                  <a className="text-xs">Assign</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right flex w-full md:w-auto items-center">
            <ul className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
              <li className="flex items-center bg-white w-full md:w-[214px] p-2 rounded-sm">
                <span className="w-[32px]">
                  <img src="/assets/search.svg" alt="search" />
                </span>
                <a className="w-[32px]">Search</a>
              </li>
              <li className="flex items-center gap-1 bg-white w-full md:w-auto p-2 rounded-sm">
                <span className="w-[32px]">
                  <img src="/assets/sort-radius.svg" alt="sort" />
                </span>
                <a className="text-sm">Sort</a>
              </li>
              <li className="flex items-center gap-1 bg-white w-full md:w-auto px-2 py-1 rounded-sm">
                <span className="w-[32px]">
                  <img src="/assets/filter.svg" alt="filter" />
                </span>
                <a className="text-sm">Filter</a>
              </li>
              <li className="rounded-sm bg-[#0052CC] text-white py-[5px] px-[20px] w-full md:w-auto text-center">
                <a className="text-sm">Export</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default FilterSection;