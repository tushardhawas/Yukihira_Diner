import { useEffect, useState } from "react";
import { RestroCard } from "../../Config";
import { Data } from "../../Config";
import Shim from "./Shimmer";
import { Link } from "react-router-dom";

function filterRestaurant(searchText, restaurants) {
  // Filter data based on searchText
  return restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.00090&lng=75.57350&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();

        let fetchedData =
          json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants;
        if (fetchedData === undefined) {
          fetchedData =
            json.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants;
        }

let combinedData =[];
          if(fetchedData){

            combinedData = [...fetchedData, ...Data];
          }else{
             combinedData = [Data];
          }
        // Merge fetched data with hardcoded Data

        // Set both restaurant and filteredList with the combined data
        setRestaurant(combinedData);
        setFilteredList(combinedData);
      } catch (error) {
        console.error("you got an error ", error);
      }
    }
    getData();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filteredData = filterRestaurant(value, restaurant);
    setFilteredList(filteredData);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          placeholder="Search Your Favorite Restaurant"
          onChange={handleSearchChange}
          value={searchText}
        ></input>
      </div>

      {filteredList.length === 0 ? (
        <Shim />
      ) : (
        <div className="cards">
          {filteredList.map((rest, index) => (
            <Link to={"/restaurant/" + rest.info.id} key={index}>
              <RestroCard i={rest.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
