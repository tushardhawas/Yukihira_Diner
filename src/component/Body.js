import { useEffect, useState } from "react";

const Body = () => {
  const { restaurant, setRestaurant } = useState("Restarunt");

  useEffect(() => {
    async function getData() {
      let data = await fetch(
        "https://www.eazydiner.com/_next/data/KDVk5XQXqUnbEeFaG-H_7/en.json"
      );
      const json = await data.json();
      return json;
    }

    const data = getData().then((result) => {
      console.log(result);
    });

    console.log("useeffect");
  }, []);
  console.log("render");

  return <>{restaurant}</>;
};
export default Body;
