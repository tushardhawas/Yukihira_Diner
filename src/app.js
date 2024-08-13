import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { Deals } from "./component/Deals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    </>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/deals", element: <Deals /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
