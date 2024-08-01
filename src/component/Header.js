import logo from "../../assets/_logo.svg";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo}></img>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className=" header">
      <Logo />
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Top Cheifs</li>
          <li>Services</li>
          <li>Bookings</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
