import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Supervisor/auth/LoginPage";
import Dashboard from "./pages/Supervisor/Dashboard";
import Project from "./pages/Supervisor/Project";
import ListView from "./pages/Supervisor/Project/ListView";
import ProjectLayout from "./RouteLayouts/ProjectLayout";
import DashboardLayout from "./RouteLayouts/DashboardLayout";
import MapView from "./pages/Supervisor/Project/MapView";
import { Provider } from "react-redux";
import store from "./Redux/store";
import FieldUsers from "./pages/Supervisor/FieldUsers";

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
              path: "mapView",
              element: <MapView />,
            },
            {
              path: "listView",
              element: <ListView />,
            },
          ],
        },
        {
          path: "fieldUsers",
          element: <FieldUsers />
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
