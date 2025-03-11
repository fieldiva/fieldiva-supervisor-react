import { Outlet } from "react-router-dom";
import DashHeader from "../pages/Supervisor/Dashboard/DashHeader";

// Layout for Dashboard Pages
const DashboardLayout = () => {
  return (
    <>
      <div className="h-5 bg-gray-100">
        <DashHeader />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
