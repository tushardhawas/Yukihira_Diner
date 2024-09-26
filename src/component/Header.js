import { Link } from "react-router-dom";
import logo from "../../assets/_logo.svg";
import { useState } from "react";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="w-28 h-28 mt-2 hover:scale-105 transition-transform"
          src={logo}
          alt="Website Logo"
        />
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex justify-between items-center bg-[#006D77] px-6 py-1 shadow-2xl  ">
      <Logo />
      <div>
        <ul className="text-xl flex space-x-8 text-[#EDF6F9]">
          <li className="px-3 py-2 rounded-xl hover:bg-[#83C5BE] hover:text-white font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-2 rounded-xl hover:bg-[#83C5BE] hover:text-white font-medium">
            <Link to="/cheifs">Top Cheifs</Link>
          </li>
          <li className="px-3 py-2 rounded-xl hover:bg-[#83C5BE] hover:text-white font-medium">
            <Link to="/deals">Deals</Link>
          </li>
          <li className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <Link to="/Bookings">RecipeAI</Link>
          </li>

          <li>
            <Link to="/login">
              <button
                className="text-[#006D77] bg-[#FFDDD2] hover:bg-[#E29578] focus:ring-4 focus:outline-none focus:ring-[#FFDDD2] font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
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
