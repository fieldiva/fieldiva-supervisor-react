import React, { useState } from "react";
import { Modal, Button, Input, Radio, Space } from "antd";

const ProjectModal = ({ visible, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  const projects = [
    "Project name 1",
    "Project name 2",
    "Project name 3",
    "Project name 4",
  ];

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      styles={{ backdropFilter: "none" }}
      zIndex={1050}
      width={600}
      closeIcon={false}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Project name</h2>
          <p className="text-gray-500">Sub heading</p>
        </div>
        <Button type="primary" onClick={onClose}>
          Apply
        </Button>
      </div>

      {/* Search Input */}
      <Input
        placeholder="🔍 Search"
        allowClear
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 mb-4"
      />

      {/* Project Selection */}
      <Radio.Group
        onChange={(e) => setSelectedProject(e.target.value)}
        value={selectedProject}
        className="w-full"
      >
        <Space
          direction="vertical"
          className="w-full bg-[#F7F7F7] py-3 px-4 rounded-sm"
        >
          {projects
            .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <div
                key={project}
                className="w-full flex justify-between items-center bg-white rounded-sm py-2 px-4 border border-gray-300"
                style={{ minHeight: "40px" }} // Ensuring visibility
              >
                <span style={{ color: "black", fontSize: "14px" }}>
                  {project}
                </span>
                <Radio value={project} />
              </div>
            ))}
        </Space>
      </Radio.Group>

      {/* Map Categories */}
      <p className="mt-6">Choose map category</p>
      <div className="flex gap-4 mt-2">
        <Button className="flex-1 border">Map category</Button>
        <Button className="flex-1 border">Map category 2</Button>
        <Button className="flex-1 border">Map category 3</Button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
