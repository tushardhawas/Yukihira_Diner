import { Link } from "react-router-dom";
import logo from "../../assets/_logo.svg";
import { useContext, useState } from "react";
import ContextAPI from "./ContextAPI";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="w-24 h-24 md:w-28 md:h-28 mt-2 hover:scale-105 transition-transform"
          src={logo}
          alt="Website Logo"
        />
      </Link>
    </div>
  );
};

const Navbar = () => {
  const { user } = useContext(ContextAPI);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex justify-between items-center bg-primary px-4 md:px-6 py-3 shadow-lg w-full">
      <Logo />
      <div>
        <ul className="text-sm md:text-base flex space-x-4 md:space-x-6 text-background">
          <li className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all">
            <Link to="/chefs">Top Chefs</Link>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all">
            <Link to="/deals">Deals</Link>
          </li>
          <li className="px-3 py-1 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 text-white transition-all text-sm md:text-base md:px-3 md:py-2 h-10">
  <Link to="/Bookings">RecipeAI</Link>
</li>

          <li>
            <Link to="/login">
              <button
                className="text-primary bg-accent hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-accent font-semibold rounded-lg text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 transition-all"
                onClick={handleToggle}
              >
                {toggle ? "Logout" : "Login"}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
