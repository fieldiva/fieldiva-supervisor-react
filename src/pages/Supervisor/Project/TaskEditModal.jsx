import React, { useState } from "react";
import { Modal, Button, Avatar, Typography, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleListEdit } from "../../../Redux/Reducers/allModalReducer";

const { Text } = Typography;

const TaskEditModal = () => {
  const editModal = useSelector((state) => state?.modal?.listEdit);
  const dispatch = useDispatch();
  const handleCancel = () => setIsModalOpen(false);
  const handleDelete = () => {
    dispatch(toggleListEdit());
  };

  return (
    <>
      <Modal
        title={<span className="text-2xl">Edit Task</span>}
        open={editModal}
        centered
        closeIcon={false}
        footer={[
          <div className="flex gap-2 mt-[24px]">
            <Button
              key="cancel"
              onClick={handleCancel}
              className="w-[50%] !border-1 !border-[#0052CC]"
            >
              Cancel
            </Button>
            <Button
              key="delete"
              onClick={handleDelete}
              className="w-[50%] !bg-[#0052CC] !text-white"
            >
              Save
            </Button>
          </div>,
        ]}
        className="delete-modal !w-[400px]"
      >
        <Text type="secondary" className="font-normal">
          Sub heading
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 16,
            background: "#F7F7F7",
            padding: "4px",
            borderRadius: "4px",
          }}
        >
          <Avatar size="large">F</Avatar>
          <div style={{ marginLeft: 12 }}>
            <Text strong>Darlene Robertson</Text>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Input placeholder="Enter the task name" className="!py-2 !px-4 !border !border-[#AEAEAE] custom-placeholder" 
          />

          <div className="grid grid-cols-2 gap-1">
            <Input placeholder="Longitude" className="!py-2 !px-4 !border !border-[#AEAEAE] custom-placeholder" />
            <Input placeholder="Latitude" className="!py-2 !px-4 !border !border-[#AEAEAE] custom-placeholder" />
          </div>

          <Input placeholder="Enter the mobile number" className="!py-2 !px-4 !border !border-[#AEAEAE] custom-placeholder" type="number"/>
        </div>
      </Modal>
    </>
  );
};

export default TaskEditModal;
