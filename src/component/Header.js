import { flatMap } from "lodash";
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

  const handleToggle=()=>{
    setToggle((tog)=>!tog);

}

  return (
    <div className=" header">
      <Logo />
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Top Cheifs</li>
          <li>Services</li>
          <li>Bookings</li>
          <button className="loginFeature" onClick={handleToggle}>
          {toogle?"login":"logout"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
