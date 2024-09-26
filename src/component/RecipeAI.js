import React from 'react';

const RecipeAI = () => {
  return (
    <div className="flex flex-col items-center bg-[#EDF6F9] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#006D77] mb-4">
        Discover Your Next Recipe!
      </h2>
      <p className="text-lg text-[#83C5BE] mb-6">
        Let our Recipe AI help you find delicious meals tailored to your tastes!
      </p>
      <input
        type="text"
        placeholder="Enter ingredients you have..."
        className="p-2 border border-[#E29578] rounded-lg mb-4 w-full max-w-md"
      />
      <button className="bg-gradient-to-r from-[#83C5BE] to-[#006D77] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
        Get Recipe Ideas
      </button>
      <div className="mt-6 text-center text-[#E29578]">
        <p className="text-md">
          Upcoming Feature: AI-driven recipe suggestions based on your preferences!
        </p>
        <p className="text-sm italic">
          Stay tuned for exciting updates!
        </p>
      </div>
    </div>
  );
};

export default RecipeAI;
