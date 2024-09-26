import React, { useEffect, useState } from "react";
import { chef } from "../utils/Config";

export const Chef = () => {
  const [chefs, setChef] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://www.coox.in/_next/data/0rua7yZP4HKJ1_22sYttA/index.json"
        );
        const json = await response.json();
        console.log(json);

        const fetchDataChef = json.pageProps?.topCooks;
        console.log(fetchDataChef);
        setChef(fetchDataChef);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="p-6 bg-[#EDF6F9]">
        <h1 className="text-3xl font-bold text-center text-[#006D77] mb-4">Meet Our Top Chefs</h1>
        <h2 className="text-xl text-center text-gray-700 mb-8">
          "Elevating Every Plate with Uncompromising Culinary Excellence."
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chef.map((chef, index) => (
            <div key={index} className="chef_card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img className="w-48 h-48 object-cover rounded-full mb-4" src={chef.image} alt={chef.name} />
              <h4 className="text-2xl font-semibold text-[#006D77]">{chef.name}</h4>
              <h6 className="text-lg text-[#83C5BE]">{chef.specialty}</h6>
              <p className="text-gray-600">{chef.experience}</p>
              <div className="signatureDish text-gray-500 mt-2">
                <span className="font-semibold">Signature Dish:</span> {chef.signatureDish}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chef;
