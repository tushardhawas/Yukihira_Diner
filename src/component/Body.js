import { useEffect, useState } from "react";
import { RestroCard, RESTAURANTS } from "../utils/Config";
import { Data } from "../utils/Config";
import Shim from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRes from "../utils/useFetchRes";

function filterRestaurant(searchText, restaurants) {
  return restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const combinedData = useFetchRes();
  try {
    useEffect(() => {
      if (combinedData.length > 0) {
        setRestaurant(combinedData);
        setFilteredList(combinedData); // Initially set the filtered list to the full restaurant list
      }
    }, [combinedData]);
  } catch (error) {
    console.error("you got an error ", error);
  }

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
