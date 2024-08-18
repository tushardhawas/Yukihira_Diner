import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Chef from "./component/Chef";
import { Err } from "./component/Err";
import { Deals } from "./component/Deals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <>
        <Navbar />
        <Outlet />
         <Footer />
      </>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Err />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "/deals",
    element: <Deals />,
    children: [
      {
        path: "/deals",
        element: <Deals />,
      },
    ],
  },
  {
    path: "/cheifs",
    element: <Chef />,
    children: [
      {
        path: "/cheifs",
        element: <Chef />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
