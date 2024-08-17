import Navbar from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import "./Chef.css";
import { chef } from "../../Config";

export const Chef = () => {
  const [chefs,setChef] = useState([])

  useEffect(()=>{

    async function getData(){

      const response = await fetch("https://www.coox.in/_next/data/0rua7yZP4HKJ1_22sYttA/index.json");
      const json = await response.json();

      console.log(json)

      const fetchDataChef =  json.pageProps?.topCooks
      console.log(fetchDataChef);
      setChef(fetchDataChef);
    }

    getData();
  },[])

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
