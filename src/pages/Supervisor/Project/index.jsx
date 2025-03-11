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
    <MapView />
  );
};

export default Project;
