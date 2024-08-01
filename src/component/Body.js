import { useState } from "react";
import { IMG_CDN_URL } from "../../Config";
import { Data } from "../../Config";


const RestroCard = ({ i }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + i.cloudinaryImageId}></img>
      <h4>{i.name}</h4>
      <h6 style={{ color: "red" }}>⭐{i.avgRating}</h6>
      <h6> {i.cuisines.join(",")}</h6>
      <h6> {i.locality}</h6>
    </div>
  );
};

const Body = () => {

const [searchText,setSearchText] = useState("Search")

  let tet = "ee";
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchText}
          onChange={(e) => (setSearchText(e.target.value) )}
        ></input>

        <button>Search</button>
      </div>

      <div className="cards">
        {Data.map((rest, index) => (
          <RestroCard key={index} i={rest.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
