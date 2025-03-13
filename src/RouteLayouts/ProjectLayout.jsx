import { useState } from "react";
import TopSection from "../pages/Supervisor/Project/TopSection";
import FilterSection from "../pages/Supervisor/Project/FilterSection";
import { Outlet } from "react-router-dom";
import ActiveUsers from "../pages/Supervisor/Project/ActiveUsers";
import ProjectModal from "../pages/Supervisor/Project/ProjectModal";
import TaskDeleteModal from "../pages/Supervisor/Project/TaskDeleteModal";
import { useSelector } from "react-redux";
import TaskEditModal from "../pages/Supervisor/Project/TaskEditModal";
import FilterModal from "../pages/Supervisor/Project/FilterModal";
import CreateTaskModal from "../pages/Supervisor/Project/CreateTaskModal";
import AssignTab from "../pages/Supervisor/Project/AssignTab";

const ProjectLayout = () => {
  const deleteModal = useSelector((state) => state?.modal?.listDelete);
  const editModal = useSelector((state) => state?.modal?.listEdit);
  const createTask = useSelector((state) => state?.modal?.createTask);
  const assignTask = useSelector((state) => state?.modal?.assignTask);
  const projectModal = useSelector(state => state?.modal?.projectModal)
  return (
    <div
      className={`px-[50px] bg-gray-100 flex flex-col md:flex-row gap-6 ${
        projectModal || deleteModal || editModal || createTask ? "blur-xs" : ""
      }`}
    >
      <div className="w-full md:w-[70%]">
        <TopSection />
        <FilterSection />
        {/* <MapView /> */}
        <Outlet />
      </div>
      <div className="w-full md:w-[30%]">
        {
          assignTask ? <AssignTab /> : <ActiveUsers />
        }
        {/* <ActiveUsers /> */}
        {/* <AssignTab /> */}
      </div>
      <ProjectModal
      />
      <TaskDeleteModal />
      <TaskEditModal />
      <FilterModal />
      <CreateTaskModal />
    </div>
  );
};

export default ProjectLayout;
