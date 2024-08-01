import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Search from "./component/Search";

const AppLayout = () => {
  return (
    <>
      <>
        <Navbar />
        <Search/>
        <Body />
        <Footer />
      </>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
