import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" z-20 bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 flex right-0 left-0 justify-between py-5 text-center text-white bg-transparent">
      <div>
        <p className="text-2xl font-bold ml-11 ">Abhuday 9.0</p>
      </div>
      <div>
        <ul className="flex text-lg font-semibold gap-10 mr-10 ">
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
