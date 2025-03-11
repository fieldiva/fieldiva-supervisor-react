import React, { useState } from "react";
import { Modal, Button, Avatar, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleDelete } from "../../../Redux/Reducers/allModalReducer";

const { Text } = Typography;

const TaskDeleteModal = () => {
  const deleteModal = useSelector((state) => state?.modal?.listDelete);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleDelete = () => {
    dispatch(toggleDelete());
  };

  return (
    <>
      <Modal
        title={<span className="text-2xl">Delete Task</span>}
        open={deleteModal}
        centered
        closeIcon={false}
        footer={[
          <div className="flex gap-2 mt-[24px]">
            <Button key="cancel" onClick={handleCancel} className="w-[50%] !border-1 !border-[#0052CC]">
              Cancel
            </Button>
            <Button key="delete"  onClick={handleDelete} className="w-[50%] !bg-[#D00416] !text-white">
              Delete
            </Button>

          </div>
        ]}
        className="delete-modal !w-[400px]"
      >
        <Text type="secondary" className="font-normal">Sub heading</Text>
        <div style={{ display: "flex", alignItems: "center", marginTop: 16, background: "#F7F7F7", padding: "4px", borderRadius: "4px" }}>
          <Avatar size="large">F</Avatar>
          <div style={{ marginLeft: 12 }}>
            <Text strong>Darlene Robertson</Text>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskDeleteModal;
