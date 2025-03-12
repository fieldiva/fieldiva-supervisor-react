import React from "react";
import { Outlet } from "react-router-dom";

const FieldUserLayout = () => {
  return (
    <div className="px-4 md:px-[50px] bg-gray-100 pt-[100px] min-h-screen">
      <Outlet />
    </div>
  );
};

export default FieldUserLayout;
