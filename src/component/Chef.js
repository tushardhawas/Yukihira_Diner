import Navbar from "./Header";
import Footer from "./Footer";
import React from "react";
import "./Chef.css";
import { chefs } from "../../Config";

export const Chef = () => {
  return (
    <>
      <Navbar />
      <div className="chefContainer">
        <h1>Meet Our Top Chefs</h1>
        <h2>"Elevating Every Plate with Uncompromising Culinary Excellence."</h2>
        <div className="cards">
          {chefs.map((chef, index) => (
            <div key={index} className="chef_card">
              <img src={chef.image} alt={chef.name} />
              <h4>{chef.name}</h4>
              <h6>{chef.specialty}</h6>
              <p>{chef.experience}</p>
              <div className="signatureDish">
                <span>Signature Dish:</span> {chef.signatureDish}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chef;
