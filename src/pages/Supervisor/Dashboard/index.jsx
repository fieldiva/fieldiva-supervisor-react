
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";

const Dashboard = () => {

  return (
    <div className="px-[50px]">
      <Outlet />
    </div>
  );
};

export default Dashboard;
