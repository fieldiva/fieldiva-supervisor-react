import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Supervisor/auth/LoginPage";
import Dashboard from "./pages/Supervisor/Dashboard";
import DashHeader from "./pages/Supervisor/Dashboard/DashHeader";
import Project from "./pages/Supervisor/Project";
import ListView from "./pages/Supervisor/Project/ListView";

// Layout for Dashboard Pages
const DashboardLayout = () => {
  return (
    <>
      <div className="h-5 bg-gray-100">
        <DashHeader />
        <Outlet />
      </div>
    </>
  );
};

const ProjectLayout = () => {
  return (
    <>
      <Outlet />
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
      path: "/supervisor",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "projects",
          element: <ProjectLayout />,
          children: [
            {
              path: "",
              element: <Project />,
            },
            {
              path: "listView",
              element: <ListView />
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
