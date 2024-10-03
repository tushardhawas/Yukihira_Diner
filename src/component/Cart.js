import React from 'react';
import { IMG_CDN_URL } from '../utils/Config';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../utils/Slices/cartSlice'; // Ensure you have a removeItem action in your cartSlice

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.item); // Access cart items from the Redux store
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId)); // Dispatch the removeItem action with the item ID
  };

  return (
    <div className="cart-container p-7 bg-[#EDF6F9] min-h-screen">
      <h2 className="text-2xl font-bold text-[#006D77] mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="cart-list space-y-4">
          {cartItems.map((item) => (
            <li key={item.card.info.id} className="cart-item border p-3 rounded-lg bg-white shadow-md">
              <div className="flex justify-between items-center">
                <div className="dish-details">
                  <h3 className="text-lg font-semibold text-[#006D77]">{item.card.info.name}</h3>
                  <p className="dish-price text-lg font-semibold text-[#E29578]">
                    ₹{(item.card.info.price / 100).toFixed(2)}
                  </p>
                  {item.card.info.imageId && (
                    <img
                      className="mt-2 w-20 h-20 max-w-[100px] object-cover rounded-lg"
                      src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                      alt={item.card.info.name}
                    />
                  )}
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.card.info.id)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
