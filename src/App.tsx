import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Activity from "./pages/Activity";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div className="flex justify-center">Home</div>,
      },
      {
        path: "/finance",
        element: <div className="flex justify-center">Finances</div>,
      },
      {
        path: "/request",
        element: <div className="flex justify-center">Send and Request</div>,
      },
      {
        path: "/deals",
        element: <div className="flex justify-center">Deals</div>,
      },
      {
        path: "/wallet",
        element: <div className="flex justify-center">Wallet</div>,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/help",
        element: <div className="flex justify-center">Help</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
