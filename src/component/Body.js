import { useState } from "react";
import { Data } from "../../Config";
import { RestroCard } from "../../Config";

function dataFind(searchText, data) {
  // Filter data based on searchText
  return data.filter((item) =>
    item.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(Data);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const filteredData = dataFind(value, Data); // Use original Data to filter
    setRestaurant(filteredData);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <div className="cards">
        {restaurant.map((rest, index) => (
          <RestroCard key={index} i={rest.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
  