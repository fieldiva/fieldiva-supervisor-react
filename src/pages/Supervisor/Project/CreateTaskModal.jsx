import React, { useState } from "react";
import { Modal, Input, Button, Upload, Tabs } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateTask } from "../../../Redux/Reducers/allModalReducer";

const CreateTaskModal = () => {
  const [activeTab, setActiveTab] = useState("single");

  const createTask = useSelector((state) => state?.modal?.createTask);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(toggleCreateTask());
  };
  return (
    <Modal open={createTask} onCancel={onClose} footer={null} centered closeIcon={false}>
      <div className="p-4">
        <h2 className="text-xl font-semibold">Create task</h2>
        <p className="text-[#959595]">Sub heading</p>

        {/* Tab buttons with blue background and partial width */}
        <div className="flex space-x-2 mt-4">
          <button
            className={`w-1/2 py-3 rounded-md cursor-pointer ${
              activeTab === "single"
                ? "bg-[#0052CC] text-white"
                : "bg-[#F7F7F7] text-[#1a1a1a]"
            }`}
            onClick={() => setActiveTab("single")}
          >
            Single task
          </button>
          <button
            className={`w-1/2 py-3 rounded-md cursor-pointer ${
              activeTab === "multiple"
                ? "bg-[#0052CC] text-white"
                : "bg-[#F7F7F7] text-[#1a1a1a]"
            }`}
            onClick={() => setActiveTab("multiple")}
          >
            Multiple task
          </button>
        </div>

        {/* Single Task Content */}
        {activeTab === "single" && (
          <div className="mt-4">
            <Input
              placeholder="Enter the task name"
              className="mb-3 !py-3 !px-4 custom-placeholder"
            />
            <div className="flex mb-3 mt-4 gap-2">
              <Input
                placeholder="Longitude"
                className="!py-3 !px-4 custom-placeholder"
              />
              <Input
                placeholder="Latitude"
                className="!py-3 !px-4 custom-placeholder"
              />
            </div>
            <Input
              placeholder="Enter the mobile number"
              className="mb-3 !py-3 !px-4 custom-placeholder"
            />
          </div>
        )}

        {/* Multiple Task Content */}
        {activeTab === "multiple" && (
          <div className="mt-4 w-full">
            <Upload className="mb-3 !w-full create-btn">
              <Button
                icon={<UploadOutlined />}
                className="!py-5 !text-[#1a1a1a]"
              >
                Upload task
              </Button>
            </Upload>
          </div>
        )}

        {/* Map Category Buttons */}
        <div className="flex justify-between mb-4 mt-3 gap-2">
          <Button className="w-1/3 !py-5 flex !justify-start !text-[#1a1a1a]">
            Map category
          </Button>
          <Button className="w-1/3 !py-5 flex !justify-start !text-[#1a1a1a]">
            Map category 2
          </Button>
          <Button className="w-1/3 !py-5 flex !justify-start !text-[#1a1a1a]">
            Map category 3
          </Button>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between gap-2 mt-5">
          <Button onClick={onClose} className="w-[50%] !py-4">
            Cancel
          </Button>
          <Button className="w-[50%] !bg-[#0052CC] !text-white !py-4">
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTaskModal;
