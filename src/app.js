import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Chef from "./component/Chef";
import { Err } from "./component/Err";
import { Deals } from "./component/Deals";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
import { RestaurantCard } from "./component/RestaurantCard";
import LoginPage from "./component/LoginPage";

const RecipeAI = lazy(() => import("./component/RecipeAI"));

const AppLayout = () => {
  return (
    <>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </>
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
        path: "/cheifs",
        element: <Chef />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantCard />,
      },
      {
        path: "/Bookings",

        element: (
          <Suspense>
            <RecipeAI />
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
