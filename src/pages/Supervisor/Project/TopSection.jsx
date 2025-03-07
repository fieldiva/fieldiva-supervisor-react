const TopSection = () => {
  return (
    <div className="map-header pt-[100px] bg-white px-[24px] flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="left w-full flex flex-wrap justify-between items-center gap-4">
        <div className="relative w-full sm:w-[300px]">
          <select className="appearance-none py-[8px] px-[6px] w-full border border-black bg-white pr-8 rounded-sm">
            <option value="">Choose Project name</option>
          </select>
          <div className="absolute inset-y-2 right-2 flex items-center pointer-events-none bg-[#F7F7F7] rounded-full p-[5px] w-[24px] h-[24px]">
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-between gap-2">
            <div className="flex gap-1 bg-[#F7F7F7] rounded-sm">
              <li className="py-2 px-3 cursor-pointer">
                <a className="py-0.5 px-3 text-sm">List View</a>
              </li>
              <li className="py-2 px-3 cursor-pointer">
                <a className="py-1 px-3 bg-[#0052CC] text-white rounded-sm text-sm">Map View</a>
              </li>
            </div>
            <li className="py-2 px-3 border border-[#0052CC] rounded-sm cursor-pointer">
              <a className="py-0.5 px-3 text-sm">Create</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopSection;