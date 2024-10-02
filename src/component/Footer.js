import { Link } from "react-router-dom";
import About from "./Aboutme";
import { useContext } from "react";
import ContextAPI from "./ContextAPI";
const Footer = () => {
  const {user} =useContext(ContextAPI);
  return (

    <div className="bg-[#006D77] text-white p-20 mt-10 bottom-0">
   
       
        <div className="text-right">
          <small>
            Copyright © 2024 Tushar Dhawas. All Rights Reserved.
            <span >{user.email}</span>
          </small><br></br>
          <Link to="/about"><h4>About Me</h4></Link>
        </div>
      </div>
  );
};

export default Footer;
