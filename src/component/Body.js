import { useEffect, useState } from "react";

const RestroCard = ({}) => {
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
  const [restaurant, setRestaurant] = useState("Restarunt");

  useEffect(() => {
    async function getData() {
      let data = await fetch(
        "https://www.eazydiner.com/_next/data/KDVk5XQXqUnbEeFaG-H_7/en.json"
      );
      const json = await data.json();
      return json;
    }

    const data = getData().then((result) => {
      setRestaurant(result);
    });
  }, []);

  return (
    <>
      <div className="cards">
        {restaurant.map((rest, index) => (
          <RestroCard key={index} i={rest.info} />
        ))}
      </div>
    </>
  );
};
export default Body;
