import React, { useState } from "react";
import FilterSection from "./FilterSection";
import TopSection from "./TopSection";
import ActiveUsers from "./ActiveUsers";
import MapView from "./MapView";
import ProjectModal from "./ProjectModal";
import { Button } from "antd";

const Project = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <div className={`px-[50px] bg-gray-100 flex flex-col md:flex-row gap-6 ${modalVisible ? "blur-xs" : ""}`}>
      <div className="w-full md:w-[70%]">
        <TopSection />
        <FilterSection />
        <MapView />
      </div>
      <div className="w-full md:w-[30%]">
        <ActiveUsers />
      </div>
      <ProjectModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default Project;
