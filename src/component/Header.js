import { flatMap } from "lodash";
import { Link } from "react-router-dom";
import logo from "../../assets/_logo.svg";
import { useState } from "react";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo}></img>
    </div>
  );
};

const Navbar = () => {
  const [toogle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((tog) => !tog);
  };

  return (
    <div className=" header">
      <Logo />
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cheifs">Top Cheifs</Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
          <li>
            {" "}
            <Link to="/Bookings">Bookings</Link>
          </li>

          <button className="loginFeature" onClick={handleToggle}>
            {toogle ? "login" : "logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
