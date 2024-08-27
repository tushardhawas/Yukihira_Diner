import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../Config";


export const RestaurantCard = () => {
  const { id } = useParams();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    async function GetCard() {
      try {
        let response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.00090&lng=75.57350&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await response.json();
        const fetchData =
          json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
            ?.itemCards;
        console.log(fetchData);
        setResData(fetchData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    GetCard();
  }, [id]);

  return (
    <div className="restaurant-details">
      <h2>Restaurant Details</h2>
      <div className="menu-items">
        {/* <img
        src={IMG_CDN_URL+"7850b115687ee8594f9d7f0a66c2ee84"}
      /> */}
        {resData && resData.length > 0 ? (
          resData.map((item, index) => {
            const dish = item.card?.info;
            return dish ? (
              <div key={index} className="menu-item">
                <h3>{dish.name}</h3>
                <p>Category: {dish.category}</p>
                <p>Description: {dish.description}</p>
                <p>
                  Price: ₹
                  {dish.price ? dish.price / 100 : dish.defaultPrice / 100}
                </p>
                {dish.ratings?.aggregatedRating?.ratingCountV2 && (
                  <p>
                    Rating: {dish.ratings.aggregatedRating.rating} (
                    {dish.ratings.aggregatedRating.ratingCountV2})
                  </p>
                )}
                {dish.imageId && (
                  <img src={IMG_CDN_URL + `${dish.imageId}`} alt={dish.name} />
                )}
              </div>
            ) : null;
          })
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};
