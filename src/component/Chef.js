import Navbar from "./Header";
import Footer from "./Footer";
import React from "react";
import "./Chef.css";


export const Chef = () => {
  return (
    <>
      <Navbar />
      <div className="chefContainer">
      <video id="background-video" src="https://videos.pexels.com/video-files/3209765/3209765-uhd_2560_1440_25fps.mp4" autoPlay loop muted></video>
      </div>
      <Footer />
    </>
  );
};

export default Chef;
