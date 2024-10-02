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

  useEffect(() => {
    if (combinedData.length > 0) {
      setRestaurant(combinedData);
      setFilteredList(combinedData);
    } else {
      setRestaurant(Data);
      setFilteredList(Data);
    }
  }, [combinedData]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filteredData = filterRestaurant(value, restaurant);
    setFilteredList(filteredData);
  };

  return (
    <div className="bg-background min-h-screen py-5">
      <div className="text-center mb-5">
        <input
          className="p-4 w-3/4 md:w-1/3 bg-accent border border-secondary text-primary rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          type="text"
          placeholder="Search Your Favorite Restaurant"
          onChange={handleSearchChange}
          value={searchText}
        />
      </div>

      {filteredList.length === 0 ? (
        <Shim />
      ) : (
        <div className="bg-background flex justify-center flex-wrap gap-10 p-4">
          {filteredList.map((rest, index) => (
            <Link to={`/restaurant/${rest.info.id}`} key={index}>
              <RestroCard i={rest.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
