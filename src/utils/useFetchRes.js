import { RESTAURANTS ,Data } from "./Config";
import { useState , useEffect } from "react";


const useFetchRes = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
     async function getData() {
      try {
        let response = await fetch(RESTAURANTS);
        const json = await response.json();

        let fetchedData =
          json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants;
        if (fetchedData === undefined) {
          fetchedData =
            json.data.cards[4].card.card.gridElements?.infoWithStyle
              ?.restaurants;
        }


        let combinedData = [];
        if (fetchedData) {
          combinedData = [...fetchedData, ...Data];
        } else {
          combinedData = [Data];
          console.log(combinedData);
        }

        setRestaurant(combinedData);
      } catch (error) {
        console.error("you got an error ", error);
      }
    };
     getData();
  }, []);

  return restaurant;
};

export default useFetchRes;
