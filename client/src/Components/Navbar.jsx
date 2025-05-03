import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brandLogo.png";

const Navbar = () => {
  return (
    <div className=" z-20 bg-opacity-30 backdrop-blur-lg backdrop-filter fixed gap-y-3.5 top-0 flex flex-col md:flex-row right-0 left-0 justify-between py-3 md:py-5 text-center text-white bg-transparent place-items-center">
      <div>
        <p className="text-[10px] ml-5 md:h-[20px] md:font-bold md:ml-11 ">
          <img src={logo} className="  h-[30px] md:h-[45px]" />
        </p>
      </div>
      <div>
        <ul className="flex text-[12px] py-3 gap-6  md:text-lg md:font-semibold md:gap-10 md:mr-10 ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/members">Team</Link>
          <li>Broucher</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
