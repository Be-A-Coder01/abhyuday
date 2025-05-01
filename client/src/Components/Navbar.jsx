import React from "react";
import { Link } from "react-router-dom";
import rit from "../assets/rit.png";

const Navbar = () => {
  return (
    <div className=" z-20 bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 flex right-0 left-0 justify-between py-3 md:py-5 text-center text-white bg-transparent place-items-center">
      <div>
        <p className="text-[10px] ml-5 md:h-[20px] md:font-bold md:ml-11 ">
          <img src={rit} className="border-2  h-[30px] md:h-[45px]" />
        </p>
      </div>
      <div>
        <ul className="flex text-[12px] py-3 gap-3 mr-4 md:text-lg md:font-semibold md:gap-10 md:mr-10 ">
          <Link to="/">Home</Link>
          {/* <li>Events</li> */}
          <Link to="/events">Events</Link>
          <Link to="/members">Team</Link>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
