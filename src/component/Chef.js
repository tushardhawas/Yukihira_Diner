import Navbar from "./Header";
import Footer from "./Footer";
import React from "react";


export const Chef = () => {
  return (
    <>
      <Navbar />
      <div className="chefContainer">
      <video src="https://videos.pexels.com/video-files/3209765/3209765-uhd_2560_1440_25fps.mp4" width={1200} height={300} controls></video>
      </div>
      <Footer />
    </>
  );
};

export default Chef;
