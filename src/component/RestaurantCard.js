import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Config";
import useFetchResData from "../utils/useFetchResData";
import "./RestaurantCard.css";

export const RestaurantCard = () => {
  const { id } = useParams();
  const [activeDish, setActiveDish] = useState(null);
  const [loading, setLoading] = useState(true); 
  const data = useFetchResData(id);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setLoading(false); 
    }
  }, [data]); 

  const toggleDishDetails = (index) => {
    if (activeDish === index) {
      setActiveDish(null); 
    } else {
      setActiveDish(index); 
    }
  };

  return (
    <div className="restaurant-menu">
      <h2 className="restaurant-title">Our Menu</h2>

      {loading ? (
        <h1>Loading menu...</h1>
      ) : (
        <ul className="menu-list">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => {
              const dish = item.card?.info;
              return dish ? (
                <li
                  key={index}
                  className={`menu-item ${
                    activeDish === index ? "active" : ""
                  }`}
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
                        ₹
                        {dish.price
                          ? dish.price / 100
                          : dish.defaultPrice / 100}
                      </p>
                      {dish.ratings?.aggregatedRating?.ratingCountV2 && (
                        <p className="dish-rating">
                          Rating: {dish.ratings.aggregatedRating.rating} (
                          {dish.ratings.aggregatedRating.ratingCountV2})
                        </p>
                      )}
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
      )}
    </div>
  );
};
