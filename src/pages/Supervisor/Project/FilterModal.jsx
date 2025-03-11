import { Modal, Button, DatePicker, Input, Radio, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleListFilter } from "../../../Redux/Reducers/allModalReducer";

const FilterModal = () => {
  const filter = useSelector((state) => state?.modal?.listFilter);
  const dispatch = useDispatch()


  const handleCancel = () => {
    dispatch(toggleListFilter())
  }


  return (
    <Modal
      title={
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Filter</h2>
            <p className="text-[#959595] text-sm font-normal">Sub heading</p>
          </div>
          <div>
            <Button className="border !border-[#D00416] !text-[#D00416]" >
              Clear Filters
            </Button>
          </div>
        </div>
      }
      open={filter}
      footer={null}
      className="filter-modal !w-[400px] !ml-[47%] !mt-18"
      closeIcon={false}
      zIndex={1050}
      onCancel={handleCancel}
    >
      {/* Date Pickers */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm text-gray-600 mb-2">Assigned from</p>
          <DatePicker className="w-full p-2" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Assigned to</p>
          <DatePicker className="w-full p-2" />
        </div>
      </div>

      {/* Status Selection */}
      <div className="mt-4 ">
        <p className="text-sm text-gray-600">Status</p>
        <div className="flex flex-col p-2 rounded-lg">
          <Radio.Group
            className="w-full radio-group !text-black"
          >
            <div className="flex flex-col gap-2">
              {/* Assigned */}
              <div className="flex justify-between items-center bg-gray-100 py-2 px-4 rounded-sm">
                <div className="text-[12px] text-[#333333]">Assigned</div>
                <Radio value="assigned" className="ml-2" />
              </div>

              {/* Not Assigned */}
              <div className="flex justify-between items-center bg-gray-100 py-2 px-4 rounded-sm">
                <span className="text-[12px] text-[#333333]">Not assigned</span>
                <Radio value="not_assigned" className="ml-2" />
              </div>

              {/* Completed */}
              <div className="flex justify-between items-center bg-gray-100 py-2 px-4 rounded-sm">
                <span className="text-[12px] text-[#333333]">Completed</span>
                <Radio value="completed" className="ml-2" />
              </div>
            </div>
          </Radio.Group>
          <div className="border-b border-b-[#AEAEAE] mt-3"></div>
        </div>
      </div>

      {/* Searchable Assign List */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Assigned to</p>
        <Input placeholder="Search" className="mb-2 p-2" />

        <div className="flex flex-col p-2 rounded-lg gap-2 mt-2">
          {["name 1", "name 2", "name 3", "name 4"].map((name) => (
            <div
              key={name}
              className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-sm"
            >
              <span className="text-[12px] text-[#333333]">{name}</span>
              <Checkbox
              />
            </div>
          ))}
          <div className="border-b border-b-[#AEAEAE] mt-3"></div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-16 p-2">
        <Button type="primary" className="bg-[#0052CC] w-full" onClick={ handleCancel}>
          Assign
        </Button>
      </div>
    </Modal>
  );
};

export default FilterModal;
