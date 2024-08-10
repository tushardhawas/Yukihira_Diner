import { useEffect, useState } from "react";
import { RestroCard } from "../../Config";
import { Data } from "../../Config";

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
      let response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.00090&lng=75.57350&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);

      const fetchedData =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      // Merge fetched data with hardcoded Data
      const combinedData = [...fetchedData, ...Data];

      // Set both restaurant and filteredList with the combined data
      setRestaurant(combinedData);
      setFilteredList(combinedData);
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
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchText}
        ></input>
      </div>

      <div className="cards">
        {filteredList.map((rest, index) => (
          <RestroCard key={index} i={rest.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
