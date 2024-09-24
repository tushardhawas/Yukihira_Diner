import { useEffect, useState } from "react";

const useFetchResData = (id) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    async function GetMenu() {
      try {
        let response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.00090&lng=75.57350&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );

        const json = await response.json();
        const fetchData =
          json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
            ?.itemCards;

            console.log(fetchData);
            setData(fetchData);
        } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    GetMenu();
    
  }, [id]);
return data;
};

export default useFetchResData;
