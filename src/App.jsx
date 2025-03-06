import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Supervisor/auth/LoginPage";
import Dashboard from "./pages/Supervisor/Dashboard";
import DashHeader from "./pages/Supervisor/Dashboard/DashHeader";
import Test from "./pages/Supervisor/Dashboard/test";

// Layout for Dashboard Pages
const DashboardLayout = () => {
  return (
    <>
      <div className="h-5 px-[50px]">
        <DashHeader />
        <Outlet />
      </div>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "datas",
          element: <Test />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
