import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Config";
import useFetchResData from "../utils/useFetchResData";
import { addItem } from "../utils/Slices/cartSlice";
import { useDispatch } from "react-redux";

export const RestaurantCard = () => {
  const { id } = useParams();
  const [activeDishIndex, setActiveDishIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state
  const menuData = useFetchResData(id);

  useEffect(() => {
    if (menuData) {
      if (Array.isArray(menuData)) {
        setLoading(false);
      } else {
        setError("Failed to load menu data");
        setLoading(false);
      }
    }
  }, [menuData]);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="restaurant-menu p-7 bg-[#EDF6F9] min-h-screen text-center">
      <h2 className="text-2xl font-bold text-[#006D77] mb-4">Our Menu</h2>

      {loading ? (
        <h1 className="text-lg">Loading menu...</h1>
      ) : error ? (
        <h1 className="text-lg text-red-500">{error}</h1>
      ) : (
        <ul className="menu-list space-y-4">
          {Array.isArray(menuData) && menuData.length > 0 ? (
            menuData.map((item, index) => {
              const dish = item.card?.info;
              return dish ? (
                <li
                  key={dish.id} // Use dish.id or another unique identifier
                  className={`menu-item border p-3 rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out ${
                    activeDishIndex === index ? "transform scale-100" : ""
                  }`}
                >
                  {dish.name}

                  {
                    <div className="dish-details mt-2 text-left">
                      <p className="dish-description text-gray-700 break-words text-sm max-w-[400px]">
                        {dish.description || "No description available"}
                      </p>
                      <p className="dish-price text-lg font-semibold text-[#E29578]">
                        ₹
                        {(dish.price
                          ? dish.price / 100
                          : dish.defaultPrice / 100
                        ).toFixed(2)}
                      </p>
                      {dish.ratings?.aggregatedRating?.ratingCountV2 && (
                        <p className="dish-rating text-gray-600 text-sm">
                          Rating: {dish.ratings.aggregatedRating.rating} (
                          {dish.ratings.aggregatedRating.ratingCountV2})
                        </p>
                      )}
                      <div className="text-right">
                        <button
                          onClick={()=>{handleAddToCart(item)}}
                          className="p-2 m-1 bg-green-500"
                        >
                          Add
                        </button>
                        <button className="p-2 m-1 bg-red-500">Remove</button>
                      </div>
                      {dish.imageId && (
                        <img
                          className="mt-2 w-20 h-20 max-w-[250px] object-cover rounded-lg"
                          src={`${IMG_CDN_URL}${dish.imageId}`}
                          alt={dish.name}
                        />
                      )}
                    </div>
                  }
                </li>
              ) : null;
            })
          ) : (
            <p className="text-gray-600 text-sm">No items available</p>
          )}
        </ul>
      )}
    </div>
  );
};
