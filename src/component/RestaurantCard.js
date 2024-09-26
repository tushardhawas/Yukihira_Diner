import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Config";
import useFetchResData from "../utils/useFetchResData";

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
    <div className="restaurant-menu p-6 bg-[#EDF6F9] min-h-screen text-center ">
      <h2 className="text-3xl font-bold text-[#006D77] mb-4">Our Menu</h2>

      {loading ? (
        <h1 className="text-xl">Loading menu...</h1>
      ) : (
        <ul className="menu-list space-y-4 ">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => {
              const dish = item.card?.info;
              return dish ? (
                <li
                  key={index}
                  className={`menu-item border p-4 rounded-lg bg-white   shadow-md transition-transform duration-300 ease-in-out ${
                    activeDish === index ? "transform scale-100" : ""
                  }`}
                >
                  <div
                    className="dish-header flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDishDetails(index)}
                  >
                    <span className="dish-name text-lg font-semibold text-[#006D77]">{dish.name}</span>
                    <span className="arrow text-xl">{activeDish === index ? "▲" : "▼"}</span>
                  </div>

                  {activeDish === index && (
                    <div className="dish-details mt-2">
                      <p className="dish-description text-gray-700">{dish.description}</p>
                      <p className="dish-price text-xl font-semibold text-[#E29578]">
                        ₹{(dish.price ? dish.price / 100 : dish.defaultPrice / 100).toFixed(2)}
                      </p>
                      {dish.ratings?.aggregatedRating?.ratingCountV2 && (
                        <p className="dish-rating text-gray-600">
                          Rating: {dish.ratings.aggregatedRating.rating} (
                          {dish.ratings.aggregatedRating.ratingCountV2})
                        </p>
                      )}
                      {dish.imageId && (
                        <img
                          className="mt-2 w-72 h-72 object-cover rounded-lg"
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
            <p className="text-gray-600">No items available</p>
          )}
        </ul>
      )}
    </div>
  );
};
