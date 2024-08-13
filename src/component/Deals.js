import React from "react";
import Footer from "./Footer";
import Navbar from "./Header";
import "./Deals.css";

const dealsData = [
  {
    title: "Gourmet Dinner for Two",
    description:
      "Enjoy a special evening with a gourmet dinner for two, prepared by our top chef.",
    imageUrl:
      "https://images.pexels.com/photos/6770737/pexels-photo-6770737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: "20% OFF",
  },
  {
    title: "Exclusive Chef's Special",
    description:
      "Taste the exclusive Chef's Special, made with fresh, locally-sourced ingredients.",
    imageUrl:
      "https://images.pexels.com/photos/5878433/pexels-photo-5878433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: "15% OFF",
  },
  {
    title: "Weekend Brunch Bonanza",
    description:
      "Indulge in a lavish weekend brunch at our diner, with an array of delightful dishes.",
    imageUrl:
      "https://images.pexels.com/photos/14009280/pexels-photo-14009280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: "25% OFF",
  },
];

export const Deals = () => {
  return (
    <>
      <Navbar />
      
      
      <div className="head">
        <h1>"Transforming Every Special Moment with <br></br>Unrivaled Culinary Excellence and Passion."</h1>
      </div>
      <div className="tagline"><button className="taglineButton">Secure Your Table </button></div>
      <div className="deals-page">
        <div className="deals-container">
          {dealsData.map((deal, index) => (
            <div className="deal-card" key={index}>
              <img src={deal.imageUrl} alt={deal.title} />
              <div className="deal-info">
                <h2>{deal.title}</h2>
                <p>{deal.description}</p>
                <button className="view-details">View Details</button>
                <button className="apply-offer">Apply Offer</button>
              </div>
              <div className="deal-discount">{deal.discount}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;
