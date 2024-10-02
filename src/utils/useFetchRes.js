import { RESTAURANTS, Data } from "./Config";
import { useState, useEffect } from "react";

const useFetchRes = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(RESTAURANTS);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        let fetchedData =
          json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants ||
          json.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants;

        // If fetchedData is undefined, log an appropriate message
        if (!Array.isArray(fetchedData) || fetchedData.length === 0) {
          console.warn("No restaurants found, using default data.");
          fetchedData = Data; // Use default data if no fetched data is available
        }

        // Combine fetchedData with Data ensuring both are arrays
        const combinedData = Array.isArray(fetchedData) ? fetchedData.concat(Data) : Data;

        setRestaurant(combinedData);
      } catch (error) {
        console.error("An error occurred:", error);
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    getData();
  }, []);

  return { restaurant, loading, error }; // Return loading and error states
};

export default useFetchRes;
