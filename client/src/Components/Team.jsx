import React from "react";
import "../App.css";
import Navbar from "./Navbar";

import "../JavaScript/index.js";
import "../JavaScript/loader.js";

import "../CSS/common/bg-animation.css";
import "../CSS/aboutUs/aboutUs.css";

import rupesh from "../assets/rupesh.jpeg";
import jeevitha from "../assets/jeevitha.jpeg";
import sriram from "../assets/sriram.jpeg";
import prithvi from "../assets/prithvi.jpeg";
import aditya from "../assets/aditya.jpg";

const Team = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="wrapper  ">
        <div id="stars" className="-z-10"></div>
        <div id="stars2" className="-z-10"></div>
        <div id="stars3" className="-z-10"></div>
      </div>

      <div className=" z-10 flex flex-row flex-wrap pt-48 py-20  px-7 gap-9">
        {/* start */}

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={rupesh} // <-- Replace this with your image path
              alt="Rupesh"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl mb-5 font-bold">Rupesh Reddy</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">9606027172</p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={jeevitha} // <-- Replace this with your image path
              alt="Jeevitha"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl mb-5 font-bold">Jeevitha</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            63662 69221
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={sriram} // <-- Replace this with your image path
              alt="sriram"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl mb-5 font-bold">Sriram</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            87626 77494
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="https://media-blr1-2.cdn.whatsapp.net/v/t61.24694-24/491873504_1770633523501491_8356581768967755685_n.jpg?ccb=11-4&oh=01_Q5Aa1QFPPpsvDm9oI9djnXsaAEESkvBgN7mo65cmh4Ns_gNeTQ&oe=681C9775&_nc_sid=5e03e0&_nc_cat=101" // <-- Replace this with your image path
              alt="darshan"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl mb-5 font-bold">Darshan</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            87620 01156
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={prithvi} // <-- Replace this with your image path
              alt="darshan"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white mb-5 text-2xl font-bold">Prathviraj</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            78924 51885
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={aditya} // <-- Replace this with your image path
              alt="darshan"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl mb-5 font-bold">Aditya Shree</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            99728 53628
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>

        {/* <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={prithvi}
              alt="prithvi"
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-white text-2xl font-bold">Prithvi</h2>

          <p className="text-pink-400 text-lg font-semibold mb-4">
            jr Fest Cordinator
          </p>

          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div> */}

        {/* <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
         
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={aditya} 
              alt="aditya"
              className="object-cover w-full h-full"
            />
          </div>

       
          <h2 className="text-white text-2xl font-bold">Aditya Shree</h2>

      
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Jr Fest Coordinator
          </p>

          
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Team;
