import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([{path:"/",element:<AppLayout/>}, {}]);
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
