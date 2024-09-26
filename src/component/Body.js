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
  console.log(combinedData);
  try {
    useEffect(() => {
      
      if (combinedData.length > 0) {
        setRestaurant(combinedData);
        setFilteredList(combinedData); // Initially set the filtered list to the full restaurant list
      }
      else{
        setRestaurant(Data);
        setFilteredList(Data);
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
      <div className=" text-center p-5 bg-[#EDF6F9]  ">
        <input
          className=" p-5 w-1/3 bg-[#FFDDD2] border border-green-900   text-[#006D77]  rounded-xl "
          type="text"
          placeholder="Search Your Favorite Restaurant"
          onChange={handleSearchChange}
          value={searchText}
        ></input>
      </div>

      {filteredList.length === 0 ? (
        <Shim />
      ) : (
        <div className=" bg-[#EDF6F9] flex justify-center flex-wrap gap-10  ">
       
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
