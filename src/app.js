import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Chef from "./component/Chef";
import { Err } from "./component/Err";
import { Deals } from "./component/Deals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RestaurantCard } from "./component/RestaurantCard";
import LoginPage from "./component/LoginPage";
import About from "./component/Aboutme";
import ContextAPI from "./component/ContextAPI";

// Lazy loading RecipeAI and RecipeDetail components
const RecipeAI = lazy(() => import("./component/RecipeAI"));
const RecipeDetail = lazy(() => import("./component/RecipeDetail")); // Import RecipeDetail

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Tushar Dhawas",
    email: "tushhdhawas@gmail.com",
  });
  return (
    <div className="w-full">
      <ContextAPI.Provider value={{ user: user }}>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextAPI.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Err />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/deals",
        element: <Deals />,
      },
      {
        path: "/chefs",
        element: <Chef />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantCard />,
      },
      {
        path: "/Bookings",
        element: (
          <Suspense fallback={<div>Loading Recipe AI...</div>}>
            <RecipeAI />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipe/:recipeId", // Add this route for RecipeDetail
        element: (
          <Suspense fallback={<div>Loading Recipe Details...</div>}>
            <RecipeDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Err />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
