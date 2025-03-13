import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSubMenu } from "../../../Redux/Reducers/HeaderReducer";
import { toggleCreateTask, toggleProjectModal } from "../../../Redux/Reducers/allModalReducer";

const TopSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectModal = useSelector((state) => state?.modal?.projectModal);
  const subMenu = useSelector((state) => state?.header?.subMenu);
  return (
    <div className="map-header pt-[100px] bg-white px-[24px] flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="left w-full flex flex-wrap justify-between items-center gap-4">
        <div className="relative w-full sm:w-[300px]">
          <div
            className="relative w-full border border-black bg-white py-[8px] px-[6px] pr-8 rounded-sm cursor-pointer"
            onClick={() => dispatch(toggleProjectModal())}
          >
            Change Project name
            {/* <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              ▼
            </span> */}
          </div>
          <div className="absolute inset-y-2 right-2 flex items-center pointer-events-none bg-[#F7F7F7] rounded-full p-[5px] w-[24px] h-[24px]">
            <img src="/assets/arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-between gap-2">
            <div className="flex gap-1 bg-[#F7F7F7] rounded-sm">
              <li className="py-2 px-3 cursor-pointer">
                <a
                  className={`py-0.5 ${
                    subMenu === "listView"
                      ? "bg-[#0052CC] text-white py-1 px-3 rounded-sm"
                      : ""
                  }`}
                  onClick={() => {
                    navigate("listView");
                    dispatch(changeSubMenu("listView"));
                  }}
                >
                  List View
                </a>
              </li>
              <li className="py-2 px-3 cursor-pointer">
                <a
                  className={` text-sm ${
                    subMenu === "mapView"
                      ? "bg-[#0052CC] text-white py-1 px-3 rounded-sm"
                      : ""
                  }`}
                  onClick={() => {
                    navigate("mapView");
                    dispatch(changeSubMenu("mapView"));
                  }}
                >
                  Map View
                </a>
              </li>
            </div>
            <li
              className="py-2 px-3 border border-[#0052CC] rounded-sm cursor-pointer"
              onClick={() => dispatch(toggleCreateTask())}
            >
              <a className="py-0.5 px-3 text-sm">Create</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
