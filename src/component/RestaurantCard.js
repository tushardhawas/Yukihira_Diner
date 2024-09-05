import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../Config";
import "./RestaurantCard.css"; // Link to custom CSS

export const RestaurantCard = () => {
  const { id } = useParams();
  const [resData, setResData] = useState([]);
  const [activeDish, setActiveDish] = useState(null);

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
        setResData(fetchData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    GetMenu();
  }, [id]);

  const toggleDishDetails = (index) => {
    if (activeDish === index) {
      setActiveDish(null); // Collapse if it's already active
    } else {
      setActiveDish(index); // Expand the clicked item
    }
  };

  return (
    <div className="restaurant-menu">
      <h2 className="restaurant-title">Our Menu</h2>
      <ul className="menu-list">
        {resData && resData.length > 0 ? (
          resData.map((item, index) => {
            const dish = item.card?.info;
            return dish ? (
              <li
                key={index}
                className={`menu-item ${activeDish === index ? "active" : ""}`}
              >
                <div
                  className="dish-header"
                  onClick={() => toggleDishDetails(index)}
                >
                  <span className="dish-name">{dish.name}</span>
                  <span className="arrow">
                    {activeDish === index ? "▲" : "▼"}
                  </span>
                </div>

                {activeDish === index && (
                  <div className="dish-details">
                    <p className="dish-description">{dish.description}</p>
                    <p className="dish-price">
                      ₹{dish.price ? dish.price / 100 : dish.defaultPrice / 100}
                    </p>
                    {dish.ratings?.aggregatedRating?.ratingCountV2 && (
                      <p className="dish-rating">
                        Rating: {dish.ratings.aggregatedRating.rating} (
                        {dish.ratings.aggregatedRating.ratingCountV2})

                      </p>

                    )}
                      {dish.imageId && console.log(dish.imageId)}
                    {dish.imageId && (
                      <img
                        src={`${IMG_CDN_URL}${dish.imageId}`}
                        alt={dish.name}
                      />
                    )}
                  </div>
                )}
              </li>
            ) : null;
          })
        ) : (
          <p>No items available</p>
        )}
      </ul>
    </div>
  );
};
