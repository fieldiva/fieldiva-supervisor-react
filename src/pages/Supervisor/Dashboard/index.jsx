
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashboardGraph from "./DashboardGraph";
import TaskCompletion from "./TaskCompletion";

const Dashboard = () => {

  return (
    <div>
    <div className="px-[50px] bg-gray-100">
      <DashboardGraph />
      <TaskCompletion />
    </div>
    </div>
  );
};

export default Dashboard;
