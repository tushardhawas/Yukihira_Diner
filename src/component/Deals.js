import React from "react";
import { dealsData } from "../utils/Config";

export const Deals = () => {
  return (
    <div className="p-6 bg-[#EDF6F9]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#006D77] mb-4">
          "Transforming Every Special Moment with <br /> Unrivaled Culinary Excellence and Passion."
        </h1>
        <p className="text-lg text-gray-600">
          Discover exclusive offers that elevate your dining experience!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dealsData.map((deal, index) => (
          <div
            className="deal-card relative bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-80"
              src={deal.imageUrl}
              alt={deal.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#006D77] hover:text-[#83C5BE] transition-colors duration-200">
                {deal.title}
              </h2>
              <p className="text-gray-700 mt-2">{deal.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="deal-discount text-xl font-bold text-[#E29578]">
                  {deal.discount}
                </div>
                <div className="deal-actions space-x-2">
                  <button className="bg-[#83C5BE] text-white rounded-full px-4 py-2 shadow transition duration-200 hover:bg-[#006D77] transform hover:scale-105">
                    View Details
                  </button>
                  <button className="bg-[#E29578] text-white rounded-full px-4 py-2 shadow transition duration-200 hover:bg-[#FFDDD2] transform hover:scale-105">
                    Apply Offer
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#83C5BE] to-[#E29578] opacity-30 rounded-lg transform scale-0 transition-all duration-300 hover:scale-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
